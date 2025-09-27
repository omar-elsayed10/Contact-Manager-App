# Contact Manager App

A **Contact Management** web application built with **Node.js**, **Express**, and **MongoDB**, featuring image upload and user authentication.

## 🚀 Features
- User registration with avatar upload.
- User login with **JWT** authentication.
- Create, read, update, and delete (CRUD) contacts for each user.
- Protected contact routes requiring a valid token.
- Image uploads handled with **Multer**.
- Passwords hashed securely with **bcrypt**.
- Centralized error handling middleware.

---

## 🏗️ Tech Stack
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose**
- **JSON Web Token (JWT)**
- **bcryptjs** for password hashing
- **multer** for file uploads
- **dotenv** for environment variables

---

## 📂 Project Structure
```
project/
│
├─ controllers/ 
│ ├─ authController.js 
│ └─ contactController.js 
│
├─ middleware/ 
│ ├─ authMiddleware.js 
│ └─ errorMiddleware.js 
│ 
├─ models/ 
│ ├─ User.js 
│ └─ Contact.js 
│
├─ routes/ 
│ ├─ authRoutes.js 
│ └─ contactRoutes.js 
│ 
├─ uploads/ # Avatar images 
│
├─ .env 
├─ server.js 
└─ package.json 
```
## 🔑 API Endpoints (for Postman Testing)
## Auth

- POST /users/register: Register a new user (with avatar image).

- POST /users/login: Login and receive a JWT token.

## Contacts (requires Authorization: Bearer <token> header)

- GET /contacts: Get all contacts for the logged-in user.

- GET /contacts/:id: Get a specific contact by ID.

- POST /contacts: Create a new contact.

- PUT /contacts/:id: Update an existing contact.

- DELETE /contacts/:id: Delete a contact.
