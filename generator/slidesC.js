const L = require('./lib.js');
const K = require('./kit.js');
const K2 = require('./kit2.js');
const { C, F, T, W, H, slide, notes, bg, img, rect, ell, line, text, head, card, push } = L;
const { M, CW, frame, sectionTag, mark, chip, label, bullet, arrowDown, arrowRight } = K;
const { photoBed, photoCover, statement, logoRow, logoTile, hairRow, bigNum } = K2;

/* ============== 12 - SELECTED BUSINESS  [chat mock kiri] ============== */
slide({ name: 'Selected Business — Padel Court' });
bg(C.cream);

card({ x: M, y: 1.62, w: 5.08, h: 4.9, r: 0.14 });
rect({ x: M, y: 1.62, w: 5.08, h: 0.66, r: 0.14, fill: C.purpleTint });
rect({ shape: 'rect', x: M, y: 2.07, w: 5.08, h: 0.21, fill: C.purpleTint });
line({ x: M, y: 2.28, w: 5.08, h: 0, color: C.purpleLt, width: 1 });
ell({ x: M + 0.25, y: 1.79, w: 0.32, h: 0.32, fill: C.purple });
img({ path: K2.LOGO('whatsapp', 'light'), x: M + 4.5, y: 1.86, w: 0.2, h: 0.2 });
head({ x: M + 0.69, y: 1.77, w: 3.4, h: 0.2, text: 'Padel Arena', size: T.small, valign: 'middle' });
text({ x: M + 0.69, y: 1.97, w: 3.4, h: 0.18, text: 'admin  ·  online', size: T.micro - 0.5,
       color: C.txt2, valign: 'middle' });
const chats = [
  [0, 'Bang, lapangan 1 besok jam 7 malam masih kosong?'],
  [1, 'Sebentar ya, saya cek buku dulu'],
  [0, 'Saya juga mau jam 7 bang, buat 4 orang'],
  [1, 'Waduh bentrok, tadi sudah ada yang ambil jam itu'],
  [0, 'Yang minggu lalu saya booking jadinya kapan ya?'],
];
chats.forEach(([side, msg], i) => {
  const y = 2.48 + i * 0.78, bw = 3.55;
  const x = side === 0 ? M + 0.25 : M + 5.08 - 0.25 - bw;
  rect({ x, y, w: bw, h: 0.64, r: 0.1, fill: side === 0 ? C.cream : C.purpleTint,
         line: { color: side === 0 ? C.border : C.purpleLt, width: 1 } });
  text({ x: x + 0.16, y, w: bw - 0.32, h: 0.64, text: msg, size: T.cap, color: C.txt,
         lh: 1.35, valign: 'middle' });
});
text({ x: M, y: 6.62, w: 5.08, h: 0.24, text: 'Masalahnya hidup di chat, bukan di sistem.',
       size: T.cap, color: C.txt2, italic: true, align: 'center', valign: 'middle' });

text({ x: 6.55, y: 1.62, w: 6, h: 0.24, text: 'SECTION 03  ·  BUSINESS DISCOVERY', font: F.head,
       bold: true, size: T.micro, charSpacing: 1.9, color: C.purple, valign: 'middle' });
head({ x: 6.55, y: 2.06, w: 5.9, h: 1.2, text: 'Studi kasus:\nPadel Court', size: 42, lh: 1.12 });
text({ x: 6.55, y: 3.42, w: 5.8, h: 0.6,
       text: 'Satu bisnis nyata yang akan kita bawa sampai production sore ini.',
       size: T.lead - 1, color: C.txt2, lh: 1.5 });
