// Slides 18–26: CSS
const L = require('./lib.js');
const K = require('./kit.js');
const { C, W, rect, rr, ell, line, text, head, mono, notes } = L;
const { M, page, chip, checkpoint, codeBox, browser, plainPage, styledPage, checkbox } = K;
const N = (waktu, naskah, aksi, jebakan, solusi) => notes({ waktu, naskah, aksi, jebakan, solusi });

// ── 18 · Section 03 ───────────────────────────────────────────────────────
K.sectionCover('03', 'CSS', 'Penampilan website. Dari polos jadi memikat', '09.35 – 10.35', 'CSS', 'Section 03 — CSS', 1);
N('1 menit', 'Selamat datang kembali! Kerangka sudah jadi. Sekarang kita buat halaman itu cantik.', 'Pastikan semua sudah duduk dan Live Server menyala. Buka proyek yang sama dengan sebelum istirahat.', 'Beberapa PC mungkin mati/terkunci setelah istirahat. Cek dulu, jangan langsung lanjut.');

// ── 19 · Sebelum / sesudah (dark) ─────────────────────────────────────────
(function () {
  page({ name: 'Sebelum dan sesudah CSS', section: 'CSS', menit: 3, jenis: 'T', dark: true, kicker: '03 · CSS', title: 'Halaman yang sama. Bedanya hanya CSS.' });
  chip(M, 1.85, 1.6, 0.34, 'SEBELUM', { fill: C.lineDark, color: C.inv2, size: 11 });
  chip(6.95, 1.85, 1.6, 0.34, 'SESUDAH', { fill: C.yellow, color: C.navy, size: 11 });
  const a = browser(M, 2.35, 5.6, 4.3, { url: 'localhost:5500', dark: true });
  plainPage(a, 99, 1.0);
  const b = browser(6.95, 2.35, 5.55, 4.3, { url: 'localhost:5500', dark: true });
  styledPage(b, 1.1);
  ell({ x: 6.1, y: 4.1, w: 0.7, h: 0.7, fill: C.yellow });
  text({ x: 6.1, y: 4.1, w: 0.7, h: 0.7, text: '→', font: 'head', bold: true, size: 28, color: C.navy, align: 'center', valign: 'middle', wrap: false });
  N('3 menit',
    'Ini halaman yang sama, dengan HTML yang persis sama. Kiri tanpa CSS, kanan dengan CSS. Semua perbedaan ini, warna, font, susunan, datang dari satu file bernama style.css. Ingat pertanyaan saya tadi tentang website tanpa CSS? Inilah jawabannya.',
    'Biarkan siswa memandang slide ini 10 detik. Minta komentar: "mana yang kalian lebih suka?"',
    'Tidak ada. Slide ini hanya motivasi.');
})();

