# 📋 دليل ملف البيانات JSON

## ملف: `data/portfolio-data.json`

هذا الملف يحتوي على جميع بيانات البورتفليو. يمكنك تعديله مباشرة لتحديث محتوى الموقع.

---

## 🔍 هيكل الملف

```json
{
  "personal": { ... },
  "education": [ ... ],
  "certificates": [ ... ],
  "skills": [ ... ],
  "projects": { ... },
  "pricing": [ ... ]
}
```

---

## 1️⃣ القسم الشخصي (personal)

### الهيكل
```json
{
  "personal": {
    "name": "Mohamed Sabry",
    "nameAr": "محمد صبري",
    "title": "Translator | Digital Marketer | AI Specialist",
    "titleAr": "مترجم | متخصص تسويق رقمي | خبير ذكاء اصطناعي",
    "bio": "Bio in English",
    "bioAr": "السيرة الذاتية بالعربية",
    "email": "muhmmdsbri@gmail.com",
    "phone": "01026972512",
    "whatsapp": "201026972512",
    "linkedin": "https://linkedin.com/in/muhmmdsbri",
    "github": "https://github.com/muhmmdsbri",
    "location": "Egypt",
    "photo": "assets/images/profile.jpg"
  }
}
```

### شرح الحقول
| الحقل | الوصف | مثال |
|-------|-------|------|
| `name` | الاسم بالإنجليزية | Mohamed Sabry |
| `nameAr` | الاسم بالعربية | محمد صبري |
| `title` | العنوان الوظيفي | Translator |
| `titleAr` | العنوان بالعربية | مترجم |
| `bio` | السيرة الذاتية | Bio text... |
| `bioAr` | السيرة بالعربية | نص السيرة... |
| `email` | البريد الإلكتروني | email@example.com |
| `phone` | رقم الهاتف | 01234567890 |
| `whatsapp` | رقم واتس | 201234567890 |
| `linkedin` | رابط لينكدين | https://linkedin.com/in/... |
| `github` | رابط جيتهاب | https://github.com/... |
| `location` | الموقع الجغرافي | Egypt |
| `photo` | مسار الصورة | assets/images/profile.jpg |

### مثال التعديل
```json
{
  "personal": {
    "name": "Your Name",
    "nameAr": "اسمك",
    "email": "your@email.com",
    "phone": "01234567890"
  }
}
```

---

## 2️⃣ قسم التعليم (education)

### الهيكل
```json
{
  "education": [
    {
      "degree": "Bachelor's Degree - Islamic Studies, Foreign Languages (Urdu)",
      "degreeAr": "ليسانس - الدراسات الإسلامية باللغات الأجنبية (اللغة الأردية)",
      "institution": "Al-Azhar University - Faculty of Languages and Translation",
      "institutionAr": "جامعة الأزهر - كلية اللغات والترجمة",
      "year": "2022",
      "grade": "Very Good - 80.9%",
      "cert": "assets/images/azhar-cert.jpg"
    }
  ]
}
```

### شرح الحقول
| الحقل | الوصف |
|-------|-------|
| `degree` | الدرجة العلمية بالإنجليزية |
| `degreeAr` | الدرجة العلمية بالعربية |
| `institution` | اسم الجامعة بالإنجليزية |
| `institutionAr` | اسم الجامعة بالعربية |
| `year` | سنة التخرج |
| `grade` | التقدير والنسبة |
| `cert` | مسار شهادة التخرج |

### إضافة تعليم جديد
```json
{
  "degree": "Master's Degree - Translation Studies",
  "degreeAr": "ماجستير - دراسات الترجمة",
  "institution": "Cairo University",
  "institutionAr": "جامعة القاهرة",
  "year": "2024",
  "grade": "Excellent",
  "cert": "assets/images/master-cert.jpg"
}
```

---

## 3️⃣ قسم الشهادات (certificates)

### الهيكل
```json
{
  "certificates": [
    {
      "title": "1 Million Prompters - AI Prompting Expert",
      "titleAr": "مليون خبير لأوامر الذكاء الاصطناعي",
      "issuer": "Dubai Future Foundation - Dubai Centre for AI",
      "issuerAr": "مؤسسة دبي للمستقبل - مركز دبي للذكاء الاصطناعي",
      "year": "2024",
      "cert": "assets/images/dubai-cert.jpg"
    }
  ]
}
```

