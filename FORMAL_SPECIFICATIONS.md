# المواصفات الرسمية والخوارزميات

## 1. المواصفات الرسمية للدوال الرئيسية

### 1.1 دالة loadPortfolioData()

**الغرض**: تحميل بيانات البورتفليو من التخزين المحلي أو ملف JSON

**التوقيع**:
```javascript
function loadPortfolioData(): Promise<PortfolioData>
```

**الشروط المسبقة**:
- ملف `portfolio-data.json` موجود في مجلد `data/`
- المتصفح يدعم LocalStorage
- الاتصال بالإنترنت متاح (للتحميل الأول)

**الشروط اللاحقة**:
- تُرجع كائن PortfolioData صحيح
- البيانات محفوظة في LocalStorage
- جميع الحقول المطلوبة موجودة
- لا توجد آثار جانبية على البيانات الأخرى

**متغيرات الحلقة**: N/A

**الأخطاء المحتملة**:
- فشل تحميل الملف: إرجاع بيانات افتراضية
- LocalStorage ممتلئ: حذف البيانات القديمة
- بيانات تالفة: إرجاع بيانات افتراضية

### 1.2 دالة saveProjectData()

**الغرض**: حفظ بيانات مشروع جديد أو معدل

**التوقيع**:
```javascript
function saveProjectData(
  projectData: ProjectData,
  category: string
): Promise<{success: boolean, message: string, projectId?: number}>
```

**الشروط المسبقة**:
- `projectData` كائن صحيح مع جميع الحقول المطلوبة
- `projectData.title` و `projectData.titleAr` غير فارغة
- `projectData.title.length <= 200`
- `projectData.description.length <= 2000`
- `category` من الفئات المعرفة: ['translation', 'ai', 'marketing', 'systems', 'design']
- إذا كان تعديل: `projectData.id` موجود في النظام

**الشروط اللاحقة**:
- إذا نجح: المشروع محفوظ في LocalStorage و JSON
- إذا كان جديد: يُعطى معرف فريد
- إذا كان تعديل: المشروع الأصلي يُستبدل
- رسالة نجاح واضحة مع معرف المشروع
- إذا فشل: رسالة خطأ واضحة مع السبب

**متغيرات الحلقة**: N/A

**الأخطاء المحتملة**:
- بيانات ناقصة: إرجاع خطأ مع الحقول الناقصة
- معرف مكرر: إرجاع خطأ
- فشل الحفظ: إرجاع خطأ مع التفاصيل

### 1.3 دالة deleteProject()

**الغرض**: حذف مشروع من النظام

**التوقيع**:
```javascript
function deleteProject(
  projectId: number,
  category: string
): Promise<{success: boolean, message: string}>
```

**الشروط المسبقة**:
- `projectId` موجود في الفئة المحددة
- `category` من الفئات المعرفة
- المستخدم مصرح (Admin)

**الشروط اللاحقة**:
- المشروع محذوف من جميع مصادر البيانات
- لا يمكن استرجاع المشروع (عملية نهائية)
- جميع المشاريع الأخرى تبقى دون تأثر
- رسالة تأكيد الحذف

**متغيرات الحلقة**: N/A

**الأخطاء المحتملة**:
- المشروع غير موجود: إرجاع خطأ
- فشل الحذف: إرجاع خطأ مع التفاصيل

### 1.4 دالة filterProjects()

**الغرض**: تصفية المشاريع حسب الفئة والبحث

**التوقيع**:
```javascript
function filterProjects(
  projects: ProjectData[],
  category: string,
  searchTerm: string
): ProjectData[]
```

**الشروط المسبقة**:
- `projects` مصفوفة صحيحة (قد تكون فارغة)
- `category` من الفئات المعرفة أو 'all'
- `searchTerm` نص (قد يكون فارغ)

**الشروط اللاحقة**:
- تُرجع مصفوفة من المشاريع المطابقة
- جميع المشاريع المرجعة تطابق المعايير
- ترتيب المشاريع محفوظ
- لا توجد آثار جانبية على المصفوفة الأصلية

