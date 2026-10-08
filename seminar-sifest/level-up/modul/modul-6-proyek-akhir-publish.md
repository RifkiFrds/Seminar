# MODUL 6: Proyek Akhir & Publish

Selamat, teman-teman! Kalian sudah sampai di **modul terakhir** dari course Modern Web Landing Page. Hari ini kita menyelesaikan proyek, memeriksa kualitasnya seperti developer profesional, lalu **mempublikasikannya** agar siapa pun di dunia bisa membukanya.

---

## 🎯 Apa Saja yang Akan Kita Capai Hari Ini?

Setelah menyelesaikan modul ini, saya harap teman-teman bisa:
1. Memeriksa proyek dengan checklist kualitas.
2. Memakai **Lighthouse** untuk mengukur performa dan aksesibilitas.
3. Mempublikasikan website statis secara gratis.
4. Mempersonalisasi landing page menjadi karya kalian sendiri.
5. Merencanakan langkah belajar berikutnya.
6. **Goal Akhir:** Landing page kalian tayang online dengan link yang bisa dibagikan.

---

## 📚 Pembahasan Materi

### 6.1 Personalisasi: Jadikan Milikmu

Sampai sekarang kita membuat landing page untuk "CodeKelas". Sekarang ganti dengan **ide kalian sendiri**. Contohnya:

| Ide | Isi yang diganti |
|---|---|
| Komunitas atau ekstrakurikuler sekolah | Nama, fitur kegiatan, jadwal |
| Usaha kecil (kuliner, kerajinan) | Menu atau produk di bagian kartu |
| Portofolio pribadi | Project dan skill di bagian kartu |
| Event sekolah | Rangkaian acara dan tombol daftar |

Aturannya sederhana: **struktur dan CSS tetap**, ganti teks, warna token, dan konten kartu. Cukup mengubah `--biru` dan `--kuning` di `:root` untuk membuat identitas warna yang berbeda.

### 6.2 Checklist Kualitas Sebelum Publish

Centang satu per satu:

| Bagian | Yang diperiksa |
|---|---|
| Struktur | Hanya satu `h1`, urutan `h2`, `h3` rapi, tag semantik dipakai |
| Responsive | Tampil rapi di 375px (HP) dan 1280px (laptop) |
| Gambar dan link | Semua link berfungsi, gambar punya `alt` |
| Konsol | Tidak ada pesan error merah di tab **Console** (`F12`) |
| Dark mode | Teks tetap terbaca jelas di mode gelap |
| Judul halaman | `title` dan `meta description` sudah diisi |

### 6.3 Mengukur Kualitas dengan Lighthouse

Browser berbasis Chromium (Chrome dan Edge) punya alat audit bawaan bernama **Lighthouse**:
1. Tekan `F12`, lalu buka tab **Lighthouse**.
2. Pilih kategori **Performance**, **Accessibility**, dan **SEO**.
3. Klik **Analyze page load**.
4. Baca skor (0 sampai 100) dan daftar saran perbaikan.

> Tips Dosen: Jangan terobsesi mengejar skor 100. Perlakukan hasilnya sebagai **daftar saran**. Skor Accessibility di atas 90 sudah sangat bagus untuk proyek pertama, dan setiap saran yang kalian pahami lalu perbaiki adalah ilmu baru.

### 6.4 Mempublikasikan Website Statis

Karena proyek kita hanya berisi file HTML, CSS, dan gambar (**website statis**), mempublikasikannya mudah dan gratis. Ada beberapa pilihan:

| Layanan | Cara singkat | Cocok untuk |
|---|---|---|
| Netlify Drop | Buka `netlify.com/drop`, seret folder proyek ke halaman itu | Paling cepat, tanpa instalasi |
| GitHub Pages | Unggah proyek ke repository GitHub, lalu aktifkan Pages di pengaturan | Proyek yang ingin disimpan rapi bersama kodenya |

Langkah Netlify Drop:
1. Pastikan `index.html` berada **langsung di dalam folder** yang akan diseret (bukan di subfolder lagi).
2. Seret folder `landing-kelas` ke halaman Netlify Drop.
3. Dalam hitungan detik kalian mendapat link publik.
4. Buat akun gratis dan **klaim situs** tersebut agar link tidak kedaluwarsa.

> Peringatan Dosen: Situs Netlify Drop yang tidak diklaim bersifat **sementara** dan dapat dihapus otomatis. Jangan mengirim link ke dosen atau teman sebelum situsnya diklaim.

### 6.5 Langkah Belajar Berikutnya

Landing page kalian sudah modern, tapi masih "diam". Langkah paling alami berikutnya adalah **JavaScript**, supaya halaman bisa bereaksi, misalnya tombol untuk berpindah antara mode terang dan gelap secara manual.

Teman-teman bisa melanjutkan di course **Fundamental JavaScript** di LMS ini. Dua modul yang paling nyambung dengan proyek ini:
- **Modul 5: DOM dan Event**, untuk membuat tombol yang bisa diklik.
- **Modul 6: DOM Lanjutan**, untuk menyimpan pilihan tema ke `localStorage` agar tidak hilang saat halaman dimuat ulang.

Setelah itu, jalur belajar bisa berlanjut ke **React Fundamentals** dan **Modern React Application**.

---

## 🛠️ Panduan Praktik Terbimbing: Sprint Akhir

1. Ganti konten "CodeKelas" menjadi ide kalian sendiri (bagian **6.1**).
2. Sesuaikan token warna di `:root` untuk membuat identitas kalian sendiri.
3. Jalankan checklist di bagian **6.2** sampai semua tercentang.
4. Jalankan Lighthouse dan perbaiki **minimal satu** saran.
5. Publikasikan lewat salah satu cara di bagian **6.4**.
6. Bagikan link kalian ke satu teman dan minta pendapatnya.

> Catatan Penting: Menyalin kode dari AI atau internet tanpa memahaminya membuat kalian sulit memperbaikinya saat ada masalah. Kalau memakai AI, gunakan sebagai **tutor**: minta penjelasan baris demi baris, lalu ketik ulang sendiri.

---

## 📝 Evaluasi Pemahaman

Silakan asah pemahaman kalian dengan menjawab kuis ini:
1. Apa yang dimaksud website statis, dan mengapa mudah dipublikasikan?
2. Sebutkan tiga hal yang kalian periksa sebelum mempublikasikan website!
3. Apa yang dinilai oleh Lighthouse pada kategori Accessibility?

Hebat sekali! Kalian telah membangun landing page modern lengkap dengan layout responsif, animasi halus, dan dark mode, lalu menayangkannya ke dunia. Ini bukan akhir, tetapi awal dari perjalanan kalian sebagai web developer. Teruslah membuat, teruslah salah, dan teruslah belajar! 🎓