// ── 20 · Cara kerja CSS ───────────────────────────────────────────────────
(function () {
  page({ name: 'Cara kerja CSS', section: 'CSS', menit: 5, jenis: 'K', kicker: '03 · CSS', title: 'Cara kerja CSS', titleH: 0.7 });
  const a = codeBox(M, 1.9, 7.3, ['h1 {', '  color: navy;', '  font-size: 40px;', '}'], { file: 'style.css', size: 20, lang: 'css', hl: [1] });
  const b = codeBox(M, a.bottom + 0.3, 7.3, ['<link rel="stylesheet" href="style.css">'], { file: 'index.html  (di dalam <head>)', size: 20, nums: false });
  text({ x: M, y: b.bottom + 0.2, w: 7.3, h: 0.4, text: 'Satu baris ini menghubungkan HTML dengan CSS.', size: 16, color: C.txt2 });
  [['selector', C.sAttr, 'siapa yang didandani (h1)'], ['property', C.sTag, 'apa yang diubah (color)'], ['value', C.sStr, 'jadi apa (navy)']].forEach(([a1, col, d], i) => {
    const y = 2.0 + i * 0.95;
    rr({ x: 8.7, y, w: 1.85, h: 0.5, r: 0.12, fill: C.code });
    mono({ x: 8.7, y, w: 1.85, h: 0.5, text: a1, size: 16, bold: true, color: col, align: 'center', valign: 'middle' });
    text({ x: 10.7, y, w: 1.8, h: 0.6, text: d, size: 14, lh: 1.25, color: C.navy, valign: 'middle' });
  });
  line({ x: 8.7, y: 4.95, w: 3.8, h: 0, color: C.line });
  text({ x: 8.7, y: 5.05, w: 3.8, h: 0.3, text: 'HASIL', font: 'head', bold: true, size: 11, charSpacing: 1.8, color: C.blue });
  head({ x: 8.7, y: 5.4, w: 3.8, h: 0.8, text: 'Alya Putri', size: 40, color: '000080', wrap: false });
  N('5 menit',
    'CSS ditulis dengan pola yang sama selalu: selector, kurung kurawal, lalu pasangan property dan value. Selector menjawab SIAPA yang didandani. Property menjawab APA yang diubah. Value menjawab JADI APA. Agar CSS bekerja, kita hubungkan file style.css ke HTML lewat satu tag link di dalam head.',
    'Siswa membuka style.css, mengetik aturan h1, menambahkan tag link di head index.html, simpan, dan lihat nama berubah warna dan ukuran.',
    '1) Lupa menambah tag link, CSS tidak berjalan. 2) Lupa titik koma di akhir baris. 3) Salah nama file (style.css vs styles.css). 4) Tanda { atau } tidak berpasangan.',
    'style.css:\nh1 {\n  color: navy;\n  font-size: 40px;\n}\n\nindex.html (di dalam <head>):\n<link rel="stylesheet" href="style.css">');
})();

// ── 21 · Selector ─────────────────────────────────────────────────────────
(function () {
  page({ name: 'Selector', section: 'CSS', menit: 5, jenis: 'K', kicker: '03 · CSS', title: 'Selector: cara memilih elemen', titleH: 0.7 });
  [['p { }', '<p>Halo</p>', 'Semua elemen p.'], ['.kartu { }', '<div class="kartu">', 'Semua elemen ber-class kartu. Boleh dipakai berkali-kali.'], ['#header { }', '<header id="header">', 'Satu elemen unik. Hanya sekali per halaman.']].forEach(([sel, html, d], i) => {
    const y = 1.95 + i * 1.3;
    line({ x: M, y, w: 11.7, h: 0, color: C.line });
    mono({ x: M, y: y + 0.15, w: 3.5, h: 0.9, text: sel, size: 28, bold: true, color: C.blue, valign: 'middle' });
    rr({ x: 4.5, y: y + 0.3, w: 3.9, h: 0.6, r: 0.12, fill: C.code });
    mono({ x: 4.7, y: y + 0.3, w: 3.6, h: 0.6, text: html, size: 17, color: C.sTxt, valign: 'middle' });
    text({ x: 8.8, y: y + 0.15, w: 3.7, h: 0.9, text: d, size: 16, lh: 1.3, color: C.navy, valign: 'middle' });
  });
  rr({ x: M, y: 6.0, w: 11.7, h: 0.7, r: 0.16, fill: C.yellowTint });
  text({ x: M + 0.3, y: 6.0, w: 11.1, h: 0.7, text: 'Aturan praktis: pakai class untuk hampir semua hal.', font: 'head', bold: true, size: 19, color: C.navy, valign: 'middle' });
  N('5 menit',
    'Ada tiga cara memilih elemen. Pakai nama tag: semua paragraf. Pakai class dengan titik di depan: semua elemen yang punya class itu. Pakai id dengan tanda pagar: satu elemen unik. Aturan praktis untuk pemula: pakai class untuk hampir semua hal. Class fleksibel dan bisa dipakai berkali-kali.',
    'Tambahkan class="kartu" ke satu article project dan beri style di CSS: .kartu { border: 1px solid #ccc; padding: 16px; }. Siswa mengikuti.',
    'Lupa titik di depan nama class (kartu { } bukan .kartu { }), akibatnya style tidak muncul. Typo nama class juga sering terjadi.',
    '.kartu {\n  border: 1px solid #ccc;\n  padding: 16px;\n}');
})();