[
  ['Bisnis', 'Padel Arena — penyewaan lapangan per jam'],
  ['Pelanggan', 'Komunitas dan pemain casual, ramai sore dan malam'],
  ['Booking hari ini', 'Chat WhatsApp ke admin, dicatat manual di buku'],
].forEach((p, i) => {
  const y = 4.24 + i * 0.62;
  line({ x: 6.55, y, w: 5.88, h: 0, color: C.border, width: 1 });
  text({ x: 6.55, y: y + 0.16, w: 1.9, h: 0.24, text: p[0].toUpperCase(), font: F.head, bold: true,
         size: T.micro - 0.3, charSpacing: 1.1, color: C.purple, valign: 'middle' });
  text({ x: 8.55, y: y + 0.16, w: 3.88, h: 0.24, text: p[1], size: T.small, color: C.txt, valign: 'middle' });
});
rect({ x: 6.55, y: 6.24, w: 5.88, h: 0.5, r: 0.1, fill: C.purpleTint });
text({ x: 6.79, y: 6.24, w: 5.4, h: 0.5,
       text: 'Cukup kecil untuk jadi MVP, cukup nyata untuk dipakai orang.',
       size: T.small, color: C.purpleDeep, italic: true, valign: 'middle' });
K.footer(false, 12);
notes([
  'Ceritakan kasusnya seperti cerita, bukan seperti spesifikasi.',
  '',
  'Padel Arena menyewakan lapangan per jam. Semua booking masuk lewat WhatsApp ke satu nomor admin, lalu dicatat di buku. Ramai di sore dan malam.',
  '',
  'Bacakan chat di kiri dengan dua suara berbeda untuk pelanggan dan admin - biasanya peserta langsung tertawa karena kenal betul polanya.',
  '',
  'Poin yang harus mendarat: masalahnya bukan "belum punya aplikasi". Masalahnya adalah jadwal bentrok, tidak ada histori, dan admin jadi satu-satunya titik kegagalan.',
].join('\n'));

/* ============== 13 - PROBLEM ANALYSIS  [hairline list] ============== */
slide({ name: 'Problem Analysis' });
frame({ eyebrow: 'Section 03  ·  Business Discovery', title: 'Merumuskan Problem Statement',
        sub: 'Kumpulkan gejalanya dulu, baru rumuskan masalahnya dalam satu paragraf yang bisa diuji.',
        subW: 7.2, page: 13 });
const probs = [
  ['Booking hanya lewat WhatsApp', 'Tidak ada antrean, tidak ada bukti, semua bergantung admin.'],
  ['Jadwal sering bentrok', 'Dua pelanggan bisa merasa sama-sama sudah memesan slot yang sama.'],
  ['Tidak ada kalender booking', 'Pelanggan tidak bisa melihat slot kosong tanpa bertanya.'],
  ['Tidak ada dashboard admin', 'Pemilik tidak tahu okupansi lapangan tanpa membuka buku catatan.'],
  ['Histori sulit dilacak', 'Klaim pelanggan sulit diverifikasi karena tidak ada catatan digital.'],
];
probs.forEach((p, i) => {
  const y = 2.52 + i * 0.8;
  line({ x: M, y, w: 6.5, h: 0, color: C.border, width: 1 });
  text({ x: M, y: y + 0.18, w: 0.4, h: 0.24, text: '0' + (i + 1), font: F.head, bold: true,
         size: T.micro, charSpacing: 1.2, color: C.purpleLt, valign: 'middle' });
  head({ x: M + 0.6, y: y + 0.18, w: 5.9, h: 0.26, text: p[0], size: T.cardTitle + 1, valign: 'middle' });
  text({ x: M + 0.6, y: y + 0.5, w: 5.8, h: 0.28, text: p[1], size: T.small, color: C.txt2, lh: 1.4 });
});

rect({ x: 7.85, y: 2.52, w: 4.58, h: 4.1, r: 0.13, fill: C.purpleTint });
text({ x: 8.15, y: 2.8, w: 4.0, h: 0.24, text: 'BUSINESS PROBLEM STATEMENT', font: F.head, bold: true,
       size: T.micro, charSpacing: 1.5, color: C.purpleDeep, valign: 'middle' });
