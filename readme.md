# Todo List API

Ini adalah RESTful API untuk aplikasi Todo List, dibuat sebagai bagian dari project di [roadmap.sh](https://roadmap.sh/projects/todo-list-api). API ini dibuat menggunakan Node.js, Express, dan Prisma, dengan autentikasi JWT.

## ✨ Fitur

* Autentikasi User (Register & Login) menggunakan JSON Web Tokens (JWT).
* Rute (endpoint) yang dilindungi (protected) untuk semua operasi todo.
* Operasi CRUD (Create, Read, Update, Delete) penuh untuk Tasks (Tugas).
* Hashing password menggunakan `bcryptjs`.
* Penanganan error terpusat (middleware).

---

## 🛠️ Teknologi yang Digunakan

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MySQL (dikelola oleh Prisma)
* **ORM:** Prisma
* **Autentikasi:** JSON Web Token (`jsonwebtoken`)
* **Hashing:** `bcryptjs`
* **Lain-lain:** `dotenv`, `nodemon`, `express-async-errors`

---

## 🚀 Memulai (Getting Started)

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

### 1. Prasyarat

* Node.js (v18 atau lebih baru)
* NPM (Node Package Manager)
* Server MySQL (Misalnya dari XAMPP, Laragon, atau Docker)

### 2. Instalasi

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/username/todo-list-api.git](https://github.com/username/todo-list-api.git)
    cd todo-list-api
    ```

2.  **Install dependensi:**
    ```bash
    npm install
    ```

3.  **Setup file Environment (`.env`)**
    Buat file `.env` di root proyek dan salin isi dari `.env.example` (jika ada) atau gunakan template di bawah ini. Sesuaikan dengan koneksi database Anda.

    ```ini
    # Koneksi Database (sesuaikan dengan setup MySQL Anda)
    DATABASE_URL="mysql://root:@localhost:3306/db_todolist"

    # Kunci rahasia untuk JWT (ganti dengan string acak yang aman)
    JWT_SECRET="kunci-rahasia-anda-yang-sangat-aman"

    # Port server
    PORT=3000
    ```

4.  **Jalankan Migrasi Database**
    Perintah ini akan membuat tabel (`User`, `Tasks`) di database Anda berdasarkan `schema.prisma`.
    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Jalankan Server**
    * **Mode Development (dengan Nodemon):**
        ```bash
        npm run dev
        ```
    * **Mode Produksi:**
        ```bash
        npm start
        ```

Server akan berjalan di `http://localhost:3000`.

---

## 📚 Dokumentasi API

Semua rute `/api/tasks` dilindungi dan memerlukan Token JWT. Kirimkan token di header:
`Authorization: Bearer <token_anda>`

### Modul: Autentikasi (`/api/auth`)

| Method | Endpoint | Deskripsi | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Mendaftarkan user baru. | `{ "name": "User", "email": "user@mail.com", "password": "123" }` |
| `POST` | `/api/auth/login` | Login untuk mendapatkan token. | `{ "email": "user@mail.com", "password": "123" }` |
| `POST` | `/api/auth/logout` | Endpoint (placeholder) logout. | (Tidak ada) |

### Modul: Tasks (`/api/tasks`)

| Method | Endpoint | Deskripsi | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/tasks` | Mendapat semua tasks milik user. | (Tidak ada) |
| `POST` | `/api/tasks` | Membuat task baru. | `{ "title": "Belajar", "description": "Belajar NestJS" }` |
| `GET` | `/api/tasks/:id` | Mendapat satu task spesifik. | (Tidak ada) |
| `PUT` | `/api/tasks/:id` | Memperbarui task. | `{ "title": "Belajar Keras", "description": "..." }` |
| `DELETE` | `/api/tasks/:id` | Menghapus task. | (Tidak ada) |