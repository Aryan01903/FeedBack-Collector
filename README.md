# 🛠️ Feedback Collector API

This is the backend API for the Feedback App built with **Node.js**, **Express.js**, and **MongoDB**. It allows users to submit feedback and provides an admin endpoint to retrieve all submitted messages.

---

## 🌐 Features

- 📥 Submit feedback via `POST /api/submit-feedback`
- 📋 View all submitted feedback via `GET /api/feedbacks`
- 📧 Email validation and input sanitization
- 🗃️ MongoDB for persistent storage
- 🔄 CORS support for frontend integration

---

## ⚙️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

---

## 📸 Screenshots

### ✏️ Creating Feedback 
    (./screenshots/postfeedback.png)

### Get all Feedbacks
    (./screenshots/getfeedback.png)


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/feedback-api.git
cd feedback-api