text({ x: 8.15, y: 3.24, w: 3.98, h: 2.4,
       text: 'Padel Arena kehilangan pendapatan dan kepercayaan pelanggan karena seluruh proses booking berjalan lewat WhatsApp dan catatan manual. Tidak ada satu sumber kebenaran untuk jadwal, sehingga slot bisa terjual dua kali, riwayat pemesanan tidak bisa diverifikasi, dan pemilik tidak punya visibilitas atas okupansi lapangannya.',
       size: T.body, color: C.txt, lh: 1.6 });
line({ x: 8.15, y: 5.86, w: 3.98, h: 0, color: C.purpleLt, width: 1 });
text({ x: 8.15, y: 6.0, w: 2, h: 0.24, text: 'OUTPUT', font: F.head, bold: true, size: T.micro,
       charSpacing: 1.5, color: C.purpleDeep, valign: 'middle' });
text({ x: 10.4, y: 6.0, w: 1.73, h: 0.24, text: 'PROBLEM.md', font: F.head, bold: true,
       size: T.micro + 1, align: 'right', color: C.txt, valign: 'middle' });
notes([
  'Cara kerjanya: kumpulkan gejala dulu (kolom kiri), baru rumuskan masalahnya (blok kanan).',
  '',
  'Gejala itu apa yang orang keluhkan. Problem statement adalah rumusan yang menjelaskan KENAPA gejala itu terjadi dan APA akibatnya bagi bisnis.',
  '',
  'Perhatikan bahwa problem statement di kanan tidak menyebut satu pun nama fitur. Tidak ada kata login, tidak ada kata dashboard. Itu disengaja - fitur baru muncul di PRD.',
  '',
  'Uji kualitas problem statement dengan satu pertanyaan: kalau masalah ini selesai, apakah pemilik bisnis merasakan bedanya? Kalau tidak, rumusannya masih terlalu teknis.',
  '',
  'Ini output pertama peserta hari ini. Minta mereka menyimpannya sebagai PROBLEM.md.',
].join('\n'));

/* ============== 14 - DOCUMENTATION DRIVEN DEVELOPMENT  [STATEMENT] ============== */
slide({ name: 'Documentation Driven Development' });
statement({
  eyebrow: 'Section 04  ·  Documentation',
  text: 'Documentation Driven\nDevelopment',
  size: 64, y: 2.0, w: 11.2, h: 2.2,
  sub: 'Sebelum satu baris kode ditulis, empat dokumen harus selesai. Dokumen inilah yang dibaca AI Agent — bukan pikiran Anda.',
  subY: 4.5, subW: 8.8, subSize: 18,
  page: 14,
});
line({ x: M, y: 5.62, w: 11.53, h: 0, color: C.border, width: 1 });
['PRD.md', 'SCOPE.md', 'DESIGN.md', 'TASK.md'].forEach((f, i) => {
  head({ x: M + i * 2.95, y: 5.88, w: 2.8, h: 0.44, text: f, size: 26, color: C.purpleDeep, lh: 1 });
});
notes([
  'Ini slide pengganti untuk seluruh Section 04 yang lama. Sengaja hampir kosong.',
  '',
  'Jangan menjelaskan isi dokumen di sini. Cukup sebut nama dan fungsinya dalam satu kalimat masing-masing:',
  'PRD - apa yang dibangun dan untuk siapa.',
  'SCOPE - sampai mana batasnya.',
  'DESIGN - bagaimana bentuk dan strukturnya.',
  'TASK - dalam urutan apa dikerjakan.',
  '',
  'Analogi yang mudah diterima: AI Agent itu seperti freelancer sangat cepat yang baru bergabung hari ini, tidak pernah bertemu klien, dan tidak boleh bertanya. Satu-satunya yang dia punya adalah file yang kita berikan. Kalau file-nya kosong, dia akan mengarang.',
  '',
  'Maksimal 3 menit di slide ini. Detail keempat dokumen akan kita tulis langsung di IDE.',
].join('\n'));

