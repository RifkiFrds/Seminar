const L = require('./lib.js');
const K = require('./kit.js');
const K2 = require('./kit2.js');
const { C, F, T, W, H, slide, notes, bg, img, rect, ell, line, text, head, card, push } = L;
const { M, CW, frame, sectionTag, mark, chip, label, bullet, arrowDown, arrowRight } = K;
const { photoBed, photoCover, statement, logoRow, logoTile, hairRow, bigNum, LOGO } = K2;

/* ============== 17 - SEKARANG KITA BUKA IDE  [STATEMENT, dark] ============== */
slide({ name: 'Sekarang kita buka IDE', dark: true });
statement({
  dark: true,
  eyebrow: 'Section 04  ·  Documentation',
  text: 'Sekarang kita\nbuka IDE.',
  size: 68, y: 2.25, w: 10.0, h: 2.3,
  sub: 'Empat template ini kita tulis langsung, bukan dibaca dari slide.',
  subY: 4.9, subW: 8.0, subSize: 18,
  page: 17,
});
line({ x: M, y: 5.7, w: 11.53, h: 0, color: C.borderDark, width: 1 });
['PRD.md', 'SCOPE.md', 'DESIGN.md', 'TASK.md'].forEach((f, i) => {
  text({ x: M + i * 2.95, y: 5.94, w: 2.8, h: 0.32, text: f, font: F.head, bold: true,
         size: 20, color: C.purpleLt, valign: 'middle' });
});
notes([
  'JEDA PANGGUNG. Slide ini menandai peralihan dari mendengar ke mengerjakan.',
  '',
  'Sampaikan kontraknya sebelum pindah: "Saya akan tulis empat file ini dari nol. Kalian ikuti di laptop masing-masing, pakai bisnis pilihan kalian sendiri - bukan padel court."',
  '',
  'Yang dikerjakan di IDE, berurutan:',
  '1. PRD.md - product name, problem, goals, users, features',
  '2. SCOPE.md - in scope, out of scope, technical constraints',
  '3. DESIGN.md - pages, user flow, database concept',
  '4. TASK.md - phase 1 sampai 6 beserta task-nya',
  '',
  'Target 30-40 menit. Jangan sempurna, cukup lengkap. Sempurna itu musuh selesai.',
  '',
  'Kalau ada peserta yang tertinggal, bagikan file template Anda supaya mereka bisa menyusul.',
].join('\n'));

/* ============== 18 - PLANNER VS EXECUTOR  [HERO, split + logo] ============== */
slide({ name: 'Planner vs Executor' });
frame({ eyebrow: 'Section 05  ·  Agentic Development', page: 18 });
head({ x: M, y: 0.98, w: 8.0, h: 0.56, text: 'Planner vs Executor', size: T.title, lh: 1.1 });
text({ x: M, y: 1.68, w: 8.8, h: 0.3,
       text: 'Dua peran AI yang berbeda. Kesalahan paling umum adalah memakai satu AI untuk mengerjakan keduanya sekaligus.',
       size: T.body + 0.5, color: C.txt2, valign: 'middle' });

const pnW = 5.4, pnY = 2.32, pnH = 4.3, exX = 7.03;

// ---- PLANNER (terang)
rect({ x: M, y: pnY, w: pnW, h: pnH, r: 0.14, fill: C.white, line: { color: C.purpleLt, width: 1 }, sh: true });
chip(M + 0.3, pnY + 0.26, 1.5, 0.32, 'PLANNER', { fill: C.purpleTint, border: C.purpleLt, size: T.micro + 0.5 });
head({ x: M + 0.3, y: pnY + 0.76, w: pnW - 0.6, h: 0.34, text: 'Berpikir sebelum mengetik', size: 18, valign: 'middle' });
[
  ['Analyze', 'Membedah masalah bisnis jadi kebutuhan konkret.'],
  ['Plan', 'Menyusun scope, prioritas, dan urutan pengerjaan.'],
  ['Design', 'Menetapkan halaman, alur pengguna, struktur data.'],
].forEach((a, i) => {
  const y = pnY + 1.34 + i * 0.56;
  line({ x: M + 0.3, y, w: pnW - 0.6, h: 0, color: C.border, width: 1 });
  head({ x: M + 0.3, y: y + 0.12, w: 1.5, h: 0.24, text: a[0], size: T.cardTitle, valign: 'middle' });
  text({ x: M + 1.85, y: y + 0.12, w: pnW - 2.15, h: 0.34, text: a[1], size: T.cap, color: C.txt2, lh: 1.35 });
});
text({ x: M + 0.3, y: pnY + 3.1, w: 1.2, h: 0.22, text: 'TOOLS', font: F.head, bold: true,
       size: T.micro - 0.5, charSpacing: 1.4, color: C.purple, valign: 'middle' });
