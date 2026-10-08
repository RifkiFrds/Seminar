# MODUL 2: Design Tokens & Tipografi

Halo lagi, teman-teman! Kerangka HTML kita sudah jadi, tapi masih polos. Sebelum mendandani halaman, ada satu kebiasaan profesional yang akan menghemat banyak waktu: **mengumpulkan semua keputusan desain di satu tempat**. Di dunia desain, ini disebut **design tokens**, dan di CSS kita membuatnya dengan **CSS variables**.

---

## 🎯 Apa Saja yang Akan Kita Capai Hari Ini?

Setelah menyelesaikan modul ini, saya harap teman-teman bisa:
1. Memahami masalah yang muncul kalau warna ditulis berulang-ulang.
2. Mendefinisikan warna, jarak, dan radius sebagai CSS variables di `:root`.
3. Memakai variabel dengan fungsi `var()`.
4. Memasang font dari Google Fonts.
5. Membuat ukuran judul yang menyesuaikan layar memakai `clamp()`.
6. **Goal Akhir:** Menyelesaikan bagian dasar `style.css` sehingga halaman CodeKelas punya font, warna, dan ritme jarak yang konsisten.

---

## 📚 Pembahasan Materi

### 2.1 Masalah Kalau Warna Ditulis Berulang

Bayangkan warna biru merek kita `#1F4FD8` ditulis di 30 tempat. Suatu hari klien bilang, "Ganti jadi hijau ya!". Kalian harus mencari dan mengganti 30 tempat itu satu per satu, dan pasti ada yang terlewat.

Solusinya: tulis warnanya **sekali**, beri **nama**, lalu pakai namanya di mana-mana.

### 2.2 CSS Variables di :root

```css
:root {
  --biru: #1F4FD8;
  --kuning: #FFC83D;
  --gelap: #0E1B3D;
  --bg: #FAF8F4;
  --surface: #FFFFFF;
  --text: #0E1B3D;
  --muted: #5B6478;
  --border: #E3DFD6;
}
```

Aturan penulisannya:
- Nama variabel **wajib diawali dua tanda hubung** (`--`).
- `:root` artinya elemen paling atas halaman, sehingga variabelnya bisa dipakai di mana saja.
- Memakainya dengan `var(--nama)`.

```css
h1 {
  color: var(--biru);
}
```

> Catatan Penting: Perhatikan bahwa kita memberi nama berdasarkan **peran** (`--bg`, `--surface`, `--text`, `--muted`), bukan hanya berdasarkan warna. Di Modul 5, kita akan mengganti nilai `--bg` dan `--text` saat dark mode dan seluruh halaman ikut berubah. Itulah kekuatan tokens.

### 2.3 Token untuk Jarak, Radius, dan Bayangan

Bukan cuma warna. Kita juga membuat skala jarak supaya semua ruang kosong terasa seirama:

```css
:root {
  --radius: 16px;
  --s1: 8px;
  --s2: 16px;
  --s3: 24px;
  --s4: 40px;
  --s5: 72px;
  --shadow: 0 8px 24px rgba(14, 27, 61, 0.08);
  color-scheme: light;
}
```

Sekarang kita tidak perlu menebak-nebak angka. Mau jarak kecil? Pakai `var(--s1)`. Jarak antar bagian besar? `var(--s5)`. Hasilnya halaman terlihat konsisten dan "mahal".

### 2.4 Memasang Font dari Google Fonts

Buka [fonts.google.com](https://fonts.google.com), pilih **Plus Jakarta Sans**, pilih bobot 400, 600, 700, 800, lalu salin tag `link`-nya ke `<head>` di `index.html`, **sebelum** tag `link` untuk `style.css`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
```

Lalu di CSS, kita pakai di `body`:

```css
body {
  margin: 0;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}
```

> Tips Dosen: Selalu tulis font cadangan (`system-ui, sans-serif`) setelah font utama. Kalau internet bermasalah dan font gagal dimuat, halaman tetap terbaca dengan font bawaan perangkat.

### 2.5 Reset Singkat dan Ukuran Judul dengan clamp()

Dua baris reset yang wajib ada di hampir setiap proyek:

```css
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
```

`box-sizing: border-box` membuat padding dan border dihitung **di dalam** lebar elemen, jadi ukuran kotak tidak membengkak. `scroll-behavior: smooth` membuat klik link menu meluncur halus ke bagian yang dituju.

Sekarang judul. Kita ingin judul besar di laptop dan lebih kecil di HP, **tanpa menulis media query**. Gunakan `clamp(minimum, ideal, maksimum)`:

```css
h1, h2, h3 {
  line-height: 1.15;
  margin: 0 0 var(--s2);
}

h1 {
  font-size: clamp(2rem, 5vw + 1rem, 3.5rem);
}

h2 {
  font-size: clamp(1.5rem, 3vw + 0.75rem, 2.25rem);
}

p {
  margin: 0 0 var(--s2);
}
```

Cara bacanya: ukuran `h1` akan mengikuti lebar layar (`5vw + 1rem`), tetapi **tidak akan lebih kecil dari `2rem`** dan **tidak akan lebih besar dari `3.5rem`**.

---

## 🛠️ Panduan Praktik Terbimbing

1. Di `index.html`, tambahkan tiga tag `link` font dari bagian **2.4** ke dalam `<head>`.
2. Di `style.css`, tulis blok `:root` lengkap (bagian **2.2** dan **2.3**) di baris paling atas.
3. Tulis reset, `body`, dan aturan judul dari bagian **2.4** dan **2.5**.
4. Simpan dan lihat browser. Halaman kalian sekarang punya font baru, latar krem, dan teks yang nyaman dibaca.
5. **Eksperimen:** ubah nilai `--biru` menjadi warna favoritmu, lalu pakai di `h1` dengan `color: var(--biru);`. Perhatikan betapa mudahnya satu perubahan berdampak ke seluruh halaman.
6. Buka DevTools (`F12`), pilih elemen `h1`, lalu perhatikan nilai `font-size` yang dihitung browser. Ubah lebar jendela browser dan lihat angkanya ikut berubah.

---

## 📝 Evaluasi Pemahaman

Silakan asah pemahaman kalian dengan menjawab kuis ini:
1. Mengapa nama variabel seperti `--bg` dan `--text` lebih baik daripada `--krem` dan `--hitam`?
2. Apa arti tiga nilai di dalam `clamp(2rem, 5vw + 1rem, 3.5rem)`?
3. Mengapa kita menulis font cadangan setelah font utama?

Mantap! Fondasi tampilan sudah rapi. Di **Modul 3**, kita akan menyusun tata letak halaman dengan **Flexbox** dan **CSS Grid**, termasuk trik grid yang otomatis menyesuaikan jumlah kolom. Sampai jumpa! 🎓
