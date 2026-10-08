// Slides 27–34: Proyek, Publish, Penutup
const L = require('./lib.js');
const K = require('./kit.js');
const { C, W, rect, rr, ell, line, text, head, mono, notes } = L;
const { M, page, chip, checkpoint, browser, styledPage, checkbox, panelPic } = K;
const N = (waktu, naskah, aksi, jebakan, solusi) => notes({ waktu, naskah, aksi, jebakan, solusi });
const SEC = 'Proyek & Publish';

// ── 27 · Debugging 101 ────────────────────────────────────────────────────
(function () {
  page({ name: 'Debugging 101', section: SEC, menit: 4, jenis: 'T', dark: true, title: 'Lima kesalahan yang pasti kamu temui' });
  const rows = [['<p>Halo', 'Tag tidak ditutup', 'Tulisan setelahnya ikut berubah'],
                ['img/foto.JPG', 'Nama file tidak persis sama', 'Gambar rusak, muncul ikon patah'],
                ['class="kartuu"', 'Salah ketik nama class', 'Gaya tidak muncul'],
                ['<link rel="stylesheet">', 'Link ke CSS hilang atau salah', 'Halaman kembali polos'],
                ['h1 { color: red;', 'Kurung } tidak ditutup', 'Gaya setelahnya hilang']];
  text({ x: M, y: 1.8, w: 4, h: 0.25, text: 'Kesalahan', font: 'head', bold: true, size: 13, color: C.inv2 });
  text({ x: 4.9, y: 1.8, w: 4, h: 0.25, text: 'Akibatnya', font: 'head', bold: true, size: 13, color: C.inv2 });
  rows.forEach(([code, cause, symptom], i) => {
    const y = 2.15 + i * 0.78;
    line({ x: M, y, w: 7.9, h: 0, color: C.lineDark });
    mono({ x: M, y: y + 0.08, w: 4.0, h: 0.36, text: code, size: 17, bold: true, color: C.yellow, valign: 'middle' });
    text({ x: M, y: y + 0.44, w: 4.0, h: 0.28, text: cause, size: 14, color: C.inv2 });
    text({ x: 4.9, y: y + 0.05, w: 3.8, h: 0.68, text: symptom, size: 17, lh: 1.2, color: C.white, valign: 'middle' });
  });
  panelPic('developer_activity_bv83', 9.0, 1.85, 3.55, 3.55);
  text({ x: M, y: 6.2, w: 11.7, h: 0.5, text: 'Kalau halamanmu aneh: tekan F12, lihat Console atau Elements, lalu baca pesannya pelan-pelan.', font: 'head', bold: true, size: 18, color: C.yellow, valign: 'middle' });
  N('4 menit',
    'Sebelum sprint akhir, saya bocorkan lima kesalahan yang hampir pasti kalian temui. Lupa menutup tag. Nama file gambar tidak persis. Salah ketik nama class. Link CSS hilang. Dan kurung kurawal tidak ditutup. Kalau halamanmu aneh, jangan panik: tekan F12, lihat pesannya, dan baca pelan-pelan. Pesan error itu bukan musuh, tapi petunjuk.',
    'Tunjukkan satu error sungguhan dengan sengaja: hapus </p>, tunjukkan akibatnya, lalu perbaiki bersama.',
    'Siswa langsung bertanya ke panitia tanpa mencoba sendiri. Ajarkan urutan: lihat pesan → cek lima daftar ini → baru bertanya.');
})();

