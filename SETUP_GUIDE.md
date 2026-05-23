# MBAM Website - Complete Setup Guide

## 📋 What You've Received

A modern, fully-featured React website with:
- ✅ Dark/Light mode toggle
- ✅ Smooth scroll animations  
- ✅ Image carousel with auto-play
- ✅ Mobile-first responsive design
- ✅ Animated statistics counter
- ✅ Custom audio player for Quran
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Accessibility compliant

## 🗂️ Complete File Structure

```
mbam-website/
├── public/
│   ├── index.html           ✅ Created - SEO optimized HTML
│   ├── manifest.json        ✅ Created - PWA manifest
│   └── assets/              ⚠️  YOU NEED TO ADD YOUR IMAGES HERE
│       ├── IMG_2944.jpeg    (Your logo & first carousel slide)
│       ├── slide2.jpg       (Second carousel slide)
│       ├── slide3.jpg       (Third carousel slide)
│       └── quran-261.mp3    (Quran recitation audio)
│
├── src/
│   ├── App.jsx              ✅ Created - Main React component
│   ├── App.css              ✅ Created - Complete styling
│   ├── index.js             ✅ Created - React entry point
│   └── index.css            ✅ Created - Global styles
│
├── package.json             ✅ Created - Dependencies
└── README.md                ✅ Created - Documentation
```

## 🚀 Step-by-Step Installation

### Step 1: Prerequisites Check
Make sure you have installed:
- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

Check your versions:
```bash
node --version   # Should show v14+ or higher
npm --version    # Should show 6+ or higher
```

### Step 2: Prepare Your Project Folder

1. Create a new folder for your website:
```bash
mkdir mbam-website
cd mbam-website
```

2. Copy all the files I've created into this folder

### Step 3: Create the Assets Folder

```bash
mkdir -p public/assets
```

### Step 4: Add Your Images

Place these files in `public/assets/`:
- **IMG_2944.jpeg** - Your MBAM logo (will be used as logo and first carousel slide)
- **slide2.jpg** - Second carousel image
- **slide3.jpg** - Third carousel image  
- **quran-261.mp3** - Quran recitation audio file

**Important**: If you want to use different filenames, update the paths in `src/App.jsx`:
```javascript
// Find this in the Carousel component:
const images = [
  '/assets/YOUR-IMAGE-1.jpg',  // Change these
  '/assets/YOUR-IMAGE-2.jpg',
  '/assets/YOUR-IMAGE-3.jpg',
];

// And in the QuranSection component:
<source src="/assets/YOUR-AUDIO-FILE.mp3" type="audio/mpeg" />
```

### Step 5: Install Dependencies

```bash
npm install
```

This will install:
- React 18
- React DOM 18  
- React Scripts 5
- Other necessary packages

### Step 6: Run the Website

```bash
npm start
```

The website will automatically open in your browser at `http://localhost:3000`

### Step 7: Test the Features

Check that everything works:
- ✅ Dark/Light mode toggle (sun/moon icon in header)
- ✅ Carousel auto-plays and manual controls work
- ✅ Mobile menu opens on small screens
- ✅ Smooth animations when scrolling
- ✅ Statistics counter animates
- ✅ Audio player plays Quran recitation
- ✅ All sections are visible and styled correctly

## 🎨 Customization Guide

### Change Colors

Edit `src/App.css` - find the `:root` section:

```css
:root {
  --primary: #1B5E20;        /* Change main green */
  --gold: #C9A736;           /* Change gold accent */
  --primary-light: #2E7D32;  /* Lighter green */
  --primary-dark: #0D3B0F;   /* Darker green */
}
```

### Change Text Content

Edit `src/App.jsx`:

**Hero Section (Line ~200)**:
```javascript
<h2>Your New Headline Here</h2>
<p>Your new description here</p>
```

**Projects (Line ~350)**:
```javascript
const projects = [
  {
    icon: (...),
    title: "Your Project Title",
    description: "Your project description"
  },
  // Add more projects...
];
```

