const L = require('./lib.js');
const K = require('./kit.js');
const K2 = require('./kit2.js');
const { C, F, T, W, H, slide, notes, bg, img, rect, ell, line, text, head, card, push } = L;
const { M, CW, frame, sectionTag, mark, chip, label, bullet, arrowDown, arrowRight } = K;
const { photoBed, photoCover, statement, logoRow, logoTile, hairRow, bigNum, LOGO } = K2;

/* ============== 21 - TESTING & DEPLOYMENT  [split + logo] ============== */
slide({ name: 'Testing & Deployment' });
frame({ eyebrow: 'Section 07  ·  Delivery', title: 'Testing & Deployment',
        sub: 'Uji jalur utamanya, lalu naikkan ke lingkungan yang bisa diakses orang lain.',
        subW: 7.4, page: 21 });
text({ x: M, y: 2.62, w: 5.6, h: 0.24, text: 'HAPPY PATH', font: F.head, bold: true,
       size: T.micro, charSpacing: 2, color: C.purple, valign: 'middle' });
[
  ['Login', 'User terdaftar berhasil masuk dan diarahkan ke dashboard.'],
  ['Booking', 'Booking tersimpan dan slot yang sama tidak bisa dipesan lagi.'],
  ['Approval', 'Admin menyetujui booking dan statusnya berubah.'],
  ['History', 'Riwayat booking tampil lengkap dengan tanggal dan status.'],
].forEach((t, i) => {
  const y = 3.02 + i * 0.82;
  line({ x: M, y, w: 5.62, h: 0, color: C.border, width: 1 });
  rect({ shape: 'rect', x: M, y: y + 0.2, w: 0.14, h: 0.14, r: 0.02, fill: 'none',
         line: { color: C.purpleLt, width: 1.25 } });
  head({ x: M + 0.36, y: y + 0.16, w: 5.26, h: 0.26, text: t[0], size: T.cardTitle + 1.5, valign: 'middle' });
  text({ x: M + 0.36, y: y + 0.5, w: 5.2, h: 0.3, text: t[1], size: T.small, color: C.txt2, lh: 1.4 });
});
text({ x: M, y: 6.36, w: 5.62, h: 0.3, text: 'Kalau salah satu gagal, jangan deploy.',
       size: T.small, color: C.purpleDeep, italic: true, valign: 'middle' });

line({ x: 6.64, y: 2.62, w: 0, h: 4.0, color: C.border, width: 1 });
text({ x: 7.03, y: 2.62, w: 5.4, h: 0.24, text: 'DEPLOYMENT STACK', font: F.head, bold: true,
       size: T.micro, charSpacing: 2, color: C.purple, valign: 'middle' });
[
  ['vercel', 'Frontend', 'Vercel', 'Deploy langsung dari repository, otomatis tiap push.'],
  ['railway', 'Backend', 'Railway', 'Menjalankan API dan proses berdurasi panjang.'],
  ['supabase', 'Database', 'Supabase / Neon', 'Postgres terkelola dengan autentikasi bawaan.'],
].forEach((d, i) => {
  const y = 3.02 + i * 0.92;
  line({ x: 7.03, y, w: 5.4, h: 0, color: C.border, width: 1 });
  img({ path: LOGO(d[0], 'light'), x: 7.03, y: y + 0.2, w: 0.3, h: 0.3 });
  text({ x: 7.55, y: y + 0.18, w: 1.5, h: 0.22, text: d[1].toUpperCase(), font: F.head, bold: true,
         size: T.micro - 0.5, charSpacing: 1.2, color: C.purple, valign: 'middle' });
  head({ x: 9.1, y: y + 0.18, w: 3.33, h: 0.22, text: d[2], size: T.cardTitle, valign: 'middle' });
  text({ x: 7.55, y: y + 0.46, w: 4.88, h: 0.3, text: d[3], size: T.cap, color: C.txt2, lh: 1.4 });
});
img({ path: LOGO('neon', 'light'), x: 7.42, y: 4.86, w: 0.24, h: 0.24 });
arrowDown(9.73, 5.86, 0.26, C.purpleLt);
rect({ x: 7.03, y: 6.2, w: 5.4, h: 0.5, r: 0.1, fill: C.purpleTint });
text({ x: 7.03, y: 6.2, w: 5.4, h: 0.5, text: 'LIVE APPLICATION', font: F.head, bold: true,
       size: T.micro + 2, charSpacing: 2.4, align: 'center', valign: 'middle', color: C.purpleDeep });
notes([
  'Testing di sini bukan unit test. Ini uji jalur utama - happy path. Untuk MVP, itu sudah cukup.',
  '',
  'Empat skenario di kiri adalah kontrak minimum. Kalau salah satu gagal, jangan deploy.',
  '',
  'Perhatikan skenario Booking: yang diuji bukan cuma "booking tersimpan", tapi juga "slot yang sama tidak bisa dipesan lagi". Itu justru masalah bisnis aslinya.',
  '',
  'Deployment: jangan berlama-lama memilih stack. Vercel untuk frontend, Railway untuk backend, Supabase atau Neon untuk database. Semua punya tier gratis yang cukup untuk MVP.',
  '',
  'Pesan penting: aplikasi yang tidak bisa diakses orang lain belum selesai. Deploy adalah bagian dari definisi selesai, bukan tahap opsional.',
].join('\n'));