// ── 28 · AI sebagai tutor ─────────────────────────────────────────────────
(function () {
  page({ name: 'AI sebagai tutor', section: SEC, menit: 4, jenis: 'T', title: 'AI itu guru les, bukan joki', titleH: 0.8 });
  [['Prompt 1 · Memahami', 'Jelaskan kode ini baris per baris: [tempel kodemu]'], ['Prompt 2 · Mencari error', 'Kenapa gambarku tidak muncul? Ini kodeku: [tempel kodemu]'], ['Prompt 3 · Mencari ide', 'Beri 3 ide untuk mempercantik halaman profil. Jangan tuliskan kodenya.']].forEach(([lbl, q], i) => {
    const y = 1.8 + i * 1.15;
    line({ x: M, y, w: 7.6, h: 0, color: C.line });
    text({ x: M, y: y + 0.1, w: 7.6, h: 0.28, text: lbl, font: 'head', bold: true, size: 13, color: C.blue });
    text({ x: M, y: y + 0.42, w: 7.6, h: 0.65, text: q, size: 18, lh: 1.25, italic: true, color: C.navy });
  });
  L.pic('artificial_intelligence_upfn', { x: 8.9, y: 1.75, w: 3.7 });
  rr({ x: M, y: 5.4, w: 11.7, h: 1.3, r: 0.2, fill: C.navy });
  head({ x: M + 0.45, y: 5.55, w: 10.8, h: 0.55, text: 'Aturan emas: kamu yang mengetik dulu.', size: 26, color: C.yellow, valign: 'middle' });
  text({ x: M + 0.45, y: 6.1, w: 10.8, h: 0.5, text: 'Menyalin tanpa paham = tidak belajar. Pakai AI untuk bertanya, bukan menyalin jawaban.', size: 16, color: C.inv, valign: 'middle' });
  N('4 menit',
    'AI itu alat belajar yang hebat kalau dipakai benar. Anggap AI sebagai guru les, bukan joki. Pakai untuk menjelaskan kode yang belum kalian paham, mencari tahu kenapa ada error, dan mencari ide. Jangan pakai untuk menulis seluruh halaman, karena kalian jadi tidak belajar apa-apa. Aturan emasnya: kamu yang mengetik dulu. Coba sendiri, baru tanya.',
    'Boleh demo satu prompt singkat di layar (pakai AI apa saja yang tersedia). Maksimal 2 menit.',
    'Siswa yang sudah akrab dengan AI akan meminta "buatkan website profil lengkap". Arahkan: hasilnya mungkin bagus, tapi mereka tidak akan bisa memperbaikinya sendiri. Tujuan hari ini kemampuan, bukan sekadar hasil.');
})();

// ── 29 · Checkpoint 3 ─────────────────────────────────────────────────────
(function () {
  page({ name: 'Checkpoint 3 — sprint akhir', section: SEC, menit: 20, jenis: 'P', dark: true, title: 'Sprint akhir', noTitle: true });
  checkpoint(M, 0.45, 3, '');
  head({ x: M, y: 1.2, w: 6, h: 0.9, text: 'Sprint akhir', size: 44, color: C.white });
  mono({ x: M, y: 2.35, w: 6.4, h: 2.2, text: '20:00', size: 130, bold: true, color: C.yellow, valign: 'middle' });
  text({ x: M, y: 4.7, w: 5.8, h: 0.8, text: 'menit untuk menyelesaikan profilmu dan membuatnya jadi milikmu.', size: 19, lh: 1.35, color: C.inv2 });
  rr({ x: 7.3, y: 1.3, w: 5.2, h: 5.3, r: 0.2, fill: C.navy2, line: { color: C.lineDark, width: 1 } });
  head({ x: 7.7, y: 1.6, w: 4.5, h: 0.5, text: 'Cek sendiri', size: 22, color: C.white });
  ['Ketujuh bagian sudah ada', 'Warna dan huruf konsisten', 'Rapi di layar HP', 'Ada fotomu dan identitasmu'].forEach((t, i) => {
    const y = 2.55 + i * 0.95;
    checkbox(7.7, y + 0.08, 0.4, C.yellow);
    text({ x: 8.35, y, w: 3.9, h: 0.6, text: t, size: 18, lh: 1.25, color: C.white, valign: 'middle' });
  });
  N('20 menit (10.40 – 11.00)',
    'Sprint terakhir, 20 menit. Selesaikan profilmu. Pakai daftar di kanan sebagai pegangan: ketujuh bagian sudah ada, warna dan huruf konsisten, rapi di HP, dan ada fotomu. Setelah ini kita tayangkan online, jadi pastikan halamanmu sudah layak dilihat orang.',
    'Jalankan timer 20 menit di layar (stopwatch HP atau timer proyektor). Panitia keliling dan fokus ke siswa yang tertinggal. Beri peringatan di sisa 10 dan 5 menit. Pilih 3–4 sukarelawan untuk showcase sambil berkeliling.',
    'Siswa terjebak memoles hal kecil. Ingatkan: selesai lebih baik daripada sempurna. Siswa lain kehabisan ide: kembalikan ke daftar cek.');
})();