**متغيرات الحلقة**:
- جميع المشاريع المعالجة سابقاً تطابق المعايير
- حالة التصفية تبقى متسقة

**الأخطاء المحتملة**:
- مصفوفة فارغة: إرجاع مصفوفة فارغة
- بحث غير صحيح: إرجاع مصفوفة فارغة

### 1.5 دالة switchLanguage()

**الغرض**: تبديل لغة الموقع

**التوقيع**:
```javascript
function switchLanguage(targetLanguage: 'en' | 'ar'): void
```

**الشروط المسبقة**:
- `targetLanguage` إما 'en' أو 'ar'
- جميع العناصر لها خاصية `data-i18n`
- ملف الترجمات محمل

**الشروط اللاحقة**:
- اللغة الحالية تُحدث
- اتجاه الصفحة يتغير (RTL/LTR)
- جميع النصوص تُحدث
- الإعدادات محفوظة في LocalStorage
- الصفحة تُعاد تحميل إذا لزم الأمر

**متغيرات الحلقة**:
- جميع العناصر المعالجة سابقاً تُحدث بشكل صحيح

**الأخطاء المحتملة**:
- لغة غير صحيحة: تجاهل التغيير
- ملف ترجمات مفقود: استخدام اللغة الافتراضية

### 1.6 دالة validateForm()

**الغرض**: التحقق من صحة بيانات النموذج

**التوقيع**:
```javascript
function validateForm(
  formData: FormData,
  rules: ValidationRules
): {isValid: boolean, errors: ValidationError[]}
```

**الشروط المسبقة**:
- `formData` كائن صحيح
- `rules` تحتوي على قواعد التحقق

**الشروط اللاحقة**:
- تُرجع كائن بحالة الصحة والأخطاء
- جميع الأخطاء موثقة بوضوح
- لا توجد آثار جانبية على البيانات

**متغيرات الحلقة**:
- جميع الحقول المعالجة سابقاً تُتحقق بشكل صحيح

**الأخطاء المحتملة**:
- حقول ناقصة: إضافة إلى قائمة الأخطاء
- صيغ غير صحيحة: إضافة إلى قائمة الأخطاء

### 1.7 دالة renderProjects()

**الغرض**: عرض المشاريع في الصفحة

**التوقيع**:
```javascript
function renderProjects(
  projects: ProjectData[],
  container: HTMLElement,
  options?: RenderOptions
): void
```

**الشروط المسبقة**:
- `projects` مصفوفة صحيحة (قد تكون فارغة)
- `container` عنصر DOM صحيح وموجود
- CSS styles محملة

**الشروط اللاحقة**:
- جميع المشاريع معروضة بشكل صحيح
- الأنماط والرسوم المتحركة مطبقة
- الروابط والأزرار تعمل بشكل صحيح
- الصور تحمل بشكل كسول (lazy loading)

**متغيرات الحلقة**:
- جميع المشاريع المعالجة سابقاً معروضة بشكل صحيح
- حالة العرض تبقى متسقة

**الأخطاء المحتملة**:
- مصفوفة فارغة: عرض رسالة "لا توجد مشاريع"
- صور مفقودة: عرض صورة افتراضية

## 2. الخوارزميات التفصيلية

### 2.1 خوارزمية تحميل البيانات الكاملة

```
ALGORITHM loadPortfolioData()
INPUT: None
OUTPUT: portfolioData (Object)

BEGIN
  // الخطوة 1: محاولة تحميل من LocalStorage
  IF localStorage.hasItem('portfolioData') THEN
    cachedData ← localStorage.getItem('portfolioData')
    
    // التحقق من صحة البيانات المخزنة
    IF isValidData(cachedData) THEN
      RETURN parseJSON(cachedData)
    END IF
  END IF
  
  // الخطوة 2: تحميل من ملف JSON
  TRY
    response ← fetch('data/portfolio-data.json')
    
    IF response.status ≠ 200 THEN
      THROW new Error("Failed to load portfolio data")
    END IF
    
    data ← response.json()
    
    // الخطوة 3: التحقق من صحة البيانات
    IF NOT isValidData(data) THEN
      THROW new Error("Invalid data structure")
    END IF
    
    // الخطوة 4: حفظ في LocalStorage
    TRY
      localStorage.setItem('portfolioData', stringifyJSON(data))
    CATCH StorageQuotaExceededError
      // حذف البيانات القديمة وحاول مرة أخرى
      localStorage.clear()
      localStorage.setItem('portfolioData', stringifyJSON(data))
    END TRY
    
    RETURN data
    
  CATCH error
    // الخطوة 5: استخدام بيانات افتراضية
    console.error("Error loading portfolio data:", error)
    RETURN getDefaultPortfolioData()
  END TRY
END
```

