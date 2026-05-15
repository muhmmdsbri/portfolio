# 🎨 دليل التخصيص المتقدم

## تخصيص كامل البورتفليو

---

## 1️⃣ تخصيص البيانات الشخصية

### ملف: `data/portfolio-data.json`

```json
{
  "personal": {
    "name": "اسمك الكامل",
    "nameAr": "اسمك بالعربية",
    "title": "Your Title",
    "titleAr": "عنوانك بالعربية",
    "bio": "Your bio in English",
    "bioAr": "سيرتك الذاتية بالعربية",
    "email": "your@email.com",
    "phone": "01234567890",
    "whatsapp": "201234567890",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourprofile",
    "location": "Your City, Country",
    "photo": "assets/images/profile.jpg"
  }
}
```

---

## 2️⃣ تخصيص المهارات

### إضافة مهارة جديدة

```json
{
  "skills": [
    {
      "id": "new-skill",
      "icon": "🎯",
      "title": "Skill Name",
      "titleAr": "اسم المهارة",
      "description": "Description in English",
      "descriptionAr": "الوصف بالعربية",
      "color": "#FF6B6B"
    }
  ]
}
```

### الأيقونات المتاحة
```
🌐 🎨 📊 💻 🤖 🚀 ⚡ 🎯 📱 🔧 🎬 📸 ✍️ 🎓 🏆
```

### الألوان الموصى بها
```
#FF6B6B - أحمر
#4ECDC4 - تركواز
#45B7D1 - أزرق فاتح
#FFA07A - برتقالي فاتح
#98D8C8 - أخضر فاتح
#F7DC6F - أصفر
#BB8FCE - بنفسجي
#85C1E2 - أزرق سماوي
```

---

## 3️⃣ تخصيص المشاريع

### إضافة مشروع جديد

```json
{
  "projects": {
    "translation": [
      {
        "id": 1,
        "title": "Project Title",
        "titleAr": "عنوان المشروع",
        "description": "Project description",
        "descriptionAr": "وصف المشروع",
        "tags": ["Tag1", "Tag2", "Tag3"],
        "image": "assets/images/project.jpg"
      }
    ]
  }
}
```

### فئات المشاريع المتاحة
- `translation` - الترجمة
- `ai` - الذكاء الاصطناعي
- `marketing` - التسويق الرقمي
- `systems` - أنظمة الأعمال
- `design` - الجرافيك ديزاين

---

## 4️⃣ تخصيص الأسعار

### تحديث خدمة موجودة

```json
{
  "pricing": [
    {
      "service": "Service Name",
      "serviceAr": "اسم الخدمة",
      "icon": "💻",
      "packages": [
        {
          "name": "Package Name",
          "nameAr": "اسم الحزمة",
          "price": "$99",
          "desc": "Description",
          "descAr": "الوصف"
        }
      ]
    }
  ]
}
```

---

## 5️⃣ تخصيص الألوان

### ملف: `assets/css/style.css`

```css
:root {
  /* الألوان الأساسية */
  --primary: #4F46E5;           /* اللون الأساسي */
  --primary-dark: #4338CA;      /* اللون الأساسي الداكن */
  --secondary: #7C3AED;         /* اللون الثانوي */
  --accent: #0EA5E9;            /* اللون الإضافي */
  
  /* الألوان الإضافية */
  --success: #10B981;           /* أخضر */
  --warning: #F59E0B;           /* برتقالي */
  --danger: #EF4444;            /* أحمر */
  
  /* الألوان المحايدة */
  --dark: #1F2937;              /* رمادي داكن */
  --light: #F9FAFB;             /* أبيض فاتح */
  --border: #E5E7EB;            /* حدود */
  --text: #374151;              /* نص */
  --text-light: #6B7280;        /* نص فاتح */
}
```

### مثال: تغيير اللون الأساسي إلى أحمر
```css
:root {
  --primary: #EF4444;
  --primary-dark: #DC2626;
  --secondary: #F87171;
  --accent: #FCA5A5;
}
```

---

## 6️⃣ تخصيص الخطوط

### تغيير الخط الأساسي

#### في `index.html`:
```html
<!-- استبدل هذا -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet" />

<!-- بهذا -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Tajawal:wght@400;600;700;800&display=swap" rel="stylesheet" />
```

#### في `style.css`:
```css
body {
  font-family: 'Poppins', sans-serif;
}

body.ar {
  font-family: 'Tajawal', sans-serif;
}
```

### الخطوط الموصى بها
- **English**: Inter, Poppins, Roboto, Montserrat
- **Arabic**: Cairo, Tajawal, Almarai, Droid Arabic Kufi

---

## 7️⃣ تخصيص الأنيميشنات

### تغيير سرعة الانتقالات

```css
:root {
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* غيّر 0.3s إلى:
   0.1s - سريع جداً
   0.3s - سريع (افتراضي)
   0.5s - متوسط
   0.8s - بطيء
   1s - بطيء جداً
*/
```

### تخصيص الأنيميشنات المحددة