// ── 30 · Level Up ─────────────────────────────────────────────────────────
(function () {
  page({ name: 'Level Up — jalur lanjutan', section: SEC, menit: 0, jenis: 'P', title: 'Sudah selesai? Naik level.', titleH: 0.8 });
  text({ x: M, y: 1.55, w: 6, h: 0.3, text: 'Opsional, untuk yang cepat selesai', size: 15, color: C.txt2 });
  [['6 modul', 'Course "Modern Web: Toko Online" di LMS HIMTI'], ['HTML + CSS modern', 'Grid, animasi hover, responsive, dan dark mode'], ['Hasilnya', 'Toko thrift online, beli via WhatsApp']].forEach(([a, d], i) => {
    const y = 2.1 + i * 1.05;
    line({ x: M, y, w: 5.9, h: 0, color: C.line });
    text({ x: M, y: y + 0.12, w: 5.9, h: 0.28, text: a, font: 'head', bold: true, size: 14, color: C.blue });
    text({ x: M, y: y + 0.42, w: 5.9, h: 0.5, text: d, size: 18, lh: 1.25, color: C.navy });
  });
  rr({ x: M, y: 5.4, w: 5.9, h: 0.7, r: 0.14, fill: C.code });
  mono({ x: M + 0.25, y: 5.4, w: 5.5, h: 0.7, text: '[alamat LMS]/course/modern-web', size: 17, color: C.sTxt, valign: 'middle' });
  text({ x: M, y: 6.3, w: 5.9, h: 0.4, text: 'Kerjakan sendiri, modul demi modul.', size: 15, color: C.txt2 });
  const b = browser(7.5, 1.95, 5.0, 4.75, { url: 'thriftkita.netlify.app' });
  rect({ x: b.x, y: b.y, w: b.w, h: b.h, fill: C.paper });
  text({ x: b.x + 0.3, y: b.y + 0.15, w: 2, h: 0.3, text: 'ThriftKita', font: 'head', bold: true, size: 13, color: C.navy });
  text({ x: b.x + 0.3, y: b.y + 0.6, w: b.w - 0.6, h: 0.9, text: 'Gaya keren tanpa bikin kantong bolong', font: 'head', bold: true, size: 21, lh: 1.1, color: C.navy });
  rr({ x: b.x + 0.3, y: b.y + 1.6, w: 1.5, h: 0.36, r: 0.18, fill: 'C2410C' });
  text({ x: b.x + 0.3, y: b.y + 1.6, w: 1.5, h: 0.36, text: 'Belanja Sekarang', font: 'head', bold: true, size: 10, color: C.white, align: 'center', valign: 'middle' });
  [0, 1, 2].forEach((i) => {
    const cw = (b.w - 0.6 - 0.3) / 3, cx = b.x + 0.3 + i * (cw + 0.15), cy = b.y + 2.2;
    rr({ x: cx, y: cy, w: cw, h: 1.9, r: 0.12, fill: C.white, line: { color: C.line, width: 1 }, sh: 'light' });
    rr({ x: cx + 0.12, y: cy + 0.12, w: cw - 0.24, h: 0.8, r: 0.08, fill: ['DCE6FF', 'E8E0D5', 'FFE3B0'][i] });
    rr({ x: cx + 0.12, y: cy + 1.02, w: 0.7, h: 0.2, r: 0.1, fill: C.yellow });
    rect({ x: cx + 0.12, y: cy + 1.32, w: cw - 0.24, h: 0.07, fill: C.line });
    rr({ x: cx + 0.12, y: cy + 1.5, w: cw - 0.24, h: 0.26, r: 0.13, fill: 'C2410C' });
  });
  N('0 menit (opsional, tampilkan saat sprint akhir berjalan)',
    'Buat kalian yang sudah selesai lebih cepat, ini jalur lanjutannya. Di LMS HIMTI ada course Modern Web: Toko Online, enam modul, murni HTML dan CSS modern. Kalian akan membuat toko thrift online dengan grid produk, animasi hover, responsive, dark mode, dan tombol beli lewat WhatsApp. Kerjakan sendiri, satu modul demi satu modul.',
    'Tampilkan slide ini saat siswa mengerjakan sprint akhir, atau setelah ada yang selesai lebih cepat. Siswa yang belum selesai tetap fokus ke profilnya. Ganti [alamat LMS] dengan alamat LMS yang sebenarnya sebelum acara.',
    'Siswa yang belum selesai merasa tertinggal melihat teman melanjutkan. Tegaskan: jalur ini opsional dan boleh dikerjakan di rumah. Pastikan course sudah dipublikasikan di LMS (isAvailable true) dan siswa punya akses sebelum acara.');
})();

