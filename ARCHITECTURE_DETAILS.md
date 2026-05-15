# تفاصيل المعمارية والمكونات

## 1. معمارية النظام الشاملة

### 1.1 الطبقات المعمارية

```
┌─────────────────────────────────────────────────────────────┐
│                   Presentation Layer                        │
│  ┌──────────────────┐  ┌──────────────────┐                │
│  │  Portfolio Site  │  │  Admin Dashboard │                │
│  │  (index.html)    │  │ (dashboard.html) │                │
│  └──────────────────┘  └──────────────────┘                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   Business Logic Layer                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  • Data Management Module                            │   │
│  │  • Language Management Module                        │   │
│  │  • Form Validation Module                            │   │
│  │  • Export/Import Module                              │   │
│  │  • Authentication Module                             │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   Data Access Layer                          │
│  ┌──────────────────┐  ┌──────────────────┐                │
│  │  LocalStorage    │  │  JSON Files      │                │
│  │  (Session Data)  │  │  (Persistent)    │                │
│  └──────────────────┘  └──────────────────┘                │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 تدفق البيانات الكامل

```
┌─────────────────────────────────────────────────────────────┐
│  User Interaction (Click, Form Submit, etc.)                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  Event Handler (JavaScript)                                 │
│  - Capture user action                                      │
│  - Prepare data                                             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  Validation Module                                          │
│  - Check required fields                                    │
│  - Validate formats (email, phone, etc.)                    │
│  - Check business rules                                     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  Data Processing                                            │
│  - Transform data if needed                                 │
│  - Add timestamps                                           │
│  - Generate IDs                                             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  Storage Update                                             │
│  - Update LocalStorage                                      │
│  - Update JSON file (if backend)                            │
│  - Sync across tabs                                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  DOM Update                                                 │
│  - Re-render affected components                            │
│  - Update UI elements                                       │
│  - Trigger animations                                       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  User Feedback                                              │
│  - Show success/error message                               │
│  - Update visual indicators                                 │
│  - Log to console (dev mode)                                │
└─────────────────────────────────────────────────────────────┘
```

## 2. المكونات التفصيلية

### 2.1 مكونات الموقع الرئيسي

#### Navigation Component
```
┌─────────────────────────────────────────────────────────────┐
│  Logo  │ Home │ About │ Skills │ Projects │ Pricing │ Contact│
│        │      │       │        │          │         │        │
│        │      │       │        │          │         │ [AR/EN]│
└─────────────────────────────────────────────────────────────┘

الخصائص:
- Sticky navigation (يبقى في الأعلى عند التمرير)
- Active link highlighting
- Mobile hamburger menu
- Language toggle
- Smooth scroll to sections
```

#### Hero Section Component
```
┌─────────────────────────────────────────────────────────────┐
│  ┌──────────────────────┐  ┌──────────────────────────────┐ │
│  │                      │  │  Hi, I'm Mohamed Sabry       │ │
│  │   Profile Image      │  │  Translator · Marketer · AI  │ │
│  │   (Animated Ring)    │  │                              │ │
│  │                      │  │  [View Work] [Hire Me]       │ │
│  │                      │  │                              │ │
│  │                      │  │  5+ Skills │ 3 Languages    │ │
│  │                      │  │  10+ Projects                │ │
│  └──────────────────────┘  └──────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

الخصائص:
- Animated background orbs
- Gradient text
- Responsive layout
- Scroll indicator
- Stats display
```

#### Skills Section Component
```
┌─────────────────────────────────────────────────────────────┐
│  My Skills                                                  │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ 🌐 Translation│  │ 🤖 AI        │  │ 📊 Marketing │      │
│  │ Arabic-Eng   │  │ AI Tools     │  │ Digital Ads  │      │
│  │ -Urdu        │  │ Automation   │  │ Social Media │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐                        │
│  │ 💻 Systems   │  │ 🎨 Design    │                        │
│  │ POS Systems  │  │ Graphic      │                        │
│  │ Management   │  │ Design       │                        │
│  └──────────────┘  └──────────────┘                        │
└─────────────────────────────────────────────────────────────┘

