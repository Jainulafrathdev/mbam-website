# MBAM Website - Muthupet Bayt Ul Mal Al Muslimin

Modern, responsive website built with React featuring dark/light mode, smooth animations, and optimized performance.

## 🎯 Features

### ✨ Core Features
- **Dark/Light Mode Toggle** - Persistent theme with localStorage
- **Smooth Scroll Animations** - Intersection Observer API for performance
- **Image Carousel** - Auto-play with manual controls
- **Mobile-First Responsive Design** - Optimized for all screen sizes
- **Animated Statistics Counter** - Engaging number animations
- **Custom Audio Player** - For Quran recitation
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation

### 🎨 Design Highlights
- Modern gradient backgrounds
- Smooth transitions and micro-interactions
- Arabic, Tamil, and English typography
- Professional color scheme with Islamic aesthetics
- Optimized font loading (Google Fonts)

### ⚡ Performance Optimizations
- Lazy loading images
- Intersection Observer for animations
- CSS-only animations where possible
- Minimal dependencies
- Optimized bundle size
- Reduced motion support for accessibility

## 📁 File Structure

```
mbam-website/
├── public/
│   ├── index.html
│   └── assets/
│       ├── IMG_2944.jpeg    (Logo/Hero image)
│       ├── slide2.jpg        (Carousel image 2)
│       ├── slide3.jpg        (Carousel image 3)
│       └── quran-261.mp3     (Quran audio)
├── src/
│   ├── App.jsx              (Main component with all sections)
│   ├── App.css              (Complete styling with dark mode)
│   └── index.js             (React entry point)
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ and npm/yarn installed
- Your images in the `public/assets/` folder

### Installation

1. **Clone or download the project**
```bash
cd mbam-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Add your images** to `public/assets/`:
   - `IMG_2944.jpeg` (Logo and first carousel slide)
   - `slide2.jpg` (Second carousel slide)
   - `slide3.jpg` (Third carousel slide)
   - `quran-261.mp3` (Quran recitation audio)

4. **Start the development server**
```bash
npm start
```

The website will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🎨 Customization Guide

### Colors
Edit CSS variables in `App.css`:
```css
:root {
  --primary: #1B5E20;        /* Main green color */
  --gold: #C9A736;           /* Accent gold color */
  /* ... more colors ... */
}
```

### Content
Edit text in `App.jsx` components:
- **Hero Section** - Main headline and tagline
- **Mission Section** - About text
- **Projects Section** - Service cards array
- **Stats Section** - Numbers and labels
- **Footer** - Links and information

### Images
Replace images in `public/assets/` keeping the same filenames, or update paths in:
- `Carousel` component: `images` array
- `Header` component: Logo path
- `Footer` component: Footer logo path

### Fonts
Current fonts (loaded from Google Fonts):
- **Plus Jakarta Sans** - Body text
- **Playfair Display** - Headings
- **Amiri** - Arabic text

Change in `App.css` `@import` and CSS variables.

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🌙 Dark Mode

Toggle between light and dark themes:
- Click the sun/moon icon in header
- Theme persists in localStorage
- Automatically applies on page reload
- Smooth color transitions

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Reduced motion support
- Alt text on images
- Proper heading hierarchy

## 🔧 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Copyright © 2025 MBAM - Muthupet Bayt Ul Mal Al Muslimin. All rights reserved.

## 🤝 Support

For issues or questions about the website, please contact MBAM.

---

**Built with ❤️ for humanity**