// ── 22 · Warna dan tipografi ──────────────────────────────────────────────
(function () {
  page({ name: 'Warna dan tipografi', section: 'CSS', menit: 6, jenis: 'K', kicker: '03 · CSS', title: 'Warna dan font', titleH: 0.7 });
  const a = codeBox(M, 1.9, 7.4, [':root {', '  --biru: #1F4FD8;', '}', 'h1 {', '  color: var(--biru);', "  font-family: 'Poppins', sans-serif;", '}'], { file: 'style.css', size: 20, lang: 'css', hl: [1, 4] });
  text({ x: M, y: a.bottom + 0.25, w: 7.4, h: 0.9, text: 'Font gratis: fonts.google.com → pilih font → salin tag <link> ke dalam <head>.', size: 16, lh: 1.4, color: C.txt2 });
  [['--biru', '#1F4FD8', C.blue], ['--kuning', '#FFC83D', C.yellow], ['--gelap', '#0E1B3D', C.navy]].forEach(([n, hx, col], i) => {
    const y = 2.0 + i * 1.15;
    rr({ x: 8.9, y, w: 0.9, h: 0.9, r: 0.16, fill: col, line: { color: C.line, width: 1 } });
    mono({ x: 10.0, y, w: 2.5, h: 0.45, text: n, size: 18, bold: true, color: C.navy, valign: 'middle' });
    mono({ x: 10.0, y: y + 0.45, w: 2.5, h: 0.4, text: hx, size: 15, color: C.txt2, valign: 'middle' });
  });
  text({ x: 8.9, y: 5.55, w: 3.6, h: 1.1, text: 'Ganti satu baris di :root, seluruh warna halaman ikut berubah.', size: 16, lh: 1.4, color: C.navy });
  N('6 menit',
    'Warna dan font adalah dua hal yang paling cepat mengubah kesan website. Kita pakai CSS variables: kita definisikan warna sekali di root, lalu pakai di mana-mana dengan var. Kalau mau ganti tema, cukup ubah satu baris. Untuk font, kita ambil dari Google Fonts, gratis.',
    'Buka fonts.google.com, pilih Poppins (atau Plus Jakarta Sans), salin tag link ke head. Siswa memilih warna favorit mereka dan menaruhnya di --biru.',
    '1) Lupa menyalin tag link font ke head. 2) Nama font salah ketik. 3) Ada tanda -- yang hilang di nama variabel. 4) Internet tidak ada, font tidak termuat: tetap tampil dengan font cadangan sans-serif, jelaskan fungsinya.',
    ':root {\n  --biru: #1F4FD8;\n}\nh1 {\n  color: var(--biru);\n  font-family: \'Poppins\', sans-serif;\n}\n\nindex.html (<head>):\n<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">');
})();

