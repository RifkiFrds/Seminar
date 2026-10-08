# MODUL 1: Struktur Semantik & Persiapan Proyek

Halo teman-teman! Selamat datang di course **Modern Web Landing Page**. Kalau di kelas dasar kalian sudah belajar HTML dan CSS lewat halaman profil sederhana, sekarang kita naik level: membangun **landing page bergaya startup** yang rapi, responsif, punya animasi halus, dan bahkan mendukung dark mode. Seru kan?

Semua dikerjakan **tanpa instalasi apa pun**. Cukup VS Code, browser, dan semangat belajar.

---

## 🎯 Apa Saja yang Akan Kita Capai Hari Ini?

Setelah menyelesaikan modul ini, saya harap teman-teman bisa:
1. Membayangkan hasil akhir proyek **CodeKelas** yang akan kita bangun selama 6 modul.
2. Menyiapkan folder proyek dan menjalankannya dengan Live Server.
3. Menulis kerangka dokumen HTML5 yang benar, lengkap dengan `meta description`.
4. Menyusun halaman memakai tag semantik: `header`, `nav`, `main`, `section`, `article`, dan `footer`.
5. Menjaga urutan judul (`h1`, `h2`, `h3`) agar halaman mudah dipahami.
6. **Goal Akhir:** Menyelesaikan seluruh HTML landing page CodeKelas (belum bergaya, dan itu normal!).

---

## 📚 Pembahasan Materi

### 1.1 Apa Itu Landing Page?

Landing page adalah halaman pertama yang dilihat pengunjung. Tugasnya sederhana: **menjelaskan sesuatu dengan cepat, lalu mengajak pengunjung bertindak** (misalnya mendaftar kelas).

Ini rancangan landing page **CodeKelas** yang akan kita bangun:

┌────────────────────────────────┐
│ 1. HEADER  logo + menu         │
├────────────────────────────────┤
│ 2. HERO    judul + 2 tombol    │
├────────────────────────────────┤
│ 3. FITUR   [ ] [ ] [ ]         │
├────────────────────────────────┤
│ 4. KELAS   [ ] [ ] [ ]         │
├────────────────────────────────┤
│ 5. AJAKAN  tombol Mulai        │
├────────────────────────────────┤
│ 6. FOOTER  hak cipta           │
└────────────────────────────────┘

> Tips Dosen: Sebelum menulis kode, selalu gambar dulu rancangan kasarnya di kertas. Dengan begitu kalian tahu bagian apa saja yang harus ditulis, dan kode jadi lebih terarah.

### 1.2 Siapkan Folder Proyek

Buat folder baru bernama `landing-kelas`, lalu buka di VS Code lewat **File → Open Folder**. Di dalamnya, buat dua file:

```text
landing-kelas/
├── index.html
└── style.css
```

Setelah itu klik kanan `index.html` dan pilih **Open with Live Server**. Mulai sekarang, setiap kali kalian menyimpan file (`Ctrl + S`), browser akan menyegarkan diri otomatis.

### 1.3 Kerangka Dokumen yang Benar

Ketik `!` lalu tekan `Tab` di `index.html`, maka VS Code akan membuatkan kerangka dasar. Kita rapikan sedikit seperti ini:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="CodeKelas: belajar coding dari nol sampai punya website sendiri.">
  <title>CodeKelas | Belajar Coding dari Nol</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- isi halaman di sini -->
</body>
</html>
```

Perhatikan tiga hal penting di sini:

| Baris | Fungsi |
|---|---|
| `lang="id"` | Memberi tahu browser dan pembaca layar bahwa halaman berbahasa Indonesia |
| `meta viewport` | Membuat halaman tampil benar di layar HP (kita pakai penuh di Modul 5) |
| `meta description` | Ringkasan halaman yang sering muncul di hasil pencarian Google |

### 1.4 Kerangka Semantik

Dulu orang menaruh semuanya di `<div>`. Sekarang kita pakai tag yang **punya makna**, supaya mesin pencari dan pembaca layar paham struktur halaman kita.

| Tag | Dipakai untuk |
|---|---|
| `header` | Bagian atas halaman: logo dan menu |
| `nav` | Kumpulan link navigasi |
| `main` | Isi utama halaman (hanya satu per halaman) |
| `section` | Satu bagian bertema, biasanya diawali judul `h2` |
| `article` | Satu unit konten yang berdiri sendiri, misalnya kartu |
| `footer` | Bagian bawah halaman |

Kerangka body landing page kita:

```html
<body>
  <header class="site-header">
    <a class="logo" href="#">CodeKelas</a>
    <nav aria-label="Navigasi utama">
      <a href="#fitur">Fitur</a>
      <a href="#kelas">Kelas</a>
      <a href="#mulai">Mulai</a>
    </nav>
  </header>

  <main>
    <section class="hero"> ... </section>
    <section id="fitur" class="section"> ... </section>
    <section id="kelas" class="section"> ... </section>
    <section id="mulai" class="cta"> ... </section>
  </main>

  <footer>
    <p>© 2026 CodeKelas. Dibuat saat SI Fest 2026.</p>
  </footer>
