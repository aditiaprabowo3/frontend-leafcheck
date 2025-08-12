# 🌿 leafcheck

![Desktop - 7 (1)](https://github.com/user-attachments/assets/009be661-a80e-44a1-963a-e1b2362db338)

leafcheck adalah aplikasi web sederhana yang memungkinkan pengguna mengunggah gambar daun jagung dan menerima hasil diagnosis penyakit daun secara otomatis. Aplikasi ini terhubung dengan backend berbasis FastAPI yang menjalankan model deep learning untuk klasifikasi penyakit daun jagung.


##✨ Fitur Utama
- 📤 Upload gambar daun jagung
- 🤖 Analisis otomatis menggunakan model CNN
- 📊 Menampilkan hasil prediksi secara informatif (nama penyakit, penjelasan, dan solusi)
- 🌐 Terhubung ke API FastAPI yang dideploy di Railway
- 💡 Antarmuka sederhana dan mudah digunakan
- ⚡ Deployment frontend menggunakan Vercel

##🔧 Teknologi yang Digunakan
- HTML, CSS, JavaScript
- Node.js + Webpack
- Deployment (Vercel)

🚀 Menjalankan Frontend Secara Lokal

1. **Clone Repo**

```bash
git clone https://github.com/aditiaprabowo3/frontend-leafcheck.git
```

2. **Install Dependencies**

``` bin
npm install
```

3. **Jalankan Project (Development Mode)**

``` bin
npm run start-dev
```

4. **Konfigurasi Endpoint API**
Pastikan URL endpoint backend (/predict) sudah mengarah ke FastAPI yang telah kamu deploy (misalnya via Railway). Contoh:

```bash
const BASE_URL = "https://api-leafcheck-production.up.railway.app/predict";
```
