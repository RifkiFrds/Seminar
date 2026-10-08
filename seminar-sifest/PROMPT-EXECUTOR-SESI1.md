# PROMPT EXECUTOR — DECK SI FEST 2026, SESI 1 (SISWA)

Salin seluruh isi di bawah garis ini sebagai prompt untuk AI Executor.

---

## PERAN

Kamu adalah Senior Presentation Designer sekaligus Instructional Designer. Kamu membuat deck `.pptx` untuk workshop pemrograman web pemula, dengan standar visual keynote modern (Apple Keynote, Linear, Vercel) dan standar pedagogi yang jelas: satu ide per slide, bahasa mudah, ada momen praktik.

## KONTEKS ACARA (sumber kebenaran: file `TOR Workshop SI Fest 2026.pdf`, baca dulu)

| Item | Isi |
|---|---|
| Acara | Sistem Informasi Festival (SI FEST) 2026, program kerja HIMASI "Diving Deep Into Technology" |
| Penyelenggara | HIMASI (Himpunan Mahasiswa Sistem Informasi), Budi Luhur University Jakarta |
| Tema | **Unlock Your Potential Through Web Technology** |
| Waktu | Sabtu, 10 Oktober 2026, **Sesi 1: 07.30 – 11.20 WIB (230 menit)** |
| Tempat | Lab ICT, Budi Luhur University (praktik langsung di komputer) |
| Audiens Sesi 1 | **Siswa SMA/SMK, pemula total**, belum tentu pernah menulis kode |
| Pemateri | (placeholder: `Nama Pemateri`, `Role · Organisasi`) |

### Tujuan Sesi 1 (dari TOR, jadi acuan semua keputusan konten)

1. Mengenalkan dasar pembuatan website.
2. Menumbuhkan ketertarikan terhadap dunia coding.
3. Membangun kepercayaan diri mencoba hal baru di bidang teknologi.
4. Menghasilkan karya digital berupa **website personal profile sebagai portofolio awal**.

### Perihal pembahasan (dari TOR, wajib tercakup)

a. Pengenalan dasar HTML dan CSS
b. Praktik membuat struktur halaman website
c. Praktik mengatur tampilan (styling) website
d. Pembuatan website personal profile sebagai portofolio

**Di luar cakupan:** JavaScript, framework, Laravel (itu Sesi 2 untuk mahasiswa). Boleh disinggung hanya di slide penutup sebagai "langkah selanjutnya".

## KEPUTUSAN YANG SUDAH DIKUNCI

- **Identitas visual baru** khusus SI Fest (bukan design system Vibecoding HIMTI lama).
- **AI = tutor, bukan penulis kode.** Siswa mengetik kode sendiri. AI hanya untuk menjelaskan kode/error. Satu segmen kecil saja, bukan tema utama.
- **Praktik di PC Lab** dengan VS Code + ekstensi Live Server. Tidak perlu slide instalasi, cukup slide verifikasi setup.
- **Ada sesi deploy singkat** (Netlify Drop atau GitHub Pages) agar siswa pulang membawa link portofolio.
- Bahasa: Indonesia santai-sopan (kamu/kita). Istilah teknis tetap Inggris (tag, selector, flexbox) dengan padanan singkat saat pertama muncul.

## ARAH VISUAL

**Karakter:** hangat, energik, ramah pemula, tapi tetap terlihat profesional. Bukan tugas sekolah, bukan template PowerPoint bawaan.

**Palet (diturunkan dari logo HIMASI dan Budi Luhur):**

| Peran | Warna |
|---|---|
| Ink (teks, latar gelap) | `#0E1B3D` (navy dalam) |
| Primary | `#1F4FD8` (biru) |
| Aksen hangat | `#E63946` (merah HIMASI), pakai hemat |
| Highlight | `#FFC83D` (kuning), untuk penekanan kecil dan checkpoint |
| Latar terang | `#FAF8F4` |
| Teks sekunder | `#5B6478` |
| Garis halus | `#E3DFD6` |

