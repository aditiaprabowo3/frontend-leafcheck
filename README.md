# 🌿 leafcheck

![Desktop - 7 (1)](https://github.com/user-attachments/assets/009be661-a80e-44a1-963a-e1b2362db338)

leafcheck adalah aplikasi web sederhana yang memungkinkan pengguna mengunggah gambar daun jagung dan menerima hasil diagnosis penyakit daun secara otomatis. Aplikasi ini terhubung dengan backend berbasis FastAPI yang menjalankan model deep learning untuk klasifikasi penyakit daun jagung.

##✨ Fitur Utama
- 📤 Upload gambar daun jagung
- 🤖 Analisis otomatis menggunakan model CNN
- 📊 Menampilkan hasil prediksi secara informatif: nama penyakit, penjelasan, dan solusi
- 💡 Antarmuka sederhana dan mudah digunakan

##🔧 Teknologi yang Digunakan
- 🌐 HTML, CSS, JavaScript, Webpack Bundle, Node Js
- 📦 Fetch API untuk komunikasi dengan backend
- ☁️ Terhubung ke API FastAPI yang dideploy di Railway
- Deployment menggunakan vercel

Menjalankan Frontend Secara Lokal

1. 🔃 Clone Repo

git clone https://github.com/aditiaprabowo3/frontend-leafcheck.git

2. Install dependency Yang Digunakan
``` bin
npm install
```

3. jalankan Project
``` bin
npm run start-dev
```

4. Untuk end point api bisa sesuaikan dengan api yang tadi, tetapi harus menyesuaikan endpontnya dengan mendeploy ke railway atau yang lain
