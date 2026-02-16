<?php
/**
 * Contact Form API Endpoint
 * Handles form submissions and sends emails
 */

// Include configuration
require_once 'config.php';

// Enable error reporting if debug mode is on
if (DEBUG_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}

// Set headers for JSON response and CORS
header('Content-Type: application/json');

// Handle CORS
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, ALLOWED_ORIGINS)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Credentials: true');
}

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Please use POST request.'
    ]);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$errors = [];

if (empty($data['name']) || trim($data['name']) === '') {
    $errors[] = 'Name is required';
}

if (empty($data['mobile']) || trim($data['mobile']) === '') {
    $errors[] = 'Mobile number is required';
} elseif (!preg_match('/^[6-9]\d{9}$/', $data['mobile'])) {
    $errors[] = 'Invalid mobile number. Please enter a valid 10-digit Indian mobile number.';
}

if (empty($data['email']) || trim($data['email']) === '') {
    $errors[] = 'Email is required';
} elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email address';
}

if (empty($data['description']) || trim($data['description']) === '') {
    $errors[] = 'Project description is required';
}

// If validation fails, return errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Validation failed',
        'errors' => $errors
    ]);
    exit();
}

// Sanitize input data
$name = htmlspecialchars(trim($data['name']));
$mobile = htmlspecialchars(trim($data['mobile']));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$description = htmlspecialchars(trim($data['description']));

// Current timestamp
$timestamp = date('d M Y, h:i A');

// Send email based on configured method
if (EMAIL_METHOD === 'smtp') {
    // Use PHPMailer for SMTP
    $result = sendEmailWithPHPMailer($name, $mobile, $email, $description, $timestamp);
} else {
    // Use PHP mail() function
    $result = sendEmailWithPHPMail($name, $mobile, $email, $description, $timestamp);
}

// Return response
if ($result['success']) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your enquiry has been submitted successfully. We will contact you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your enquiry. Please try again or contact us directly at ' . RECEIVER_EMAIL,
        'error' => DEBUG_MODE ? $result['error'] : null
    ]);
}

// ============================================
// FUNCTION: Send Email using PHPMailer (SMTP)
// ============================================
function sendEmailWithPHPMailer($name, $mobile, $email, $description, $timestamp) {
    // Check if PHPMailer is available
    if (!file_exists(__DIR__ . '/PHPMailer/PHPMailer.php')) {
        return [
            'success' => false,
            'error' => 'PHPMailer library not found. Please install PHPMailer.'
        ];
    }

    require_once __DIR__ . '/PHPMailer/PHPMailer.php';
    require_once __DIR__ . '/PHPMailer/SMTP.php';
    require_once __DIR__ . '/PHPMailer/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USERNAME;
        $mail->Password = SMTP_PASSWORD;
        $mail->SMTPSecure = SMTP_ENCRYPTION;
        $mail->Port = SMTP_PORT;
        $mail->CharSet = 'UTF-8';

        // Recipients
        $mail->setFrom(FROM_EMAIL, FROM_NAME);
        $mail->addAddress(RECEIVER_EMAIL, RECEIVER_NAME);
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = '🏗️ New Enquiry from Website - ' . $name;
        $mail->Body = getEmailHTML($name, $mobile, $email, $description, $timestamp);
        $mail->AltBody = getEmailPlainText($name, $mobile, $email, $description, $timestamp);

        $mail->send();

        // Send auto-reply to customer if enabled
        if (SEND_AUTO_REPLY) {
            sendAutoReply($email, $name, $mobile, $description);
        }

        return ['success' => true];

    } catch (Exception $e) {
        return [
            'success' => false,
            'error' => 'PHPMailer Error: ' . $mail->ErrorInfo
        ];
    }
}

// ============================================
// FUNCTION: Send Email using PHP mail()
// ============================================
function sendEmailWithPHPMail($name, $mobile, $email, $description, $timestamp) {
    $to = RECEIVER_EMAIL;
    $subject = '🏗️ New Enquiry from Website - ' . $name;
    
    // Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>' . "\r\n";
    $headers .= 'Reply-To: ' . $name . ' <' . $email . '>' . "\r\n";
    
    // Message
    $message = getEmailHTML($name, $mobile, $email, $description, $timestamp);
    
    // Send email
    $result = mail($to, $subject, $message, $headers);
    
    if ($result) {
        // Send auto-reply if enabled
        if (SEND_AUTO_REPLY) {
            sendAutoReply($email, $name, $mobile, $description);
        }
        return ['success' => true];
    } else {
        return [
            'success' => false,
            'error' => 'PHP mail() function failed'
        ];
    }
}