الخصائص:
- Hover effects
- Color-coded skills
- Click to view projects
- Modal popup
- Responsive grid
```

#### Projects Section Component
```
┌─────────────────────────────────────────────────────────────┐
│  My Projects                                                │
├─────────────────────────────────────────────────────────────┤
│  [All] [Translation] [AI] [Marketing] [Systems] [Design]   │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │ Project Title        │  │ Project Title 2      │        │
│  │ Category: AI         │  │ Category: Marketing  │        │
│  │ Description...       │  │ Description...       │        │
│  │ [Tags]               │  │ [Tags]               │        │
│  │ [View Details]       │  │ [View Details]       │        │
│  └──────────────────────┘  └──────────────────────┘        │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │ Project Title 3      │  │ Project Title 4      │        │
│  │ Category: Design     │  │ Category: Systems    │        │
│  │ Description...       │  │ Description...       │        │
│  │ [Tags]               │  │ [Tags]               │        │
│  │ [View Details]       │  │ [View Details]       │        │
│  └──────────────────────┘  └──────────────────────┘        │
└─────────────────────────────────────────────────────────────┘

الخصائص:
- Category filtering
- Search functionality
- Lazy loading images
- Hover animations
- Responsive grid
- Modal details view
```

#### Pricing Section Component
```
┌─────────────────────────────────────────────────────────────┐
│  Pricing & Services                                         │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │ 🌐 Translation       │  │ 📊 Digital Marketing │        │
│  │ ┌────────────────┐   │  │ ┌────────────────┐   │        │
│  │ │ Basic: $15     │   │  │ │ Starter: $50   │   │        │
│  │ │ Standard: $20  │   │  │ │ Growth: $100   │   │        │
│  │ │ Premium: $30   │   │  │ │ Pro: $150      │   │        │
│  │ └────────────────┘   │  │ └────────────────┘   │        │
│  └──────────────────────┘  └──────────────────────┘        │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │ 💻 Business Systems  │  │ 🎨 Graphic Design    │        │
│  │ ┌────────────────┐   │  │ ┌────────────────┐   │        │
│  │ │ Basic: $80     │   │  │ │ Logo: $10      │   │        │
│  │ │ Standard: $130 │   │  │ │ Thumbnails: $15│   │        │
│  │ │ Enterprise: $200│  │  │ │ Brand: $25     │   │        │
│  │ └────────────────┘   │  │ └────────────────┘   │        │
│  └──────────────────────┘  └──────────────────────┘        │
└─────────────────────────────────────────────────────────────┘

الخصائص:
- Service cards
- Multiple packages per service
- Hover effects
- Call-to-action buttons
- Responsive layout
```

#### Contact Section Component
```
┌─────────────────────────────────────────────────────────────┐
│  Contact Me                                                 │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │ Contact Information  │  │ Contact Form         │        │
│  │                      │  │                      │        │
│  │ ✉️ Email             │  │ Name: [_________]    │        │
│  │ muhmmdsbri@...       │  │ Email: [_________]   │        │
│  │                      │  │ Service: [Dropdown]  │        │
│  │ 📱 WhatsApp          │  │ Message: [_______]   │        │
│  │ +20 102 697 2512     │  │ [Send Message]       │        │
│  │                      │  │                      │        │
│  │ 🔗 LinkedIn          │  │                      │        │
│  │ linkedin.com/in/...  │  │                      │        │
│  │                      │  │                      │        │
│  │ 🐙 GitHub           │  │                      │        │
│  │ github.com/...       │  │                      │        │
│  └──────────────────────┘  └──────────────────────┘        │
└─────────────────────────────────────────────────────────────┘

الخصائص:
- Contact cards with icons
- Contact form with validation
- Social media links
- Responsive layout
- Form submission handling
```

### 2.2 مكونات لوحة التحكم

#### Dashboard Layout
```
┌─────────────────────────────────────────────────────────────┐
│  Logo │ Dashboard │ [User] │ [Logout]                       │
├──────────────────────────────────────────────────────────────┤
│ ┌────────────────┐ ┌──────────────────────────────────────┐ │
│ │ Sidebar Menu   │ │ Main Content Area                    │ │
│ │                │ │                                      │ │
│ │ [Dashboard]    │ │ ┌──────────────────────────────────┐ │ │
│ │ [Projects]     │ │ │ Projects Manager                 │ │ │
│ │ [Skills]       │ │ │                                  │ │ │
│ │ [Pricing]      │ │ │ [Add New] [Import] [Export]      │ │ │
│ │ [Personal]     │ │ │                                  │ │ │
│ │ [Certificates] │ │ │ Project List:                    │ │ │
│ │ [Settings]     │ │ │ [Project 1] [Edit] [Delete]      │ │ │
│ │                │ │ │ [Project 2] [Edit] [Delete]      │ │ │
│ │                │ │ │ [Project 3] [Edit] [Delete]      │ │ │
│ │                │ │ │                                  │ │ │
│ │                │ │ └──────────────────────────────────┘ │ │
│ └────────────────┘ └──────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

