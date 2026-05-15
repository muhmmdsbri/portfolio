# التصميم التقني الشامل - نظام بورتفليو محمد صبري

## 1. نظرة عامة

نظام بورتفليو عالمي متكامل لمحمد صبري يجمع بين موقع عرض احترافي وواجهة إدارة قوية. يدعم النظام اللغات العربية والإنجليزية، ويوفر إمكانيات متقدمة لإدارة المشاريع والمهارات والأسعار مع تصميم حديث وراقي.

## 2. المعمارية العامة

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend Layer                            │
├─────────────────────────────────────────────────────────────┤
│  • Portfolio Website (index.html)                            │
│  • Admin Dashboard (dashboard.html)                          │
│  • Responsive Design (Mobile/Tablet/Desktop)                │
│  • Multi-language Support (AR/EN)                           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    Data Layer                                │
├─────────────────────────────────────────────────────────────┤
│  • JSON Data Storage (portfolio-data.json)                  │
│  • LocalStorage for Admin Session                           │
│  • IndexedDB for Offline Support (Optional)                 │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    Business Logic                            │
├─────────────────────────────────────────────────────────────┤
│  • Data Management Module                                    │
│  • Language Switching Module                                │
│  • Form Validation Module                                   │
│  • Export/Import Module                                     │
└─────────────────────────────────────────────────────────────┘
```

## 3. المكونات الرئيسية

### 3.1 Frontend Components

#### أ) الموقع الرئيسي (Portfolio Website)
- **Navbar**: شريط التنقل مع اللغات والقوائم
- **Hero Section**: قسم البطل مع الصورة الشخصية والإحصائيات
- **About Section**: معلومات شخصية والشهادات
- **Skills Section**: عرض المهارات مع الألوان المميزة
- **Projects Section**: عرض المشاريع مع التصفية حسب الفئة
- **Pricing Section**: عرض الأسعار والخدمات
- **Contact Section**: نموذج التواصل والروابط الاجتماعية
- **Footer**: تذييل الصفحة

#### ب) لوحة التحكم (Admin Dashboard)
- **Authentication**: تسجيل الدخول الآمن
- **Projects Manager**: إضافة/تعديل/حذف المشاريع
- **Skills Manager**: إدارة المهارات
- **Pricing Manager**: إدارة الأسعار والخدمات
- **Personal Info Manager**: تحديث البيانات الشخصية
- **Certificates Manager**: إدارة الشهادات
- **Export/Import**: تصدير واستيراد البيانات

### 3.2 Data Models

```javascript
// Personal Information
{
  personal: {
    name: String,
    nameAr: String,
    title: String,
    titleAr: String,
    bio: String,
    bioAr: String,
    email: String,
    phone: String,
    whatsapp: String,
    linkedin: String,
    github: String,
    location: String,
    photo: String
  }
}

// Skills
{
  skills: [
    {
      id: String,
      icon: String,
      title: String,
      titleAr: String,
      description: String,
      descriptionAr: String,
      color: String
    }
  ]
}

// Projects
{
  projects: {
    [category]: [
      {
        id: Number,
        title: String,
        titleAr: String,
        description: String,
        descriptionAr: String,
        tags: Array<String>,
        image: String
      }
    ]
  }
}

// Pricing
{
  pricing: [
    {
      service: String,
      serviceAr: String,
      icon: String,
      packages: [
        {
          name: String,
          nameAr: String,
          price: String,
          desc: String,
          descAr: String
        }
      ]
    }
  ]
}
```

## 4. الواجهات الرئيسية

### 4.1 واجهة إدارة المشاريع

```
┌─────────────────────────────────────────┐
│  Project Manager Interface              │
├─────────────────────────────────────────┤
│  [Add New Project] [Import] [Export]    │
├─────────────────────────────────────────┤
│  Category Filter: [All] [Translation]   │
│                  [AI] [Marketing]       │
│                  [Systems] [Design]     │
├─────────────────────────────────────────┤
│  Project List:                          │
│  ┌─────────────────────────────────┐   │
│  │ Project Title                   │   │
│  │ Category: Translation           │   │
│  │ [Edit] [Delete] [Preview]       │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │ Project Title 2                 │   │
│  │ Category: AI                    │   │
│  │ [Edit] [Delete] [Preview]       │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### 4.2 نموذج إضافة/تعديل المشروع

```
┌─────────────────────────────────────────┐
│  Add/Edit Project Form                  │
├─────────────────────────────────────────┤
│  Project Title (EN):                    │
│  [_____________________________]         │
│                                         │
│  Project Title (AR):                    │
│  [_____________________________]         │
│                                         │
│  Category:                              │
│  [Dropdown: Translation/AI/...]         │
│                                         │
│  Description (EN):                      │
│  [_____________________________]         │
│  [_____________________________]         │
│                                         │
│  Description (AR):                      │
│  [_____________________________]         │
│  [_____________________________]         │
│                                         │
│  Tags: [Add Tag] [tag1] [tag2]          │
│                                         │
│  Project Image:                         │
│  [Upload Image] [Preview]               │
│                                         │
│  [Save] [Cancel]                        │
└─────────────────────────────────────────┘
```