/* ============== 15 - WHY DOCUMENTATION MATTERS  [hairline comparison] ============== */
slide({ name: 'Why Documentation Matters' });
frame({ eyebrow: 'Section 04  ·  Documentation', title: 'Kenapa dokumentasi menentukan hasil AI',
        titleSize: 29, titleW: 10.8,
        sub: 'AI Agent tidak membaca pikiran Anda. Ia membaca file.',
        subW: 8.6, page: 15 });
text({ x: M, y: 2.62, w: 5.3, h: 0.24, text: 'TANPA DOKUMENTASI', font: F.head, bold: true,
       size: T.micro, charSpacing: 2, color: C.clay, valign: 'middle' });
text({ x: 7.03, y: 2.62, w: 5.3, h: 0.24, text: 'DENGAN DOKUMENTASI', font: F.head, bold: true,
       size: T.micro, charSpacing: 2, color: C.purpleDeep, valign: 'middle' });
line({ x: 6.63, y: 2.62, w: 0, h: 3.6, color: C.border, width: 1 });
const cmp = [
  [['AI menebak kebutuhan', 'Setiap sesi menghasilkan asumsi baru yang saling bertabrakan.'],
   ['AI mengeksekusi, bukan menebak', 'Kebutuhan sudah tertulis, tinggal diterjemahkan jadi kode.']],
  [['Tidak ada batas scope', 'Fitur terus bertambah karena tidak ada yang menyatakan cukup.'],
   ['Scope punya rem', 'Yang tidak tertulis di scope tidak dikerjakan. Titik.']],
  [['Struktur berubah-ubah', 'Nama folder dan pola kode berbeda di tiap bagian aplikasi.'],
   ['Struktur konsisten', 'Desain dan penamaan mengikuti satu acuan yang sama.']],
  [['Tidak bisa diaudit', 'Tidak ada acuan untuk menilai hasilnya benar atau salah.'],
   ['Bisa diaudit siapa saja', 'Hasil kerja AI bisa dibandingkan langsung dengan dokumennya.']],
];
cmp.forEach((row, i) => {
  const y = 3.12 + i * 0.8;
  line({ x: M, y, w: 5.3, h: 0, color: C.border, width: 1 });
  line({ x: 7.03, y, w: 5.4, h: 0, color: C.purpleLt, width: 1 });
  [[M, row[0], C.clay, '✕'], [7.03, row[1], C.sage, '✓']].forEach(([x, r, col, gl]) => {
    text({ x, y: y + 0.18, w: 0.26, h: 0.24, text: gl, font: F.head, bold: true, size: T.small,
           color: col, valign: 'middle' });
    head({ x: x + 0.34, y: y + 0.18, w: 5.0, h: 0.24, text: r[0], size: T.cardTitle, valign: 'middle' });
    text({ x: x + 0.34, y: y + 0.48, w: 4.9, h: 0.28, text: r[1], size: T.small, color: C.txt2, lh: 1.4 });
  });
});
text({ x: M, y: 6.4, w: CW, h: 0.34,
       text: 'Dokumen ditulis lebih dulu. Kode menyusul sebagai konsekuensinya.',
       font: F.head, bold: true, size: T.cardTitle + 2, align: 'center', valign: 'middle',
       color: C.purpleDeep });
notes([
  'Pesan inti: dokumen bukan formalitas kampus. Dokumen adalah ANTARMUKA kita dengan AI Agent.',
  '',
  'Bacakan berpasangan kiri-kanan, baris per baris. Empat pasang saja, jangan ditambah.',
  '',
  'Yang paling sering dialami peserta adalah baris kedua: tidak ada batas scope. Tanya ke audiens: "Siapa yang pernah minta AI bikin satu fitur, lalu keluarnya sepuluh?"',
  '',
  'Istilah yang perlu diingat: Documentation Driven Development.',
].join('\n'));

/* ============== 16 - DOCUMENTATION STACK  [HERO, blueprint stack] ============== */
slide({ name: 'Documentation Stack' });
frame({ eyebrow: 'Section 04  ·  Documentation', title: 'Documentation Stack',
        sub: 'Empat dokumen yang menumpuk jadi satu blueprint. Inilah yang sebenarnya Anda serahkan ke AI Agent.',
        subW: 8.0, page: 16 });