// ── 31 · Publish ──────────────────────────────────────────────────────────
(function () {
  page({ name: 'Publish ke internet', section: SEC, menit: 7, jenis: 'P', title: 'Dari komputermu ke seluruh dunia', titleH: 0.8 });
  [['Buka netlify.com/drop di browser'], ['Seret folder portfolio ke halaman itu'], ['Klaim situsnya (buat akun gratis) supaya link tidak kedaluwarsa']].forEach(([t], i) => {
    const y = 1.95 + i * 1.0;
    ell({ x: M, y, w: 0.55, h: 0.55, fill: C.yellow });
    head({ x: M, y, w: 0.55, h: 0.55, text: String(i + 1), size: 18, color: C.navy, align: 'center', valign: 'middle' });
    text({ x: M + 0.8, y: y - 0.05, w: 5.9, h: 0.65, text: t, size: 19, lh: 1.25, color: C.navy, valign: 'middle' });
  });
  chip(M, 5.0, 3.6, 0.38, 'Cadangan: GitHub Pages', { size: 13, cs: 0.2 });
  rr({ x: M, y: 5.65, w: 6.5, h: 1.0, r: 0.14, fill: C.yellowTint });
  text({ x: M + 0.25, y: 5.65, w: 6.0, h: 1.0, text: 'Internet bermasalah? Tidak apa-apa. Tunjukkan hasilnya di komputer, tayangkan nanti di rumah.', size: 15, lh: 1.35, color: C.navy, valign: 'middle' });
  const b = browser(8.0, 1.85, 4.5, 3.4, { url: 'alya-putri.netlify.app' });
  styledPage(b, 0.85);
  rr({ x: 8.0, y: 5.5, w: 4.5, h: 0.5, r: 0.25, fill: C.blueLt });
  mono({ x: 8.0, y: 5.5, w: 4.5, h: 0.5, text: 'alya-putri.netlify.app', size: 16, bold: true, color: C.blue, align: 'center', valign: 'middle' });
  N('7 menit (11.00 – 11.07)',
    'Sekarang bagian yang ditunggu-tunggu. Buka netlify.com/drop, seret folder portfolio kalian ke halaman itu, dan dalam beberapa detik kalian mendapat link. Link itu bisa dibuka siapa saja di dunia. Supaya link tidak kedaluwarsa, klaim situsnya dengan membuat akun gratis. Kalau internet bermasalah, tidak apa-apa, tayangkan di rumah.',
    'Demo di layar pemateri dulu, lalu siswa mengikuti. Siapkan cadangan: GitHub Pages (butuh akun GitHub, lebih lama, cocok dikerjakan di rumah).\n[VERIFIKASI SEBELUM HARI-H] Per pengecekan terakhir, situs Netlify Drop yang tidak diklaim bersifat sementara (kemungkinan dihapus dalam waktu singkat). Uji alurnya sehari sebelum acara dan pastikan internet Lab ICT bisa membuka netlify.com.',
    '1) Folder yang diseret harus berisi index.html di level paling atas, bukan di subfolder. 2) Beberapa PC lab membatasi situs tertentu, uji lebih dulu. 3) Siswa belum punya email aktif untuk klaim: siapkan akun cadangan atau sarankan mendaftar di rumah.');
})();

