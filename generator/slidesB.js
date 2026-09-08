const L = require('./lib.js');
const K = require('./kit.js');
const K2 = require('./kit2.js');
const { C, F, T, W, H, slide, notes, bg, img, rect, ell, line, text, head, card, push } = L;
const { M, CW, frame, sectionTag, mark, chip, label, bullet, arrowDown, arrowRight } = K;
const { photoBed, photoCover, statement, logoRow, logoTile, hairRow, bigNum } = K2;

/* ============== 07 - AI LANDSCAPE  [logo grid] ============== */
slide({ name: 'AI Landscape' });
frame({ eyebrow: 'Section 02  ·  What Is Vibecoding', title: 'Landscape AI untuk Developer',
        sub: 'Empat kategori dengan cara pakai yang berbeda. Salah memilih kategori, salah juga ekspektasinya.',
        page: 7 });
const land = [
  ['AI Builder', 'Prompt jadi aplikasi utuh dalam hitungan menit.', 'Prototype cepat',
   [['v0', 'v0'], [null, 'Lovable'], [null, 'Bolt'], ['firebase', 'Firebase']]],
  ['AI Assistant', 'Menemani Anda mengetik kode di dalam editor.', 'Percepat coding',
   [['githubcopilot', 'Copilot'], ['cursor', 'Cursor'], [null, 'VS Code']]],
  ['AI Agent', 'Membaca dokumen, merencanakan, lalu mengerjakan.', 'Bangun fitur utuh',
   [['claude', 'Claude'], ['googlegemini', 'Gemini'], ['opencode', 'OpenCode'], [null, 'Antigravity']]],
  ['Autonomous', 'Menerima issue dan menyelesaikannya sendiri.', 'Kerja tanpa diawasi',
   [[null, 'Devin'], [null, 'Codex'], [null, 'SWE Agent']]],
];
const lw = CW / 4;
land.forEach((l, i) => {
  const x = M + i * lw, hot = i === 2;
  if (hot) rect({ x: x - 0.26, y: 2.5, w: lw - 0.02, h: 3.94, r: 0.12, fill: C.purpleTint });
  if (i > 0 && !hot) line({ x: x - 0.3, y: 2.66, w: 0, h: 3.5, color: C.border, width: 1 });
  text({ x, y: 2.78, w: 1.0, h: 0.22, text: '0' + (i + 1), font: F.head, bold: true,
         size: T.micro, charSpacing: 1.2, color: hot ? C.purpleDeep : C.purpleLt, valign: 'middle' });
  head({ x, y: 3.08, w: lw - 0.5, h: 0.34, text: l[0], size: T.cardTitle + 3, valign: 'middle' });
  text({ x, y: 3.54, w: lw - 0.55, h: 0.66, text: l[1], size: T.small, color: C.txt2, lh: 1.45 });
  l[3].forEach((t, j) => {
    const col = j % 2, row = Math.floor(j / 2);
    logoTile(x + 0.06 + col * 1.42, 4.44 + row * 0.86, 0.34, t[0], t[1], 'light');
  });
  text({ x, y: 6.14, w: lw - 0.5, h: 0.24, text: l[2].toUpperCase(), font: F.head, bold: true,
         size: T.micro, charSpacing: 1.4, color: C.purpleDeep, valign: 'middle' });
});
notes([
  'Jelaskan cepat, satu kategori satu kalimat. Yang penting bukan hafal nama tools, tapi paham bedanya.',
  '',
  'Builder: bagus untuk memvalidasi ide dalam 10 menit. Batasnya, begitu produk tumbuh kita sering kesulitan mengontrol kodenya.',
  'Assistant: teman mengetik. Tetap kita yang berpikir.',
  'Agent (kolom yang di-highlight): ini yang kita pakai hari ini. Bedanya, dia bekerja dari DOKUMEN, bukan dari satu kalimat prompt.',
  'Autonomous: masa depan yang sudah mulai jalan.',
  '',
  'Pertanyaan retoris: "Kalau AI Agent bekerja dari dokumen, siapa yang bikin dokumennya?" Jawabannya: kita. Itu inti seminar ini.',
  '',
  'Catatan: sebagian brand tampil sebagai nama, bukan logo, karena logonya tidak tersedia bebas. Fokusnya kategori, bukan merek.',
].join('\n'));

