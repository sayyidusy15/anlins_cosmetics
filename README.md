# 🌸 Anlins Cosmetics - Website Katalog Produk & Klinik Kecantikan

**Anlins Cosmetics** adalah aplikasi web e-commerce dan katalog produk kosmetik serta klinik perawatan kecantikan (*beauty skincare & treatment*). Aplikasi ini dibangun dengan arsitektur **Fullstack Laravel 11 + Inertia.js (React & TypeScript)** serta menggunakan **Neon PostgreSQL** sebagai database cloud serverless.

---

## 🚀 Fitur Utama

- ✨ **Hero Banner Interaktif:** Banner promosi utama beranimasi halus yang datanya diambil dinamis dari database (`HomePageSlider`).
- 💄 **Katalog Produk Kosmetik:** Menampilkan produk berdasarkan kategori (Serum, Cleanser, Moisturizer, Lotion, dll) lengkap dengan rating bintang, harga Rupiah, dan foto resolusi tinggi.
- 📱 **Integrasi Pemesanan WhatsApp:** Pembeli dapat menentukan jumlah produk (*quantity*) dan langsung memesan via WhatsApp ke admin toko dengan pesan otomatis terformat.
- 🛍️ **Halaman Detail Produk & Slider Produk Terbaru:** Halaman detail produk lengkap dengan gallery foto, deskripsi, serta slider carousel "Product Terbaru" di bagian bawah.
- 🌿 **Penjelasan Bahan Alami (Ingredients):** Halaman edukasi kandungan aktif/alami yang digunakan pada produk Anlins Beauty.
- 💆‍♀️ **Layanan Perawatan (Treatments):** Katalog perawatan klinik kecantikan lengkap dengan daftar menu treatment, manfaat (*benefit*), serta tombol reservasi.
- 🔍 **Live Search Bar (Overlays):** Pencarian produk interaktif dengan pencocokan nama dan kategori produk secara instan.
- ⚡ **Skeleton Loading & Transition Bar:** Garis indikator pemuatan data (*shimmer progress bar*) yang halus saat navigasi antar halaman.

---

## 🛠️ Teknologi yang Digunakan (Tech Stack)

### Backend
- **Framework:** Laravel 11.x (PHP 8.2+)
- **ORM:** Eloquent ORM (PostgreSQL Driver)
- **Database:** [Neon Serverless PostgreSQL](https://neon.tech)

### Frontend
- **Framework:** Inertia.js 2.0 (React 18 + TypeScript)
- **Bundler:** Vite 8.x
- **Styling:** Tailwind CSS 3.x, Custom CSS, FontAwesome 6 Icons
- **Slider / Carousel:** Swiper.js 11

---

## 📋 Prasyarat Sistem (Prerequisites)

Sebelum menjalankan proyek ini, pastikan sistem Anda telah terpasang:
- **PHP:** versi `^8.2` (dengan ekstensi `pdo_pgsql` aktif)
- **Composer:** versi `^2.x`
- **Node.js:** versi `^18.x` atau lebih baru
- **NPM:** versi `^9.x` atau lebih baru

---

## ⚙️ Panduan Instalasi (Setup & Installation)

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer lokal Anda:

### 1. Clone Repository
```bash
git clone https://github.com/sayyidusy15/anlins_cosmetics.git
cd anlins_cosmetics
```

### 2. Install Dependensi Backend (PHP)
```bash
composer install
```

### 3. Install Dependensi Frontend (Node.js)
```bash
npm install --legacy-peer-deps
```

### 4. Konfigurasi Environment (`.env`)
Salin file `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
Buka file `.env` dan sesuaikan koneksi database Neon PostgreSQL Anda:
```env
APP_NAME="Anlins Cosmetics"
APP_URL=http://localhost:8000

DB_CONNECTION=pgsql
DB_HOST=ep-summer-bird-a11c6xn5-pooler.ap-southeast-1.aws.neon.tech
DB_PORT=5432
DB_DATABASE=neondb
DB_USERNAME=neondb_owner
DB_PASSWORD=password_neon_anda
DB_SSLMODE=require

# Atau gunakan DATABASE_URL langsung:
DATABASE_URL="postgresql://neondb_owner:password_neon_anda@ep-summer-bird-a11c6xn5-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
```

### 5. Generate Application Key
```bash
php artisan key:generate
```

### 6. Jalankan Database Migration & Seed Data
```bash
php artisan migrate
php artisan db:seed
```

---

## 🏃‍♂️ Cara Jalankan Aplikasi Lokal

Buka **2 jendela terminal** dan jalankan perintah berikut secara bersamaan:

**Terminal 1 (Laravel Backend Server):**
```bash
php artisan serve
```
*(Server backend akan berjalan di http://127.0.0.1:8000)*

**Terminal 2 (Vite Frontend Development Server):**
```bash
npm run dev
```

Buka browser dan navigasi ke `http://127.0.0.1:8000`.

---

## 📂 Struktur Folder Proyek

```text
anlins_cosmetics/
├── app/
│   ├── Http/Controllers/
│   │   ├── HomeController.php          # Controller Halaman Utama
│   │   ├── ProductController.php       # Controller Detail Produk
│   │   └── IngredientController.php    # Controller Daftar Bahan
│   └── Models/
│       ├── Product.php                 # Model Eloquent (tabel ProductTab)
│       ├── Ingredient.php              # Model Eloquent (tabel Ingredient)
│       ├── Slider.php                  # Model Eloquent (tabel HomePageSlider)
│       └── Treatment.php               # Model Eloquent (tabel Treatment)
├── database/
│   ├── migrations/                     # File Migrasi Database
│   └── seeders/DatabaseSeeder.php      # Seeder Data Awal produk & slider
├── public/
│   ├── css/                            # File Stylesheet CSS Template
│   └── images/                         # Asset Gambar Produk & Banner
├── resources/
│   ├── js/
│   │   ├── Components/                 # Komponen React (Navbar, Footer, Slider, ProductTab)
│   │   ├── Pages/                      # Halaman Inertia (Home, Product/Detail, Ingredient/Index)
│   │   └── Skeletons/                  # Komponen Skeleton Loading & Progress Bar
│   └── views/app.blade.php             # Template Root Blade HTML
└── routes/
    └── web.php                         # Route Aplikasi
```

---

## 📦 Perintah Penting (Commands Cheatsheet)

| Perintah | Deskripsi |
| :--- | :--- |
| `php artisan serve` | Menjalankan server pengembangan Laravel backend |
| `npm run dev` | Menjalankan Vite dev server untuk hot-reload React |
| `npm run build` | Kompilasi aset frontend React untuk tahap produksi (*production build*) |
| `php artisan migrate` | Menjalankan migrasi tabel database |
| `php artisan db:seed` | Mengisi data awal sampel ke database |
| `php artisan route:list` | Menampilkan seluruh daftar route URL aplikasi |

---

## 📜 Lisensi & Hak Cipta

© 2025 **Anlins Beauty**. All Rights Reserved.