**التعقيد الزمني**: O(n) حيث n = حجم البيانات
**التعقيد المكاني**: O(n) للتخزين المؤقت

### 2.2 خوارزمية البحث والتصفية المتقدمة

```
ALGORITHM advancedFilterProjects(
  projects: Array,
  filters: Object
): Array

INPUT:
  projects: مصفوفة المشاريع
  filters: {
    category: String,
    searchTerm: String,
    tags: Array,
    sortBy: String,
    limit: Number
  }

OUTPUT: filteredProjects (Array)

BEGIN
  result ← empty Array
  
  // الخطوة 1: التصفية حسب الفئة
  FOR EACH project IN projects DO
    IF filters.category ≠ 'all' AND project.category ≠ filters.category THEN
      CONTINUE
    END IF
    
    // الخطوة 2: البحث في النص
    IF filters.searchTerm ≠ '' THEN
      searchLower ← filters.searchTerm.toLowerCase()
      
      IF NOT (project.title.toLowerCase().contains(searchLower) OR
              project.description.toLowerCase().contains(searchLower)) THEN
        CONTINUE
      END IF
    END IF
    
    // الخطوة 3: التصفية حسب الوسوم
    IF filters.tags.length > 0 THEN
      hasAllTags ← true
      
      FOR EACH tag IN filters.tags DO
        IF NOT project.tags.contains(tag) THEN
          hasAllTags ← false
          BREAK
        END IF
      END FOR
      
      IF NOT hasAllTags THEN
        CONTINUE
      END IF
    END IF
    
    result.add(project)
  END FOR
  
  // الخطوة 4: الترتيب
  IF filters.sortBy = 'date' THEN
    result.sort((a, b) => b.createdAt - a.createdAt)
  ELSE IF filters.sortBy = 'title' THEN
    result.sort((a, b) => a.title.localeCompare(b.title))
  END IF
  
  // الخطوة 5: تطبيق الحد الأقصى
  IF filters.limit > 0 AND result.length > filters.limit THEN
    result ← result.slice(0, filters.limit)
  END IF
  
  RETURN result
END
```

**التعقيد الزمني**: O(n * m) حيث n = عدد المشاريع، m = عدد الوسوم
**التعقيد المكاني**: O(n) للنتيجة

### 2.3 خوارزمية تبديل اللغة مع التحديث الديناميكي

```
ALGORITHM switchLanguageWithUpdate(targetLanguage: String): void

INPUT: targetLanguage ('en' or 'ar')
OUTPUT: None (Side effects: DOM update, storage update)

PRECONDITION:
  - targetLanguage ∈ {'en', 'ar'}
  - translations object loaded
  - All elements have data-i18n attributes

BEGIN
  // الخطوة 1: التحقق من صحة اللغة
  IF targetLanguage ∉ {'en', 'ar'} THEN
    console.error("Invalid language: " + targetLanguage)
    RETURN
  END IF
  
  // الخطوة 2: تحديث اللغة الحالية
  currentLanguage ← targetLanguage
  localStorage.setItem('language', targetLanguage)
  
  // الخطوة 3: تحديث اتجاه الصفحة
  IF targetLanguage = 'ar' THEN
    document.documentElement.dir ← 'rtl'
    document.documentElement.lang ← 'ar'
    document.body.classList.add('rtl')
    document.body.classList.remove('ltr')
  ELSE
    document.documentElement.dir ← 'ltr'
    document.documentElement.lang ← 'en'
    document.body.classList.add('ltr')
    document.body.classList.remove('rtl')
  END IF
  
  // الخطوة 4: تحديث جميع النصوص
  elements ← document.querySelectorAll('[data-i18n]')
  
  FOR EACH element IN elements DO
    key ← element.getAttribute('data-i18n')
    
    IF translations[targetLanguage][key] EXISTS THEN
      element.textContent ← translations[targetLanguage][key]
    ELSE
      console.warn("Missing translation for key: " + key)
    END IF
  END FOR
  
  // الخطوة 5: تحديث الأنماط إذا لزم الأمر
  updateStylesForLanguage(targetLanguage)
  
  // الخطوة 6: إطلاق حدث مخصص
  event ← new CustomEvent('languageChanged', {detail: {language: targetLanguage}})
  document.dispatchEvent(event)
  
  // الخطوة 7: تحديث البيانات المعروضة
  reloadCurrentPage()
END
```

