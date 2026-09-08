const L = require('./lib.js');
const K = require('./kit.js');
const K2 = require('./kit2.js');
const { C, F, T, W, H, slide, notes, bg, img, rect, ell, line, text, head, card, push } = L;
const { M, CW, frame, sectionTag, mark, chip, label, bullet, arrowDown, arrowRight } = K;
const { photoBed, photoCover, statement, logoRow, logoTile, hairRow, bigNum, LOGO } = K2;

/* ============== 01 - COVER  [full-bleed photo] ============== */
slide({ name: 'Cover', dark: true });
photoBed('cover-desk.jpg', 0.72);
text({ x: M, y: 1.15, w: 6, h: 0.24, text: 'SEMINAR  ·  HIMTI UMT', font: F.head, bold: true,
       size: T.micro + 0.5, charSpacing: 2.4, color: C.purpleLt, valign: 'middle' });
head({ x: M, y: 2.15, w: 9.5, h: 1.35, text: 'Vibecoding', size: 84, color: 'FFFFFF', lh: 1 });
text({ x: M, y: 3.62, w: 8.4, h: 0.5, text: 'From Business Problem to Production App',
       font: F.head, size: 24, color: C.purpleLt, lh: 1.2 });
text({ x: M, y: 4.55, w: 7.4, h: 0.62,
       text: 'Cara membangun aplikasi bersama AI dengan workflow yang benar — dari masalah bisnis nyata sampai aplikasi yang berjalan di production.',
       size: 13.5, color: 'CFC9DC', lh: 1.6 });
line({ x: M, y: 5.62, w: 11.53, h: 0, color: '4E466B', width: 1 });
text({ x: M, y: 5.82, w: 5.4, h: 0.3, text: 'Nama Pemateri', font: F.head, bold: true,
       size: 15, color: 'FFFFFF', valign: 'middle' });
text({ x: M, y: 6.16, w: 5.4, h: 0.26, text: 'Role  ·  Organisasi  ·  Tanggal Seminar',
       size: T.small, color: '9E97B4', valign: 'middle' });
['PRD.md', 'SCOPE.md', 'DESIGN.md', 'TASK.md'].forEach((f, i) => {
  text({ x: 8.05 + i * 1.12, y: 5.82, w: 1.1, h: 0.3, text: f, font: F.head, bold: true,
         size: T.micro, charSpacing: 0.4, color: '8C84A8', valign: 'middle' });
});
K.footer(true, null);
notes([
  'Selamat datang. Sebelum mulai, tiga pertanyaan cepat - angkat tangan:',
  '1) Siapa yang pernah membuat aplikasi sendiri?',
  '2) Siapa yang pernah memakai ChatGPT atau AI lain untuk coding?',
  '3) Siapa yang pernah copy-paste kode dari AI tanpa benar-benar membacanya?',
  '(Tunggu reaksi. Yang ketiga biasanya paling banyak - itu titik masuk kita.)',
  '',
  'Hari ini kita tidak belajar prompt. Kita belajar WORKFLOW. Kita mulai dari masalah bisnis nyata di sekitar kita, lalu mengubahnya jadi aplikasi yang jalan.',
  '',
  'Empat nama file di pojok kanan bawah itu inti seminar hari ini. Nanti kita bahas satu per satu.',
  '',
  'ISI DULU: ganti "Nama Pemateri" dan baris "Role / Organisasi / Tanggal".',
].join('\n'));

/* ============== 02 - WHO AM I  [asimetris 40/60, foto bleed kiri] ============== */
slide({ name: 'Who Am I' });
bg(C.cream);
rect({ shape: 'rect', x: 0, y: 0, w: 4.9, h: H, fill: C.purpleTint });
rect({ x: 0.55, y: 1.35, w: 3.8, h: 4.8, r: 0.14, fill: C.white,
       line: { color: C.purpleLt, width: 1, dash: 'dash' } });
mark(2.11, 3.4, 0.68, 'ring', C.purple);
text({ x: 0.55, y: 4.3, w: 3.8, h: 0.24, text: 'FOTO PEMATERI', font: F.head, bold: true,
       size: T.micro, charSpacing: 1.8, align: 'center', valign: 'middle', color: C.purpleDeep });
text({ x: 0.55, y: 6.35, w: 3.8, h: 0.4, text: 'Ganti dengan foto Anda — Insert > Picture',
       size: T.cap, color: C.txt2, align: 'center', valign: 'middle' });