### إضافة شهادة جديدة
```json
{
  "title": "Google Analytics Certification",
  "titleAr": "شهادة جوجل أناليتكس",
  "issuer": "Google",
  "issuerAr": "جوجل",
  "year": "2024",
  "cert": "assets/images/google-cert.jpg"
}
```

---

## 4️⃣ قسم المهارات (skills)

### الهيكل
```json
{
  "skills": [
    {
      "id": "translation",
      "icon": "🌐",
      "title": "Translation",
      "titleAr": "الترجمة",
      "description": "Professional translation between Arabic, English & Urdu",
      "descriptionAr": "ترجمة احترافية بين العربية والإنجليزية والأردية",
      "color": "#4F46E5"
    }
  ]
}
```

### شرح الحقول
| الحقل | الوصف | مثال |
|-------|-------|------|
| `id` | معرّف فريد | translation |
| `icon` | أيقونة emoji | 🌐 |
| `title` | اسم المهارة | Translation |
| `titleAr` | اسم المهارة بالعربية | الترجمة |
| `description` | وصف المهارة | Professional translation... |
| `descriptionAr` | الوصف بالعربية | ترجمة احترافية... |
| `color` | لون المهارة | #4F46E5 |

### الأيقونات المتاحة
```
🌐 🎨 📊 💻 🤖 🚀 ⚡ 🎯 📱 🔧 🎬 📸 ✍️ 🎓 🏆
```

### الألوان الموصى بها
```
#4F46E5 - أزرق
#7C3AED - بنفسجي
#0EA5E9 - أزرق فاتح
#10B981 - أخضر
#F59E0B - برتقالي
#EF4444 - أحمر
#EC4899 - وردي
#8B5CF6 - بنفسجي فاتح
```

### إضافة مهارة جديدة
```json
{
  "id": "web-development",
  "icon": "💻",
  "title": "Web Development",
  "titleAr": "تطوير الويب",
  "description": "Full-stack web development",
  "descriptionAr": "تطوير ويب متكامل",
  "color": "#0EA5E9"
}
```

---

## 5️⃣ قسم المشاريع (projects)

### الهيكل
```json
{
  "projects": {
    "translation": [
      {
        "id": 1,
        "title": "Legal Document Translation - Arabic to English",
        "titleAr": "ترجمة وثائق قانونية - من العربية إلى الإنجليزية",
        "description": "Translated comprehensive legal contracts...",
        "descriptionAr": "ترجمة عقود قانونية شاملة...",
        "tags": ["Arabic", "English", "Legal", "Contracts"],
        "image": ""
      }
    ],
    "ai": [ ... ],
    "marketing": [ ... ],
    "systems": [ ... ],
    "design": [ ... ]
  }
}
```

### فئات المشاريع
| الفئة | الوصف |
|-------|-------|
| `translation` | مشاريع الترجمة |
| `ai` | مشاريع الذكاء الاصطناعي |
| `marketing` | مشاريع التسويق الرقمي |
| `systems` | مشاريع أنظمة الأعمال |
| `design` | مشاريع الجرافيك ديزاين |

### شرح الحقول
| الحقل | الوصف |
|-------|-------|
| `id` | معرّف فريد للمشروع |
| `title` | عنوان المشروع بالإنجليزية |
| `titleAr` | عنوان المشروع بالعربية |
| `description` | وصف المشروع بالإنجليزية |
| `descriptionAr` | وصف المشروع بالعربية |
| `tags` | علامات المشروع |
| `image` | مسار صورة المشروع |

### إضافة مشروع جديد
```json
{
  "id": 5,
  "title": "E-commerce Platform",
  "titleAr": "منصة تجارة إلكترونية",
  "description": "Built a complete e-commerce platform",
  "descriptionAr": "بناء منصة تجارة إلكترونية كاملة",
  "tags": ["E-commerce", "Python", "Database"],
  "image": "assets/images/ecommerce.jpg"
}
```

---

## 6️⃣ قسم الأسعار (pricing)

### الهيكل
```json
{
  "pricing": [
    {
      "service": "Translation (per 1000 words)",
      "serviceAr": "ترجمة (لكل 1000 كلمة)",
      "icon": "🌐",
      "packages": [
        {
          "name": "Basic",
          "nameAr": "أساسي",
          "price": "$15",
          "desc": "Arabic ↔ English",
          "descAr": "عربي ↔ إنجليزي"
        }
      ]
    }
  ]
}
```