**Font:** Heading `Plus Jakarta Sans` (Bold/ExtraBold), body `Plus Jakarta Sans` (Regular), kode `JetBrains Mono`. Sediakan juga varian **SafeFonts** (Calibri + Consolas) sebagai cadangan untuk PC lab.

**Aturan desain:**

- Satu ide per slide. Judul berupa kalimat bermakna, bukan label ("Browser meminta, server menjawab", bukan "Cara Kerja Web").
- Teks kode ukuran **minimal 20pt**, kontras tinggi, terbaca dari baris belakang lab. Teks biasa minimal 18pt, judul 36–60pt.
- Blok kode: latar gelap, font mono, nomor baris, **baris kunci di-highlight kuning**.
- Variasikan tipe slide: statement besar, split kode/hasil, diagram, full-bleed section cover, checklist. Dilarang memakai satu pola yang sama lebih dari 2 slide berturut-turut.
- Tidak ada accent line di bawah judul, tidak ada color bar di tepi slide atau kartu. Kartu secukupnya, bukan di semua slide.
- Ilustrasi: ikon outline/monoline konsisten. Hindari emoji dan clipart. Foto hanya jika berkualitas tinggi dan berlisensi bebas (Unsplash/Pexels).
- Setiap slide konsep HTML/CSS memakai pola **"Kode kiri → Hasil di browser kanan"** (mock browser sederhana) supaya siswa langsung melihat sebab-akibat.
- Slide praktik memakai penanda visual khusus **"Checkpoint"** (lencana kuning) agar siswa tahu kapan harus mengetik.
- Logo HIMASI dan Budi Luhur dipakai di cover dan penutup. Minta file logo ke pengguna, jangan membuat ulang. Jika belum ada, beri placeholder berlabel jelas.

## STRUKTUR DECK (±30 slide, 230 menit)

> Prinsip alokasi: **sekitar 60% waktu adalah praktik.** Slide sengaja ringkas; pemateri live-coding berdampingan dengan slide.

### A. Pembukaan (07.30 – 07.50)

1. **Cover.** "Unlock Your Potential Through Web Technology" · SI FEST 2026 · Sesi 1.
2. **Perkenalan pemateri.** Placeholder nama, foto, 2–3 fakta singkat.
3. **Yang kamu buat hari ini.** Mock browser berisi halaman personal profile jadi. Pesan: "Jam 11.20 kamu punya website sendiri, dengan link."
4. **Roadmap sesi.** Linimasa 4 fase: Web 101 → HTML → CSS → Proyek & Publish.
5. **Pemanasan interaktif.** Tiga pertanyaan angkat tangan: pernah klik kanan → Inspect? Pernah bikin website? Takut salah kode? Pesan penutup: "Salah itu normal. Programmer profesional juga salah tiap hari."

### B. Web 101 (07.50 – 08.20)

6. **Section cover 01: Dasar Web.**
7. **Browser meminta, server menjawab.** Diagram sederhana: kamu → browser → internet → server → halaman. Hanya request/response, tanpa istilah berat.
8. **Tiga bahan sebuah website.** HTML = kerangka, CSS = penampilan, JavaScript = gerakan. Analogi tubuh: tulang, pakaian, otot. Tandai: "Hari ini kita pakai dua yang pertama."
9. **Alat tempurmu.** VS Code (menulis), Live Server (melihat hasil otomatis), DevTools (mengintip website mana pun, F12).
10. **Checkpoint 0: Siapkan proyek.** Buat folder `portfolio/` berisi `index.html` dan `style.css`, buka dengan Live Server. Tampilkan struktur folder dan hasil "Hello SI Fest!" di browser.

### C. HTML (08.20 – 09.20)