logoRow(M + 0.3, pnY + 3.38, 0.3, 0.26,
  [{ logo: 'claude' }, { logo: 'googlegemini' }, { label: 'ChatGPT' }, { label: 'Antigravity' }], 'light');
line({ x: M + 0.3, y: pnY + 3.86, w: pnW - 0.6, h: 0, color: C.border, width: 1 });
text({ x: M + 0.3, y: pnY + 3.98, w: 5, h: 0.22, text: 'OUTPUT   PRD.md · SCOPE.md · DESIGN.md · TASK.md',
       font: F.head, bold: true, size: T.micro - 0.5, charSpacing: 0.8, color: C.purpleDeep, valign: 'middle' });

// ---- HANDOFF
text({ x: 6.32, y: pnY + 1.9, w: 0.7, h: 0.2, text: 'HANDOFF', font: F.head, bold: true,
       size: T.micro - 1.5, charSpacing: 0.8, align: 'center', valign: 'middle', color: C.purple });
arrowRight(6.42, pnY + 2.28, 0.5, C.purple);

// ---- EXECUTOR (gelap)
rect({ x: exX, y: pnY, w: pnW, h: pnH, r: 0.14, fill: C.ink, line: { color: C.borderDark, width: 1 }, sh: true });
chip(exX + 0.3, pnY + 0.26, 1.66, 0.32, 'EXECUTOR', { fill: '3B3450', border: '5C5280', color: C.purpleLt, size: T.micro + 0.5 });
head({ x: exX + 0.3, y: pnY + 0.76, w: pnW - 0.6, h: 0.34, text: 'Mengeksekusi yang sudah diputuskan',
       size: 16, color: C.txtInv, valign: 'middle' });
[
  ['Build', 'Menulis kode dari dokumen, satu phase sekali jalan.'],
  ['Refactor', 'Merapikan struktur agar konsisten dengan Design.'],
  ['Test', 'Menjalankan skenario utama, memperbaiki yang gagal.'],
].forEach((a, i) => {
  const y = pnY + 1.34 + i * 0.56;
  line({ x: exX + 0.3, y, w: pnW - 0.6, h: 0, color: C.borderDark, width: 1 });
  head({ x: exX + 0.3, y: y + 0.12, w: 1.5, h: 0.24, text: a[0], size: T.cardTitle,
         color: C.txtInv, valign: 'middle' });
  text({ x: exX + 1.85, y: y + 0.12, w: pnW - 2.15, h: 0.34, text: a[1], size: T.cap,
         color: C.txtInv2, lh: 1.35 });
});
text({ x: exX + 0.3, y: pnY + 3.1, w: 1.2, h: 0.22, text: 'TOOLS', font: F.head, bold: true,
       size: T.micro - 0.5, charSpacing: 1.4, color: C.purpleLt, valign: 'middle' });
logoRow(exX + 0.3, pnY + 3.38, 0.3, 0.26,
  [{ logo: 'cursor' }, { logo: 'githubcopilot' }, { logo: 'opencode' }, { label: 'Antigravity' }], 'dark');
line({ x: exX + 0.3, y: pnY + 3.86, w: pnW - 0.6, h: 0, color: C.borderDark, width: 1 });
text({ x: exX + 0.3, y: pnY + 3.98, w: 5, h: 0.22, text: 'OUTPUT   Frontend · Backend · Database · API',
       font: F.head, bold: true, size: T.micro - 0.5, charSpacing: 0.8, color: C.purpleLt, valign: 'middle' });
notes([
  'Bedakan dua peran ini dengan tegas. Ini kesalahan paling umum yang saya lihat.',
  '',
  'Planner: AI yang diajak berpikir. Anda berdiskusi, membantah, memotong fitur. Outputnya DOKUMEN, bukan kode.',
  'Executor: AI yang diberi dokumen dan disuruh membangun. Di sini Anda tidak berdiskusi lagi soal fitur - keputusannya sudah diambil.',
  '',
  'Kesalahan umum: memakai satu sesi chat untuk keduanya. Akibatnya AI mengubah keputusan produk di tengah proses coding, dan hasilnya tidak pernah stabil.',
  '',
  'Kata kuncinya HANDOFF (tunjuk panah di tengah). Ada momen jelas di mana perencanaan berhenti dan eksekusi dimulai. Momen itu adalah saat keempat dokumen selesai - yang barusan kita tulis di IDE.',
  '',
  'Tiga aturan Planner yang wajib disebut: (1) beri konteks utuh, jangan diringkas; (2) satu dokumen per sesi; (3) selalu potong hasilnya, karena Planner selalu terlalu optimistis.',
  '',
  'Siklus Executor untuk tiap phase: Specification, Planning, Implementation, Refactor, Testing. Diulang per phase, bukan sekaligus.',
].join('\n'));