#### Projects Manager Component
```
┌─────────────────────────────────────────────────────────────┐
│  Projects Manager                                           │
├─────────────────────────────────────────────────────────────┤
│  [+ Add New Project] [Import JSON] [Export JSON]            │
├─────────────────────────────────────────────────────────────┤
│  Filter by Category:                                        │
│  [All] [Translation] [AI] [Marketing] [Systems] [Design]   │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Project ID │ Title │ Category │ Tags │ Actions     │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ 1          │ Legal │ Trans.   │ 3    │ [E] [D] [P] │   │
│  │ 2          │ AI    │ AI       │ 4    │ [E] [D] [P] │   │
│  │ 3          │ Ads   │ Market.  │ 2    │ [E] [D] [P] │   │
│  │ 4          │ POS   │ Systems  │ 3    │ [E] [D] [P] │   │
│  │ 5          │ Logo  │ Design   │ 2    │ [E] [D] [P] │   │
│  └─────────────────────────────────────────────────────┘   │
│  Showing 5 of 20 projects                                   │
│  [< Previous] [1] [2] [3] [4] [Next >]                     │
└─────────────────────────────────────────────────────────────┘
```

#### Project Form Component
```
┌─────────────────────────────────────────────────────────────┐
│  Add/Edit Project                                           │
├─────────────────────────────────────────────────────────────┤
│  Project Title (English):                                   │
│  [_____________________________________]                   │
│  ⓘ Required field                                           │
│                                                             │
│  Project Title (Arabic):                                    │
│  [_____________________________________]                   │
│  ⓘ Required field                                           │
│                                                             │
│  Category:                                                  │
│  [Dropdown: Select Category ▼]                             │
│  ⓘ Choose from: Translation, AI, Marketing, Systems, Design│
│                                                             │
│  Description (English):                                     │
│  [_____________________________________]                   │
│  [_____________________________________]                   │
│  ⓘ Describe your project in detail                         │
│                                                             │
│  Description (Arabic):                                      │
│  [_____________________________________]                   │
│  [_____________________________________]                   │
│  ⓘ اوصف مشروعك بالتفصيل                                    │
│                                                             │
│  Tags:                                                      │
│  [Add Tag] [tag1] ✕ [tag2] ✕ [tag3] ✕                     │
│                                                             │
│  Project Image:                                             │
│  [Choose File] [Preview] [Remove]                          │
│                                                             │
│  [Save Project] [Cancel]                                   │
└─────────────────────────────────────────────────────────────┘
```

#### Skills Manager Component
```
┌─────────────────────────────────────────────────────────────┐
│  Skills Manager                                             │
├─────────────────────────────────────────────────────────────┤
│  [+ Add New Skill]                                          │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Icon │ Title (EN) │ Title (AR) │ Color │ Actions   │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ 🌐   │ Translation│ الترجمة    │ #4F46E5│ [E] [D]  │   │
│  │ 🤖   │ AI         │ ذكاء اصطناعي│ #7C3AED│ [E] [D]  │   │
│  │ 📊   │ Marketing  │ تسويق رقمي │ #0EA5E9│ [E] [D]  │   │
│  │ 💻   │ Systems    │ أنظمة      │ #10B981│ [E] [D]  │   │
│  │ 🎨   │ Design     │ تصميم      │ #F59E0B│ [E] [D]  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

#### Pricing Manager Component
```
┌─────────────────────────────────────────────────────────────┐
│  Pricing Manager                                            │
├─────────────────────────────────────────────────────────────┤
│  [+ Add New Service]                                        │
├─────────────────────────────────────────────────────────────┤
│  Service: Translation                                       │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Package │ Name (EN) │ Name (AR) │ Price │ Actions  │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ 1       │ Basic     │ أساسي     │ $15   │ [E] [D]  │   │
│  │ 2       │ Standard  │ قياسي     │ $20   │ [E] [D]  │   │
│  │ 3       │ Premium   │ مميز      │ $30   │ [E] [D]  │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Service: Digital Marketing                                │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Package │ Name (EN) │ Name (AR) │ Price │ Actions  │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ 1       │ Starter   │ مبتدئ     │ $50   │ [E] [D]  │   │
│  │ 2       │ Growth    │ نمو       │ $100  │ [E] [D]  │   │
│  │ 3       │ Pro       │ احترافي   │ $150  │ [E] [D]  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 3. هياكل البيانات المفصلة

### 3.1 هيكل البيانات الشخصية