/* ============== 08 - BIGGEST MISCONCEPTION  [diagram tipografi] ============== */
slide({ name: 'Biggest Misconception' });
frame({ eyebrow: 'Section 02  ·  What Is Vibecoding', page: 8 });
head({ x: M, y: 1.0, w: 9.6, h: 0.56, text: 'Salah paham terbesar soal Vibecoding', size: T.title, lh: 1.1 });
text({ x: M, y: 1.74, w: 8.6, h: 0.3,
       text: 'Vibecoding sering dikira jalan pintas. Padahal yang dipangkas AI adalah waktu mengetik, bukan waktu berpikir.',
       size: T.lead - 2, color: C.txt2, valign: 'middle' });

text({ x: M, y: 2.56, w: 3, h: 0.24, text: 'MITOS', font: F.head, bold: true, size: T.micro,
       charSpacing: 2, color: C.clay, valign: 'middle' });
['Idea', 'Prompt', 'Aplikasi Jadi'].forEach((s, i) => {
  const x = M + i * 3.15;
  head({ x, y: 2.9, w: i === 2 ? 3.6 : 2.6, h: 0.62, text: s, size: 33, color: i === 2 ? C.clay : '9C948B', lh: 1.1 });
  if (i < 2) text({ x: x + 2.56, y: 2.9, w: 0.5, h: 0.62, text: '→', font: F.head, size: 26,
                    color: 'C7BFB4', valign: 'middle' });
});
line({ x: M, y: 3.2, w: 8.7, h: 0, color: C.clay, width: 1.5 });
text({ x: 9.85, y: 2.86, w: 0.8, h: 0.7, text: '✕', font: F.head, bold: true, size: 40,
       color: C.clay, valign: 'middle' });

text({ x: M, y: 4.18, w: 6, h: 0.24, text: 'YANG BENAR-BENAR TERJADI', font: F.head, bold: true,
       size: T.micro, charSpacing: 2, color: C.purple, valign: 'middle' });
[
  ['Scope melebar tanpa rem', 'AI tidak tahu apa yang TIDAK boleh dibangun, jadi ia membangun semuanya.'],
  ['Fitur meleset dari kebutuhan', 'Yang jadi bukan yang dibutuhkan bisnis, tapi yang paling mudah ditebak AI.'],
  ['Kode sulit dirawat', 'Struktur berubah tiap sesi karena tidak ada acuan arsitektur yang tetap.'],
  ['Bug baru ketahuan di production', 'Tidak ada definisi selesai, jadi tidak ada yang bisa diuji.'],
].forEach((r, i) => {
  const x = M + (i % 2) * 5.92, y = 4.56 + Math.floor(i / 2) * 1.1;
  line({ x, y, w: 5.6, h: 0, color: C.border, width: 1 });
  head({ x, y: y + 0.18, w: 5.6, h: 0.28, text: r[0], size: T.cardTitle + 0.5, valign: 'middle' });
  text({ x, y: y + 0.52, w: 5.45, h: 0.46, text: r[1], size: T.small, color: C.txt2, lh: 1.4 });
});
notes([
  'Ini slide konfrontasi. Bacakan baris mitos dengan nada "kedengarannya enak, kan?" - Idea, Prompt, Aplikasi Jadi. Lalu tunjuk garis coretnya.',
  '',
  'Lalu bongkar: yang terjadi sebenarnya ada di bawah. Ambil satu contoh nyata yang pernah Anda alami, misalnya AI membuat 12 tabel database padahal yang dibutuhkan 3.',
  '',
  'Kalimat kunci yang wajib diucapkan: "Prompt yang bagus tidak bisa menyelamatkan spesifikasi yang tidak pernah ditulis."',
  '',
  'Transisi: "Jadi kalau bukan Idea - Prompt - Jadi, lalu bagaimana? Slide berikutnya adalah slide terpenting hari ini."',
].join('\n'));

/* ============== 09 - MASTER WORKFLOW  [HERO, dark process grid] ============== */
slide({ name: 'Master Workflow', dark: true });
frame({ dark: true, eyebrow: 'Section 02  ·  What Is Vibecoding', title: 'Master Workflow',
        sub: 'Delapan langkah dari masalah bisnis sampai aplikasi hidup. Setiap langkah menghasilkan output yang menjadi input langkah berikutnya.',
        subW: 9.4, page: 9 });
