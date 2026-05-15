# توثيق API والدوال

## 1. دوال إدارة البيانات

### 1.1 loadPortfolioData()

**الوصف**: تحميل بيانات البورتفليو من التخزين المحلي أو ملف JSON

```javascript
/**
 * تحميل بيانات البورتفليو
 * @returns {Promise<Object>} بيانات البورتفليو
 * @throws {Error} إذا فشل التحميل
 */
async function loadPortfolioData() {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const data = await loadPortfolioData();
console.log(data.personal.name); // "Mohamed Sabry"
```

**الأخطاء المحتملة**:
- `NetworkError`: فشل تحميل الملف
- `JSONError`: بيانات تالفة
- `StorageError`: مشكلة في LocalStorage

---

### 1.2 saveProjectData()

**الوصف**: حفظ بيانات مشروع جديد أو معدل

```javascript
/**
 * حفظ بيانات المشروع
 * @param {Object} projectData - بيانات المشروع
 * @param {string} category - فئة المشروع
 * @returns {Promise<Object>} {success, message, projectId}
 */
async function saveProjectData(projectData, category) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const result = await saveProjectData({
  title: "Legal Translation",
  titleAr: "ترجمة قانونية",
  description: "Translated legal documents...",
  descriptionAr: "ترجمة وثائق قانونية...",
  tags: ["Arabic", "English", "Legal"]
}, 'translation');

if (result.success) {
  console.log("Project saved with ID:", result.projectId);
}
```

**الشروط المسبقة**:
- `projectData.title` و `projectData.titleAr` غير فارغة
- `category` من الفئات المعرفة
- `projectData.title.length <= 200`

**الشروط اللاحقة**:
- المشروع محفوظ في LocalStorage و JSON
- معرف فريد معطى للمشروع الجديد

---

### 1.3 deleteProject()

**الوصف**: حذف مشروع من النظام

```javascript
/**
 * حذف مشروع
 * @param {number} projectId - معرف المشروع
 * @param {string} category - فئة المشروع
 * @returns {Promise<Object>} {success, message}
 */
async function deleteProject(projectId, category) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const result = await deleteProject(1, 'translation');
if (result.success) {
  console.log("Project deleted successfully");
}
```

**ملاحظة**: هذه عملية نهائية ولا يمكن استرجاع البيانات

---

### 1.4 getProjectById()

**الوصف**: الحصول على مشروع محدد

```javascript
/**
 * الحصول على مشروع بمعرفه
 * @param {number} projectId - معرف المشروع
 * @returns {Object|null} بيانات المشروع أو null
 */
function getProjectById(projectId) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const project = getProjectById(1);
if (project) {
  console.log(project.title);
}
```

---

### 1.5 getAllProjects()

**الوصف**: الحصول على جميع المشاريع

```javascript
/**
 * الحصول على جميع المشاريع
 * @param {string} category - فئة محددة أو 'all'
 * @returns {Array} مصفوفة المشاريع
 */
function getAllProjects(category = 'all') {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const allProjects = getAllProjects();
const translationProjects = getAllProjects('translation');
```

---

## 2. دوال البحث والتصفية

### 2.1 filterProjects()

**الوصف**: تصفية المشاريع حسب معايير محددة

```javascript
/**
 * تصفية المشاريع
 * @param {Array} projects - مصفوفة المشاريع
 * @param {Object} filters - معايير التصفية
 * @returns {Array} المشاريع المصفاة
 */
function filterProjects(projects, filters) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const filtered = filterProjects(allProjects, {
  category: 'translation',
  searchTerm: 'legal',
  tags: ['Arabic', 'English'],
  sortBy: 'date',
  limit: 10
});
```

**معايير التصفية**:
- `category`: فئة المشروع
- `searchTerm`: نص البحث
- `tags`: الوسوم المطلوبة
- `sortBy`: ترتيب النتائج (date, title)
- `limit`: الحد الأقصى للنتائج

---

### 2.2 searchProjects()

**الوصف**: البحث عن مشاريع

```javascript
/**
 * البحث عن مشاريع
 * @param {string} searchTerm - نص البحث
 * @returns {Array} المشاريع المطابقة
 */
function searchProjects(searchTerm) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const results = searchProjects('translation');
```

---

## 3. دوال إدارة اللغات

### 3.1 switchLanguage()

**الوصف**: تبديل لغة الموقع

```javascript
/**
 * تبديل اللغة
 * @param {string} language - اللغة ('en' أو 'ar')
 * @returns {void}
 */
function switchLanguage(language) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
switchLanguage('ar'); // تبديل إلى العربية
switchLanguage('en'); // تبديل إلى الإنجليزية
```

