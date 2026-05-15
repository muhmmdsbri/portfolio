# Skills & Certificates Management Guide

## Overview
This guide explains how to manage your portfolio's skills and certificates sections. Both sections are **data-driven**, meaning you can add, remove, or edit them by modifying the `data/portfolio-data.json` file.

---

## Skills Section

### What Are Skills?
Skills are the main services/expertise areas you offer. Each skill:
- Has an icon (emoji)
- Has a title in English and Arabic
- Has a description in English and Arabic
- Has a color for visual styling
- Links to related projects

### Current Skills (6 Total)
1. **Professional Translation** 🌐 - Arabic ↔ English ↔ Urdu
2. **Graphic Design & UI/UX** 🎨 - Logos, thumbnails, social media graphics
3. **Programming & Development** 💻 - Full-stack web development
4. **AI & Automation** 🤖 - ChatGPT, Claude, Google AI tools
5. **Digital Marketing** 📊 - Facebook Ads, Google Ads, Media Buying
6. **Business Systems** 💼 - POS systems, inventory management

### How to Add a New Skill

1. Open `data/portfolio-data.json`
2. Find the `"skills"` array (around line 100)
3. Add a new skill object:

```json
{
  "id": "skill-id",
  "icon": "🎯",
  "title": "Skill Name in English",
  "titleAr": "اسم المهارة بالعربية",
  "description": "Description in English",
  "descriptionAr": "الوصف بالعربية",
  "color": "#0EA5E9"
}
```

**Important**: The `id` must match a category in the projects section (translation, ai, marketing, systems, design, or create a new one).

### How to Edit a Skill

1. Open `data/portfolio-data.json`
2. Find the skill in the `"skills"` array
3. Edit the fields:
   - `title` - English name
   - `titleAr` - Arabic name
   - `description` - English description
   - `descriptionAr` - Arabic description
   - `icon` - Emoji icon
   - `color` - Hex color code

### How to Remove a Skill

1. Open `data/portfolio-data.json`
2. Find the skill in the `"skills"` array
3. Delete the entire skill object
4. Save the file

### Color Reference
- Blue: `#0EA5E9`
- Pink: `#EC4899`
- Blue: `#3B82F6`
- Cyan: `#06B6D4`
- Cyan: `#00D9FF`
- Blue: `#0284C7`

---

## Certificates Section

### What Are Certificates?
Certificates include:
- **Education**: Your degree(s)
- **Certifications**: Professional certificates and training

### Current Certificates

**Education**:
- Bachelor's Degree - Islamic Studies, Foreign Languages (Urdu Specialization)
- Al-Azhar University - Faculty of Languages and Translation (2022)

**Certifications**:
1. 1 Million Prompters - AI Prompting Expert (2024)
2. AI Tools & Applications Certification (2024)
3. Digital Marketing & Media Buying (2023)

### How to Add Education

1. Open `data/portfolio-data.json`
2. Find the `"education"` array (around line 30)
3. Add a new education object:

```json
{
  "degree": "Degree Name in English",
  "degreeAr": "اسم الدرجة بالعربية",
  "institution": "University Name in English",
  "institutionAr": "اسم الجامعة بالعربية",
  "year": "2024",
  "grade": "Grade or GPA",
  "cert": ""
}
```

### How to Add a Certificate

1. Open `data/portfolio-data.json`
2. Find the `"certificates"` array (around line 45)
3. Add a new certificate object:

```json
{
  "title": "Certificate Name in English",
  "titleAr": "اسم الشهادة بالعربية",
  "issuer": "Issuing Organization in English",
  "issuerAr": "اسم الجهة المصدرة بالعربية",
  "year": "2024",
  "cert": ""
}
```

### How to Edit Education/Certificates

1. Open `data/portfolio-data.json`
2. Find the item in `"education"` or `"certificates"` array
3. Edit the fields:
   - `degree` / `title` - Name in English
   - `degreeAr` / `titleAr` - Name in Arabic
   - `institution` / `issuer` - Organization in English
   - `institutionAr` / `issuerAr` - Organization in Arabic
   - `year` - Year obtained
   - `grade` - Grade/GPA (optional)

### How to Remove Education/Certificates

1. Open `data/portfolio-data.json`
2. Find the item in `"education"` or `"certificates"` array
3. Delete the entire object
4. Save the file

---

## Linking Skills to Projects

When you click on a skill, a modal opens showing related projects. Projects are linked to skills by their **category ID**.

### Skill-to-Project Mapping

| Skill ID | Projects Category |
|----------|------------------|
| translation | translation |
| ai | ai |
| marketing | marketing |
| systems | systems |
| design | design |

To add projects to a skill:
1. Add projects to the corresponding category in `"projects"` section
2. The skill modal will automatically show those projects

---

## Testing Your Changes

1. **Save the JSON file** after making changes
2. **Refresh your browser** (F5 or Ctrl+R)
3. **Check the browser console** (F12) for any errors
4. **Verify the changes appear** on the page

### Troubleshooting

**Skills not showing?**
- Check browser console (F12) for errors
- Verify JSON syntax is correct (use a JSON validator)
- Make sure `skillsGrid` element exists in HTML
- Check that skills array is not empty

**Certificates not showing?**
- Check browser console for errors
- Verify JSON syntax
- Make sure `certCards` element exists in HTML

**Language toggle not working?**
- Verify both English and Arabic text are filled in
- Check that field names match (e.g., `titleAr`, `degreeAr`)

---

## JSON File Structure

```json
{
  "education": [
    { "degree": "...", "degreeAr": "...", ... }
  ],
  "certificates": [
    { "title": "...", "titleAr": "...", ... }
  ],
  "skills": [
    { "id": "...", "icon": "...", "title": "...", "titleAr": "...", ... }
  ],
  "projects": {
    "translation": [ { ... } ],
    "ai": [ { ... } ],
    "marketing": [ { ... } ],
    "systems": [ { ... } ],
    "design": [ { ... } ]
  }
}
```

---

## Quick Reference

### Add a Skill
1. Open `data/portfolio-data.json`
2. Find `"skills"` array
3. Add new skill object with: id, icon, title, titleAr, description, descriptionAr, color
4. Save and refresh browser

### Add a Certificate
1. Open `data/portfolio-data.json`
2. Find `"certificates"` array
3. Add new certificate object with: title, titleAr, issuer, issuerAr, year
4. Save and refresh browser

### Add Education
1. Open `data/portfolio-data.json`
2. Find `"education"` array
3. Add new education object with: degree, degreeAr, institution, institutionAr, year, grade
4. Save and refresh browser

### Edit Any Item
1. Open `data/portfolio-data.json`
2. Find the item
3. Edit the fields
4. Save and refresh browser

### Remove Any Item
1. Open `data/portfolio-data.json`
2. Find the item
3. Delete the entire object
4. Save and refresh browser

---

## Need Help?

If you encounter issues:
1. Check the browser console (F12) for error messages
2. Validate your JSON syntax at https://jsonlint.com/
3. Make sure all required fields are filled in
4. Ensure Arabic text is properly encoded (UTF-8)
5. Refresh the browser after saving changes

---

**Last Updated**: 2024
**Portfolio Version**: 2.0 (Dark Theme)