// ── 32 · Showcase ─────────────────────────────────────────────────────────
(function () {
  page({ name: 'Showcase karya siswa', section: SEC, menit: 6, jenis: 'P', dark: true, title: 'Showcase: tiga karya, tiga cerita', titleH: 0.8 });
  ['Karya 1', 'Karya 2', 'Karya 3'].forEach((t, i) => {
    const x = M + i * 3.97;
    const b = browser(x, 1.85, 3.75, 3.1, { url: 'link-karyamu.netlify.app', dark: true, fill: C.navy2 });
    rr({ x: b.x + 0.3, y: b.y + 0.3, w: b.w - 0.6, h: b.h - 0.6, r: 0.12, fill: 'none', line: { color: C.lineDark, width: 1.25, dash: true } });
    head({ x: b.x, y: b.y, w: b.w, h: b.h, text: t, size: 22, color: C.inv2, align: 'center', valign: 'middle' });
  });
  ['Bagian yang paling kamu suka', 'Kesalahan paling lucu hari ini', 'Satu hal baru yang kamu pelajari'].forEach((t, i) => {
    const x = M + i * 3.97;
    text({ x, y: 5.3, w: 3.75, h: 0.3, text: 'Ceritakan', font: 'head', bold: true, size: 13, color: C.yellow });
    text({ x, y: 5.65, w: 3.75, h: 0.9, text: t, size: 19, lh: 1.3, color: C.white });
  });
  N('6 menit (11.07 – 11.13)',
    'Siapa yang mau menunjukkan karyanya? Ceritakan satu hal: bagian yang paling kamu suka, kesalahan paling lucu hari ini, atau satu hal baru yang kamu pelajari. Beri tepuk tangan untuk setiap penampil.',
    'Sambungkan PC sukarelawan ke proyektor, atau panitia membuka link karya mereka. 2 menit per orang. Utamakan siswa pemalu yang sudah selesai, beri dorongan.',
    'Siswa yang paling bagus tidak selalu mau tampil. Pilih berdasarkan keberanian, bukan kerapian. Tujuan sesi ini adalah rasa percaya diri.');
})();