/* ============== 19 - LIVE DEMO START  [terminal, dark] ============== */
slide({ name: 'Live Demo Start', dark: true });
frame({ dark: true, eyebrow: 'Section 05  ·  Agentic Development', title: 'Live Demo',
        sub: 'Empat dokumen masuk. Satu aplikasi keluar. Yang menarik justru ada di bagian yang kita hentikan.',
        subW: 6.0, page: 19 });
text({ x: M, y: 2.62, w: 5.4, h: 0.24, text: 'YANG AKAN TERJADI', font: F.head, bold: true,
       size: T.micro, charSpacing: 1.9, color: C.purpleLt, valign: 'middle' });
[
  ['Serahkan dokumen', 'PRD, Scope, Design, dan Task diberikan sebagai satu paket.'],
  ['Jalankan per phase', 'Phase 1 sampai 4 dieksekusi berurutan, bukan sekaligus.'],
  ['Hentikan dan baca', 'Setiap phase selesai, kita berhenti dan membaca hasilnya.'],
  ['Jalankan aplikasinya', 'Booking dibuat dari browser, bukan dari chat WhatsApp.'],
].forEach((s, i) => {
  const y = 3.02 + i * 0.8;
  line({ x: M, y, w: 5.4, h: 0, color: C.borderDark, width: 1 });
  text({ x: M, y: y + 0.18, w: 0.4, h: 0.24, text: '0' + (i + 1), font: F.head, bold: true,
         size: T.micro, charSpacing: 1.2, color: '6E6688', valign: 'middle' });
  head({ x: M + 0.55, y: y + 0.18, w: 4.85, h: 0.24, text: s[0], size: T.cardTitle,
         color: C.txtInv, valign: 'middle' });
  text({ x: M + 0.55, y: y + 0.48, w: 4.8, h: 0.3, text: s[1], size: T.cap, color: C.txtInv2, lh: 1.4 });
});
text({ x: M, y: 6.34, w: 5.4, h: 0.4,
       text: 'Perhatikan berapa kali saya menghentikan AI, dan kenapa.',
       size: T.small, color: C.purpleLt, italic: true, valign: 'middle' });

rect({ x: 7.03, y: 2.42, w: 5.4, h: 4.34, r: 0.13, fill: '15121C', line: { color: C.borderDark, width: 1 } });
rect({ x: 7.03, y: 2.42, w: 5.4, h: 0.46, r: 0.13, fill: '221E2E' });
rect({ shape: 'rect', x: 7.03, y: 2.72, w: 5.4, h: 0.16, fill: '221E2E' });
line({ x: 7.03, y: 2.88, w: 5.4, h: 0, color: C.borderDark, width: 1 });
[0, 1, 2].forEach((i) => ell({ x: 7.26 + i * 0.22, y: 2.58, w: 0.13, h: 0.13,
       fill: ['5C5280', '463F59', '3A3350'][i] }));
text({ x: 8.1, y: 2.42, w: 2.5, h: 0.46, text: 'agent  ·  padel-booking', font: F.mono, size: T.micro,
       color: '6E6688', valign: 'middle' });
[['nextdotjs', 10.95], ['typescript', 11.28], ['tailwindcss', 11.61], ['supabase', 11.94]]
  .forEach(([slug, lx]) => img({ path: LOGO(slug, 'dark'), x: lx, y: 2.54, w: 0.22, h: 0.22 }));
const term = [
  ['$ agent run --spec ./docs', C.purpleLt],
  ['reading PRD.md SCOPE.md DESIGN.md TASK.md', '6E6688'],
  ['', '6E6688'],
  ['Phase 1  Project Setup', 'C3BCD6'],
  ['  [ok] Next.js + TypeScript', '7FA98A'],
  ['  [ok] Tailwind CSS', '7FA98A'],
  ['  [ok] Supabase client', '7FA98A'],
  ['', '6E6688'],
  ['Phase 2  Authentication', 'C3BCD6'],
  ['  [ok] Register  ·  Login', '7FA98A'],
  ['  [..] Logout', 'B5AEC6'],
  ['', '6E6688'],
  ['Phase 3  Booking System', 'C3BCD6'],
  ['  [..] Create Booking', 'B5AEC6'],
];
term.forEach((t, i) => {
  if (!t[0]) return;
  text({ x: 7.3, y: 3.06 + i * 0.245, w: 4.9, h: 0.22, text: t[0], font: F.mono, size: T.micro,
         color: t[1], valign: 'middle' });
});