```css
/* تأثير الظهور */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* تأثير الانزلاق */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* تأثير الارتفاع */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 8️⃣ تخصيص الأقسام

### إخفاء قسم معين

في `index.html`، أضف `style="display: none;"`:
```html
<section class="pricing-section section" id="pricing" style="display: none;">
  <!-- المحتوى -->
</section>
```

### تغيير ترتيب الأقسام

انقل أقسام HTML في `index.html` بالترتيب الذي تريده.

### تخصيص ألوان القسم

```css
/* تخصيص قسم معين */
#skills {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

#projects {
  background: #ffffff;
}

#pricing {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

---

## 9️⃣ تخصيص النموذج

### تغيير حقول النموذج

في `index.html`:
```html
<div class="form-group">
  <label for="budget">Budget</label>
  <select id="budget">
    <option value="">Select budget...</option>
    <option value="low">$0 - $500</option>
    <option value="medium">$500 - $2000</option>
    <option value="high">$2000+</option>
  </select>
</div>
```

### معالجة النموذج المخصص

في `assets/js/main.js`:
```javascript
function setupContactForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const budget = document.getElementById('budget').value;
    const message = document.getElementById('message').value;

    // أرسل البيانات إلى خادمك أو استخدم خدمة ثالثة
    console.log({ name, email, budget, message });
    
    form.reset();
  });
}
```

---

## 🔟 تخصيص الشهادات والتعليم

### إضافة شهادة جديدة

```json
{
  "certificates": [
    {
      "title": "Certificate Name",
      "titleAr": "اسم الشهادة",
      "issuer": "Issuer Name",
      "issuerAr": "اسم الجهة المصدرة",
      "year": "2024",
      "cert": "assets/images/cert.jpg"
    }
  ]
}
```

---

## 1️⃣1️⃣ تخصيص الشريط العلوي (Navbar)

### تغيير اللون

```css
.navbar {
  background: rgba(255, 255, 255, 0.95);
  /* غيّر إلى */
  background: rgba(31, 41, 55, 0.95);
}
```

### تغيير الارتفاع

```css
.nav-container {
  height: 70px;
  /* غيّر إلى */
  height: 80px;
}
```

### إضافة شعار صورة

```html
<a href="#home" class="nav-logo">
  <img src="assets/images/logo.png" alt="Logo" style="height: 40px;">
</a>
```

---

## 1️⃣2️⃣ تخصيص التذييل (Footer)

### تغيير النص

في `index.html`:
```html
<p class="footer-text">© 2024 Your Name. All Rights Reserved.</p>
```

### إضافة روابط إضافية

```html
<div class="footer-links">
  <a href="#privacy">Privacy Policy</a>
  <a href="#terms">Terms of Service</a>
  <a href="#sitemap">Sitemap</a>
</div>
```

---

## 1️⃣3️⃣ تخصيص الاستجابة (Responsive)

### تغيير نقاط التوقف

```css
/* Tablet */
@media (max-width: 768px) {
  /* تخصيصات Tablet */
}

/* Mobile */
@media (max-width: 480px) {
  /* تخصيصات Mobile */
}

/* Large Desktop */
@media (min-width: 1400px) {
  /* تخصيصات Desktop الكبير */
}
```

---

## 1️⃣4️⃣ إضافة ميزات جديدة

### إضافة قسم جديد

1. أضف HTML في `index.html`
2. أضف CSS في `style.css`
3. أضف JavaScript في `main.js` إذا لزم الأمر

### مثال: إضافة قسم الشهادات

```html
<section class="testimonials section" id="testimonials">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Testimonials</h2>
    </div>
    <div class="testimonials-grid" id="testimonialsGrid">
      <!-- سيتم ملؤه بـ JavaScript -->
    </div>
  </div>
</section>
```

---

## 1️⃣5️⃣ نصائح التخصيص

### ✅ أفضل الممارسات
- استخدم CSS Variables للألوان
- احتفظ بنسخة احتياطية من الملفات الأصلية
- اختبر التغييرات على جميع الأجهزة
- استخدم أدوات مثل Chrome DevTools

### ❌ تجنب
- تغيير أسماء الملفات الأساسية
- حذف الأقسام المهمة
- استخدام ألوان متضاربة
- إضافة محتوى ثقيل جداً

---

## 🎯 أمثلة تخصيص شاملة

### مثال 1: تغيير الثيم إلى أحمر

```css
:root {
  --primary: #EF4444;
  --primary-dark: #DC2626;
  --secondary: #F87171;
  --accent: #FCA5A5;
}
```

### مثال 2: تغيير الخط إلى Poppins

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
```

```css
body {
  font-family: 'Poppins', sans-serif;
}
```

### مثال 3: إضافة صورة خلفية

```css
.hero {
  background-image: url('assets/images/bg.jpg');
  background-size: cover;
  background-position: center;
}
```

---

## 📞 الدعم

إذا واجهت مشاكل في التخصيص:
- 📧 البريد: muhmmdsbri@gmail.com
- 💬 WhatsApp: +20 102 697 2512
- 🔗 LinkedIn: linkedin.com/in/muhmmdsbri

---

**استمتع بتخصيص بورتفليوك! 🎨**