```javascript
{
  personal: {
    // المعلومات الأساسية
    name: "Mohamed Sabry",              // الاسم بالإنجليزية
    nameAr: "محمد صبري",                // الاسم بالعربية
    
    // الوصف الوظيفي
    title: "Translator | Digital Marketer | AI Specialist",
    titleAr: "مترجم | متخصص تسويق رقمي | خبير ذكاء اصطناعي",
    
    // السيرة الذاتية
    bio: "Graduated from Al-Azhar University...",
    bioAr: "خريج كلية اللغات والترجمة...",
    
    // معلومات التواصل
    email: "muhmmdsbri@gmail.com",
    phone: "01026972512",
    whatsapp: "201026972512",
    
    // الروابط الاجتماعية
    linkedin: "https://linkedin.com/in/muhmmdsbri",
    github: "https://github.com/muhmmdsbri",
    
    // الموقع
    location: "Egypt",
    
    // الصورة الشخصية
    photo: "assets/images/profile.jpg"
  }
}
```

### 3.2 هيكل المهارات

```javascript
{
  skills: [
    {
      id: "translation",                    // معرف فريد
      icon: "🌐",                          // أيقونة الإيموجي
      title: "Translation",                 // العنوان بالإنجليزية
      titleAr: "الترجمة",                  // العنوان بالعربية
      description: "Professional translation between Arabic, English & Urdu",
      descriptionAr: "ترجمة احترافية بين العربية والإنجليزية والأردية",
      color: "#4F46E5"                     // اللون المميز
    },
    // ... مهارات أخرى
  ]
}
```

### 3.3 هيكل المشاريع

```javascript
{
  projects: {
    translation: [
      {
        id: 1,                             // معرف فريد
        title: "Legal Document Translation - Arabic to English",
        titleAr: "ترجمة وثائق قانونية - من العربية إلى الإنجليزية",
        description: "Translated comprehensive legal contracts...",
        descriptionAr: "ترجمة عقود قانونية شاملة...",
        tags: ["Arabic", "English", "Legal", "Contracts"],
        image: "assets/images/project-1.jpg",
        createdAt: "2024-01-15",           // تاريخ الإنشاء
        updatedAt: "2024-01-15"            // تاريخ التحديث
      },
      // ... مشاريع أخرى
    ],
    ai: [
      // ... مشاريع الذكاء الاصطناعي
    ],
    // ... فئات أخرى
  }
}
```

### 3.4 هيكل الأسعار

```javascript
{
  pricing: [
    {
      service: "Translation (per 1000 words)",
      serviceAr: "ترجمة (لكل 1000 كلمة)",
      icon: "🌐",
      packages: [
        {
          name: "Basic",
          nameAr: "أساسي",
          price: "$15",
          desc: "Arabic ↔ English",
          descAr: "عربي ↔ إنجليزي"
        },
        {
          name: "Standard",
          nameAr: "قياسي",
          price: "$20",
          desc: "Arabic ↔ Urdu",
          descAr: "عربي ↔ أردي"
        },
        {
          name: "Premium",
          nameAr: "مميز",
          price: "$30",
          desc: "3-Language (AR/EN/UR)",
          descAr: "ثلاث لغات (عربي/إنجليزي/أردي)"
        }
      ]
    },
    // ... خدمات أخرى
  ]
}
```

## 4. معايير الجودة والاختبار

### 4.1 معايير الأداء

| المقياس | الهدف | الحد الأدنى |
|---------|-------|-----------|
| Page Load Time | < 2 ثانية | < 3 ثواني |
| First Contentful Paint | < 1 ثانية | < 1.5 ثانية |
| Largest Contentful Paint | < 2.5 ثانية | < 4 ثواني |
| Cumulative Layout Shift | < 0.1 | < 0.25 |
| Time to Interactive | < 3 ثواني | < 5 ثواني |

### 4.2 معايير الأمان

- [ ] HTTPS only
- [ ] Content Security Policy (CSP)
- [ ] X-Frame-Options header
- [ ] X-Content-Type-Options header
- [ ] Secure password hashing
- [ ] Input validation and sanitization
- [ ] CSRF token protection
- [ ] Rate limiting

### 4.3 معايير الوصولية

- [ ] WCAG 2.1 Level AA compliance
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Color contrast ratios
- [ ] Alt text for images
- [ ] Semantic HTML structure
- [ ] ARIA labels where needed

## 5. خطة النشر والصيانة

### 5.1 بيئات النشر

```
Development (Local)
        ↓
Staging (Testing)
        ↓
Production (Live)
```

### 5.2 استراتيجية النسخ الاحتياطي

- نسخ احتياطية يومية للبيانات
- تخزين في السحابة (Google Drive, Dropbox)
- نسخ احتياطية محلية
- إمكانية الاسترجاع السريع

### 5.3 خطة الصيانة

- تحديثات أسبوعية للمحتوى
- فحص شهري للأمان
- تحديثات ربع سنوية للمكتبات
- مراجعة سنوية للمعمارية
