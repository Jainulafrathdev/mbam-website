# 🚀 MBAM Website - Quick Start (5 Minutes)

## ⚡ Super Fast Setup

### 1️⃣ Prerequisites
- Install [Node.js](https://nodejs.org/) (includes npm)

### 2️⃣ Extract & Navigate
```bash
# Extract the zip file, then:
cd mbam-website
```

### 3️⃣ Add Your Images
Create folder and add your images:
```bash
mkdir -p public/assets
```

**Required images** (place in `public/assets/`):
- `IMG_2944.jpeg` - Logo & first slide
- `slide2.jpg` - Second carousel slide
- `slide3.jpg` - Third carousel slide
- `quran-261.mp3` - Audio file

### 4️⃣ Install & Run
```bash
npm install
npm start
```

**That's it!** Website opens at `http://localhost:3000` 🎉

---

## ✨ Key Features to Test

1. **Dark Mode**: Click sun/moon icon in header
2. **Mobile View**: Resize browser or use phone
3. **Carousel**: Auto-plays, use arrows or dots
4. **Animations**: Scroll down to see smooth effects
5. **Audio Player**: Click play button in Quran section
6. **Statistics**: Numbers animate when you scroll to them

---

## 🎨 Quick Customization

### Change Text
Edit `src/App.jsx` - search for text you want to change

### Change Colors
Edit `src/App.css` - find `:root` section at top

### Add More Images
Add files to `public/assets/` and update `images` array in `src/App.jsx`

---

## 📦 Deploy (When Ready)

```bash
npm run build
```

Upload the `build/` folder to your web host!

**Recommended hosts:**
- [Netlify](https://netlify.com) - Free, drag & drop
- [Vercel](https://vercel.com) - Free, auto-deploy
- [GitHub Pages](https://pages.github.com) - Free

---

## 🆘 Problems?

### Images not showing?
- Check files are in `public/assets/`
- Filenames must match exactly (case-sensitive)
- Clear browser cache (Ctrl+Shift+R)

### Can't install?
- Update Node.js to latest version
- Try: `npm cache clean --force`
- Delete `node_modules` and run `npm install` again

### Still stuck?
- Check `SETUP_GUIDE.md` for detailed help
- Check browser console (F12) for errors

---

## 📚 Full Documentation

- **SETUP_GUIDE.md** - Complete setup instructions
- **README.md** - Features and customization guide

**Built with ❤️ for MBAM**