**الآثار الجانبية**:
- تحديث اتجاه الصفحة (RTL/LTR)
- تحديث جميع النصوص
- حفظ الاختيار في LocalStorage

---

### 3.2 getCurrentLanguage()

**الوصف**: الحصول على اللغة الحالية

```javascript
/**
 * الحصول على اللغة الحالية
 * @returns {string} اللغة الحالية ('en' أو 'ar')
 */
function getCurrentLanguage() {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const lang = getCurrentLanguage();
console.log(lang); // "ar" أو "en"
```

---

### 3.3 getTranslation()

**الوصف**: الحصول على ترجمة نص

```javascript
/**
 * الحصول على ترجمة
 * @param {string} key - مفتاح الترجمة
 * @param {string} language - اللغة (اختياري)
 * @returns {string} النص المترجم
 */
function getTranslation(key, language) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const text = getTranslation('hero.title', 'ar');
console.log(text); // "مرحباً، أنا محمد صبري"
```

---

## 4. دوال التحقق والتحقق من الصحة

### 4.1 validateForm()

**الوصف**: التحقق من صحة بيانات النموذج

```javascript
/**
 * التحقق من صحة النموذج
 * @param {Object} formData - بيانات النموذج
 * @param {Object} rules - قواعد التحقق
 * @returns {Object} {isValid, errors, warnings}
 */
function validateForm(formData, rules) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const result = validateForm(
  {
    title: "Test Project",
    titleAr: "مشروع اختبار",
    category: "ai"
  },
  {
    required: ['title', 'titleAr', 'category'],
    maxLength: { title: 200, titleAr: 200 }
  }
);

if (result.isValid) {
  console.log("Form is valid");
} else {
  console.log("Errors:", result.errors);
}
```

---

### 4.2 validateEmail()

**الوصف**: التحقق من صحة البريد الإلكتروني

```javascript
/**
 * التحقق من صحة البريد الإلكتروني
 * @param {string} email - البريد الإلكتروني
 * @returns {boolean} صحيح أم لا
 */
function validateEmail(email) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
if (validateEmail('test@example.com')) {
  console.log("Valid email");
}
```

---

### 4.3 validatePhone()

**الوصف**: التحقق من صحة رقم الهاتف

```javascript
/**
 * التحقق من صحة رقم الهاتف
 * @param {string} phone - رقم الهاتف
 * @returns {boolean} صحيح أم لا
 */
function validatePhone(phone) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
if (validatePhone('01026972512')) {
  console.log("Valid phone");
}
```

---

## 5. دوال العرض والتصيير

### 5.1 renderProjects()

**الوصف**: عرض المشاريع في الصفحة

```javascript
/**
 * عرض المشاريع
 * @param {Array} projects - مصفوفة المشاريع
 * @param {HTMLElement} container - عنصر الحاوية
 * @param {Object} options - خيارات العرض
 * @returns {void}
 */
function renderProjects(projects, container, options = {}) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const container = document.getElementById('projects-grid');
renderProjects(filteredProjects, container, {
  columns: 3,
  showImage: true,
  showTags: true
});
```

---

### 5.2 renderSkills()

**الوصف**: عرض المهارات

```javascript
/**
 * عرض المهارات
 * @param {Array} skills - مصفوفة المهارات
 * @param {HTMLElement} container - عنصر الحاوية
 * @returns {void}
 */
function renderSkills(skills, container) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const container = document.getElementById('skills-grid');
renderSkills(portfolioData.skills, container);
```

---

### 5.3 renderPricing()

**الوصف**: عرض الأسعار

```javascript
/**
 * عرض الأسعار
 * @param {Array} pricing - مصفوفة الأسعار
 * @param {HTMLElement} container - عنصر الحاوية
 * @returns {void}
 */
function renderPricing(pricing, container) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const container = document.getElementById('pricing-grid');
renderPricing(portfolioData.pricing, container);
```

---

## 6. دوال التصدير والاستيراد

### 6.1 exportData()

**الوصف**: تصدير البيانات إلى ملف JSON

```javascript
/**
 * تصدير البيانات
 * @param {Object} data - البيانات المراد تصديرها
 * @param {string} filename - اسم الملف
 * @returns {void}
 */
function exportData(data, filename = 'portfolio-data.json') {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
exportData(portfolioData, 'my-portfolio-backup.json');
```

---

### 6.2 importData()

**الوصف**: استيراد البيانات من ملف JSON