const steps = [
  ['01', 'Business Problem', 'Masalah nyata dari bisnis nyata.', 'Problem Statement'],
  ['02', 'PRD', 'Apa yang dibangun, dan untuk siapa.', 'PRD.md'],
  ['03', 'Scope', 'Batas tegas: in scope dan out of scope.', 'SCOPE.md'],
  ['04', 'Design', 'Struktur: pages, user flow, data.', 'DESIGN.md'],
  ['05', 'Task Breakdown', 'Urutan kerja yang dipecah per phase.', 'TASK.md'],
  ['06', 'AI Execute', 'AI Agent menulis kode dari dokumen.', 'Codebase'],
  ['07', 'Review', 'Audit oleh manusia, bukan oleh AI.', 'Audit Report'],
  ['08', 'Deploy', 'Aplikasi bisa diakses publik.', 'Live App'],
];
const sw = (CW - 3 * 0.3) / 4, sh = 1.80;
text({ x: M, y: 2.40, w: 5.6, h: 0.22, text: 'FASE 1  ·  PLANNING & DOCUMENTATION', font: F.head,
       bold: true, size: T.micro, charSpacing: 1.6, color: C.purpleLt, valign: 'middle' });
text({ x: M, y: 4.58, w: 5.6, h: 0.22, text: 'FASE 2  ·  EXECUTION & DELIVERY', font: F.head,
       bold: true, size: T.micro, charSpacing: 1.6, color: C.purpleLt, valign: 'middle' });
steps.forEach((s, i) => {
  const col = i % 4, row = Math.floor(i / 4);
  const x = M + col * (sw + 0.3), y = (row === 0 ? 2.66 : 4.88);
  const hot = i === 5 || i === 6;
  rect({ x, y, w: sw, h: sh, r: 0.12, fill: hot ? '363050' : C.inkCard,
         line: { color: hot ? '5C5280' : C.borderDark, width: 1 } });
  text({ x: x + 0.28, y: y + 0.24, w: 0.6, h: 0.2, text: s[0], font: F.head, bold: true,
         size: T.micro + 0.5, charSpacing: 1.2, color: C.purpleLt, valign: 'middle' });
  head({ x: x + 0.28, y: y + 0.52, w: sw - 0.56, h: 0.3, text: s[1], size: T.cardTitle + 0.5,
         color: C.txtInv, valign: 'middle' });
  text({ x: x + 0.28, y: y + 0.88, w: sw - 0.56, h: 0.5, text: s[2], size: T.cap,
         color: C.txtInv2, lh: 1.4 });
  chip(x + 0.28, y + sh - 0.40, sw - 0.56, 0.3, s[3], { fill: 'none', border: '4E466B',
       color: C.purpleLt, size: T.micro - 0.3, charSpacing: 0.5 });
  if (col < 3) arrowRight(x + sw + 0.06, y + sh / 2, 0.18, '5C5280');
});
arrowDown(12.05, 4.52, 0.3, '5C5280');
notes([
  'INI SLIDE TERPENTING HARI INI. Jangan buru-buru. Alokasikan minimal 10 menit di sini.',
  '',
  'Cara membawakan: tunjuk satu per satu, dan tekankan bahwa output langkah sebelumnya adalah INPUT langkah berikutnya. Itu sebabnya urutannya tidak boleh dilompati.',
  '',
  '01-05 adalah pekerjaan MANUSIA (Fase 1). Di sinilah nilai kita sebagai engineer.',
  '06 adalah pekerjaan AI (Fase 2).',
  '07-08 kembali ke manusia.',
  '',
  'Pertanyaan ke peserta: "Menurut kalian, langkah mana yang paling sering dilewati orang?" Jawabannya hampir selalu 02 sampai 05 - dan itulah kenapa hasil AI mereka berantakan.',
  '',
  'Kalimat penutup slide: "AI cuma mengerjakan satu kotak dari delapan. Tujuh sisanya tetap tanggung jawab kita."',
].join('\n'));