### شرح الحقول
| الحقل | الوصف |
|-------|-------|
| `service` | اسم الخدمة بالإنجليزية |
| `serviceAr` | اسم الخدمة بالعربية |
| `icon` | أيقونة الخدمة |
| `packages` | حزم الأسعار |
| `name` | اسم الحزمة |
| `nameAr` | اسم الحزمة بالعربية |
| `price` | السعر |
| `desc` | وصف الحزمة |
| `descAr` | وصف الحزمة بالعربية |

### إضافة خدمة جديدة
```json
{
  "service": "Web Development",
  "serviceAr": "تطوير الويب",
  "icon": "💻",
  "packages": [
    {
      "name": "Starter",
      "nameAr": "مبتدئ",
      "price": "$200",
      "desc": "Simple Website",
      "descAr": "موقع بسيط"
    },
    {
      "name": "Professional",
      "nameAr": "احترافي",
      "price": "$500",
      "desc": "Full Website",
      "descAr": "موقع متكامل"
    }
  ]
}
```

---

## ✅ نصائح مهمة

### ✅ افعل
- استخدم UTF-8 للترميز
- تأكد من صحة JSON
- استخدم علامات الاقتباس المزدوجة
- أضف فاصلة بعد كل عنصر (ما عدا الأخير)

### ❌ لا تفعل
- لا تستخدم علامات اقتباس مفردة
- لا تترك فاصلة بعد آخر عنصر
- لا تضف تعليقات في JSON
- لا تستخدم أحرف خاصة بدون escape

---

## 🔍 التحقق من صحة JSON

### استخدام أداة أونلاين
1. اذهب إلى [jsonlint.com](https://jsonlint.com)
2. انسخ محتوى الملف
3. انقر Validate
4. إذا كان أخضر، الملف صحيح ✅

### استخدام VS Code
1. افتح الملف في VS Code
2. انقر Ctrl+Shift+P
3. اكتب "Format Document"
4. إذا لم تظهر أخطاء، الملف صحيح ✅

---

## 📝 أمثلة كاملة

### مثال 1: تحديث البيانات الشخصية
```json
{
  "personal": {
    "name": "Ahmed Hassan",
    "nameAr": "أحمد حسن",
    "title": "Full Stack Developer",
    "titleAr": "مطور ويب متكامل",
    "email": "ahmed@example.com",
    "phone": "01234567890",
    "whatsapp": "201234567890",
    "linkedin": "https://linkedin.com/in/ahmed",
    "github": "https://github.com/ahmed"
  }
}
```

### مثال 2: إضافة مشروع جديد
```json
{
  "projects": {
    "translation": [
      {
        "id": 5,
        "title": "Medical Document Translation",
        "titleAr": "ترجمة وثائق طبية",
        "description": "Translated medical reports and prescriptions",
        "descriptionAr": "ترجمة التقارير الطبية والوصفات",
        "tags": ["Medical", "Arabic", "English"],
        "image": ""
      }
    ]
  }
}
```

### مثال 3: تحديث الأسعار
```json
{
  "pricing": [
    {
      "service": "Translation (per 1000 words)",
      "serviceAr": "ترجمة (لكل 1000 كلمة)",
      "icon": "🌐",
      "packages": [
        {
          "name": "Basic",
          "nameAr": "أساسي",
          "price": "$20",
          "desc": "Arabic ↔ English",
          "descAr": "عربي ↔ إنجليزي"
        },
        {
          "name": "Premium",
          "nameAr": "مميز",
          "price": "$35",
          "desc": "3-Language",
          "descAr": "ثلاث لغات"
        }
      ]
    }
  ]
}
```

---

## 🆘 حل المشاكل

| المشكلة | السبب | الحل |
|--------|-------|------|
| البيانات لا تحمل | JSON غير صحيح | استخدم JSON Validator |
| الأحرف العربية تظهر غريبة | ترميز خاطئ | استخدم UTF-8 |
| الصور لا تظهر | مسار خاطئ | تحقق من مسار الصورة |
| الأسعار لا تظهر | حقل مفقود | أضف جميع الحقول المطلوبة |

---

## 📞 الدعم

إذا واجهت مشاكل:
- 📧 البريد: muhmmdsbri@gmail.com
- 💬 WhatsApp: +20 102 697 2512
- 🔗 LinkedIn: linkedin.com/in/muhmmdsbri

---

**استمتع بتعديل بيانات بورتفليوك! 📋**