/* ============== 22 - PERNYATAAN PENUTUP  [STATEMENT / QUOTE, dark] ============== */
slide({ name: 'AI tidak menggantikan Software Engineer', dark: true });
statement({
  dark: true,
  eyebrow: 'Section 07  ·  Closing',
  text: 'AI tidak menggantikan\nSoftware Engineer.',
  size: 38, y: 2.35, w: 11.3, h: 1.3,
  page: 22,
});
head({ x: M, y: 4.05, w: 11.3, h: 1.3,
       text: 'AI mempercepat Software Engineer\nyang punya workflow yang benar.',
       size: 38, color: C.purpleLt, lh: 1.16 });
line({ x: M, y: 5.72, w: 3.0, h: 0, color: '5C5280', width: 1.5 });
text({ x: M, y: 5.94, w: 8, h: 0.3, text: 'Inti seminar hari ini', font: F.head, bold: true,
       size: T.micro + 1, charSpacing: 1.9, color: '8C84A8', valign: 'middle' });
notes([
  'Berhenti di sini. Diam 3 detik sebelum bicara.',
  '',
  'Bacakan pelan, dua kalimat, dengan jeda di antaranya:',
  '"AI tidak menggantikan Software Engineer."',
  '(jeda)',
  '"AI mempercepat Software Engineer yang punya workflow yang benar."',
  '',
  'Jangan menambahkan penjelasan apa pun setelah ini. Biarkan kalimatnya bekerja sendiri, lalu lanjut ke Key Takeaways.',
].join('\n'));

/* ============== 23 - KEY TAKEAWAYS + Q&A  [HERO, cream] ============== */
slide({ name: 'Key Takeaways + Q&A' });
frame({ eyebrow: 'Section 07  ·  Closing', title: 'Key Takeaways',
        sub: 'Lima hal yang saya harap tetap Anda ingat minggu depan, saat seminar ini sudah terlupakan.',
        subW: 8.4, page: 23 });
const tk = [
  ['Mulai dari masalah', 'Bukan dari ide, dan bukan dari tools.'],
  ['Dokumen dulu', 'Kode adalah konsekuensi, bukan titik awal.'],
  ['Scope adalah rem', 'Yang tidak tertulis, tidak dikerjakan.'],
  ['AI mengeksekusi', 'Manusia yang tetap memutuskan.'],
  ['Review itu pekerjaan', 'Bukan formalitas di akhir sprint.'],
];
tk.forEach((t, i) => {
  const y = 2.62 + i * 0.72;
  line({ x: M, y, w: CW, h: 0, color: C.border, width: 1 });
  head({ x: M, y: y + 0.18, w: 0.7, h: 0.34, text: '0' + (i + 1), size: T.cardTitle + 2,
         color: C.purpleLt, valign: 'middle' });
  head({ x: M + 0.95, y: y + 0.18, w: 4.4, h: 0.34, text: t[0], size: 21, valign: 'middle' });
  text({ x: M + 5.7, y: y + 0.18, w: CW - 5.7, h: 0.34, text: t[1], size: T.body + 1.5,
         color: C.txt2, valign: 'middle' });
});
line({ x: M, y: 2.62 + 5 * 0.72, w: CW, h: 0, color: C.border, width: 1 });
chip(M, 6.42, 1.5, 0.4, 'Q & A', { fill: C.purpleTint, border: C.purpleLt, size: T.micro + 1, charSpacing: 1.6 });
text({ x: M + 1.72, y: 6.42, w: 6.1, h: 0.4,
       text: 'AI Builder vs Agent, masa depan developer, atau cara mulai belajar.',
       size: T.small, color: C.txt2, valign: 'middle' });
text({ x: 9.1, y: 6.42, w: 3.33, h: 0.4, text: 'Terima kasih.', font: F.head, bold: true,
       size: T.cardTitle + 2, align: 'right', valign: 'middle', color: C.purpleDeep });
notes([
  'Bacakan lima poin ini pelan. Jangan buru-buru - ini yang akan mereka bawa pulang.',
  '',
  'Pertanyaan yang biasanya muncul di Q&A, siapkan jawabannya:',
  '- AI Builder vs AI Agent, pilih yang mana? Builder untuk validasi ide, Agent untuk produk yang akan dirawat.',
  '- Apakah developer akan tergantikan? Yang tergantikan adalah orang yang cuma bisa mengetik kode tanpa memahami masalah.',
  '- Bagaimana cara mulai belajar? Ambil satu bisnis di sekitar Anda, kerjakan delapan langkah workflow tadi sampai selesai. Satu proyek utuh lebih berharga daripada sepuluh tutorial.',
  '',
  'Tutup dengan tantangan konkret: minggu ini, pilih satu bisnis, tulis empat dokumennya, bangun MVP-nya. Kirim hasilnya ke grup.',
].join('\n'));
