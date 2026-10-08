# MODUL 4: Komponen & Micro-interaction

Halo teman-teman! Layout sudah rapi. Sekarang kita buat halaman ini **terasa hidup**. Website modern bukan hanya soal tampilan, tapi juga soal "rasa": tombol yang merespon saat disentuh, kartu yang terangkat halus, dan elemen yang muncul dengan anggun. Detail kecil seperti ini disebut **micro-interaction**.

---

## 🎯 Apa Saja yang Akan Kita Capai Hari Ini?

Setelah menyelesaikan modul ini, saya harap teman-teman bisa:
1. Membuat komponen tombol dengan beberapa varian (`btn-primary` dan `btn-ghost`).
2. Membuat kartu dengan border, bayangan, dan radius yang konsisten.
3. Menambahkan efek `:hover` yang halus memakai `transition` dan `transform`.
4. Membuat tombol bisa diakses keyboard dengan `:focus-visible`.
5. Membuat animasi dengan `@keyframes`, termasuk animasi bergantian lewat CSS variable.
6. Membuat progress bar yang nilainya diatur dari HTML.
7. **Goal Akhir:** Halaman CodeKelas punya tombol, kartu, badge, progress bar, dan animasi yang halus.

---

## 📚 Pembahasan Materi

### 4.1 Tombol yang Punya Varian

Satu kelas dasar `.btn` untuk bentuk, lalu kelas varian untuk warna:

```css
.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary {
  background: var(--biru);
  color: #FFFFFF;
  box-shadow: var(--shadow);
}

.btn-ghost {
  border: 2px solid var(--border);
}
```

Di HTML, kita menumpuk dua kelas: `class="btn btn-primary"`. Pola ini membuat bentuk tombol cukup ditulis sekali, dan varian baru tinggal menambah satu kelas kecil.

`border-radius: 999px` adalah trik untuk membuat sudut tombol **bulat penuh** (bentuk pil).

### 4.2 Hover, Transition, dan Transform

```css
.btn:hover {
  transform: translateY(-2px);
}
```

Tanpa `transition`, tombol akan **meloncat** seketika. Dengan `transition: transform 0.2s`, perpindahannya jadi **halus selama 0,2 detik**.

> Peringatan Dosen: Untuk menggeser elemen saat hover, pakailah `transform`, bukan `margin` atau `top`. `transform` diproses lebih ringan oleh browser sehingga animasinya mulus, sedangkan mengubah `margin` memaksa browser menghitung ulang tata letak seluruh halaman dan terasa patah-patah.

### 4.3 Fokus untuk Pengguna Keyboard

Tidak semua orang memakai mouse. Sebagian pengguna menekan `Tab` untuk berpindah antar tombol. Beri mereka penanda yang jelas:

```css
.btn:focus-visible {
  outline: 3px solid var(--kuning);
  outline-offset: 3px;
}
```

Keunggulan `:focus-visible` dibanding `:focus`: garis ini hanya muncul saat fokus datang dari **keyboard**, bukan saat kita mengeklik dengan mouse. Jadi tampilan tetap bersih, tapi tetap ramah aksesibilitas.

### 4.4 Kartu, Badge, dan Progress Bar

```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--s3);
  box-shadow: var(--shadow);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-6px);
}

.badge {
  display: inline-block;
  margin-bottom: var(--s2);
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--kuning);
  color: var(--gelap);
  font-size: 0.75rem;
  font-weight: 800;
}
```

Sekarang bagian yang paling menarik, **progress bar yang nilainya diatur dari HTML**. Di CSS kita pakai variabel `--progress`, dan di HTML kita isi nilainya langsung di elemen:

```css
.bar {
  height: 8px;
  border-radius: 999px;
  background: var(--border);
  overflow: hidden;
}

.bar span {
  display: block;
  height: 100%;
  width: var(--progress, 0%);
  background: var(--biru);
}
```

```html
<div class="bar" style="--progress: 80%"><span></span></div>
```

Nilai `0%` di dalam `var(--progress, 0%)` adalah **nilai cadangan** kalau variabelnya lupa diisi. Hanya dengan mengubah angka di HTML, panjang bar langsung berubah, tanpa menyentuh CSS.

### 4.5 Animasi dengan @keyframes