11. **Section cover 02: HTML, kerangka website.**
12. **Anatomi sebuah tag.** `<p class="intro">Halo!</p>`, dengan label: tag pembuka, atribut, isi, tag penutup, elemen.
13. **Kerangka wajib dokumen.** `<!DOCTYPE html>`, `<html lang="id">`, `<head>` (charset, viewport, title), `<body>`. Jelaskan fungsi head vs body dengan 1 kalimat tiap baris.
14. **Teks dan judul.** `h1`–`h6`, `p`, `strong`, `em`. Satu `h1` per halaman.
15. **Link dan gambar.** `<a href>`, `<img src alt>`. Tekankan atribut `alt` (aksesibilitas) dan path relatif (`img/foto.jpg`). Tambahkan `loading="lazy"` sebagai praktik modern.
16. **Daftar dan struktur semantik.** `ul/ol/li`, lalu `header`, `nav`, `main`, `section`, `footer`. Pesan: tag bermakna lebih baik daripada `div` di mana-mana (mesin pencari dan pembaca layar paham strukturnya).
17. **Checkpoint 1: Bangun kerangka profilmu.** Checklist bagian wajib: header nama, nav, Tentang Saya, Skill (list), Project (min. 2), Kontak (link), footer. Tanpa styling, tampilan polos itu **normal dan benar**.

> ISTIRAHAT 09.20 – 09.35

### D. CSS (09.35 – 10.35)

18. **Section cover 03: CSS, penampilan website.**
19. **Sebelum dan sesudah.** Halaman yang sama tanpa CSS vs dengan CSS. Momen "wow" pembuka.
20. **Cara kerja CSS.** `selector { property: value; }` dibedah per bagian. Tunjukkan `<link rel="stylesheet" href="style.css">`.
21. **Selector: cara memilih elemen.** Tag, `.class`, `#id`. Satu aturan praktis: pakai class untuk hampir semua hal.
22. **Warna dan tipografi.** `color`, `background`, `font-family` + Google Fonts. Perkenalkan **CSS variables** di `:root` (`--warna-utama`) agar ganti tema cukup di satu tempat.
23. **Box model.** Diagram berlapis: content, padding, border, margin. Wajib: `* { box-sizing: border-box; }`. Analogi: bingkai foto.
24. **Layout modern dengan Flexbox.** `display:flex`, `gap`, `justify-content`, `align-items`. Contoh: navbar dan deretan kartu skill. Sebut CSS Grid hanya sebagai "kakak Flexbox untuk layout 2 dimensi", satu contoh untuk kartu project.
25. **Responsive: satu web, semua layar.** `meta viewport`, `max-width`, satu `@media`, dan `clamp()` untuk font. Demo di DevTools mode device.
26. **Checkpoint 2: Dandani profilmu.** Checklist: warna tema via variables, font dari Google Fonts, navbar flex, kartu project, tampil rapi di layar HP. **Bonus** (untuk yang cepat): `:hover` dengan `transition`, dark mode via `prefers-color-scheme`.

### E. Proyek, Publish, Penutup (10.35 – 11.20)

27. **Debugging 101: 5 kesalahan paling umum.** Lupa tutup tag, path gambar salah, typo nama class, lupa link CSS, kurung kurawal tidak ditutup. Satu cara cek: DevTools + "baca pesannya pelan-pelan".
28. **AI sebagai tutor, bukan joki.** Tiga prompt aman siswa: "Jelaskan kode ini baris per baris", "Kenapa gambarku tidak muncul? Ini kodeku...", "Beri 3 ide mempercantik halaman profil, jangan tulis kodenya." Aturan emas: **kamu yang mengetik dulu.** Menyalin tanpa paham = tidak belajar.
29. **Checkpoint 3: Sprint akhir.** Timer 20 menit. Rubrik mandiri: struktur lengkap, tampilan konsisten, responsif, ada foto/identitas diri.
30. **Publish: dari komputermu ke dunia.** Langkah Netlify Drop (drag folder → dapat link) dan alternatif GitHub Pages. Beri 1 slide cadangan "jika internet bermasalah" (tunjukkan hasil lokal, publish di rumah).
31. **Showcase.** Panggung 3–4 siswa memperlihatkan hasilnya. Slide hanya berisi frame kosong bergaya mock browser.
32. **Setelah hari ini.** Peta belajar: JavaScript → Git/GitHub → framework. Satu baris teaser: "Kakak-kakak mahasiswa di Sesi 2 membahas Laravel."
33. **Penutup dan Q&A.** Ucapan terima kasih, logo HIMASI + Budi Luhur, kontak/akun pemateri (placeholder).