text({ x: 5.6, y: 1.35, w: 6, h: 0.24, text: 'SECTION 01  ·  OPENING', font: F.head, bold: true,
       size: T.micro, charSpacing: 1.9, color: C.purple, valign: 'middle' });
head({ x: 5.6, y: 1.85, w: 6.8, h: 0.72, text: 'Nama Pemateri', size: 40, lh: 1.1 });
text({ x: 5.6, y: 2.72, w: 6.8, h: 0.28, text: 'Role  ·  Organisasi', font: F.head, bold: true,
       size: T.cardTitle + 1, color: C.purpleDeep, valign: 'middle' });
text({ x: 5.6, y: 3.35, w: 6.6, h: 1.3,
       text: 'Sehari-hari membangun produk digital: dari menerjemahkan kebutuhan bisnis menjadi spesifikasi, sampai membawanya ke production. Beberapa tahun terakhir fokus pada bagaimana AI Agent dipakai dalam alur kerja engineering yang serius.',
       size: T.body + 0.5, color: C.txt2, lh: 1.6 });
let fx = 5.6;
['Product Engineering', 'AI Engineering', 'Software Architecture'].forEach((f) => {
  const w = f.length * 0.086 + 0.5;
  chip(fx, 4.92, w, 0.36, f, { size: T.micro + 0.5, charSpacing: 0.8 });
  fx += w + 0.16;
});
text({ x: 5.6, y: 5.62, w: 6.4, h: 0.6,
       text: 'Silakan sapa saya kapan saja selama sesi. Seminar ini dirancang dua arah, bukan monolog tiga jam.',
       size: T.small, color: C.txt2, lh: 1.5, italic: true });
K.footer(false, 2);
notes([
  'Perkenalan singkat - maksimal 2 menit. Yang penting bukan CV, tapi kredibilitas konteks:',
  'sebutkan satu produk atau proyek nyata yang pernah Anda bawa sampai production, dan satu pengalaman konkret memakai AI Agent di pekerjaan sehari-hari.',
  '',
  'Tutup dengan mengundang interaksi: "Potong saya kapan saja kalau ada yang mau ditanya."',
  '',
  'ISI DULU: nama, role, bio, dan foto.',
].join('\n'));

/* ============== 03 - ROADMAP  [hairline list, tanpa kartu] ============== */
slide({ name: 'Roadmap Seminar' });
frame({ eyebrow: 'Section 01  ·  Opening', title: 'Roadmap Seminar',
        sub: 'Tiga jam, delapan babak. Setengah teori, setengah praktik langsung di laptop Anda.', page: 3 });
const rm = [
  ['11.00', 'Opening', 'Menyamakan persepsi soal AI dan coding.'],
  ['11.10', 'What Is Vibecoding', 'Definisi, evolusi, dan landscape AI hari ini.'],
  ['11.25', 'Master Workflow', 'Delapan langkah dari masalah ke aplikasi.'],
  ['11.40', 'Business Discovery', 'Cari masalah bisnis nyata lewat Google Maps.'],
  ['13.10', 'Documentation', 'Menulis PRD, Scope, Design, dan Task di IDE.'],
  ['13.20', 'Agentic Development', 'Planner dan Executor membangun aplikasi.'],
  ['13.50', 'Deploy & Audit', 'Naikkan ke production, lalu bedah hasilnya.'],
  ['14.30', 'Q&A', 'Diskusi terbuka dan arah belajar berikutnya.'],
];
rm.forEach((r, i) => {
  const y = 2.5 + i * 0.56;
  line({ x: M, y, w: CW, h: 0, color: C.border, width: 1 });
  text({ x: M, y: y + 0.14, w: 0.9, h: 0.28, text: r[0], font: F.head, bold: true, size: T.small,
         charSpacing: 0.6, color: C.purpleDeep, valign: 'middle' });
  head({ x: M + 1.25, y: y + 0.14, w: 3.4, h: 0.28, text: r[1], size: T.cardTitle + 1, valign: 'middle' });
  text({ x: M + 5.0, y: y + 0.14, w: CW - 5.0, h: 0.28, text: r[2], size: T.body,
         color: C.txt2, valign: 'middle' });
});
line({ x: M, y: 2.5 + 8 * 0.56, w: CW, h: 0, color: C.border, width: 1 });
text({ x: M, y: 7.02 - 0.06, w: 6, h: 0.2, text: '', size: T.cap, color: C.txt2 });
notes([
  'Beri gambaran besar supaya peserta tahu kapan harus buka laptop dan kapan cukup mendengar.',
  '',
  'Pesan penting: bagian teori (11.00-11.40) itu singkat. Sisanya praktik. Jadi jangan tinggalkan sesi siang - di situ aplikasinya benar-benar dibangun.',
  '',
  'Catat perubahan penting: sesi Documentation jam 13.10 tidak dibahas lewat slide. Kita langsung buka IDE dan menulis template PRD, Scope, Design, dan Task bersama-sama.',
  '',
  'Ingatkan juga: ISHOMA 12.00-13.00. Sesudah itu semua harus sudah punya akses AI dan browser.',
].join('\n'));