```javascript
/**
 * استيراد البيانات
 * @param {File} file - ملف JSON
 * @returns {Promise<Object>} البيانات المستوردة
 */
async function importData(file) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', async (e) => {
  const data = await importData(e.target.files[0]);
  console.log("Data imported:", data);
});
```

---

## 7. دوال الأداة المساعدة

### 7.1 debounce()

**الوصف**: تأخير تنفيذ دالة

```javascript
/**
 * تأخير تنفيذ دالة
 * @param {Function} func - الدالة
 * @param {number} delay - التأخير بالميلي ثانية
 * @returns {Function} دالة مؤخرة
 */
function debounce(func, delay) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const debouncedSearch = debounce((term) => {
  searchProjects(term);
}, 300);

searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
```

---

### 7.2 throttle()

**الوصف**: تحديد تكرار تنفيذ دالة

```javascript
/**
 * تحديد تكرار تنفيذ دالة
 * @param {Function} func - الدالة
 * @param {number} limit - الحد الأدنى للتأخير
 * @returns {Function} دالة محدودة
 */
function throttle(func, limit) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const throttledScroll = throttle(() => {
  updateScrollIndicator();
}, 100);

window.addEventListener('scroll', throttledScroll);
```

---

### 7.3 deepClone()

**الوصف**: نسخ عميق لكائن

```javascript
/**
 * نسخ عميق
 * @param {Object} obj - الكائن
 * @returns {Object} نسخة عميقة
 */
function deepClone(obj) {
  // التنفيذ
}
```

**الاستخدام**:
```javascript
const originalData = { name: "Test", nested: { value: 1 } };
const clonedData = deepClone(originalData);
clonedData.nested.value = 2;
console.log(originalData.nested.value); // 1 (لم يتغير)
```

---

## 8. أحداث مخصصة

### 8.1 languageChanged

**الوصف**: يُطلق عند تغيير اللغة

```javascript
document.addEventListener('languageChanged', (e) => {
  console.log("Language changed to:", e.detail.language);
});
```

---

### 8.2 projectSaved

**الوصف**: يُطلق عند حفظ مشروع

```javascript
document.addEventListener('projectSaved', (e) => {
  console.log("Project saved:", e.detail.projectId);
});
```

---

### 8.3 projectDeleted

**الوصف**: يُطلق عند حذف مشروع

```javascript
document.addEventListener('projectDeleted', (e) => {
  console.log("Project deleted:", e.detail.projectId);
});
```

---

## 9. معالجة الأخطاء

### 9.1 أنواع الأخطاء

```javascript
class PortfolioError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

class ValidationError extends PortfolioError {
  constructor(message) {
    super(message, 'VALIDATION_ERROR');
  }
}

class StorageError extends PortfolioError {
  constructor(message) {
    super(message, 'STORAGE_ERROR');
  }
}

class NetworkError extends PortfolioError {
  constructor(message) {
    super(message, 'NETWORK_ERROR');
  }
}
```

### 9.2 معالجة الأخطاء

```javascript
try {
  const data = await loadPortfolioData();
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation error:", error.message);
  } else if (error instanceof StorageError) {
    console.error("Storage error:", error.message);
  } else if (error instanceof NetworkError) {
    console.error("Network error:", error.message);
  } else {
    console.error("Unknown error:", error);
  }
}
```

---

## 10. أمثلة عملية

### 10.1 إضافة مشروع جديد

```javascript
async function addNewProject() {
  const projectData = {
    title: "New Translation Project",
    titleAr: "مشروع ترجمة جديد",
    description: "Translate documents from Arabic to English",
    descriptionAr: "ترجمة وثائق من العربية إلى الإنجليزية",
    tags: ["Arabic", "English", "Translation"]
  };
  
  try {
    const result = await saveProjectData(projectData, 'translation');
    if (result.success) {
      console.log("Project added with ID:", result.projectId);
      // تحديث الواجهة
      reloadProjects();
    }
  } catch (error) {
    console.error("Failed to add project:", error);
  }
}
```

### 10.2 البحث والتصفية

```javascript
function searchAndFilter() {
  const searchTerm = document.getElementById('search').value;
  const category = document.getElementById('category').value;
  
  const filtered = filterProjects(
    getAllProjects(),
    {
      category: category,
      searchTerm: searchTerm,
      sortBy: 'date'
    }
  );
  
  renderProjects(filtered, document.getElementById('results'));
}
```

### 10.3 تبديل اللغة

```javascript
function setupLanguageToggle() {
  const langToggle = document.getElementById('lang-toggle');
  
  langToggle.addEventListener('click', () => {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    switchLanguage(newLang);
  });
}
```

---

**آخر تحديث**: 2024
**الإصدار**: 1.0