Jika durasi per bagian terasa padat, **kurangi slide, jangan kurangi praktik.** Slide 19, 23, 25, 28 adalah kandidat paling aman untuk dipangkas atau digabung.

## SPEAKER NOTES (wajib di setiap slide)

Isi per slide: (1) **Waktu** estimasi menit, (2) **Naskah ucap** 3–6 kalimat bahasa lisan, (3) **Aksi** (live-coding / tanya jawab / instruksi checkpoint), (4) **Jebakan umum** yang biasa terjadi pada siswa pemula di slide itu. Pada slide Checkpoint, tambahkan **solusi kode lengkap** supaya pemateri bisa menolong cepat.

## LAMPIRAN WAJIB (di luar deck)

1. `starter-kit/` berisi `index.html` solusi akhir dan `style.css` solusi akhir untuk contoh profil, cukup bersih dan bisa dijadikan acuan pemateri. Struktur kode harus **persis sama** dengan yang ditampilkan di slide.
2. `PRESENTATION-BLUEPRINT.md`: tabel ringkas nomor slide, judul, tipe layout, durasi.
3. `README-DECK.md`: font yang harus dipasang, placeholder yang harus diisi, cara membangun ulang.

## ATURAN KONTEN

- Semua kode di slide harus **benar-benar dijalankan** dan terbukti tampil sesuai mock hasil. Jangan menulis kode tanpa menguji.
- Gunakan standar modern: HTML5 semantik, CSS variables, Flexbox/Grid, `clamp()`, `prefers-color-scheme`. **Jangan** mengajarkan praktik usang (`<font>`, `<center>`, layout `<table>`, atribut `align`).
- Kode contoh bertema **personal profile siswa**, bukan "foo/bar". Konsisten memakai satu contoh berjalan dari awal sampai akhir.
- Satu slide memperkenalkan **maksimal 3 konsep baru.**
- Jangan mengarang statistik atau klaim. Jika butuh angka, tandai `[PERLU DIVERIFIKASI]`.
- Jangan menambah materi di luar TOR kecuali sebagai bonus yang jelas ditandai.

## TEKNIS PEMBUATAN

- Output utama: `SI-Fest-2026-Sesi1.pptx` dan `SI-Fest-2026-Sesi1-SafeFonts.pptx`, rasio 16:9.
- Boleh memakai pendekatan generator `pptxgenjs` seperti di `../generator/` (lihat `kit.js`, `lib.js`) sebagai referensi komponen, **tetapi desain ulang dengan palet dan font baru**, jangan menyalin gaya lama.
- Render semua slide menjadi gambar dan **periksa sendiri**: teks tidak terpotong, tidak ada overflow, kontras terbaca, tidak ada dua slide beruntun dengan layout identik.
- Tabrakan antara teks dan elemen dianggap cacat. Perbaiki sebelum menyerahkan.

## KRITERIA SELESAI

- [ ] Keempat poin "Perihal Pembahasan" TOR tercakup, tertelusuri ke nomor slide.
- [ ] Total waktu = 230 menit, praktik ≥ 55%.
- [ ] Tiga checkpoint praktik + sprint akhir ada dan jelas.
- [ ] Kode contoh teruji, starter-kit cocok dengan slide.
- [ ] Speaker notes lengkap di semua slide.
- [ ] Tidak ada konten di luar TOR kecuali bonus yang ditandai.
- [ ] Bukti visual: ringkasan hasil render dan daftar masalah yang ditemukan lalu diperbaiki.

## LAPORAN AKHIR

Tutup dengan: daftar file, tabel pemetaan TOR → nomor slide, daftar placeholder yang harus saya isi, dan keputusan desain yang kamu ambil sendiri beserta alasannya.