</body>
```

> Catatan Penting: Atribut `class` (misalnya `site-header`, `hero`) belum berefek apa-apa sekarang. Kita menyiapkannya sebagai "pegangan" untuk CSS di modul-modul berikutnya. Dan `id` seperti `fitur` dipakai agar link `href="#fitur"` bisa meloncat ke bagian itu.

### 1.5 Mengisi Konten dengan Urutan Judul yang Benar

Aturan emasnya: **satu `h1` per halaman**, lalu `h2` untuk tiap bagian, dan `h3` untuk judul di dalam kartu. Jangan lompat dari `h1` langsung ke `h4` hanya karena ingin teks yang lebih kecil. Ukuran urusan CSS, urutan adalah urusan makna.

Contoh bagian hero dan satu kartu fitur:

```html
<section class="hero">
  <div class="hero-text">
    <p class="eyebrow">Belajar coding, versi ramah pemula</p>
    <h1>Dari nol sampai punya website sendiri</h1>
    <p class="lead">Kelas singkat, praktik langsung, dan hasil nyata.</p>
    <div class="actions">
      <a class="btn btn-primary" href="#kelas">Lihat Kelas</a>
      <a class="btn btn-ghost" href="#fitur">Pelajari Dulu</a>
    </div>
  </div>
</section>

<article class="card" style="--i: 0">
  <h3>Praktik dulu</h3>
  <p>Setiap materi langsung kamu ketik sendiri.</p>
</article>
```

> Peringatan Dosen: Jangan memakai `<a>` untuk tombol yang menjalankan aksi di halaman, dan jangan memakai `<button>` untuk berpindah halaman. Link (`a`) untuk **pindah tempat**, tombol (`button`) untuk **melakukan sesuatu**. Di landing page ini semua "tombol" kita berpindah ke bagian lain, jadi kita pakai `a` dengan kelas `btn`.

---

## 🛠️ Panduan Praktik Terbimbing

Waktunya mengetik! Ikuti langkah ini:

1. Pastikan folder `landing-kelas` sudah terbuka dan Live Server menyala.
2. Tulis kerangka dokumen dari bagian **1.3**.
3. Isi `body` dengan kerangka semantik dari bagian **1.4**.
4. Lengkapi isi `hero`, bagian `#fitur` (3 kartu), `#kelas` (3 kartu), dan `#mulai` sesuai rancangan di bagian 1.1.
5. Isi `style="--i: 0"`, `--i: 1`, dan `--i: 2` pada tiga kartu tiap bagian. Angka ini akan terpakai di Modul 4 untuk animasi bergantian.
6. Untuk tiga kartu kelas, tambahkan `<span class="badge">Pemula</span>` di atas judul, dan baris `<div class="bar" style="--progress: 80%"><span></span></div>` di bawah paragraf.
7. Tambahkan blok `hero-visual` di sebelah teks hero (dipakai di Modul 3):

```html
<div class="hero-visual" aria-hidden="true">
  <div class="mock">
    <div class="mock-dots"><span></span><span></span><span></span></div>
    <div class="mock-lines"><span></span><span></span><span></span><span></span></div>
  </div>
</div>
```

Hasil akhirnya akan terlihat **polos seperti halaman tahun 1995**. Itu benar! Kerangka yang baik harus tetap bisa dibaca tanpa CSS.

> Tips Dosen: Tekan `Alt + Shift + F` di VS Code untuk merapikan indentasi kodemu. Kode yang rapi jauh lebih mudah dicari kesalahannya, terutama tag yang lupa ditutup.

---

## 📝 Evaluasi Pemahaman

Silakan asah pemahaman kalian dengan menjawab kuis ini:
1. Apa bedanya `section` dan `article`?
2. Mengapa satu halaman sebaiknya hanya punya satu `h1`?
3. Apa fungsi `lang="id"` di tag `html`?

Hebat! Kerangka CodeKelas sudah berdiri. Di **Modul 2**, kita akan menyusun "bumbu dasar" tampilan: warna, jarak, dan tipografi dalam bentuk **design tokens** memakai CSS variables. Sampai jumpa! 🎓
