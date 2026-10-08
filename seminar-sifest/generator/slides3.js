// Slides 27–33: Proyek, Publish, Penutup
const L = require('./lib.js');
const K = require('./kit.js');
const { C, W, rect, rr, ell, line, text, head, mono, notes } = L;
const { M, page, chip, checkpoint, browser, styledPage, checkbox } = K;
const N = (waktu, naskah, aksi, jebakan, solusi) => notes({ waktu, naskah, aksi, jebakan, solusi });
const SEC = 'Proyek & Publish';

// ── 27 · Debugging 101 (dark) ─────────────────────────────────────────────
(function () {
  page({ name: 'Debugging 101', section: SEC, menit: 4, jenis: 'T', dark: true, kicker: '04 · Proyek & Publish', title: 'Debugging 101: lima kesalahan umum' });
  const rows = [['<p>Halo', 'Tag tidak ditutup', 'Teks setelahnya ikut berubah'],
                ['img/foto.JPG', 'Nama file tidak persis', 'Gambar rusak, muncul ikon patah'],
                ['class="kartuu"', 'Typo nama class', 'Style tidak muncul'],
                ['<link rel="stylesheet">', 'Link CSS hilang atau salah', 'Halaman kembali polos'],
                ['h1 { color: red;', 'Kurung } tidak ditutup', 'Style setelahnya hilang']];
  text({ x: M, y: 1.95, w: 5, h: 0.25, text: 'KESALAHAN', font: 'head', bold: true, size: 11, charSpacing: 1.8, color: C.inv2 });
  text({ x: 7.2, y: 1.95, w: 5, h: 0.25, text: 'GEJALA', font: 'head', bold: true, size: 11, charSpacing: 1.8, color: C.inv2 });
  rows.forEach(([code, cause, symptom], i) => {
    const y = 2.3 + i * 0.78;
    line({ x: M, y, w: 11.7, h: 0, color: C.lineDark });
    mono({ x: M, y: y + 0.08, w: 6.2, h: 0.36, text: code, size: 17, bold: true, color: C.yellow, valign: 'middle' });
    text({ x: M, y: y + 0.44, w: 6.2, h: 0.28, text: cause, size: 14, color: C.inv2 });
    text({ x: 7.2, y: y + 0.05, w: 5.3, h: 0.68, text: symptom, size: 18, color: C.white, valign: 'middle' });
  });
  text({ x: M, y: 6.35, w: 11.7, h: 0.5, text: 'Cara cek: tekan F12, buka Console atau Elements, lalu baca pesannya pelan-pelan.', font: 'head', bold: true, size: 18, color: C.yellow, valign: 'middle' });
  N('4 menit',
    'Sebelum sprint akhir, saya bocorkan lima kesalahan yang hampir pasti kalian temui. Lupa menutup tag. Nama file gambar tidak persis. Typo nama class. Link CSS hilang. Dan kurung kurawal tidak ditutup. Kalau halamanmu aneh, jangan panik: tekan F12, lihat pesannya, dan baca pelan-pelan. Pesan error itu sahabatmu.',
    'Tampilkan satu error sungguhan dengan sengaja: hapus </p>, tunjukkan efeknya, perbaiki bersama.',
    'Siswa langsung bertanya ke panitia tanpa mencoba sendiri. Ajarkan urutan: lihat pesan → cek lima daftar ini → baru bertanya.');
})();

// ── 28 · AI sebagai tutor ─────────────────────────────────────────────────
(function () {
  page({ name: 'AI sebagai tutor', section: SEC, menit: 4, jenis: 'T', kicker: '04 · Proyek & Publish', title: 'AI itu tutor, bukan joki', titleH: 0.7 });
  [['MEMAHAMI', 'Jelaskan kode ini baris per baris:\n[tempel kodemu]'], ['MENCARI ERROR', 'Kenapa gambarku tidak muncul?\nIni kodeku: [tempel kodemu]'], ['MENCARI IDE', 'Beri 3 ide mempercantik halaman profil. Jangan tuliskan kodenya.']].forEach(([lbl, q], i) => {
    const x = M + i * 3.97;
    rr({ x, y: 1.95, w: 3.75, h: 2.85, r: 0.2, fill: C.white, line: { color: C.line, width: 1 }, sh: 'light' });
    text({ x: x + 0.3, y: 2.2, w: 3.2, h: 0.3, text: 'PROMPT ' + (i + 1) + '  ·  ' + lbl, font: 'head', bold: true, size: 11, charSpacing: 1.4, color: C.blue });
    text({ x: x + 0.3, y: 2.7, w: 3.2, h: 1.9, text: q, size: 18, lh: 1.4, italic: true, color: C.navy });
  });
  rr({ x: M, y: 5.1, w: 11.7, h: 1.6, r: 0.2, fill: C.navy });
  head({ x: M + 0.45, y: 5.3, w: 10.8, h: 0.6, text: 'Aturan emas: kamu yang mengetik dulu.', size: 28, color: C.yellow, valign: 'middle' });
  text({ x: M + 0.45, y: 5.95, w: 10.8, h: 0.6, text: 'Menyalin tanpa paham = tidak belajar. Pakai AI untuk bertanya, bukan untuk menyalin jawaban.', size: 17, color: C.inv, valign: 'middle' });
  N('4 menit',
    'AI itu alat belajar yang hebat kalau dipakai benar. Pakai untuk menjelaskan kode yang tidak kalian paham, untuk mencari tahu kenapa ada error, dan untuk mencari ide. Jangan pakai untuk menulis seluruh halaman, karena kalian jadi tidak belajar apa-apa. Aturan emasnya: kamu yang mengetik dulu. Coba sendiri, baru tanya.',
    'Boleh demonstrasikan satu prompt singkat di layar (pakai AI apa saja yang tersedia). Jangan lebih dari 2 menit.',
    'Siswa yang sudah akrab dengan AI akan meminta "buatkan website profil lengkap". Arahkan: hasilnya mungkin bagus, tapi mereka tidak akan bisa memperbaikinya sendiri. Tujuan hari ini kemampuan, bukan hasil.');
})();