**التعقيد الزمني**: O(n) حيث n = عدد العناصر في الصفحة
**التعقيد المكاني**: O(1)

### 2.4 خوارزمية التحقق من صحة النموذج الشاملة

```
ALGORITHM comprehensiveFormValidation(
  formData: Object,
  validationRules: Object
): ValidationResult

INPUT:
  formData: بيانات النموذج
  validationRules: قواعد التحقق

OUTPUT: {isValid: Boolean, errors: Array, warnings: Array}

BEGIN
  errors ← empty Array
  warnings ← empty Array
  
  // الخطوة 1: التحقق من الحقول المطلوبة
  FOR EACH field IN validationRules.required DO
    IF formData[field] = empty OR formData[field] = null THEN
      errors.add({
        field: field,
        message: field + " is required",
        severity: "error"
      })
    END IF
  END FOR
  
  // الخطوة 2: التحقق من صيغ البريد الإلكتروني
  IF formData.email ≠ empty THEN
    IF NOT isValidEmail(formData.email) THEN
      errors.add({
        field: "email",
        message: "Invalid email format",
        severity: "error"
      })
    END IF
  END IF
  
  // الخطوة 3: التحقق من صيغ الهاتف
  IF formData.phone ≠ empty THEN
    IF NOT isValidPhone(formData.phone) THEN
      errors.add({
        field: "phone",
        message: "Invalid phone format",
        severity: "error"
      })
    END IF
  END IF
  
  // الخطوة 4: التحقق من طول النصوص
  FOR EACH field IN validationRules.maxLength DO
    maxLen ← validationRules.maxLength[field]
    
    IF length(formData[field]) > maxLen THEN
      errors.add({
        field: field,
        message: field + " must be less than " + maxLen + " characters",
        severity: "error"
      })
    END IF
  END FOR
  
  // الخطوة 5: التحقق من الحد الأدنى للطول
  FOR EACH field IN validationRules.minLength DO
    minLen ← validationRules.minLength[field]
    
    IF length(formData[field]) < minLen THEN
      errors.add({
        field: field,
        message: field + " must be at least " + minLen + " characters",
        severity: "error"
      })
    END IF
  END FOR
  
  // الخطوة 6: التحقق من الأنماط (Regex)
  FOR EACH field IN validationRules.pattern DO
    pattern ← validationRules.pattern[field]
    
    IF NOT pattern.test(formData[field]) THEN
      errors.add({
        field: field,
        message: "Invalid format for " + field,
        severity: "error"
      })
    END IF
  END FOR
  
  // الخطوة 7: التحقق المخصص
  FOR EACH field IN validationRules.custom DO
    customValidator ← validationRules.custom[field]
    result ← customValidator(formData[field], formData)
    
    IF result.isValid = false THEN
      errors.add({
        field: field,
        message: result.message,
        severity: result.severity
      })
    END IF
  END FOR
  
  // الخطوة 8: التحقق من التحذيرات
  FOR EACH field IN validationRules.warnings DO
    warningValidator ← validationRules.warnings[field]
    result ← warningValidator(formData[field], formData)
    
    IF result.hasWarning = true THEN
      warnings.add({
        field: field,
        message: result.message
      })
    END IF
  END FOR
  
  RETURN {
    isValid: length(errors) = 0,
    errors: errors,
    warnings: warnings
  }
END
```