// ── 23 · Box model ────────────────────────────────────────────────────────
(function () {
  page({ name: 'Box model', section: 'CSS', menit: 5, jenis: 'T', kicker: '03 · CSS', title: 'Setiap elemen adalah sebuah kotak', titleH: 0.7 });
  rect({ x: M, y: 1.95, w: 5.6, h: 4.7, fill: C.blueTint, line: { color: C.blue, width: 1.5, dash: true } });
  rect({ x: 1.4, y: 2.5, w: 4.5, h: 3.6, fill: C.white, line: { color: C.navy, width: 4 } });
  rect({ x: 1.9, y: 3.0, w: 3.5, h: 2.6, fill: C.blueLt });
  rect({ x: 2.4, y: 3.5, w: 2.5, h: 1.6, fill: C.yellow });
  [['margin', 2.05], ['border', 2.6], ['padding', 3.08]].forEach(([t, y]) => mono({ x: M, y, w: 5.6, h: 0.35, text: t, size: 14, bold: true, color: C.navy, align: 'center', valign: 'middle' }));
  mono({ x: 2.4, y: 3.5, w: 2.5, h: 1.6, text: 'content', size: 16, bold: true, color: C.navy, align: 'center', valign: 'middle' });
  const a = codeBox(7.2, 1.95, 5.3, ['* {', '  box-sizing: border-box;', '}', '.kartu {', '  padding: 24px;', '  margin: 16px;', '}'], { file: 'style.css', size: 20, lang: 'css' });
  text({ x: 7.2, y: a.bottom + 0.25, w: 5.3, h: 1.2, text: 'Seperti bingkai foto: content = foto, padding = jarak foto ke bingkai, border = bingkai, margin = jarak antar bingkai.', size: 15, lh: 1.4, color: C.txt2 });
  N('5 menit',
    'Kunci memahami layout: setiap elemen di web adalah kotak. Dari dalam ke luar: content, lalu padding yang memberi ruang napas, lalu border, lalu margin, jarak ke elemen lain. Bayangkan bingkai foto. Satu baris wajib: box-sizing border-box, supaya ukuran kotak tidak membengkak ketika kita tambah padding.',
    'Di browser, buka DevTools (F12), arahkan ke satu elemen dan tunjukkan diagram box model berwarna di panel Computed/Styles. Siswa menambah padding dan margin ke .kartu.',
    'Siswa bingung beda padding dan margin. Pegang pedoman: padding di DALAM kotak, margin di LUAR kotak.',
    '* {\n  box-sizing: border-box;\n}\n.kartu {\n  padding: 24px;\n  margin: 16px;\n}');
})();

// ── 24 · Flexbox ──────────────────────────────────────────────────────────
(function () {
  page({ name: 'Layout dengan Flexbox', section: 'CSS', menit: 7, jenis: 'K', kicker: '03 · CSS', title: 'Layout modern dengan Flexbox', titleH: 0.7 });
  codeBox(M, 1.9, 5.8, ['nav {', '  display: flex;', '  gap: 16px;', '  justify-content: center;', '}'], { file: 'style.css', size: 20, lang: 'css', hl: [1] });
  text({ x: M, y: 4.95, w: 5.8, h: 0.35, text: 'Grid: untuk layout dua dimensi (baris dan kolom)', size: 16, bold: true, color: C.navy });
  rr({ x: M, y: 5.45, w: 5.8, h: 0.65, r: 0.12, fill: C.code });
  mono({ x: M + 0.25, y: 5.45, w: 5.4, h: 0.65, text: 'grid-template-columns: 1fr 1fr;', size: 18, color: C.sTxt, valign: 'middle' });
  rr({ x: 7.2, y: 1.9, w: 5.3, h: 1.75, r: 0.16, fill: C.white, line: { color: C.line, width: 1 }, sh: 'light' });
  text({ x: 7.5, y: 2.02, w: 4, h: 0.3, text: 'TANPA FLEX', font: 'head', bold: true, size: 11, charSpacing: 1.8, color: C.txt2 });
  ['Tentang', 'Skill', 'Project'].forEach((t, i) => text({ x: 7.5, y: 2.38 + i * 0.4, w: 2, h: 0.35, text: t, size: 16, color: C.blue }));
  rr({ x: 7.2, y: 3.85, w: 5.3, h: 1.35, r: 0.16, fill: C.white, line: { color: C.line, width: 1 }, sh: 'light' });
  text({ x: 7.5, y: 3.97, w: 4, h: 0.3, text: 'DENGAN FLEX', font: 'head', bold: true, size: 11, charSpacing: 1.8, color: C.blue });
  ['Tentang', 'Skill', 'Project'].forEach((t, i) => { const px = 7.2 + (5.3 - 4.52) / 2 + i * 1.56;
    rr({ x: px, y: 4.4, w: 1.4, h: 0.5, r: 0.25, fill: C.blue });
    text({ x: px, y: 4.4, w: 1.4, h: 0.5, text: t, font: 'head', bold: true, size: 14, color: C.white, align: 'center', valign: 'middle' }); });
  text({ x: 7.2, y: 5.45, w: 5.3, h: 0.9, text: 'Satu baris display: flex menyusun semua anak elemen dalam satu baris, rapi dan sejajar.', size: 15, lh: 1.4, color: C.txt2 });
  N('7 menit',
    'Flexbox adalah cara modern menyusun elemen. Tanpa flex, link menu saya tumpuk ke bawah. Dengan display flex, mereka berjajar rapi dalam satu baris, gap mengatur jarak, justify-content mengatur posisi. Ini dipakai di hampir semua website. Grid saudaranya, dipakai kalau butuh baris dan kolom sekaligus, misalnya kartu project dua kolom.',
    'Terapkan flex ke nav dan ke daftar skill. Ubah nilai justify-content (center, space-between) dan biarkan siswa melihat bedanya.',
    '1) Menulis display: flex di elemen yang salah (harus di induk, bukan anak). 2) Link nav masih berderet ke bawah karena selector nav salah ketik.',
    'nav {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n}\n.skills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}');
})();

