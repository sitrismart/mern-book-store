# MERN Book Store

A simple book management application built with the MERN Stack:

- **Frontend**: React + Vite
- **Backend**: Express + MongoDB
- **Language**: JavaScript

The app supports CRUD operations for books and features an improved and user-friendly interface.

---

## Project Structure

```
mern-book-store/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── index.html
│   └── vite.config.js
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── config.js
│   └── index.js
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/sitrismart/mern-book-store.git
cd mern-book-store
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder and add the following:

```
PORT=3000
MONGO_URL=mongodb://localhost:27017/book-collection
```

> Replace the `MONGO_URM` with your MongoDB connection string if you're using a remote database.

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

---

## Running the App

### 1. Start Backend

```bash
cd backend
npm run dev
```

Backend will run on `http://localhost:3000`

### 2. Start Frontend

```bash
cd frontend
npm run dev
```

Frontend will run on `http://localhost:5173`

> Make sure the backend is running before using the frontend.
