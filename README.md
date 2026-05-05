# Aura Flow Meditation Platform

A premium meditation platform with live classes and student progress tracking.

## 🚀 Features
- **Landing Page**: Aesthetic bluish-purple design with meditation quotes.
- **Manual Payment Flow**: Users contact the admin to purchase courses.
- **Student Dashboard**: Track progress, see daily affirmations, and join live Zoom/Meet sessions.
- **Admin Panel**: Manage students and update the live meeting link for everyone instantly.

## 🛠 Tech Stack
- **Frontend**: React, Vite, Vanilla CSS, Lucide Icons.
- **Backend**: Node.js, Express, MongoDB, JWT.

## 🏃 How to Run

### 1. Setup Backend
1. Go to the `server` directory.
2. Create a `.env` file (one has been provided with defaults).
3. Ensure MongoDB is running (locally or update `MONGO_URI` in `.env` to your Atlas URI).
4. Run:
   ```bash
   npm install
   npm start
   ```

### 2. Setup Frontend
1. Go to the `client` directory.
2. Run:
   ```bash
   npm install
   npm run dev
   ```

## 🔑 Admin Setup
To create an admin account, register normally and then manually change your `role` to `'admin'` in the MongoDB database collection `users`.