// ── 29 · Checkpoint 3 (dark) ──────────────────────────────────────────────
(function () {
  page({ name: 'Checkpoint 3 — sprint akhir', section: SEC, menit: 20, jenis: 'P', dark: true, title: 'Sprint akhir', noTitle: true });
  checkpoint(M, 0.45, 3, '');
  head({ x: M, y: 1.2, w: 6, h: 0.9, text: 'Sprint akhir', size: 44, color: C.white });
  mono({ x: M, y: 2.35, w: 6.4, h: 2.2, text: '20:00', size: 130, bold: true, color: C.yellow, valign: 'middle' });
  text({ x: M, y: 4.7, w: 5.8, h: 0.8, text: 'menit untuk merampungkan profilmu dan membuatnya jadi milikmu.', size: 19, lh: 1.35, color: C.inv2 });
  rr({ x: 7.3, y: 1.3, w: 5.2, h: 5.3, r: 0.2, fill: C.navy2, line: { color: C.lineDark, width: 1 } });
  head({ x: 7.7, y: 1.6, w: 4.5, h: 0.5, text: 'Rubrik mandiri', size: 22, color: C.white });
  ['Struktur lengkap (7 bagian)', 'Tampilan konsisten: warna dan font', 'Rapi di layar HP', 'Ada fotomu dan identitasmu'].forEach((t, i) => {
    const y = 2.55 + i * 0.95;
    checkbox(7.7, y + 0.08, 0.4, C.yellow);
    text({ x: 8.35, y, w: 3.9, h: 0.6, text: t, size: 18, lh: 1.25, color: C.white, valign: 'middle' });
  });
  N('20 menit (10.40 – 11.00)',
    'Sprint terakhir, 20 menit. Rampungkan profilmu. Pakai rubrik di kanan sebagai pegangan: struktur lengkap, tampilan konsisten, rapi di HP, dan ada fotomu. Setelah ini kita tayangkan online, jadi pastikan halamanmu sudah layak dilihat orang.',
    'Jalankan timer 20 menit di layar (stopwatch HP atau timer proyektor). Panitia keliling dengan fokus ke siswa yang tertinggal. Beri peringatan di sisa 10 dan 5 menit. Pilih 3–4 sukarelawan untuk showcase sambil berkeliling.',
    'Siswa terjebak memoles hal kecil. Ingatkan: selesai lebih baik daripada sempurna. Siswa lain kehabisan ide: kembalikan ke rubrik.');
})();