// ── 33 · Setelah hari ini ─────────────────────────────────────────────────
(function () {
  page({ name: 'Peta belajar setelah hari ini', section: SEC, menit: 2, jenis: 'T', title: 'Setelah hari ini, belajar apa lagi?', titleH: 0.8 });
  line({ x: M, y: 3.0, w: 11.7, h: 0, color: C.navy, width: 2 });
  [['Sekarang', 'HTML + CSS', 'Dasarnya sudah kamu kuasai', true], ['Berikutnya', 'JavaScript', 'Membuat halaman bisa bereaksi', false], ['Lalu', 'Git & GitHub', 'Menyimpan dan membagikan kode', false], ['Lanjutan', 'Framework', 'Misalnya Laravel', false]].forEach(([k, t, d, on], i) => {
    const x = M + i * 3.0;
    ell({ x, y: 2.82, w: 0.36, h: 0.36, fill: on ? C.blue : C.paper, line: { color: C.blue, width: 2.5 } });
    text({ x, y: 2.15, w: 2.8, h: 0.3, text: k, font: 'head', bold: true, size: 14, color: on ? C.blue : C.txt2 });
    head({ x, y: 3.5, w: 2.8, h: 0.5, text: t, size: 22, color: C.navy });
    text({ x, y: 4.05, w: 2.7, h: 0.8, text: d, size: 16, lh: 1.35, color: C.txt2 });
  });
  text({ x: M, y: 5.3, w: 9.2, h: 0.4, text: 'Belajar gratis:  MDN Web Docs  ·  freeCodeCamp  ·  web.dev/learn', size: 16, bold: true, color: C.navy });
  rr({ x: M, y: 5.95, w: 8.2, h: 0.65, r: 0.16, fill: C.yellowTint });
  text({ x: M + 0.3, y: 5.95, w: 7.7, h: 0.65, text: 'Kakak-kakak mahasiswa di Sesi 2 membahas Laravel.', font: 'head', bold: true, size: 17, color: C.navy, valign: 'middle' });
  L.pic('in_progress_ql66', { x: 10.2, y: 4.55, w: 2.4 });
  N('2 menit',
    'Hari ini kalian sudah menyelesaikan langkah pertama. Langkah berikutnya: JavaScript supaya halaman bisa bereaksi, lalu Git dan GitHub untuk menyimpan kode, lalu framework. Belajar gratis di MDN, freeCodeCamp, dan web.dev/learn. Dan kakak-kakak mahasiswa di Sesi 2 hari ini membahas Laravel, salah satu framework itu.',
    'Tampilkan slide, bacakan peta belajar, jangan menjelaskan detail.',
    'Siswa sering bertanya "harus beli kursus?". Jawab: tidak perlu, tiga sumber ini gratis dan cukup untuk waktu yang lama.');
})();

// ── 34 · Penutup ──────────────────────────────────────────────────────────
(function () {
  page({ name: 'Penutup dan Q&A', section: SEC, menit: 2, jenis: 'T', dark: true, title: 'Penutup', noTitle: true });
  [['LOGO HIMASI', M], ['LOGO BLU', 2.75]].forEach(([t, x]) => {
    rr({ x, y: 0.55, w: 1.8, h: 0.62, r: 0.1, fill: 'none', line: { color: C.lineDark, width: 1.25, dash: true } });
    text({ x, y: 0.55, w: 1.8, h: 0.62, text: t, font: 'head', bold: true, size: 11, color: C.inv2, align: 'center', valign: 'middle' });
  });
  head({ x: M, y: 1.9, w: 7.0, h: 1.6, text: 'Terima kasih.', size: 76, color: C.white });
  head({ x: M, y: 3.55, w: 7.0, h: 1.3, text: 'Sekarang giliranmu\nterus membangun.', size: 32, lh: 1.15, color: C.yellow });
  chip(M, 5.1, 1.6, 0.42, 'Q & A', { fill: C.yellow, color: C.navy, size: 14 });
  text({ x: M, y: 5.8, w: 7, h: 0.35, text: '[@akun_pemateri]   ·   [email pemateri]', size: 17, color: C.inv2 });
  text({ x: M, y: 6.25, w: 7.4, h: 0.35, text: 'HIMASI Budi Luhur University  ·  SI FEST 2026', size: 14, color: C.inv2 });
  panelPic('celebration_0jvk', 8.3, 0.9, 4.3, 5.4);
  N('2 menit + Q&A',
    'Terima kasih, adik-adik. Hari ini kalian membuktikan satu hal: kalian bisa membuat website sendiri. Simpan linknya, bagikan ke teman dan keluarga. Dan jangan berhenti di sini. Ada pertanyaan?',
    'Buka sesi tanya jawab sampai waktu habis (11.20). Ajak foto bersama. Ingatkan jadwal Sesi 2 (13.00) bagi yang ikut sebagai pendamping. Pastikan tidak ada barang tertinggal di Lab ICT.',
    'Pertanyaan yang sering muncul: "kuliah apa yang cocok untuk jadi web developer?", "perlu jago matematika?". Siapkan jawaban yang jujur dan menyemangati.');
})();
