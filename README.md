# Liniar Constructions - Landing Page

A modern, professional landing page for Liniar Constructions construction company built with React, Vite, and Tailwind CSS.

## 🚀 Features

### Current Implementation (Home Page)
- ✅ **Responsive Navigation Bar** - Smooth scrolling, transparent to solid transition
- ✅ **Hero Banner Carousel** - 3 auto-rotating banners with smooth transitions
  - Banner 1: Built by Experienced Tamil Masons
  - Banner 2: 24×7 CCTV Site Monitoring  
  - Banner 3: Get Instant Quote
- ✅ **What We Build Section** - Showcasing 3 main services
  - Residential Construction
  - Commercial Construction
  - Renovation Works
- ✅ **Packages & Pricing Section** - 3 pricing tiers
  - Basic Package (₹1,499/sq.ft)
  - Standard Package (₹2,999/sq.ft)
  - Premium Package (₹4,999/sq.ft)

### Design Features
- 🎨 **Bold Blue Gradient Theme** - Professional construction company aesthetic
- ✨ **Smooth Animations** - Fade-in, slide-in, hover effects
- 📱 **Fully Responsive** - Mobile-first design
- 🎯 **Modern Typography** - Montserrat (display) + Poppins (body)
- 🖼️ **High-Quality Images** - Construction-related placeholder images

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - No additional dependencies

## 📦 Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎨 Color Palette

The website uses a professional blue gradient theme:
- Primary Blue: `#0066e6`
- Dark Blue: `#0052b3` 
- Light Blue: `#1a80ff`
- Accent colors for different packages

## 📁 Project Structure

```
win-win-builders/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── WhatWeBuild.jsx
│   │   └── PackagesPricing.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Next Steps

### Pending Sections
- [ ] About Us page
- [ ] Our Services (detailed)
- [ ] Our Projects gallery
- [ ] Our Gallery
- [ ] Contact Us form with database integration

### Database Integration
- Form fields planned: Name, Mobile No, Email, Description
- Backend API endpoint needed
- Database schema to be designed

## 🎭 Design Notes

- The blue gradient is intentionally bold and professional, not light/sky blue
- Animations use CSS-only solutions for better performance
- Images are currently placeholder URLs (from Unsplash)
- Mobile menu functionality can be added in next iteration

## 📝 Customization

### Change Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  primary: {
    500: '#0066e6', 
   
  }
}
```

### Change Fonts
Update Google Fonts in `index.html` and font families in `tailwind.config.js`

### Modify Content
Edit component files in `src/components/` to change text, images, or features

## 🚀 Performance

- Optimized images (WebP format recommended)
- CSS animations for smooth transitions
- Lazy loading can be added for images
- Code splitting with React + Vite

## 📄 License

All rights reserved - Liniar Constructions



And by page, I mean it's not like a it is a special route for /project-photos. It's not like that.
It just whenever those buttons or links gets clicked in the screen only that information should be there.