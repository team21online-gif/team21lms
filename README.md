# Team21 Student Management Platform
A lightweight, GitHub‑deployable student/mentor/admin management system for **Team21**.

This project is fully front‑end and runs on GitHub Pages with **no backend needed**.  
It uses `localStorage` for demo data persistence.

---
## 🚀 Features
### 👨‍🎓 Students
- Request an account (approved by admin)
- View assigned courses
- Access lessons per course
- Submit coursework
- Track submission history

### 🧑‍🏫 Mentors
- View assigned students
- Review coursework counts
- Add lessons to courses they mentor

### 👨‍💼 Admin
- Default login: **admin / team21admin**
- Approve/reject account requests
- Add courses
- Assign mentors & students
- Manage lessons
- Manage all data

---
## 📦 Installation
1. Create a new GitHub repository.
2. Add the following files to the root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
3. Commit and push.

---
## 🌐 Deploy on GitHub Pages
1. Go to **Settings → Pages**.
2. Under *Source*, choose:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
3. Save — your app will be published automatically.

---
## ⚠️ Production Notes
This version is for demonstration and local use.  
For real deployment:
- Add secure authentication
- Replace `localStorage` with a database (Supabase, Firebase, PostgreSQL, etc.)
- Implement backend validation

You can request an upgraded backend version anytime.