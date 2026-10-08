# MODUL 3: Layout Modern dengan Flexbox & Grid

Halo teman-teman! Sekarang saatnya menata halaman. Di modul ini kita berkenalan dengan dua "alat penata letak" paling penting di CSS modern: **Flexbox** dan **CSS Grid**. Keduanya menggantikan trik-trik lama yang rumit, dan hampir semua website zaman sekarang memakainya.

---

## 🎯 Apa Saja yang Akan Kita Capai Hari Ini?

Setelah menyelesaikan modul ini, saya harap teman-teman bisa:
1. Memahami kapan memakai Flexbox dan kapan memakai Grid.
2. Menata header dan menu navigasi dengan Flexbox.
3. Membuat hero dua kolom dengan CSS Grid.
4. Membuat deretan kartu yang menyesuaikan jumlah kolom otomatis, **tanpa media query**.
5. **Goal Akhir:** Halaman CodeKelas sudah memiliki tata letak yang rapi dengan `max-width` dan jarak antar bagian yang konsisten.

---

## 📚 Pembahasan Materi

### 3.1 Flexbox atau Grid?

Cara mudah mengingatnya:

| Aspek | Flexbox | CSS Grid |
|---|---|---|
| Dimensi | Satu arah (baris **atau** kolom) | Dua arah (baris **dan** kolom) |
| Cocok untuk | Menu, deretan tombol, isi kartu | Tata letak halaman, deretan kartu |
| Titik awal | `display: flex` | `display: grid` |

> Catatan Penting: Keduanya bisa dipakai bersamaan. Grid untuk kerangka besar, Flexbox untuk mengatur isi di dalam tiap bagian. Jangan merasa harus memilih salah satu.

### 3.2 Header dan Navigasi dengan Flexbox

Kita ingin logo di kiri dan menu di kanan dalam satu baris:

```css
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--s2);
  max-width: 1120px;
  margin: 0 auto;
  padding: var(--s2) var(--s3);
}

.site-header nav {
  display: flex;
  gap: var(--s3);
}
```

Bedah tiap barisnya:

| Properti | Artinya |
|---|---|
| `display: flex` | Anak-anak elemen berjajar dalam satu baris |
| `justify-content: space-between` | Sebar sepanjang baris, ruang kosong di antara elemen |
| `align-items: center` | Sejajarkan di tengah secara vertikal |
| `flex-wrap: wrap` | Boleh turun ke baris baru jika tidak muat (penting di HP) |
| `gap` | Jarak antar anak elemen |

`margin: 0 auto` bersama `max-width` adalah trik klasik untuk **menaruh konten di tengah** dan membatasi lebarnya agar enak dibaca di layar lebar.

### 3.3 Hero Dua Kolom dengan Grid

```css
main {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 var(--s3);
}

.hero {
  display: grid;
  align-items: center;
  gap: var(--s4);
  padding: var(--s5) 0 var(--s4);
}

.section {
  padding-top: var(--s5);
}
```

Perhatikan, `.hero` belum menentukan kolom. Artinya di layar kecil, teks dan gambar **bertumpuk** dalam satu kolom, tepat seperti yang kita inginkan di HP. Pembagian dua kolom baru kita tambahkan di Modul 5 lewat media query. Inilah pendekatan **mobile-first**.

### 3.4 Deretan Kartu yang Otomatis Menyesuaikan

Ini jurus favorit saya. Satu baris saja, dan kartu akan menyesuaikan jumlah kolomnya sendiri sesuai lebar layar:

```css
.grid {
  display: grid;
  gap: var(--s3);
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
```

Cara membacanya dari dalam ke luar:
1. `minmax(240px, 1fr)` → tiap kolom **minimal 240px**, dan boleh melebar membagi sisa ruang sama rata (`1fr`).
2. `repeat(auto-fit, ...)` → ulangi kolom sebanyak yang **muat**.

Hasilnya: di layar lebar ada 3 kolom, di tablet 2 kolom, di HP 1 kolom. **Tanpa satu pun media query.**

> Tips Dosen: Coba kecilkan dan besarkan lebar jendela browser sambil memperhatikan kartu. Ini cara terbaik untuk benar-benar "merasakan" cara kerja `auto-fit`.

---

## 🛠️ Panduan Praktik Terbimbing

1. Buka `style.css`, lalu tambahkan blok layout dari bagian **3.2** dan **3.3**.
2. Tambahkan aturan `.grid` dari bagian **3.4**.
3. Pastikan kartu di HTML dibungkus `<div class="grid">`, seperti ini:

```html
<section id="fitur" class="section">
  <h2>Kenapa CodeKelas?</h2>
  <div class="grid">
    <article class="card" style="--i: 0"> ... </article>
    <article class="card" style="--i: 1"> ... </article>
    <article class="card" style="--i: 2"> ... </article>
  </div>
</section>
```

4. Simpan dan perhatikan: header sudah rapi, konten berada di tengah, dan kartu berjajar tiga kolom.
5. **Eksperimen 1:** ubah `240px` menjadi `320px` dan lihat kapan kartu turun menjadi dua kolom.
6. **Eksperimen 2:** ganti `auto-fit` menjadi `auto-fill`. Coba dengan hanya dua kartu di dalam grid dan bandingkan hasilnya.
7. Buka DevTools mode perangkat (`Ctrl + Shift + M`) dan lihat tampilannya di ukuran HP.

---

## 📝 Evaluasi Pemahaman

Silakan asah pemahaman kalian dengan menjawab kuis ini:
1. Kapan sebaiknya kita memakai Flexbox, dan kapan Grid?
2. Apa fungsi `margin: 0 auto` bersama `max-width`?
3. Mengapa `repeat(auto-fit, minmax(240px, 1fr))` bisa membuat kartu responsif tanpa media query?

Keren! Halaman kalian sekarang sudah punya bentuk. Di **Modul 4**, kita akan membuat kartu, tombol, dan animasi halus yang membuat website terasa hidup. Sampai jumpa! 🎓