/* ============== 04 - SECTION COVER 02  [full-bleed photo] ============== */
slide({ name: 'Section 02 — What Is Vibecoding', dark: true });
photoCover({ photo: 'section-code.jpg', op: 0.7, eyebrow: 'Section 02', num: '02',
             title: 'What Is Vibecoding',
             sub: 'Menyamakan persepsi: apa yang sebenarnya berubah ketika AI masuk ke proses engineering.',
             page: 4 });
notes([
  'Slide jeda. Tarik napas, ganti energi.',
  '',
  'Satu kalimat pengantar saja: "Sebelum kita bicara cara kerjanya, kita samakan dulu apa yang sebenarnya berubah."',
  '',
  'Jangan berlama-lama di sini - maksimal 15 detik.',
].join('\n'));

/* ============== 05 - TRADITIONAL DEVELOPMENT  [big number] ============== */
slide({ name: 'Traditional Development' });
frame({ eyebrow: 'Section 02  ·  What Is Vibecoding', page: 5 });
head({ x: M, y: 1.0, w: 5.5, h: 1.02, text: 'Cara lama\nmembangun software', size: 32, lh: 1.12 });
bigNum(M, 2.28, '3–6', 'BULAN SEBELUM ADA YANG BISA DIPAKAI', { w: 4.2, h: 1.5, size: 112, lw: 4.6 });
text({ x: M, y: 4.52, w: 4.9, h: 1.2,
       text: 'Ide muncul, developer langsung menulis kode, lalu berharap hasilnya sesuai kebutuhan. Dokumentasi menyusul belakangan — kalau sempat.',
       size: T.body + 0.5, color: C.txt2, lh: 1.6 });
['Idea', 'Coding', 'Deploy'].forEach((s, i) => {
  const x = M + i * 1.5;
  text({ x, y: 6.05, w: 1.2, h: 0.3, text: s, font: F.head, bold: true, size: T.cardTitle,
         color: C.txt, valign: 'middle' });
  if (i < 2) arrowRight(x + 1.16, 6.20, 0.24, C.purpleLt);
});
line({ x: 6.5, y: 1.05, w: 0, h: 5.3, color: C.border, width: 1 });
text({ x: 7.1, y: 1.05, w: 5.3, h: 0.24, text: 'DI MANA BIAYANYA', font: F.head, bold: true,
       size: T.micro, charSpacing: 1.9, color: C.purple, valign: 'middle' });
[
  ['Kebutuhan berubah di tengah jalan', 'Tidak ada dokumen yang disepakati, jadi setiap orang punya versi kebenarannya sendiri.'],
  ['Scope melebar tanpa disadari', 'Fitur bertambah satu per satu sampai timeline dan tim ikut berantakan.'],
  ['Feedback datang terlalu terlambat', 'Bisnis baru melihat produknya saat hampir selesai, dan sering tidak sesuai.'],
].forEach((t, i) => {
  const y = 1.62 + i * 1.62;
  line({ x: 7.1, y, w: 5.33, h: 0, color: C.border, width: 1 });
  head({ x: 7.1, y: y + 0.22, w: 5.33, h: 0.3, text: t[0], size: T.cardTitle + 1.5, valign: 'middle' });
  text({ x: 7.1, y: y + 0.6, w: 5.2, h: 0.62, text: t[1], size: T.small, color: C.txt2, lh: 1.45 });
});
notes([
  'Pertanyaan pembuka: "Kalau kalian dapat tugas bikin aplikasi, langkah pertama kalian apa?" Jawaban paling sering: langsung ngoding, atau langsung cari template.',
  '',
  'Angka 3-6 bulan itu yang harus mendarat. Itu jarak antara ide dan sesuatu yang benar-benar bisa dipakai orang, dengan cara lama.',
  '',
  'Lalu tunjukkan di mana biayanya (kolom kanan). Semua asumsi disimpan di kepala developer, bukan di dokumen.',
  '',
  'Jembatan ke slide berikutnya: "Sekarang AI datang. Pertanyaannya, AI ini mempercepat langkah yang mana?"',
].join('\n'));