## 5. تدفق البيانات

```
User Action (Website)
        ↓
JavaScript Event Handler
        ↓
Data Validation
        ↓
LocalStorage Update
        ↓
DOM Re-render
        ↓
Visual Update

Admin Action (Dashboard)
        ↓
Authentication Check
        ↓
Form Validation
        ↓
Data Processing
        ↓
JSON File Update
        ↓
LocalStorage Sync
        ↓
Success/Error Message
```

## 6. الخوارزميات الرئيسية

### 6.1 خوارزمية تحميل البيانات

```
ALGORITHM loadPortfolioData()
INPUT: None
OUTPUT: portfolioData (Object)

BEGIN
  // محاولة تحميل من LocalStorage أولاً
  IF localStorage.contains('portfolioData') THEN
    data ← localStorage.getItem('portfolioData')
    RETURN parseJSON(data)
  END IF
  
  // إذا لم توجد، حمل من JSON
  response ← fetch('data/portfolio-data.json')
  data ← response.json()
  
  // احفظ في LocalStorage
  localStorage.setItem('portfolioData', stringifyJSON(data))
  
  RETURN data
END
```

### 6.2 خوارزمية البحث والتصفية

```
ALGORITHM filterProjects(projects, category, searchTerm)
INPUT: projects (Array), category (String), searchTerm (String)
OUTPUT: filteredProjects (Array)

BEGIN
  result ← empty Array
  
  FOR EACH project IN projects DO
    // تحقق من الفئة
    IF category ≠ 'all' AND project.category ≠ category THEN
      CONTINUE
    END IF
    
    // تحقق من البحث
    IF searchTerm ≠ '' THEN
      IF NOT (project.title.contains(searchTerm) OR 
              project.description.contains(searchTerm)) THEN
        CONTINUE
      END IF
    END IF
    
    result.add(project)
  END FOR
  
  RETURN result
END
```

### 6.3 خوارزمية تبديل اللغة

```
ALGORITHM switchLanguage(targetLanguage)
INPUT: targetLanguage (String: 'en' or 'ar')
OUTPUT: None (Side effect: DOM update)

PRECONDITION:
  - targetLanguage ∈ {'en', 'ar'}
  - All elements have data-i18n attributes

BEGIN
  // تحديث اللغة الحالية
  currentLanguage ← targetLanguage
  localStorage.setItem('language', targetLanguage)
  
  // تحديث اتجاه الصفحة
  IF targetLanguage = 'ar' THEN
    document.documentElement.dir ← 'rtl'
    document.documentElement.lang ← 'ar'
  ELSE
    document.documentElement.dir ← 'ltr'
    document.documentElement.lang ← 'en'
  END IF
  
  // تحديث جميع النصوص
  FOR EACH element WITH data-i18n attribute DO
    key ← element.getAttribute('data-i18n')
    element.textContent ← translations[targetLanguage][key]
  END FOR
  
  // تحديث الأنماط إذا لزم الأمر
  updateStylesForLanguage(targetLanguage)
END
```

### 6.4 خوارزمية التحقق من صحة النموذج

```
ALGORITHM validateForm(formData)
INPUT: formData (Object)
OUTPUT: validationResult (Object: {isValid: Boolean, errors: Array})

BEGIN
  errors ← empty Array
  
  // التحقق من الحقول المطلوبة
  FOR EACH field IN requiredFields DO
    IF formData[field] = empty OR formData[field] = null THEN
      errors.add("Field " + field + " is required")
    END IF
  END FOR
  
  // التحقق من البريد الإلكتروني
  IF formData.email ≠ empty THEN
    IF NOT isValidEmail(formData.email) THEN
      errors.add("Invalid email format")
    END IF
  END IF
  
  // التحقق من الهاتف
  IF formData.phone ≠ empty THEN
    IF NOT isValidPhone(formData.phone) THEN
      errors.add("Invalid phone format")
    END IF
  END IF
  
  // التحقق من طول النصوص
  IF length(formData.title) > 100 THEN
    errors.add("Title must be less than 100 characters")
  END IF
  
  RETURN {
    isValid: length(errors) = 0,
    errors: errors
  }
END
```

## 7. المواصفات الرسمية للدوال الرئيسية

### 7.1 دالة saveProjectData()

**الغرض**: حفظ بيانات المشروع الجديد أو المعدل

**التوقيع**:
```javascript
function saveProjectData(projectData: Object): Promise<{success: Boolean, message: String}>
```

**الشروط المسبقة**:
- `projectData` يجب أن يكون كائن صحيح
- `projectData.title` و `projectData.titleAr` يجب ألا تكون فارغة
- `projectData.category` يجب أن تكون من الفئات المعرفة
- `projectData.id` يجب أن يكون فريداً (للمشاريع الجديدة)