/* ============== 10 - BUSINESS FIRST / SECTION 03  [full-bleed photo] ============== */
slide({ name: 'Business First — Section 03', dark: true });
photoBed('section-padel.jpg', 0.76);
text({ x: M, y: 1.05, w: 7, h: 0.24, text: 'SECTION 03  ·  BUSINESS DISCOVERY', font: F.head,
       bold: true, size: T.micro + 0.5, charSpacing: 2.2, color: C.purpleLt, valign: 'middle' });
head({ x: M, y: 1.95, w: 9.8, h: 2.0, text: 'Software tidak lahir\ndari ide', size: 62,
       color: 'FFFFFF', lh: 1.12 });
text({ x: M, y: 4.2, w: 7.6, h: 0.7,
       text: 'Software lahir dari masalah yang sudah ada dan sudah merugikan seseorang. Kalau tidak ada yang dirugikan hari ini, kemungkinan besar tidak ada yang memakai aplikasi Anda besok.',
       size: T.lead - 1, color: 'CFC9DC', lh: 1.55 });
line({ x: M, y: 5.36, w: 11.53, h: 0, color: '5C5280', width: 1 });
text({ x: M, y: 5.6, w: 0.3, h: 0.28, text: '✕', font: F.head, bold: true, size: T.cardTitle,
       color: 'C99A8A', valign: 'middle' });
head({ x: M + 0.42, y: 5.6, w: 5.0, h: 0.28, text: 'Aplikasi apa yang mau kita buat?',
       size: T.cardTitle + 1.5, color: '9E97B4', valign: 'middle' });
text({ x: 6.9, y: 5.6, w: 0.3, h: 0.28, text: '✓', font: F.head, bold: true, size: T.cardTitle,
       color: '8FB59A', valign: 'middle' });
head({ x: 7.32, y: 5.6, w: 5.1, h: 0.28, text: 'Masalah siapa yang mau kita selesaikan?',
       size: T.cardTitle + 1.5, color: 'FFFFFF', valign: 'middle' });
text({ x: M, y: 6.18, w: 11.53, h: 0.24, text: 'MASALAH  →  KEBUTUHAN  →  FITUR  →  SOFTWARE',
       font: F.head, bold: true, size: T.micro, charSpacing: 2, color: '8C84A8', valign: 'middle' });
K.footer(true, 10);
notes([
  'Buka sesi ini dengan pertanyaan: "Coba sebutkan satu ide aplikasi yang kalian punya." Biasanya keluar jawaban seperti aplikasi kasir, aplikasi absensi.',
  '',
  'Lalu balik pertanyaannya: "Siapa orang nyata yang hari ini rugi karena masalah itu?" Kalau tidak bisa dijawab dengan nama atau tempat konkret, idenya masih di udara.',
  '',
  'Dua pertanyaan di bawah adalah inti slide. Pertanyaan yang salah dimulai dari solusi. Pertanyaan yang benar dimulai dari orang.',
  '',
  'Rantai paling bawah adalah urutan yang tidak boleh dibalik: Masalah, Kebutuhan, Fitur, baru Software.',
  '',
  'Foto lapangan padel ini sekaligus memperkenalkan studi kasus yang dipakai sampai akhir seminar.',
].join('\n'));

/* ============== 11 - GOOGLE MAPS DISCOVERY  [mock kanan] ============== */
slide({ name: 'Google Maps Discovery' });
frame({ eyebrow: 'Section 03  ·  Business Discovery', title: 'Cari masalahnya di Google Maps',
        sub: 'Latihan paling cepat untuk menemukan masalah bisnis nyata: lihat bisnis yang benar-benar ada di sekitar kampus.',
        subW: 5.6, page: 11 });