// ── 30 · Publish ──────────────────────────────────────────────────────────
(function () {
  page({ name: 'Publish ke internet', section: SEC, menit: 7, jenis: 'P', kicker: '04 · Proyek & Publish', title: 'Dari komputermu ke dunia', titleH: 0.7 });
  [['Buka netlify.com/drop di browser'], ['Seret folder portfolio ke halaman itu'], ['Klaim situs (akun gratis) agar link tidak kedaluwarsa']].forEach(([t], i) => {
    const y = 2.0 + i * 1.0;
    ell({ x: M, y, w: 0.55, h: 0.55, fill: C.yellow });
    head({ x: M, y, w: 0.55, h: 0.55, text: String(i + 1), size: 18, color: C.navy, align: 'center', valign: 'middle' });
    text({ x: M + 0.8, y: y - 0.05, w: 5.9, h: 0.65, text: t, size: 19, lh: 1.25, color: C.navy, valign: 'middle' });
  });
  chip(M, 5.05, 4.0, 0.38, 'Alternatif: GitHub Pages', { size: 13, cs: 0.5 });
  rr({ x: M, y: 5.7, w: 6.5, h: 0.95, r: 0.14, fill: C.yellowTint });
  text({ x: M + 0.25, y: 5.7, w: 6.0, h: 0.95, text: 'Internet bermasalah? Tidak apa-apa. Tunjukkan hasil lokal sekarang, tayangkan di rumah.', size: 15, lh: 1.35, color: C.navy, valign: 'middle' });
  const b = browser(8.0, 1.95, 4.5, 3.4, { url: 'alya-putri.netlify.app' });
  styledPage(b, 0.85);
  rr({ x: 8.0, y: 5.6, w: 4.5, h: 0.5, r: 0.25, fill: C.blueLt });
  mono({ x: 8.0, y: 5.6, w: 4.5, h: 0.5, text: 'alya-putri.netlify.app', size: 16, bold: true, color: C.blue, align: 'center', valign: 'middle' });
  N('7 menit (11.00 – 11.07)',
    'Sekarang momen yang ditunggu. Buka netlify.com/drop, seret folder portfolio kalian ke halaman itu, dan dalam beberapa detik kalian mendapat link. Link itu bisa dibuka siapa saja di dunia. Supaya link tidak kedaluwarsa, klaim situsnya dengan membuat akun gratis. Kalau internet bermasalah, tidak apa-apa, tayangkan di rumah.',
    'Demo di layar pemateri dulu, lalu siswa mengikuti. Siapkan opsi cadangan: GitHub Pages (butuh akun GitHub, lebih lama, cocok untuk dikerjakan di rumah).\n[VERIFIKASI SEBELUM HARI-H] Per pengecekan terakhir, situs Netlify Drop yang tidak diklaim bersifat sementara (kemungkinan dihapus dalam waktu singkat). Uji alurnya satu hari sebelum acara dan pastikan internet Lab ICT bisa mengakses netlify.com.',
    '1) Folder yang diseret harus berisi index.html di level paling atas, bukan subfolder lagi. 2) Beberapa PC lab membatasi situs tertentu, uji lebih dulu. 3) Siswa belum punya email aktif untuk klaim: siapkan akun cadangan atau sarankan mendaftar di rumah.');
})();

// ── 31 · Showcase (dark) ──────────────────────────────────────────────────
(function () {
  page({ name: 'Showcase karya siswa', section: SEC, menit: 6, jenis: 'P', dark: true, kicker: '04 · Proyek & Publish', title: 'Showcase: tiga karya, tiga cerita', titleH: 0.7 });
  ['Karya 1', 'Karya 2', 'Karya 3'].forEach((t, i) => {
    const x = M + i * 3.97;
    const b = browser(x, 1.95, 3.75, 3.1, { url: 'link-karyamu.netlify.app', dark: true, fill: C.navy2 });
    rr({ x: b.x + 0.3, y: b.y + 0.3, w: b.w - 0.6, h: b.h - 0.6, r: 0.12, fill: 'none', line: { color: C.lineDark, width: 1.25, dash: true } });
    head({ x: b.x, y: b.y, w: b.w, h: b.h, text: t, size: 22, color: C.inv2, align: 'center', valign: 'middle' });
  });
  ['Bagian yang paling kamu suka', 'Kesalahan paling lucu hari ini', 'Satu hal baru yang kamu pelajari'].forEach((t, i) => {
    const x = M + i * 3.97;
    text({ x, y: 5.3, w: 3.75, h: 0.3, text: 'CERITAKAN', font: 'head', bold: true, size: 11, charSpacing: 1.8, color: C.yellow });
    text({ x, y: 5.65, w: 3.75, h: 0.9, text: t, size: 19, lh: 1.3, color: C.white });
  });
  N('6 menit (11.07 – 11.13)',
    'Siapa yang mau menunjukkan karyanya? Ceritakan satu hal: bagian yang paling kamu suka, kesalahan paling lucu hari ini, atau satu hal baru yang kamu pelajari. Beri tepuk tangan untuk setiap penampil.',
    'Sambungkan laptop/PC sukarelawan ke proyektor, atau panitia membuka link karya mereka. 2 menit per orang. Utamakan siswa yang malu-malu tetapi sudah selesai, beri dorongan.',
    'Siswa yang paling bagus tidak selalu mau tampil. Pilih berdasarkan keberanian, bukan kerapian. Tujuan sesi adalah rasa percaya diri.');
})();