**الشروط اللاحقة**:
- إذا نجح: البيانات محفوظة في LocalStorage و JSON
- إذا فشل: رسالة خطأ واضحة مع السبب
- لا توجد آثار جانبية على البيانات الأخرى

**متغيرات الحلقة** (إن وجدت):
- عند حفظ عدة مشاريع: جميع المشاريع المحفوظة سابقاً تبقى سليمة

### 7.2 دالة deleteProject()

**الغرض**: حذف مشروع من النظام

**التوقيع**:
```javascript
function deleteProject(projectId: Number): Promise<{success: Boolean, message: String}>
```

**الشروط المسبقة**:
- `projectId` يجب أن يكون موجوداً في النظام
- المستخدم يجب أن يكون مصرحاً (Admin)

**الشروط اللاحقة**:
- المشروع محذوف من جميع مصادر البيانات
- لا يمكن استرجاع المشروع (عملية نهائية)
- جميع المشاريع الأخرى تبقى دون تأثر

### 7.3 دالة renderProjects()

**الغرض**: عرض المشاريع في الصفحة

**التوقيع**:
```javascript
function renderProjects(projects: Array, container: HTMLElement): void
```

**الشروط المسبقة**:
- `projects` مصفوفة صحيحة (قد تكون فارغة)
- `container` عنصر DOM صحيح

**الشروط اللاحقة**:
- جميع المشاريع معروضة بشكل صحيح
- الأنماط والرسوم المتحركة مطبقة
- الروابط والأزرار تعمل بشكل صحيح

## 8. استراتيجية الاختبار

### 8.1 اختبارات الوحدة (Unit Tests)

```javascript
// اختبار تحميل البيانات
test('loadPortfolioData should return valid data', () => {
  const data = loadPortfolioData();
  expect(data).toBeDefined();
  expect(data.personal).toBeDefined();
  expect(data.skills).toBeArray();
  expect(data.projects).toBeDefined();
});

// اختبار التحقق من النموذج
test('validateForm should catch missing required fields', () => {
  const result = validateForm({});
  expect(result.isValid).toBe(false);
  expect(result.errors.length).toBeGreaterThan(0);
});

// اختبار التصفية
test('filterProjects should filter by category', () => {
  const projects = [
    {id: 1, category: 'translation'},
    {id: 2, category: 'ai'},
    {id: 3, category: 'translation'}
  ];
  const filtered = filterProjects(projects, 'translation', '');
  expect(filtered.length).toBe(2);
});
```

### 8.2 اختبارات التكامل (Integration Tests)

```javascript
// اختبار حفظ واسترجاع البيانات
test('Save and retrieve project data', async () => {
  const projectData = {
    id: 1,
    title: 'Test Project',
    titleAr: 'مشروع اختبار',
    category: 'ai'
  };
  
  await saveProjectData(projectData);
  const retrieved = getProjectById(1);
  
  expect(retrieved.title).toBe('Test Project');
  expect(retrieved.titleAr).toBe('مشروع اختبار');
});
```

### 8.3 اختبارات الخصائص (Property-Based Tests)

```javascript
// اختبار أن التصفية لا تفقد البيانات
property('filterProjects should not lose data', (projects, category) => {
  const filtered = filterProjects(projects, category, '');
  return filtered.every(p => projects.includes(p));
});

// اختبار أن تبديل اللغة قابل للعكس
property('Language switch should be reversible', (language) => {
  switchLanguage(language);
  const current = getCurrentLanguage();
  return current === language;
});
```

## 9. اعتبارات الأداء

- **تحميل الصور**: استخدام lazy loading للصور
- **تخزين البيانات**: استخدام LocalStorage للبيانات المتكررة
- **الرسوم المتحركة**: استخدام CSS animations بدلاً من JavaScript
- **حجم الملفات**: ضغط الصور والملفات
- **التخزين المؤقت**: استخدام browser caching

## 10. اعتبارات الأمان

- **التحقق من المدخلات**: التحقق من جميع مدخلات المستخدم
- **تسجيل الدخول**: استخدام كلمة مرور قوية وتشفير
- **CORS**: تكوين CORS بشكل صحيح
- **XSS Protection**: تنظيف جميع المدخلات
- **CSRF Protection**: استخدام tokens للنماذج

## 11. الاعتماديات والمكتبات

- **Font Awesome**: للأيقونات
- **Google Fonts**: للخطوط (Inter, Cairo)
- **Mermaid**: للرسوم البيانية (اختياري)
- **Chart.js**: لرسوم بيانية متقدمة (اختياري)
- **Axios**: لطلبات HTTP (اختياري)

## 12. خطة التطوير المستقبلية

- [ ] إضافة نظام تعليقات العملاء
- [ ] نظام إدارة المشاريع المتقدم
- [ ] تحليلات الزوار
- [ ] نظام الفواتير والدفع
- [ ] تطبيق موبايل
- [ ] نظام CMS متقدم
