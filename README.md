# 📝 Note Keeper App (MERN)

A full-stack **Note Keeper App** built with the **MERN stack**.  
Users can **sign up, log in, log out, and manage personal notes** (create, read, update, delete).  
Authentication is powered by **JWT tokens (Access, Refresh, Temporary)**, passwords are securely hashed with **bcrypt**, and notes are stored in **MongoDB**.  

This project is designed with a **scalable backend architecture** and a **modern frontend using React + Vite + TailwindCSS**.  
Future goal: Make this project **open-source** so developers can contribute and extend it further 🚀  

---

## ⚡ Features
- 🔐 User authentication (signup, login, logout)  
- 🛡️ Secure password hashing with **bcrypt**  
- 🔑 JWT authentication with **Access & Refresh tokens**  
- 🗂️ CRUD operations for personal notes  
- 🧑‍💻 Middleware for authentication and validation  
- 🎨 Modern UI with **React + TailwindCSS**  
- 🌍 Open-source & contribution-ready  

---

## 🛠️ Tech Stack

### Backend
- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication (Access, Refresh, Temporary Tokens)**
- **bcrypt** for password hashing  
- **express-validator** for request validation  
- **cookie-parser** for secure cookie handling  
- **dotenv** for environment variables  

### Frontend
- **React + Vite**
- **React Router DOM** for navigation  
- **TailwindCSS** for styling  
- **Axios** for API requests  
- **Lucide React** icons  

---

## 📂 Project Structure

- NoteKeeperApp/
-  │── backend/
-  │ ├── config/
-  │ │ └── connect.db.js # MongoDB connection
-  │ ├── controllers/
-  │ │ ├── auth.controller.js # Authentication logic
-  │ │ └── notes.controller.js # Notes CRUD logic
-  │ ├── middleware/
-  │ │ ├── auth.middleware.js # Auth middleware
-  │ │ └── validator.middleware.js
-  │ ├── models/
-  │ │ ├── User.model.js # User schema
-  │ │ └── Notes.model.js # Notes schema
-  │ ├── routes/
-  │ │ ├── auth.routes.js
-  │ │ └── notes.routes.js
-  │ ├── utils/
-  │ │ ├── api-error.js
-  │ │ ├── api-response.js
-  │ │ ├── async-handler.js
-  │ │ └── constant.js
-  │ ├── validator/
-  │ │ └── index.js # Validation logic
-  │ ├── app.js # Express app setup
-  │ └── index.js # Server entry point
- | 
- │── client/
- │ ├── src/
- │ │ ├── pages/ # Home, Login, Signup, Dashboard
- │ │ ├── components/ # UI components
- │ │ ├── App.jsx # Root app
- │ │ └── main.jsx # React entry
- │ ├── public/
- │ ├── index.html
- │ └── vite.config.js
- │
- │── .env # Environment variables
- │── package.json
- │── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/note-keeper-app.git
cd note-keeper-app
````

### 2️⃣ Setup Backend
````bash
cd backend
npm install
````

**Run backend server:**
````bash
npm run dev
````

### 3️⃣ Setup Frontend
````bash
cd ../client
npm install
````

**Run frontend dev server:**
```bash
npm run dev
```

**Now open** 👉 http://localhost:5173

### 🙌 Acknowledgements

- Express.js

- MongoDB

- React

- TailwindCSS


---