// ── 32 · Setelah hari ini ─────────────────────────────────────────────────
(function () {
  page({ name: 'Peta belajar setelah hari ini', section: SEC, menit: 2, jenis: 'T', kicker: '04 · Proyek & Publish', title: 'Setelah hari ini, ke mana?', titleH: 0.7 });
  line({ x: M, y: 3.35, w: 11.7, h: 0, color: C.navy, width: 2 });
  [['SEKARANG', 'HTML + CSS', 'Sudah kamu kuasai dasarnya', true], ['LANGKAH 2', 'JavaScript', 'Membuat halaman bereaksi', false], ['LANGKAH 3', 'Git & GitHub', 'Menyimpan dan membagikan kode', false], ['LANJUTAN', 'Framework', 'Misalnya Laravel', false]].forEach(([k, t, d, on], i) => {
    const x = M + i * 3.0;
    ell({ x, y: 3.17, w: 0.36, h: 0.36, fill: on ? C.blue : C.paper, line: { color: C.blue, width: 2.5 } });
    text({ x, y: 2.35, w: 2.8, h: 0.3, text: k, font: 'head', bold: true, size: 11, charSpacing: 1.8, color: on ? C.blue : C.txt2 });
    head({ x, y: 3.85, w: 2.8, h: 0.5, text: t, size: 22, color: C.navy });
    text({ x, y: 4.4, w: 2.7, h: 0.8, text: d, size: 16, lh: 1.35, color: C.txt2 });
  });
  text({ x: M, y: 5.5, w: 11.7, h: 0.4, text: 'Belajar gratis:  MDN Web Docs  ·  freeCodeCamp  ·  web.dev/learn', size: 16, bold: true, color: C.navy });
  rr({ x: M, y: 6.05, w: 8.2, h: 0.65, r: 0.16, fill: C.yellowTint });
  text({ x: M + 0.3, y: 6.05, w: 7.7, h: 0.65, text: 'Kakak-kakak mahasiswa di Sesi 2 membahas Laravel.', font: 'head', bold: true, size: 17, color: C.navy, valign: 'middle' });
  N('2 menit',
    'Hari ini kalian sudah menyelesaikan langkah pertama. Langkah berikutnya: JavaScript supaya halaman bisa bereaksi, lalu Git dan GitHub untuk menyimpan kode, lalu framework. Belajar gratis di MDN, freeCodeCamp, dan web.dev/learn. Dan kakak-kakak mahasiswa di Sesi 2 hari ini membahas Laravel, salah satu framework itu.',
    'Tampilkan slide, bacakan peta belajar, jangan menjelaskan detail.',
    'Siswa sering bertanya "harus beli kursus?". Jawab: tidak perlu, tiga sumber ini gratis dan cukup untuk bertahun-tahun.');
})();

// ── 33 · Penutup (dark) ───────────────────────────────────────────────────
(function () {
  page({ name: 'Penutup dan Q&A', section: SEC, menit: 2, jenis: 'T', dark: true, title: 'Penutup', noTitle: true });
  [['LOGO HIMASI', M], ['LOGO BLU', 2.75]].forEach(([t, x]) => {
    rr({ x, y: 0.55, w: 1.8, h: 0.62, r: 0.1, fill: 'none', line: { color: C.lineDark, width: 1.25, dash: true } });
    text({ x, y: 0.55, w: 1.8, h: 0.62, text: t, font: 'head', bold: true, size: 11, charSpacing: 1.5, color: C.inv2, align: 'center', valign: 'middle' });
  });
  head({ x: M, y: 1.9, w: 9.5, h: 1.6, text: 'Terima kasih.', size: 80, color: C.white });
  head({ x: M, y: 3.55, w: 9.5, h: 0.9, text: 'Sekarang giliranmu membangun.', size: 36, color: C.yellow });
  chip(M, 4.85, 1.6, 0.42, 'Q & A', { fill: C.yellow, color: C.navy, size: 14 });
  text({ x: M, y: 5.6, w: 8, h: 0.35, text: '[@akun_pemateri]   ·   [email pemateri]', size: 17, color: C.inv2 });
  text({ x: M, y: 6.05, w: 9, h: 0.35, text: 'HIMASI Budi Luhur University  ·  SI FEST 2026  ·  Diving Deep Into Technology', size: 14, color: C.inv2 });
  const b = browser(9.0, 2.2, 4.3, 3.2, { dark: true, url: 'portofolio-pertamaku.netlify.app' });
  styledPage(b, 0.8);
  N('2 menit + Q&A',
    'Terima kasih, adik-adik. Hari ini kalian membuktikan satu hal: kalian bisa membuat website sendiri. Simpan linknya, bagikan ke teman dan keluarga. Dan jangan berhenti di sini. Ada pertanyaan?',
    'Buka sesi tanya jawab sampai waktu habis (11.20). Ajak foto bersama. Ingatkan jadwal Sesi 2 (13.00) bagi yang ikut sebagai pendamping. Pastikan tidak ada barang tertinggal di Lab ICT.',
    'Pertanyaan yang sering muncul: "kuliah apa yang cocok untuk jadi web developer?", "perlu jago matematika?". Siapkan jawaban jujur dan menyemangati.');
})();