**التعقيد الزمني**: O(n * m) حيث n = عدد الحقول، m = عدد القواعد
**التعقيد المكاني**: O(k) حيث k = عدد الأخطاء

## 3. معايير الأداء والتحسينات

### 3.1 تحسينات الأداء

| التحسين | الفائدة | التعقيد |
|---------|--------|--------|
| Lazy Loading للصور | تقليل وقت التحميل الأولي | O(1) |
| LocalStorage Caching | تقليل طلبات الشبكة | O(n) |
| CSS Animations | أداء أفضل من JS | O(1) |
| Debouncing للبحث | تقليل عمليات المعالجة | O(1) |
| Pagination | تقليل عدد العناصر المعروضة | O(n) |

### 3.2 استراتيجيات التخزين المؤقت

```javascript
// استراتيجية التخزين المؤقت متعددة المستويات
CACHE_STRATEGY = {
  // المستوى 1: Memory Cache (سريع جداً)
  memory: {
    ttl: 5 * 60 * 1000,  // 5 دقائق
    maxSize: 10 * 1024 * 1024  // 10 MB
  },
  
  // المستوى 2: LocalStorage (سريع)
  localStorage: {
    ttl: 24 * 60 * 60 * 1000,  // 24 ساعة
    maxSize: 5 * 1024 * 1024  // 5 MB
  },
  
  // المستوى 3: IndexedDB (بطيء نسبياً)
  indexedDB: {
    ttl: 7 * 24 * 60 * 60 * 1000,  // 7 أيام
    maxSize: 50 * 1024 * 1024  // 50 MB
  }
}
```

## 4. معايير الأمان

### 4.1 التحقق من المدخلات

```javascript
VALIDATION_RULES = {
  // التحقق من الحقول المطلوبة
  required: ['title', 'titleAr', 'category', 'description'],
  
  // الحد الأقصى للطول
  maxLength: {
    title: 200,
    titleAr: 200,
    description: 2000,
    descriptionAr: 2000
  },
  
  // الحد الأدنى للطول
  minLength: {
    title: 3,
    titleAr: 3,
    description: 10,
    descriptionAr: 10
  },
  
  // الأنماط (Regex)
  pattern: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[0-9\-\+\(\)\s]+$/,
    url: /^https?:\/\/.+/
  }
}
```

### 4.2 تنظيف المدخلات

```javascript
SANITIZATION_RULES = {
  // إزالة الوسوم الخطرة
  stripTags: true,
  
  // تحويل الأحرف الخاصة
  escapeHtml: true,
  
  // إزالة المسافات الزائدة
  trim: true,
  
  // تحويل إلى أحرف صغيرة (للبريد الإلكتروني)
  toLowerCase: ['email']
}
```

## 5. معايير الاختبار

### 5.1 تغطية الاختبارات

| النوع | الهدف | الحد الأدنى |
|------|-------|-----------|
| Unit Tests | 80% | 70% |
| Integration Tests | 60% | 50% |
| E2E Tests | 40% | 30% |
| Performance Tests | 100% | 100% |

### 5.2 حالات الاختبار الحرجة

```javascript
CRITICAL_TEST_CASES = [
  // اختبارات البيانات الفارغة
  {name: "Empty data", input: {}, expected: "error"},
  
  // اختبارات البيانات الكبيرة
  {name: "Large dataset", input: largeDataset, expected: "success"},
  
  // اختبارات الأحرف الخاصة
  {name: "Special characters", input: "Test<>\"'", expected: "sanitized"},
  
  // اختبارات اللغات المختلفة
  {name: "Arabic text", input: "اختبار", expected: "success"},
  {name: "Urdu text", input: "ٹیسٹ", expected: "success"},
  
  // اختبارات الأداء
  {name: "Performance", input: largeDataset, expected: "< 1 second"},
  
  // اختبارات الأمان
  {name: "XSS attack", input: "<script>alert('xss')</script>", expected: "blocked"},
  {name: "SQL injection", input: "'; DROP TABLE--", expected: "blocked"}
]
```