const gm = [
  ['01', 'Buka Google Maps', 'Cari bisnis dalam radius 3 km dari kampus. Jangan cari ide, cari tempat.'],
  ['02', 'Pilih satu bisnis', 'Utamakan yang operasionalnya masih manual: WhatsApp, buku tulis, atau spreadsheet.'],
  ['03', 'Catat cara kerjanya', 'Bagaimana mereka menerima pesanan, mencatat, dan menagih hari ini?'],
];
gm.forEach((g, i) => {
  const y = 2.86 + i * 1.14;
  line({ x: M, y, w: 5.5, h: 0, color: C.border, width: 1 });
  text({ x: M, y: y + 0.2, w: 0.5, h: 0.24, text: g[0], font: F.head, bold: true, size: T.micro,
         charSpacing: 1.2, color: C.purpleLt, valign: 'middle' });
  head({ x: M + 0.6, y: y + 0.2, w: 4.9, h: 0.26, text: g[1], size: T.cardTitle + 1.5, valign: 'middle' });
  text({ x: M + 0.6, y: y + 0.56, w: 4.75, h: 0.5, text: g[2], size: T.small, color: C.txt2, lh: 1.45 });
});
rect({ x: M, y: 6.3, w: 5.5, h: 0.5, r: 0.1, fill: C.purpleTint });
text({ x: M + 0.24, y: 6.3, w: 5.02, h: 0.5, text: 'Aturan main: pilih bisnis yang bisa Anda amati sendiri.',
       size: T.small, color: C.purpleDeep, italic: true, valign: 'middle' });

const mx = 6.9;
card({ x: mx, y: 2.4, w: 5.53, h: 4.4, r: 0.13 });
rect({ x: mx + 0.22, y: 2.62, w: 5.09, h: 0.34, r: 0.17, fill: C.cream, line: { color: C.border, width: 1 } });
img({ path: K2.LOGO('googlemaps', 'light'), x: mx + 0.36, y: 2.7, w: 0.18, h: 0.18 });
text({ x: mx + 0.64, y: 2.62, w: 4.4, h: 0.34, text: 'padel court near me', size: T.small,
       color: C.txt2, valign: 'middle' });
rect({ shape: 'rect', x: mx + 0.22, y: 3.08, w: 5.09, h: 3.3, fill: 'EFEAE2' });
[3.62, 4.38, 5.42].forEach((y) => line({ x: mx + 0.22, y, w: 5.09, h: 0, color: 'E2DCD2', width: 2 }));
[8.3, 9.62, 11.0].forEach((x) => line({ x, y: 3.08, w: 0, h: 3.3, color: 'E2DCD2', width: 2 }));
const pins = [
  [7.48, 3.36, 'Padel Court', true],
  [9.02, 4.24, 'Coffee Shop', false],
  [10.55, 3.3, 'Laundry', false],
  [7.95, 5.3, 'Barbershop', false],
  [10.15, 5.06, 'Coworking', false],
];
pins.forEach(([px, py, nm, hot]) => {
  ell({ x: px, y: py, w: 0.24, h: 0.24, fill: hot ? C.purpleDeep : C.purple });
  ell({ x: px + 0.085, y: py + 0.085, w: 0.07, h: 0.07, fill: C.white });
  const wch = nm.length * 0.072 + 0.34;
  chip(px + 0.32, py - 0.03, wch, 0.3, nm, { size: T.micro - 0.3, charSpacing: 0.3,
       fill: hot ? C.purpleDeep : C.white, border: hot ? C.purpleDeep : C.border,
       color: hot ? C.white : C.txt });
});
text({ x: mx + 0.22, y: 6.48, w: 5.09, h: 0.22, text: 'ILUSTRASI — GANTI DENGAN SCREEN SHARE GOOGLE MAPS SAAT DEMO',
       font: F.head, bold: true, size: T.micro - 1, charSpacing: 1, color: '9E958A', valign: 'middle' });
notes([
  'Ini momen peserta harus buka HP atau laptop. Beri waktu 5 menit, jangan lebih.',
  '',
  'Instruksi tegas: JANGAN memilih ide aplikasi. Pilih TEMPAT. Padel court, coffee shop, laundry, barbershop, coworking space - apa saja yang benar-benar ada di sekitar kampus.',
  '',
  'Kriteria bisnis yang bagus untuk latihan: operasionalnya masih manual, dan Anda bisa membayangkan alur kerjanya tanpa harus mewawancarai pemiliknya.',
  '',
  'Saat demo: langsung share screen Google Maps sungguhan. Mock di slide hanya cadangan.',
  '',
  'Setelah 5 menit, minta 2 sampai 3 peserta menyebutkan pilihannya. Lalu umumkan bahwa kita semua akan pakai satu contoh yang sama: Padel Court.',
].join('\n'));
