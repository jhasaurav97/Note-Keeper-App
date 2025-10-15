# 📝 Note Keeper App

### A full-stack **MERN-based Notes Management Web App** with Google Authentication, JWT Security, and Responsive UI

---

## 🚀 Overview

The **Note Keeper App** allows users to securely create, update, and manage their personal notes anytime, anywhere.  
It’s a **Single Page Application (SPA)** built with the latest web technologies — focused on **scalability, clean architecture, and performance**.

> 🧠 This project reflects my full-stack development journey — from building UI/UX to implementing backend architecture, APIs, authentication, and deployment.

---

## ⚙️ Tech Stack

| Layer | Technologies Used |
| :---- | :---------------- |
| **Frontend** | React (Vite), Tailwind CSS, React Router DOM, Lucide React Icons |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose |
| **Authentication** | Google OAuth (`@react-oauth/google`), JWT (Access + Refresh Tokens), bcrypt, crypto |
| **Utilities** | Async Handler, API Response, API Error, Custom Middleware (`verifyJWT`, `Validator`) |
| **Deployment** | Frontend → **Vercel** <br> Backend → **Render** |
| **Tools** | Postman (API Testing), GitHub (Version Control), Environment Variables |

---

## 🧩 Project Architecture

```bash
NoteKeeper/
│
├── client/                     # Frontend (Vite + React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   └── package.json
│
├── server/                     # Backend (Express + MongoDB)
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── notes.controller.js
│   ├── models/
│   │   ├── User.model.js
│   │   ├── Note.model.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── validator.middleware.js
│   ├── utils/
│   │   ├── apiError.js
│   │   ├── apiResponse.js
│   │   ├── asyncHandler.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── notes.routes.js
│   ├── app.js
│   ├── index.js
│   └── .env
│
└── README.md
```

##   Features

###  User Authentication

- Google OAuth login

- Manual email/password login with bcrypt password hashing

- Access + Refresh token mechanism using JWT

- Middleware-based route protection

### Notes Management

- Create, update, delete, and view notes

- Private notes for each logged-in user

- MongoDB models with validation

### Scalable Architecture

- MVC structure (Model–View–Controller)

- Async error handling via custom asyncHandler

- Centralized API error/response utilities

### Deployment & CORS

- Frontend deployed on Vercel

- Backend deployed on Render

- Proper CORS policy and environment configuration for cross-domain access

### Responsive & Clean UI

- Tailwind CSS for a premium look

- Lucide icons for elegant visuals

- SPA navigation with React Router DOM

### My Learning Journey
- Challenge	How I Solved It	What I Learned
- CORS issue during deployment	Added environment-based CORS config	Deep understanding of frontend-backend connection
- JWT token mismatch	Used secure cookies and refresh tokens	How real-world authentication works
- Google OAuth integration	Learned OAuth flow & redirect handling	Implementing secure social login
- Folder structure & scalability	Followed industry-standard architecture	Clean code and modular design
- Deployment issues	Deployed frontend (Vercel) & backend (Render) separately	Real DevOps handling experience
  
## 🖥️ Screenshots

### Home Page
![Home Page](https://private-user-images.githubusercontent.com/130860836/501333220-c0f9793a-05fb-4d71-b612-f2dc13702d39.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjA1MTI4NTgsIm5iZiI6MTc2MDUxMjU1OCwicGF0aCI6Ii8xMzA4NjA4MzYvNTAxMzMzMjIwLWMwZjk3OTNhLTA1ZmItNGQ3MS1iNjEyLWYyZGMxMzcwMmQzOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAxNVQwNzE1NThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00OTNhYTY3YTMxODAyMzgxNTMyMzVkMWQ5ZDliMWM2NTM1ZTM0NDdhNzZlN2FhMDJhYzg5Yzg1NWMzNTkzM2QyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.kV6yGnuJ1uk8HlXEnNjZMVFFC9XFO-RBPfZxLthygW0)

### Login Page
![Login Page](https://private-user-images.githubusercontent.com/130860836/501333430-5d4c8e63-7369-4d43-bb4e-bed2840aca55.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjA1MTI4NTgsIm5iZiI6MTc2MDUxMjU1OCwicGF0aCI6Ii8xMzA4NjA4MzYvNTAxMzMzNDMwLTVkNGM4ZTYzLTczNjktNGQ0My1iYjRlLWJlZDI4NDBhY2E1NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAxNVQwNzE1NThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMjZiMTExMjIxMTI4ODk5MWJkYzBlZmFlYmUzZWEyNGY3ZTk2MGU3ZDEyNzRiN2MxMjM2ZDdiOTRkYmVmYzUxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.R9pcxQdNvy-KavZJqLSS52ly6nQRUAoyjQ69C_H-5jk)

### Dashboard
![Dashboard](https://private-user-images.githubusercontent.com/130860836/501333549-7ba511dd-9340-4f70-a8f8-95cbafac334f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjA1MTI3MDMsIm5iZiI6MTc2MDUxMjQwMywicGF0aCI6Ii8xMzA4NjA4MzYvNTAxMzMzNTQ5LTdiYTUxMWRkLTkzNDAtNGY3MC1hOGY4LTk1Y2JhZmFjMzM0Zi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAxNVQwNzEzMjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYTk4YTdiMGMxZDBkMmE4N2M3ZGQ2MGRjNjVhMDA0ZmQyZjRhOGJhNTk1OWRkYTdlZDkxMzQ5ZGVlN2U5NWI2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Txs8LILMdwwqfz7iOVD-Lp_ebAjwqImeMD_t48BiPUE)

### Installation Guide
```bash
🔹 Clone Repository
git clone https://github.com/jhasaurav97/note-keeper-app.git
```

### Backend Setup
```bash
cd server
npm install
npm run dev
```

**Add your environment variables:**
```bash
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
FRONTEND_URL=https://note-keeper.vercel.app
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

### Live Demo

- 🔗 Frontend: https://note-keeper.vercel.app

- 🔗 Backend (Render): https://note-keeper-api.onrender.com

### Future Improvements

- Add GitHub OAuth login

- Add dark/light theme toggle

- Add note search and categories

- Implement collaborative notes using Socket.io

### About Developer

- **Saurav Jha**
- Full Stack Developer | MERN | React | Node.js | Tailwind | MongoDB
- Building real-world apps with clean architecture & passion for scalable design.

- 🔗 LinkedIn: [Your LinkedIn Profile Here]
- 🔗 GitHub: https://github.com/jhasaurav97

> ⭐ If you like this project, consider giving it a star on GitHub — it motivates me to build more!

---

