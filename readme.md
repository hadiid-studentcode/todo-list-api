# Todo List API

This is a RESTful API for a Todo List application, built as part of a project from [roadmap.sh](https://roadmap.sh/projects/todo-list-api). This API is built with Node.js, Express, and Prisma, featuring JWT authentication.

## ✨ Features

* User Authentication (Register & Login) using JSON Web Tokens (JWT).
* Protected routes for all todo operations.
* Full CRUD (Create, Read, Update, Delete) operations for **Todos**.
* Password hashing using `bcryptjs`.
* Centralized error handling (middleware).

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MySQL (managed by Prisma)
* **ORM:** Prisma
* **Authentication:** JSON Web Token (`jsonwebtoken`)
* **Hashing:** `bcryptjs`
* **Others:** `dotenv`, `nodemon`, `express-async-errors`

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Prerequisites

* Node.js (v18 or newer)
* NPM (Node Package Manager)
* MySQL Server (e.g., from XAMPP, Laragon, or Docker)

### 2. Installation

1.  **Clone this repository:**
    ```bash
    git clone [https://github.com/hadiid-studentcode/todo-list-api.git](https://github.com/hadiid-studentcode/todo-list-api.git)
    cd todo-list-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup Environment File (`.env`)**
    Create a `.env` file in the project root and copy the contents from `.env.example` (if it exists) or use the template below. Adjust it to your database connection.

    ```ini
    # Database Connection (adjust to your MySQL setup)
    DATABASE_URL="mysql://root:@localhost:3306/db_todolist"

    # JWT Secret Key (replace with a long, secure random string)
    JWT_SECRET="your-very-secure-random-string"

    # Server Port
    PORT=3000
    ```

4.  **Run Database Migrations**
    This command will create the tables (`User`, `Todos`) in your database based on `schema.prisma`.
    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Run the Server**
    * **Development Mode (with Nodemon):**
        ```bash
        npm run dev
        ```
    * **Production Mode:**
        ```bash
        npm start
        ```

The server will be running at `http://localhost:3000`.

---

## 📚 API Documentation

All `/api/todos` routes are protected and require a JWT Token. Send the token in the header:
`Authorization: Bearer <your_token>`

### Module: Authentication (`/api/auth`)

| Method | Endpoint | Description | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Registers a new user. | `{ "name": "User", "email": "user@mail.com", "password": "123" }` |
| `POST` | `/api/auth/login` | Logs in to get a token. | `{ "email": "user@mail.com", "password": "123" }` |
| `POST` | `/api/auth/logout` | Logout (placeholder) endpoint. | (None) |

### Module: Todos (`/api/todos`)

| Method | Endpoint | Description | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/todos` | Gets all todos for the logged-in user. | (None) |
| `POST` | `/api/todos` | Creates a new todo. | `{ "title": "Study", "description": "Learn NestJS" }` |
| `GET` | `/api/todos/:id` | Gets a single todo by ID. | (None) |
| `PUT` | `/api/todos/:id` | Updates a todo. | `{ "title": "Study Hard", "description": "..." }` |
| `DELETE` | `/api/todos/:id` | Deletes a todo. | (None) |