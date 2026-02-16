<?php
/*
 * Email Configuration for Liniar Constructions Contact Form
 * 
 * EASY SETUP:
 * 1. Change RECEIVER_EMAIL to your email for testing
 * 2. Later, change it to client's email
 * 3. Choose email method (SMTP recommended for production)
 */

// ============================================
// STEP 1: WHERE TO SEND ENQUIRIES
// ============================================

// ******** Change this to YOUR email for testing, then client's email for production *********
define('RECEIVER_EMAIL', 'linzzzo183@gmail.com');  // ← CHANGE THIS
define('RECEIVER_NAME', 'Liniar Constructions');

// ============================================
// STEP 2: CHOOSE EMAIL METHOD
// ============================================

// Set to 'smtp' for reliable delivery (RECOMMENDED)
// Set to 'mail' for simple PHP mail() function (might go to spam)
define('EMAIL_METHOD', 'smtp');  // Options: 'smtp' or 'mail'

// =====================================================
// STEP 3: SMTP SETTINGS (Only if EMAIL_METHOD = 'smtp')
// =====================================================
// Option A: Using Gmail (for testing)
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);

define('SMTP_USERNAME', 'linzzzo183@gmail.com');  // ← CHANGE THIS
define('SMTP_PASSWORD', 'ocpb yvpu gizv heqz');     // ← CHANGE THIS (use App Password, not regular password)
define('SMTP_ENCRYPTION', 'tls');  // 'tls' or 'ssl'

// Option B: Using Hostinger Email (for production)
// Uncomment these lines and comment out Gmail settings above when ready
/*
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'noreply@liniarconstructions.com');  // Your Hostinger email
define('SMTP_PASSWORD', 'your-hostinger-email-password');
define('SMTP_ENCRYPTION', 'tls');
*/

// ========================================================
// STEP 4: FROM EMAIL SETTINGS
// ========================================================

define('FROM_EMAIL', 'noreply@liniarconstructions.com');  // This will appear as sender
define('FROM_NAME', 'Liniar Constructions Website');

// =======================================================
// STEP 5: WEBSITE SETTINGS
// =======================================================
define('WEBSITE_NAME', 'Liniar Constructions');
define('WEBSITE_URL', 'https://www.liniarconstructions.com');  // ← Update with actual domain

// ============================================ 
// SECURITY SETTINGS
// ============================================
// Allowed origins for CORS (your website URL)
define('ALLOWED_ORIGINS', [
    'http://localhost:5173',  // For local development
    'http://localhost:3000',
    'https://www.liniarconstructions.com',  // ← Update with actual domain
    'https://liniarconstructions.com'
]);

// Enable/disable debug mode (set to false in production)
define('DEBUG_MODE', true);  // Set to false when live

// ============================================
// AUTO-REPLY SETTINGS (Optional)
// ============================================
define('SEND_AUTO_REPLY', true);  // Send confirmation email to customer
define('AUTO_REPLY_SUBJECT', 'Thank you for contacting Liniar Constructions');

?>