// ============================================
// FUNCTION: Generate HTML Email Template
// ============================================
function getEmailHTML($name, $mobile, $email, $description, $timestamp) {
    return '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #0052b3 0%, #0066e6 50%, #1a80ff 100%); color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0066e6; margin-bottom: 5px; display: block; }
            .value { color: #333; padding: 10px; background: #f8f9fa; border-radius: 5px; }
            .description { white-space: pre-wrap; line-height: 1.6; }
            .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px; }
            .divider { height: 2px; background: linear-gradient(to right, #0066e6, #1a80ff); margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🏗️ NEW ENQUIRY - LINIAR CONSTRUCTIONS</h1>
            </div>
            <div class="content">
                <h2 style="color: #0066e6; margin-top: 0;">Customer Details</h2>
                <div class="divider"></div>
                
                <div class="field">
                    <span class="label">Name</span>
                    <div class="value">' . $name . '</div>
                </div>
                
                <div class="field">
                    <span class="label">Mobile Number</span>
                    <div class="value">+91 ' . $mobile . '</div>
                </div>
                
                <div class="field">
                    <span class="label">Email Address</span>
                    <div class="value">' . $email . '</div>
                </div>
                
                <h2 style="color: #0066e6; margin-top: 30px;">Project Description</h2>
                <div class="divider"></div>
                <div class="value description">' . nl2br($description) . '</div>
            </div>
            <div class="footer">
                <p><strong>Submitted on:</strong> ' . $timestamp . '</p>
                <p>This enquiry was submitted through the Liniar Constructions website contact form.</p>
            </div>
        </div>
    </body>
    </html>
    ';
}

// ============================================
// FUNCTION: Generate Plain Text Email
// ============================================
function getEmailPlainText($name, $mobile, $email, $description, $timestamp) {
    return "
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏗️ NEW ENQUIRY - LINIAR CONSTRUCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Customer Details:
----------------------------------
Name:        $name
Mobile:      +91 $mobile
Email:       $email

Project Description:
----------------------------------
$description

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted on: $timestamp
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ";
}

// ============================================
// FUNCTION: Send Auto-Reply to Customer
// ============================================
function sendAutoReply($customerEmail, $name, $mobile, $description) {
    if (EMAIL_METHOD === 'smtp') {
        // Use PHPMailer for auto-reply
        require_once __DIR__ . '/PHPMailer/PHPMailer.php';
        require_once __DIR__ . '/PHPMailer/SMTP.php';
        require_once __DIR__ . '/PHPMailer/Exception.php';

        use PHPMailer\PHPMailer\PHPMailer;

        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = SMTP_HOST;
            $mail->SMTPAuth = true;
            $mail->Username = SMTP_USERNAME;
            $mail->Password = SMTP_PASSWORD;
            $mail->SMTPSecure = SMTP_ENCRYPTION;
            $mail->Port = SMTP_PORT;
            $mail->CharSet = 'UTF-8';

            $mail->setFrom(FROM_EMAIL, FROM_NAME);
            $mail->addAddress($customerEmail, $name);

            $mail->isHTML(true);
            $mail->Subject = AUTO_REPLY_SUBJECT;
            $mail->Body = getAutoReplyHTML($name);
            
            $mail->send();
            return true;
        } catch (Exception $e) {
            return false;
        }
    } else {
        // Use PHP mail() for auto-reply
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>' . "\r\n";
        
        mail($customerEmail, AUTO_REPLY_SUBJECT, getAutoReplyHTML($name), $headers);
    }
}

// ============================================
// FUNCTION: Auto-Reply Email Template
// ============================================
function getAutoReplyHTML($name) {
    return '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 10px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #0052b3 0%, #0066e6 50%, #1a80ff 100%); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; line-height: 1.6; color: #333; }
            .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px; }
            .button { display: inline-block; background: #0066e6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Thank You for Contacting Us!</h1>
            </div>
            <div class="content">
                <p>Dear ' . $name . ',</p>
                <p>Thank you for reaching out to <strong>Liniar Constructions</strong>. We have received your enquiry and our team will review it shortly.</p>
                <p>We understand that building your dream project is important to you, and we are committed to providing you with the best construction solutions.</p>
                <p><strong>What happens next?</strong></p>
                <ul>
                    <li>Our team will review your project details</li>
                    <li>We will contact you within 24 hours</li>
                    <li>We will discuss your requirements in detail</li>
                    <li>We will provide you with a customized quote</li>
                </ul>
                <p>If you have any urgent queries, feel free to call us at <strong>+91 8754767261</strong>.</p>
                <p style="text-align: center;">
                    <a href="https://wa.me/918754767261" class="button">Chat on WhatsApp</a>
                </p>
            </div>
            <div class="footer">
                <p><strong>Liniar Constructions</strong><br>
                Building Your Trust<br>
                📞 +91 8754767261<br>
                📧 info@liniarconstructions.com</p>
            </div>
        </div>
    </body>
    </html>
    ';
}

?>