// ── 25 · Responsive ───────────────────────────────────────────────────────
(function () {
  page({ name: 'Responsive', section: 'CSS', menit: 5, jenis: 'K', kicker: '03 · CSS', title: 'Satu web, semua layar', titleH: 0.7 });
  codeBox(M, 1.8, 7.2, ['h1 {', '  font-size: clamp(28px, 6vw, 48px);', '}', '@media (min-width: 768px) {', '  .projects {', '    grid-template-columns: 1fr 1fr;', '  }', '}'], { file: 'style.css', size: 20, lang: 'css', hl: [1, 3] });
  [[8.4, 0.7, '375'], [9.3, 1.2, '768'], [10.7, 1.8, '1280']].forEach(([x, w, lbl]) => {
    rr({ x, y: 2.2, w, h: 1.5, r: 0.1, fill: C.white, line: { color: C.navy, width: 2 } });
    rect({ x: x + 0.1, y: 2.3, w: w - 0.2, h: 0.18, fill: C.navy });
    rect({ x: x + 0.1, y: 2.6, w: (w - 0.3) / (w > 1 ? 2 : 1), h: 0.5, fill: C.blueLt });
    if (w > 1) rect({ x: x + 0.2 + (w - 0.3) / 2, y: 2.6, w: (w - 0.3) / 2, h: 0.5, fill: C.blueLt });
    mono({ x: x - 0.2, y: 3.85, w: w + 0.4, h: 0.3, text: lbl + 'px', size: 13, bold: true, color: C.txt2, align: 'center', valign: 'middle' });
  });
  rr({ x: 8.4, y: 4.4, w: 4.1, h: 1.15, r: 0.14, fill: C.yellowTint });
  text({ x: 8.6, y: 4.4, w: 3.7, h: 1.15, text: 'Cek di DevTools: tekan F12, lalu klik ikon ponsel (Ctrl + Shift + M).', size: 15, lh: 1.35, color: C.navy, valign: 'middle' });
  codeBox(M, 6.0, 11.7, ['<meta name="viewport" content="width=device-width, initial-scale=1.0">'], { size: 18, nums: false });
  N('5 menit',
    'Lebih dari separuh pengunjung website membuka dari HP. Jadi halaman kita harus enak dilihat di semua ukuran. Tiga kunci: meta viewport di head, yang sudah dibuatkan Emmet tadi. Clamp untuk ukuran font yang menyesuaikan layar. Dan media query: aturan yang baru aktif di layar lebar. Kita tulis mobile dulu, lalu tambahkan aturan untuk layar yang lebih besar.',
    'Buka DevTools mode device (Ctrl+Shift+M), geser lebar layar, tunjukkan font mengecil/membesar dan kartu project berubah dari 1 ke 2 kolom di 768px.',
    '1) Tag meta viewport hilang (halaman kecil sekali di HP). 2) Menulis @media tanpa kurung kurawal penutup. 3) .projects belum display: grid, sehingga grid-template-columns tidak berpengaruh (di starter-kit sudah ada).',
    'h1 {\n  font-size: clamp(28px, 6vw, 48px);\n}\n.projects {\n  display: grid;\n  gap: 16px;\n}\n@media (min-width: 768px) {\n  .projects {\n    grid-template-columns: 1fr 1fr;\n  }\n}');
})();