Kita ingin kartu **muncul sambil naik halus** saat halaman dibuka:

```css
@keyframes muncul {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
```

Lalu pasang di `.card`. Tambahkan dua baris di dalam aturan `.card` yang sudah ada:

```css
.card {
  animation: muncul 0.6s both;
  animation-delay: calc(var(--i) * 120ms);
}
```

Ingat angka `--i: 0`, `--i: 1`, `--i: 2` yang kita titipkan di HTML pada Modul 1? Sekarang terpakai! `calc(var(--i) * 120ms)` membuat kartu pertama muncul langsung, kartu kedua tertunda 120ms, kartu ketiga 240ms. Hasilnya kartu muncul **bergantian**, efek yang biasanya dibuat dengan JavaScript.

`both` memastikan kartu tetap tersembunyi selama menunggu gilirannya dan tetap tampil setelah animasi selesai.

### 4.6 Animasi Melayang untuk Ilustrasi Hero

```css
@keyframes melayang {
  50% {
    transform: translateY(-10px);
  }
}

.mock {
  padding: var(--s3);
  border-radius: var(--radius);
  background: var(--gelap);
  box-shadow: var(--shadow);
  animation: melayang 6s ease-in-out infinite;
}
```

Perhatikan `@keyframes melayang` hanya menulis titik `50%`. Browser otomatis memakai posisi awal sebagai 0% dan 100%. `infinite` membuatnya berulang selamanya.

> Tips Dosen: Animasi terbaik adalah yang **hampir tidak disadari**. Gerakan 10px dengan durasi 6 detik terasa tenang dan elegan, sedangkan gerakan besar dan cepat justru mengganggu.

---

## 🛠️ Panduan Praktik Terbimbing

1. Pastikan HTML sudah memuat kartu, badge, dan bar seperti pada Modul 1.
2. Tambahkan CSS komponen dari bagian **4.1** sampai **4.4** ke `style.css`.
3. Tambahkan juga gaya `.eyebrow`, `.lead`, dan `.actions` agar hero rapi:

```css
.eyebrow {
  color: var(--biru);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lead {
  max-width: 52ch;
  color: var(--muted);
  font-size: 1.125rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s2);
}
```

4. Tambahkan animasi `muncul` dan `melayang` dari bagian **4.5** dan **4.6**, lalu lengkapi gaya ilustrasi hero, bagian ajakan (`.cta`), dan `footer`:

```css
.mock-dots span {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-radius: 50%;
  background: #E63946;
}

.mock-dots span:nth-child(2) {
  background: var(--kuning);
}

.mock-dots span:nth-child(3) {
  background: #1E9E68;
}

.mock-lines span {
  display: block;
  height: 10px;
  margin-top: 14px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.18);
}

.mock-lines span:nth-child(1) { width: 70%; }
.mock-lines span:nth-child(2) { width: 90%; }
.mock-lines span:nth-child(3) { width: 55%; }
.mock-lines span:nth-child(4) { width: 80%; }

.cta {
  margin: var(--s5) 0;
  padding: var(--s4) var(--s3);
  border-radius: calc(var(--radius) * 1.5);
  background: var(--gelap);
  color: #FFFFFF;
  text-align: center;
}

footer {
  padding: var(--s4) var(--s3);
  color: var(--muted);
  text-align: center;
}
```

5. Segarkan halaman dan perhatikan kartu muncul bergantian.
6. Tekan `Tab` berulang kali di keyboard dan lihat garis kuning di tombol yang sedang fokus.
7. **Tantangan:** ubah `--progress` pada tiap kartu kelas menjadi angka kalian sendiri.

---

## 📝 Evaluasi Pemahaman

Silakan asah pemahaman kalian dengan menjawab kuis ini:
1. Mengapa efek hover sebaiknya memakai `transform`, bukan `margin`?
2. Apa keunggulan `:focus-visible` dibanding `:focus`?
3. Bagaimana `calc(var(--i) * 120ms)` membuat kartu muncul bergantian?

Luar biasa! Halaman kalian sekarang terasa hidup. Di **Modul 5**, kita akan membuatnya nyaman di semua ukuran layar dan menambahkan **dark mode** hanya dengan mengganti nilai variabel. Sampai jumpa! 🎓
