# Quick Edit Reference - Skills & Certificates

## 🚀 Quick Start

All changes are made in: **`data/portfolio-data.json`**

1. Open the file
2. Find the section you want to edit
3. Make changes
4. Save (Ctrl+S)
5. Refresh browser (F5)

---

## 📝 Add a Skill

Find `"skills"` array and add:

```json
{
  "id": "new-skill",
  "icon": "🎯",
  "title": "Skill Name",
  "titleAr": "اسم المهارة",
  "description": "What you do",
  "descriptionAr": "ما تفعله",
  "color": "#0EA5E9"
}
```

---

## 📝 Add a Certificate

Find `"certificates"` array and add:

```json
{
  "title": "Certificate Name",
  "titleAr": "اسم الشهادة",
  "issuer": "Organization",
  "issuerAr": "اسم الجهة",
  "year": "2024",
  "cert": ""
}
```

---

## 📝 Add Education

Find `"education"` array and add:

```json
{
  "degree": "Degree Name",
  "degreeAr": "اسم الدرجة",
  "institution": "University",
  "institutionAr": "اسم الجامعة",
  "year": "2024",
  "grade": "Grade",
  "cert": ""
}
```

---

## ✏️ Edit Any Item

1. Find the item in the array
2. Change the text
3. Save and refresh

---

## ❌ Delete Any Item

1. Find the item
2. Delete the entire `{ ... }` block
3. Save and refresh

---

## 🎨 Color Codes for Skills

```
#0EA5E9 - Blue
#EC4899 - Pink
#3B82F6 - Blue
#06B6D4 - Cyan
#00D9FF - Cyan
#0284C7 - Blue
```

---

## 🔗 Skill-to-Project Link

Skills automatically show projects from matching category:

| Skill ID | Shows Projects From |
|----------|-------------------|
| translation | projects.translation |
| ai | projects.ai |
| marketing | projects.marketing |
| systems | projects.systems |
| design | projects.design |

---

## ⚠️ Important Rules

1. **Keep JSON valid** - Use proper commas and brackets
2. **Use UTF-8** - For Arabic text
3. **Match field names** - `titleAr`, `degreeAr`, etc.
4. **Don't remove required fields** - All fields shown above are required
5. **Refresh browser** - After saving changes

---

## 🐛 Troubleshooting

**Not showing?**
- Check browser console (F12)
- Validate JSON at https://jsonlint.com/
- Refresh browser

**Wrong language?**
- Check `titleAr`, `degreeAr` fields are filled
- Verify Arabic text is correct

**Errors in console?**
- Check JSON syntax
- Ensure all commas are in place
- Verify no extra/missing brackets

---

## 📞 Need Help?

See `SKILLS_CERTIFICATES_GUIDE.md` for detailed instructions with examples.

---

**Last Updated**: 2024