// ── 26 · Checkpoint 2 ─────────────────────────────────────────────────────
(function () {
  page({ name: 'Checkpoint 2 — dandani profil', section: 'CSS', menit: 23, jenis: 'P', title: 'Sekarang dandani profilmu', titleY: 0.98 });
  checkpoint(M, 0.45, 2, '23 menit');
  ['Warna tema lewat CSS variables', 'Font dari Google Fonts', 'Navbar rapi dengan flexbox', 'Kartu project: padding dan border', 'Tampil rapi di layar HP'].forEach((t, i) => {
    const y = 2.1 + i * 0.68;
    checkbox(M, y + 0.06, 0.36, C.blue);
    text({ x: M + 0.6, y, w: 6.4, h: 0.48, text: t, size: 20, color: C.navy, valign: 'middle' });
  });
  chip(M, 5.65, 1.1, 0.34, 'BONUS', { fill: C.yellow, color: C.navy, size: 11 });
  mono({ x: M + 1.3, y: 5.6, w: 6, h: 0.45, text: ':hover + transition', size: 16, bold: true, color: C.blue, valign: 'middle' });
  mono({ x: M + 1.3, y: 6.1, w: 6, h: 0.45, text: 'prefers-color-scheme (dark mode)', size: 16, bold: true, color: C.blue, valign: 'middle' });
  const b = browser(8.0, 2.0, 4.5, 4.0, { url: 'localhost:5500' });
  styledPage(b, 0.98);
  text({ x: 8.0, y: 6.2, w: 4.5, h: 0.5, text: 'Targetmu: seperti ini, tapi dengan gayamu sendiri.', size: 14, color: C.txt2 });
  N('23 menit (10.12 – 10.35)',
    'Checkpoint kedua. Dandani profil kalian: tema warna lewat variables, font dari Google Fonts, navbar pakai flexbox, kartu project dengan padding dan border, dan pastikan tampil rapi di layar HP. Yang cepat, kerjakan bonus: efek hover dan dark mode. Pakai gaya kalian sendiri. Boleh beda dari contoh.',
    'Mulai dengan 3 menit live-coding warna tema, lalu mandiri. Panitia keliling, perhatikan siswa yang diam, mereka biasanya stuck. Di menit ke-20 tampilkan solusi starter-kit/style.css.',
    '1) Style tidak muncul: cek link CSS dan nama class. 2) Flexbox tidak berefek: display: flex di induk. 3) Teks hilang: warna teks sama dengan warna latar. 4) Siswa menyalin dari internet tanpa memahami, minta mereka menjelaskan satu baris.',
    'Lihat starter-kit/style.css (versi lengkap, 100% sesuai slide 20–25). Potongan bonus:\n.card:hover {\n  transform: translateY(-4px);\n}\n.card {\n  transition: transform 0.2s;\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: #0E1B3D;\n    --text: #F4F6FB;\n  }\n}');
})();