notes([
  'Ini titik balik seminar - dari mendengar jadi melihat.',
  '',
  'Sebelum mulai, sampaikan kontraknya: saya akan sengaja BERHENTI di beberapa titik. Setiap berhenti, kalian yang menilai hasilnya sebelum saya lanjut.',
  '',
  'Kalau live demo gagal (dan kadang memang gagal), JANGAN panik dan jangan buru-buru diperbaiki diam-diam. Justru tunjukkan: inilah kenapa Human Review ada di workflow. Kegagalan di panggung adalah bahan ajar terbaik.',
  '',
  'Siapkan cadangan: screenshot atau rekaman hasil yang sudah jadi, kalau koneksi atau kuota bermasalah.',
  '',
  'Target waktu: 30 menit. Jangan sampai kehabisan waktu untuk sesi audit - itu bagian yang paling berharga.',
].join('\n'));

/* ============== 20 - HUMAN REVIEW CHECKLIST  [HERO, checklist grid] ============== */
slide({ name: 'Human Review Checklist' });
frame({ eyebrow: 'Section 06  ·  Human Review', page: 20 });
sectionTag(M, 1.02, '06', 'Human Review');
head({ x: M, y: 1.68, w: 8.4, h: 0.5, text: 'Human Review Checklist', size: T.title, lh: 1.1 });
text({ x: M, y: 2.28, w: 9.2, h: 0.28,
       text: 'AI menghasilkan kode yang jalan. Yang menentukan kode itu layak dipakai atau tidak, tetap Anda.',
       size: T.body, color: C.txt2, valign: 'middle' });
const audit = [
  ['dot', 'Product\nReview', 'Apakah yang jadi memang yang diminta?',
    ['Sesuai PRD?', 'Sesuai Scope?', 'Ada fitur yang tidak diminta?', 'User flow sesuai Design?']],
  ['sq', 'Technical\nReview', 'Apakah kodenya bisa dirawat bulan depan?',
    ['Struktur folder rapi?', 'Penamaan konsisten?', 'Tidak over-engineering?', 'Komponen dipakai ulang?']],
  ['ring', 'Security\nReview', 'Apakah aman dibuka ke internet?',
    ['Tidak ada secret key di kode?', 'Input tervalidasi?', 'Akses admin terlindungi?', 'Data sensitif tidak bocor?']],
  ['tri', 'Functionality\nReview', 'Apakah benar-benar berfungsi?',
    ['Login berjalan?', 'Booking berjalan?', 'Dashboard berjalan?', 'Error ditangani jelas?']],
];
const aw = (CW - 3 * 0.3) / 4;
audit.forEach((a, i) => {
  const x = M + i * (aw + 0.3), y = 2.62, h = 3.72;
  card({ x, y, w: aw, h, r: 0.12 });
  mark(x + 0.28, y + 0.28, 0.42, a[0], C.purple);
  head({ x: x + 0.28, y: y + 0.84, w: aw - 0.56, h: 0.52, text: a[1], size: T.cardTitle + 0.5, lh: 1.2 });
  text({ x: x + 0.28, y: y + 1.42, w: aw - 0.56, h: 0.42, text: a[2], size: T.cap, color: C.txt2, lh: 1.4 });
  line({ x: x + 0.28, y: y + 1.94, w: aw - 0.56, h: 0, color: C.border, width: 1 });
  a[3].forEach((c, j) => {
    const cy = y + 2.08 + j * 0.38;
    rect({ shape: 'rect', x: x + 0.28, y: cy + 0.055, w: 0.11, h: 0.11, r: 0.02, fill: 'none',
           line: { color: C.purpleLt, width: 1 } });
    text({ x: x + 0.54, y: cy, w: aw - 0.82, h: 0.3, text: c, size: T.cap, color: C.txt, lh: 1.3 });
  });
});
text({ x: M, y: 6.48, w: CW, h: 0.3,
       text: 'Kalau tidak ada yang me-review, berarti pelanggan Anda yang jadi reviewer pertamanya.',
       font: F.head, bold: true, size: T.cardTitle - 1, align: 'center', valign: 'middle', color: C.purpleDeep });
notes([
  'Ini slide yang paling ingin saya minta peserta foto. Empat kategori ini adalah alat kerja, bukan teori.',
  '',
  'Product Review: bandingkan hasil dengan PRD dan Scope. Fitur yang tidak diminta itu CACAT, bukan bonus.',
  'Technical Review: bayangkan Anda membuka kode ini bulan depan. Masih paham?',
  'Security Review: ini yang paling sering hilang dari hasil AI. Cek secret key hardcoded dan validasi input - dua ini saja sudah menyelamatkan banyak proyek.',
  'Functionality Review: jalankan sendiri. Jangan percaya laporan AI bahwa semuanya sudah berhasil.',
  '',
  'Sesi audit (14.00-14.30): pilih 2 sampai 3 hasil peserta, tampilkan di layar, dan bedah bersama memakai empat kategori ini. Jaga nada tetap membangun - kita membedah kode, bukan orangnya.',
  '',
  'Kalimat penutup: kalau tidak ada yang me-review, pelanggan Anda yang jadi reviewer pertama.',
].join('\n'));