/* ============== 06 - AI DEVELOPMENT EVOLUTION  [timeline, tanpa kartu] ============== */
slide({ name: 'AI Development Evolution' });
frame({ eyebrow: 'Section 02  ·  What Is Vibecoding', title: 'Evolusi Software Development',
        sub: 'AI tidak datang tiba-tiba. Ia bergerak dari sekadar melengkapi kode, sampai mengeksekusi rencana sendiri.',
        page: 6 });
const evo = [
  ['Traditional', 'Manusia menulis 100% kode.', 'Manusia: penulis kode'],
  ['AI Assisted', 'AI melengkapi baris di editor.', 'Manusia: pengarah baris'],
  ['Agentic', 'AI membaca dokumen, lalu mengeksekusi.', 'Manusia: reviewer'],
  ['Autonomous', 'AI mengambil issue dan mengirim PR.', 'Manusia: pemberi tujuan'],
];
const axisY = 3.62, ew = CW / 4;
line({ x: M, y: axisY, w: CW - 0.16, h: 0, color: C.border, width: 1.5 });
push({ t: 'tri', dir: 'right', x: M + CW - 0.16, y: axisY - 0.075, w: 0.16, h: 0.15, fill: C.purpleLt });
evo.forEach((e, i) => {
  const cx = M + i * ew + 0.12, hot = i === 2;
  if (hot) { ell({ x: cx - 0.135, y: axisY - 0.135, w: 0.27, h: 0.27, fill: 'none', line: { color: C.purple, width: 1.25 } }); }
  ell({ x: cx - 0.07, y: axisY - 0.07, w: 0.14, h: 0.14, fill: hot ? C.purpleDeep : C.purple });
  text({ x: cx - 0.02, y: 2.62, w: 1.0, h: 0.22, text: '0' + (i + 1), font: F.head, bold: true,
         size: T.micro, charSpacing: 1.2, color: C.purpleLt, valign: 'middle' });
  head({ x: cx - 0.02, y: 2.9, w: ew - 0.34, h: 0.34, text: e[0],
         size: hot ? T.cardTitle + 4 : T.cardTitle + 2.5, valign: 'middle' });
  text({ x: cx - 0.02, y: 3.98, w: ew - 0.4, h: 0.6, text: e[1], size: T.body, color: C.txt2, lh: 1.45 });
  text({ x: cx - 0.02, y: 4.72, w: ew - 0.4, h: 0.24, text: e[2], font: F.head, bold: true,
         size: T.micro, charSpacing: 0.7, color: C.purpleDeep, valign: 'middle' });
});
text({ x: M, y: 5.6, w: 4, h: 0.24, text: 'KONTROL MANUAL', font: F.head, bold: true, size: T.micro,
       charSpacing: 1.5, color: C.txt2, valign: 'middle' });
text({ x: W - M - 4, y: 5.6, w: 4, h: 0.24, text: 'OTONOMI AI', font: F.head, bold: true, size: T.micro,
       charSpacing: 1.5, align: 'right', color: C.txt2, valign: 'middle' });
rect({ x: M, y: 6.12, w: CW, h: 0.6, r: 0.1, fill: C.purpleTint });
text({ x: M + 0.35, y: 6.12, w: CW - 0.7, h: 0.6,
       text: 'Semakin ke kanan, menulis kode makin bukan pekerjaan utama kita. Yang jadi pekerjaan utama adalah spesifikasi dan review.',
       font: F.head, bold: true, size: T.cardTitle, valign: 'middle', color: C.purpleDeep });
notes([
  'Poin utama: ini bukan soal tools, ini soal siapa yang memegang kendali di tiap tahap.',
  '',
  '01 Traditional - manusia menulis semuanya.',
  '02 AI Assisted - Copilot, Cursor. AI melengkapi baris. Produktivitas naik, arsitektur tetap di kepala kita.',
  '03 Agentic - INI POSISI KITA HARI INI (tunjuk titik yang dilingkari). AI membaca dokumen, menyusun rencana, mengeksekusi banyak file sekaligus. Peran kita berubah jadi reviewer.',
  '04 Autonomous - Devin, Codex, SWE Agent. Belum sepenuhnya matang, tapi arahnya jelas.',
  '',
  'Baris "Manusia: ..." di bawah setiap tahap adalah inti slide ini. Bacakan keempatnya berurutan.',
].join('\n'));
