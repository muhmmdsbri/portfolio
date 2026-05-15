# Quick Reference - Dark Theme Portfolio

## 🎨 Color Scheme

| Element | Color | Hex Code |
|---------|-------|----------|
| Background | Dark Black | #0A0E27 |
| Primary Text | White | #FFFFFF |
| Secondary Text | Light Gray | #B0B8C8 |
| Accents | Gold | #FFD700 |
| Borders | Subtle White | rgba(255,255,255,0.1) |

## 🖼️ Hero Section

**Current Setup:**
```css
background: linear-gradient(rgba(10, 14, 39, 0.7), rgba(10, 14, 39, 0.7)), 
            url('assets/images/profile.svg') center/cover no-repeat;
```

**To Add Your Photo:**
1. Save your photo as `profile.jpg` in `assets/images/`
2. Change `profile.svg` to `profile.jpg` in the CSS
3. Adjust overlay opacity if needed (0.5 = lighter, 0.8 = darker)

## 📋 File Structure

```
portfolio/
├── index.html                 (Main page)
├── assets/
│   ├── css/
│   │   └── style.css         (All styling - UPDATED)
│   ├── js/
│   │   └── main.js           (Functionality)
│   └── images/
│       ├── profile.svg       (Replace with your photo)
│       └── profile-placeholder.html
├── data/
│   └── portfolio-data.json   (Content)
└── OPEN_PORTFOLIO.bat        (Quick open)
```

## 🎯 Key CSS Classes

### Sections
- `.hero` - Hero section with background image
- `.about` - About section
- `.skills-section` - Skills grid
- `.projects-section` - Projects with tabs
- `.pricing-section` - Pricing cards
- `.contact-section` - Contact form
- `.footer` - Footer

### Components
- `.skill-card` - Skill cards (dark with gold hover)
- `.project-card` - Project cards (dark with gold hover)
- `.pricing-card` - Pricing cards (dark with gold hover)
- `.contact-card` - Contact info cards
- `.btn` - Buttons (white primary, outline)
- `.tab-btn` - Tab buttons (gold when active)

### Colors
- `.section-tag` - Gold accent text
- `.hero-title` - White title text
- `.hero-subtitle` - Gold subtitle text
- `.stat-num` - Gold numbers
- `.accent` - Gold color

## 🔧 Common Customizations

### Change Accent Color
Find in `style.css`:
```css
--accent: #FFD700;  /* Change this hex code */
```

Popular alternatives:
- Blue: `#0066FF`
- Purple: `#9D4EDD`
- Green: `#10B981`
- Red: `#EF4444`
- Cyan: `#00D9FF`

### Adjust Hero Overlay
Find hero background line and change opacity:
```css
rgba(10, 14, 39, 0.7)  /* Change 0.7 to 0.5-0.9 */
```

### Change Background Color
Find in `style.css`:
```css
--dark: #0A0E27;  /* Change this hex code */
```

Darker options:
- `#000000` - Pure black
- `#0F0F1E` - Very dark
- `#1A1A2E` - Dark blue-black

### Change Text Color
Find in `style.css`:
```css
--text: #FFFFFF;  /* Change this hex code */
```

Lighter options:
- `#F0F0F0` - Off-white
- `#E8E8E8` - Light gray

## 📱 Responsive Breakpoints

```css
/* Desktop: 1200px+ */
/* Tablet: 768px - 1199px */
/* Mobile: < 768px */
```

## 🎬 Animations

- **Fade In**: Content appears smoothly
- **Slide In**: Elements slide from sides
- **Bounce**: Buttons and icons bounce on hover
- **Pulse**: Icons pulse continuously
- **Rotate**: Profile ring rotates
- **Scroll Bounce**: Scroll indicator bounces

## 🔗 Important Links

- **Email**: muhmmdsbri@gmail.com
- **WhatsApp**: +20 102 697 2512
- **LinkedIn**: linkedin.com/in/muhmmdsbri
- **GitHub**: github.com/muhmmdsbri

## 📊 Content Structure

### Skills (5 categories)
1. Translation
2. AI & Automation
3. Digital Marketing
4. Business Systems
5. Graphic Design

### Projects (20 total)
- 4 projects per skill category
- Each with title, description, tags

### Pricing (5 services)
- Translation
- AI Consulting
- Digital Marketing
- Business Systems
- Graphic Design

## 🚀 Deployment Checklist

- [ ] Add your professional photo
- [ ] Test on desktop browser
- [ ] Test on mobile browser
- [ ] Check all links work
- [ ] Verify contact form
- [ ] Test language toggle
- [ ] Check all animations
- [ ] Verify responsive design
- [ ] Choose hosting platform
- [ ] Deploy to live server

## 💡 Tips

1. **Photo Quality**: Use high-resolution professional headshot
2. **Loading**: Optimize images for faster loading
3. **Testing**: Test on multiple browsers and devices
4. **SEO**: Update meta tags in HTML for better search results
5. **Analytics**: Add Google Analytics for tracking
6. **Backup**: Keep backup of original files

## 🎓 Learning Resources

- CSS: Learn about CSS variables and dark themes
- Responsive Design: Mobile-first approach
- Web Hosting: GitHub Pages, Netlify, or traditional hosting
- Domain: Register custom domain for professional look

## ✅ Verification

Your portfolio should have:
- ✅ Dark background (#0A0E27)
- ✅ White text (#FFFFFF)
- ✅ Gold accents (#FFD700)
- ✅ Hero section with background image
- ✅ All sections visible and styled
- ✅ Responsive on mobile
- ✅ Smooth animations
- ✅ Working contact form
- ✅ Language toggle (AR/EN)
- ✅ Professional appearance

---

**Ready to deploy? Your portfolio is complete!** 🎉