const stack = [
  ['PRD.md', 'Apa yang dibangun, dan untuk siapa', C.purpleTint],
  ['SCOPE.md', 'Sampai mana batasnya, dan apa yang tidak dikerjakan', 'E7E2EE'],
  ['DESIGN.md', 'Bagaimana bentuk dan strukturnya', 'DFD9E9'],
  ['TASK.md', 'Dalam urutan apa dikerjakan', 'D6CFE4'],
];
stack.forEach((s, i) => {
  const x = 1.0 + i * 0.42, y = 2.45 + i * 0.95;
  rect({ x, y, w: 4.4, h: 1.05, r: 0.11, fill: s[2], line: { color: C.purpleLt, width: 1 }, sh: true });
  chip(x + 0.26, y + 0.2, 1.42, 0.3, s[0], { fill: C.white, border: C.purpleLt, size: T.micro });
  text({ x: x + 0.26, y: y + 0.6, w: 3.88, h: 0.3, text: s[1], size: T.small, color: C.txt,
         valign: 'middle', lh: 1.3 });
  text({ x: x + 4.4 - 0.62, y: y + 0.2, w: 0.4, h: 0.3, text: '0' + (i + 1), font: F.head, bold: true,
         size: T.micro, charSpacing: 0.8, color: C.purpleDeep, align: 'right', valign: 'middle' });
});
arrowRight(5.9, 4.42, 0.6, C.purpleLt);
text({ x: 6.9, y: 2.45, w: 5.53, h: 0.24, text: 'BLUEPRINT STACK', font: F.head, bold: true,
       size: T.micro, charSpacing: 1.9, color: C.purple, valign: 'middle' });
head({ x: 6.9, y: 2.82, w: 5.53, h: 0.9, text: 'Empat lapis yang saling\nmengunci', size: 24, lh: 1.25 });
text({ x: 6.9, y: 3.92, w: 5.4, h: 1.5,
       text: 'Setiap lapis menjawab pertanyaan berbeda, dan setiap lapis membatasi lapis berikutnya. PRD menentukan isi Scope. Scope menentukan isi Design. Design menentukan isi Task. Kalau satu lapis dilewati, lapis di bawahnya kehilangan pijakan.',
       size: T.body + 0.5, color: C.txt2, lh: 1.6 });
line({ x: 6.9, y: 5.6, w: 5.53, h: 0, color: C.border, width: 1 });
text({ x: 6.9, y: 5.78, w: 5.53, h: 0.24, text: 'YANG DISERAHKAN KE AI AGENT', font: F.head, bold: true,
       size: T.micro, charSpacing: 1.5, color: C.purpleDeep, valign: 'middle' });
text({ x: 6.9, y: 6.12, w: 5.53, h: 0.34, text: 'Empat file, satu folder. Itu seluruh konteksnya.',
       size: T.body + 1, color: C.txt, italic: true, valign: 'middle' });
notes([
  'Ini slide yang paling ingin saya minta peserta foto.',
  '',
  'Metafora: ini blueprint. Seperti membangun rumah - tidak ada tukang yang mulai memasang bata sebelum ada gambar kerja.',
  '',
  'Tekankan urutan mengunci: PRD menentukan Scope, Scope menentukan Design, Design menentukan Task. Kalau melompat, lapisan di bawahnya kehilangan pijakan dan AI akan mengisinya dengan tebakan.',
  '',
  'Hitung waktunya di depan peserta: menulis empat dokumen ini butuh 30 sampai 45 menit dibantu AI. Bandingkan dengan berhari-hari memperbaiki aplikasi yang salah arah.',
  '',
  'Penutup: "Empat file, satu folder. Itu seluruh konteks yang dibutuhkan AI Agent." Lalu langsung ke slide berikutnya - kita buka IDE.',
].join('\n'));