**Statistics (Line ~420)**:
```javascript
const targets = { 
  families: 500,    // Change these numbers
  meals: 50000, 
  students: 250 
};
```

### Add More Carousel Images

In `src/App.jsx`, find the Carousel component:

```javascript
const images = [
  '/assets/IMG_2944.jpeg',
  '/assets/slide2.jpg',
  '/assets/slide3.jpg',
  '/assets/slide4.jpg',  // Add more here
  '/assets/slide5.jpg',
];
```

Then add the corresponding images to `public/assets/`

### Change Fonts

Current fonts (loaded from Google Fonts):
- **Plus Jakarta Sans** - Body text (modern, clean)
- **Playfair Display** - Headings (elegant, professional)
- **Amiri** - Arabic text (traditional)

To change, edit the `@import` line in `src/App.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap');
```

Then update the CSS variables:
```css
--font-primary: 'YOUR-FONT', sans-serif;
```

## 📦 Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized `build/` folder with:
- Minified JavaScript
- Optimized CSS
- Compressed images
- Ready to deploy to any hosting

## 🌐 Deployment Options

### Option 1: Netlify (Easiest)
1. Create account at [netlify.com](https://www.netlify.com)
2. Drag and drop your `build/` folder
3. Done! Your site is live

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Option 3: GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/mbam-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Run: `npm run deploy`

### Option 4: Traditional Web Host
1. Build: `npm run build`
2. Upload contents of `build/` folder to your server
3. Configure server to serve `index.html`

## 🔧 Common Issues & Solutions

### Images Not Showing
- ✅ Check files are in `public/assets/`
- ✅ Verify filenames match exactly (case-sensitive)
- ✅ Clear browser cache (Ctrl+Shift+R)

### Dark Mode Not Persisting
- ✅ Check browser localStorage is enabled
- ✅ Not in incognito/private mode

### Animations Not Working
- ✅ Clear cache and hard reload
- ✅ Check if browser has "prefers-reduced-motion" enabled

### Carousel Not Auto-Playing
- ✅ Check if mouse is hovering (auto-play pauses on hover)
- ✅ Verify all images exist and load

### Audio Not Playing
- ✅ Check audio file exists in `public/assets/`
- ✅ Try MP3 format specifically
- ✅ Some browsers block autoplay (user must click)

## 📱 Testing on Mobile

### Local Network Testing
1. Find your computer's IP address:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`
2. On your phone, browse to: `http://YOUR-IP:3000`

### Responsive Testing in Browser
- Chrome DevTools (F12) → Toggle Device Toolbar
- Test all breakpoints:
  - Mobile: 375px, 414px
  - Tablet: 768px, 1024px
  - Desktop: 1440px, 1920px

## 🎯 Performance Tips

### Image Optimization
Before adding images to `public/assets/`:
1. Resize to appropriate dimensions (max 1920px wide)
2. Compress using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
3. Use WebP format for better compression

### Lighthouse Audit
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Generate report"
4. Aim for 90+ scores in all categories

## 📞 Support Checklist

Before asking for help, verify:
- [ ] Node.js and npm are installed correctly
- [ ] All files are in correct folders
- [ ] `npm install` completed without errors
- [ ] Images are in `public/assets/` with correct names
- [ ] Browser cache is cleared
- [ ] Console shows no red errors (F12 → Console tab)

## 🎓 Learning Resources

To customize further:
- **React Tutorial**: [react.dev/learn](https://react.dev/learn)
- **CSS Guide**: [web.dev/learn/css](https://web.dev/learn/css)
- **Accessibility**: [a11y-101.com](https://a11y-101.com/)

## ✅ Final Checklist

Before going live:
- [ ] All images are optimized and loading
- [ ] All text content is updated
- [ ] Contact information is correct
- [ ] Links are working (especially donate button)
- [ ] Tested on mobile devices
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Dark mode works correctly
- [ ] SEO meta tags are updated
- [ ] Lighthouse score is 90+

---

**Need Help?** 
Make sure to save this guide and the README.md file for future reference!

**Ready to launch?** Run `npm run build` and deploy! 🚀
