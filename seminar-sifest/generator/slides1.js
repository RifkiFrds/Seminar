// Slides 1–17: Pembukaan, Dasar Web, HTML
const L = require('./lib.js');
const K = require('./kit.js');
const { C, W, rect, rr, ell, line, text, head, mono, notes } = L;
const { M, page, chip, checkpoint, timePill, codeBox, browser, plainPage, styledPage, tree, checkbox, CHAR } = K;

const N = (waktu, naskah, aksi, jebakan, solusi) => notes({ waktu, naskah, aksi, jebakan, solusi });

function sectionCover(num, title, sub, time, section, name, menit) {
  const s = page({ name, section, menit, jenis: 'T', title, bg: C.blue, noTitle: true });
  text({ x: 5.2, y: 0.2, w: 8.0, h: 6.6, text: num, font: 'head', bold: true, size: 300, color: C.blueMid, align: 'right', valign: 'middle', wrap: false });
  text({ x: M, y: 2.35, w: 8, h: 0.3, text: 'BAGIAN ' + num, font: 'head', bold: true, size: 14, charSpacing: 3, color: C.yellow });
  head({ x: M, y: 2.8, w: 9.6, h: 1.5, text: title, size: 66, lh: 1.02, color: C.white });
  text({ x: M, y: 4.55, w: 7.2, h: 0.9, text: sub, size: 22, lh: 1.3, color: C.blueLt });
  timePill(M, 5.85, time, true);
  return s;
}
K.sectionCover = sectionCover;

// ── 1 · Cover ──────────────────────────────────────────────────────────────
(function () {
  page({ name: 'Cover', section: 'Pembukaan', menit: 3, jenis: 'T', title: 'Cover', dark: true, noTitle: true });
  [['LOGO HIMASI', 0.8], ['LOGO BLU', 2.75]].forEach(([t, x]) =>
    { rr({ x, y: 0.55, w: 1.8, h: 0.62, r: 0.1, fill: 'none', line: { color: C.lineDark, width: 1.25, dash: true } });
      text({ x, y: 0.55, w: 1.8, h: 0.62, text: t, font: 'head', bold: true, size: 11, charSpacing: 1.5, color: C.inv2, align: 'center', valign: 'middle' }); });
  chip(M, 1.95, 3.7, 0.4, 'SI FEST 2026  ·  SESI 1  ·  SISWA', { fill: C.yellow, color: C.navy, size: 12 });
  head({ x: M, y: 2.55, w: 7.0, h: 2.4, text: 'Unlock Your\nPotential', size: 66, lh: 1.0, color: C.white });
  head({ x: M, y: 4.95, w: 7.0, h: 0.6, text: 'Through Web Technology', size: 28, color: C.yellow });
  text({ x: M, y: 5.65, w: 6.4, h: 0.8, text: 'Workshop membuat website personal profile dari nol', size: 18, lh: 1.3, color: C.inv2 });
  text({ x: M, y: 6.62, w: 8, h: 0.3, text: '[Nama Pemateri]  ·  [Role · Organisasi]  ·  Sabtu, 10 Oktober 2026', size: 14, color: C.inv2, valign: 'middle' });
  const b = browser(8.4, 1.2, 5.5, 3.8, { dark: true, url: 'localhost:5500' });
  text({ x: 8.9, y: b.y + 0.35, w: 4.2, h: 0.8, text: 'Halo, Dunia!', font: 'serif', bold: true, size: 40, color: '000000', valign: 'middle', wrap: false });
  text({ x: 8.9, y: b.y + 1.15, w: 4.2, h: 0.4, text: 'Ini website pertamaku.', font: 'serif', size: 18, color: '000000' });
  codeBox(7.6, 4.35, 4.9, ['<h1>Halo, Dunia!</h1>'], { file: 'index.html', size: 22, nums: false });
  N('3 menit (07.30 – 07.33)',
    'Selamat pagi, adik-adik! Selamat datang di SI Fest 2026. Hari ini kita punya satu misi: pulang membawa website buatan sendiri. Bukan website orang lain, bukan template, tapi hasil ketikan kalian. Tidak perlu pengalaman sama sekali.',
    'Sambut peserta, cek semua PC menyala dan VS Code terbuka. Tampilkan slide ini saat peserta masuk dan duduk.',
    'Peserta datang bertahap. Jangan mulai materi inti sebelum mayoritas duduk. Pastikan layar proyektor terbaca dari baris belakang.');
})();

// ── 2 · Who am I ───────────────────────────────────────────────────────────
(function () {
  page({ name: 'Perkenalan pemateri', section: 'Pembukaan', menit: 3, jenis: 'T', title: 'Perkenalan pemateri', noTitle: true });
  rr({ x: M, y: 0.85, w: 3.7, h: 5.2, r: 0.2, fill: C.blueTint, line: { color: C.blue, width: 1.5, dash: true } });
  text({ x: M, y: 0.85, w: 3.7, h: 5.2, text: 'FOTO PEMATERI\nrasio 3:4', font: 'head', bold: true, size: 14, charSpacing: 1.5, color: C.blue, align: 'center', valign: 'middle', lh: 1.5 });
  text({ x: 5.2, y: 0.9, w: 6, h: 0.3, text: 'PERKENALAN', font: 'head', bold: true, size: 12, charSpacing: 2.2, color: C.blue });
  head({ x: 5.2, y: 1.3, w: 7.3, h: 1.9, size: 48, lh: 1.05, color: C.navy,
         text: [{ text: 'Halo, saya', breakLine: true }, { text: '[Nama Pemateri]', color: C.blue }] });
  text({ x: 5.2, y: 3.2, w: 7.3, h: 0.4, text: '[Role]  ·  [Organisasi]', size: 20, color: C.txt2 });
  [['CERITA SINGKAT', '[Kapan dan kenapa mulai ngoding]'],
   ['HARI INI', 'Kita membuat website sendiri dari nol'],
   ['PESAN SAYA', 'Tidak ada yang lahir langsung bisa coding']].forEach(([a, b], i) => {
    const y = 4.0 + i * 0.95;
    line({ x: 5.2, y, w: 7.3, h: 0, color: C.line });
    text({ x: 5.2, y: y + 0.14, w: 4, h: 0.22, text: a, font: 'head', bold: true, size: 11, charSpacing: 1.8, color: C.blue });
    text({ x: 5.2, y: y + 0.4, w: 7.3, h: 0.4, text: b, size: 20, color: C.navy });
  });
  N('3 menit',
    'Perkenalkan, saya [nama]. Saya [role] di [organisasi]. [Ceritakan 1–2 kalimat: kapan pertama kali ngoding dan apa yang bikin kamu terus belajar]. Hari ini saya temani kalian dari nol sampai website kalian tayang online.',
    'Isi placeholder nama, role, foto, dan cerita singkat sebelum hari-H. Jangan lebih dari 3 menit.',
    'Cerita yang terlalu teknis membuat siswa merasa jauh. Ceritakan versi paling manusiawi, termasuk kesalahan pertamamu.');
})();

// ── 3 · Yang kamu buat hari ini ────────────────────────────────────────────
(function () {
  page({ name: 'Hasil akhir hari ini', section: 'Pembukaan', menit: 3, jenis: 'T', title: 'Hasil akhir hari ini', noTitle: true });
  head({ x: M, y: 1.25, w: 6.6, h: 3.8, size: 58, lh: 1.04, color: C.navy,
         text: [{ text: 'Jam 11.20,', breakLine: true }, { text: 'kamu punya', breakLine: true }, { text: 'website sendiri.', color: C.blue }] });
  text({ x: M, y: 5.2, w: 6.2, h: 1.2, size: 19, lh: 1.4, color: C.txt2,
         text: 'Lengkap dengan link yang bisa kamu kirim ke teman, keluarga, bahkan guru.' });
  const b = browser(7.6, 1.0, 5.0, 4.75, { url: "alya-putri.netlify.app" });
  styledPage(b, 1.15);
  N('3 menit',
    'Ini yang akan kalian buat: sebuah halaman personal profile, berisi nama, cerita singkat, skill, project, dan kontak. Ini portofolio pertama kalian. Dan di akhir sesi, halaman ini punya alamat sendiri di internet.',
    'Tunjukkan hasil jadi di browser sebagai demo singkat (starter-kit/ ada di laptop pemateri). Biarkan peserta melihat targetnya.',
    'Peserta mungkin mengira harus sehebat contoh. Tegaskan: contoh ini hasil akhir, kita bangun pelan-pelan, selangkah demi selangkah.');
})();

// ── 4 · Roadmap ────────────────────────────────────────────────────────────
(function () {
  page({ name: 'Roadmap sesi', section: 'Pembukaan', menit: 3, jenis: 'T', kicker: 'Peta perjalanan', title: 'Empat langkah menuju website pertamamu' });
  const cols = [['01', 'Dasar Web', 'Cara kerja website dan alat yang dipakai', '07.50 – 08.20'],
                ['02', 'HTML', 'Kerangka halaman: teks, gambar, link, struktur', '08.20 – 09.20'],
                ['03', 'CSS', 'Warna, font, layout, dan rapi di layar HP', '09.35 – 10.35'],
                ['04', 'Proyek & Publish', 'Rampungkan profil, tayangkan online, pamerkan', '10.35 – 11.20']];
  cols.forEach(([n, t, d, tm], i) => {
    const x = M + i * 2.93;
    head({ x, y: 2.45, w: 2.6, h: 0.95, text: n, size: 60, color: i === 3 ? C.yellow : C.blue, wrap: false });
    line({ x, y: 3.55, w: 2.6, h: 0, color: C.navy, width: 1.5 });
    head({ x, y: 3.75, w: 2.7, h: 0.7, text: t, size: 22, lh: 1.1, color: C.navy });
    text({ x, y: 4.5, w: 2.6, h: 1.1, text: d, size: 16, lh: 1.35, color: C.txt2 });
    timePill(x, 5.75, tm);
  });
  text({ x: M, y: 6.4, w: 11.5, h: 0.35, text: 'Istirahat 15 menit setelah bagian HTML (09.20 – 09.35).', size: 14, color: C.txt2, valign: 'middle' });
  N('3 menit',
    'Kita punya hampir empat jam. Pembagiannya: pertama dasar web, lalu HTML untuk kerangka, istirahat, lalu CSS untuk tampilan, dan terakhir kita rampungkan proyeknya dan tayangkan online. Lebih dari separuh waktu kita habis untuk mengetik, bukan mendengarkan.',
    'Tunjuk tiap kolom sambil menyebut jam. Sebutkan juga jam istirahat.',
    'Siswa sering tidak sadar sesi ini panjang. Sebut dari awal bahwa akan ada istirahat supaya energi terjaga.');
})();

// ── 5 · Pemanasan ──────────────────────────────────────────────────────────
(function () {
  page({ name: 'Pemanasan interaktif', section: 'Pembukaan', menit: 8, jenis: 'T', dark: true, kicker: 'Pemanasan', title: 'Tiga pertanyaan, angkat tangan' });
  [['1', 'Siapa yang pernah klik kanan lalu pilih Inspect di sebuah website?'],
   ['2', 'Siapa yang pernah membuat website sendiri?'],
   ['3', 'Siapa yang takut salah kode hari ini?']].forEach(([n, q], i) => {
    const y = 2.3 + i * 1.2;
    head({ x: M, y, w: 1, h: 0.9, text: n, size: 44, color: C.yellow, valign: 'middle', wrap: false });
    text({ x: 1.9, y, w: 10.6, h: 0.9, text: q, font: 'head', bold: true, size: 26, lh: 1.15, color: C.white, valign: 'middle' });
    line({ x: M, y: y + 1.05, w: 11.7, h: 0, color: C.lineDark });
  });
  text({ x: M, y: 5.95, w: 11.7, h: 0.7, text: 'Jawabannya: salah itu normal. Developer profesional juga salah tiap hari.', font: 'head', bold: true, size: 22, color: C.yellow, valign: 'middle' });
  N('8 menit',
    'Pertanyaan pertama: siapa yang pernah klik kanan lalu Inspect? Pertanyaan kedua: siapa yang pernah bikin website? Pertanyaan ketiga, ini yang paling penting: siapa yang takut salah kode hari ini? Tenang. Salah itu normal. Developer profesional juga salah tiap hari. Bedanya, mereka tahu cara membaca pesan error dan memperbaikinya, dan itu yang kita latih hari ini.',
    'Hitung kasar tangan yang naik untuk tiap pertanyaan, catat. Sapa 2–3 siswa secara acak untuk bercerita. Gunakan hasil untuk menyesuaikan kecepatan.',
    'Jika hampir semua siswa belum pernah ngoding, perlambat tempo di bagian HTML. Jangan membuat siswa yang diam merasa tertinggal.');
})();

// ── 6 · Section 01 ─────────────────────────────────────────────────────────
sectionCover('01', 'Dasar Web', 'Sebelum menulis kode, pahami dulu apa yang sedang kamu bangun', '07.50 – 08.20', 'Dasar Web', 'Section 01 — Dasar Web', 1);
N('1 menit', 'Bagian pertama: dasar web. Kita bahas singkat, tidak sampai 30 menit, lalu langsung praktik.', 'Transisi cepat ke slide berikutnya.', 'Jangan berlama-lama di slide pembatas.');

// ── 7 · Browser meminta, server menjawab ──────────────────────────────────
(function () {
  page({ name: 'Cara kerja web', section: 'Dasar Web', menit: 6, jenis: 'T', kicker: '01 · Dasar Web', title: 'Browser meminta, server menjawab' });
  const nodes = [[0.8, 'Browser-mu', 'Chrome, Edge, Safari'], [5.17, 'Internet', 'jalur penghubung'], [9.53, 'Server', 'penyimpan website']];
  nodes.forEach(([x, t, d], i) => {
    rr({ x, y: 2.3, w: 3.0, h: 2.35, r: 0.2, fill: C.white, line: { color: C.line, width: 1 }, sh: 'light' });
    const cx = x + 1.5;
    if (i === 0) { rr({ x: cx - 0.55, y: 2.6, w: 1.1, h: 0.8, r: 0.1, fill: 'none', line: { color: C.blue, width: 2 } }); line({ x: cx - 0.55, y: 2.85, w: 1.1, h: 0, color: C.blue, width: 2 }); ell({ x: cx - 0.43, y: 2.7, w: 0.08, h: 0.08, fill: C.blue }); }
    if (i === 1) { ell({ x: cx - 0.45, y: 2.55, w: 0.9, h: 0.9, fill: 'none', line: { color: C.blue, width: 2 } }); ell({ x: cx - 0.2, y: 2.55, w: 0.4, h: 0.9, fill: 'none', line: { color: C.blue, width: 2 } }); line({ x: cx - 0.45, y: 3.0, w: 0.9, h: 0, color: C.blue, width: 2 }); }
    if (i === 2) { [0, 1, 2].forEach((k) => { rr({ x: cx - 0.55, y: 2.55 + k * 0.3, w: 1.1, h: 0.24, r: 0.06, fill: 'none', line: { color: C.blue, width: 2 } }); ell({ x: cx + 0.35, y: 2.63 + k * 0.3, w: 0.08, h: 0.08, fill: C.blue }); }); }
    head({ x, y: 3.65, w: 3.0, h: 0.4, text: t, size: 22, align: 'center', color: C.navy });
    text({ x: x + 0.15, y: 4.08, w: 2.7, h: 0.4, text: d, size: 14, align: 'center', color: C.txt2 });
  });
  [3.8, 8.17].forEach((x) => {
    text({ x, y: 2.75, w: 1.37, h: 0.55, text: '→', font: 'head', bold: true, size: 40, align: 'center', valign: 'middle', color: C.blue, wrap: false });
    text({ x, y: 3.25, w: 1.37, h: 0.25, text: 'request', size: 13, align: 'center', color: C.blue });
    text({ x, y: 3.55, w: 1.37, h: 0.55, text: '←', font: 'head', bold: true, size: 40, align: 'center', valign: 'middle', color: C.red, wrap: false });
    text({ x, y: 4.05, w: 1.37, h: 0.25, text: 'response', size: 13, align: 'center', color: C.red });
  });
  [['1', 'Browser MEMINTA halaman lewat alamat (URL).', C.blue, M], ['2', 'Server MENJAWAB dengan file HTML dan CSS.', C.red, 6.9]].forEach(([n, t, c, x]) => {
    ell({ x, y: 5.05, w: 0.42, h: 0.42, fill: c });
    text({ x, y: 5.05, w: 0.42, h: 0.42, text: n, font: 'head', bold: true, size: 15, color: C.white, align: 'center', valign: 'middle' });
    text({ x: x + 0.58, y: 5.0, w: 5.0, h: 0.55, text: t, size: 17, lh: 1.25, color: C.navy, valign: 'middle' });
  });
  head({ x: M, y: 5.95, w: 11.7, h: 0.5, text: 'Website = kumpulan file yang dikirim server ke browser-mu.', size: 24, color: C.navy });
  text({ x: M, y: 6.5, w: 11.7, h: 0.35, text: "Hari ini server-nya 'pura-pura' ada di komputermu sendiri. Itu tugas Live Server.", size: 15, color: C.txt2 });
  N('6 menit',
    'Waktu kalian membuka sebuah website, apa yang terjadi? Browser kalian mengirim permintaan lewat internet ke sebuah server, yaitu komputer yang menyimpan website itu. Server menjawab dengan mengirim file HTML dan CSS. Browser lalu menyusun file-file itu jadi halaman yang kalian lihat. Hari ini kita tidak butuh server sungguhan; ada alat bernama Live Server yang menirukannya di komputer kalian.',
    'Tunjuk panah satu per satu: "minta", lalu "jawab". Buka satu website di browser dan tekan F12 → tab Network sebentar kalau waktu cukup (opsional).',
    'Jangan masuk ke istilah DNS, HTTP, atau IP. Cukup request dan response. Siswa SMA tidak perlu lebih dari itu sekarang.');
})();

// ── 8 · Tiga bahan website (dark) ─────────────────────────────────────────
(function () {
  page({ name: 'HTML, CSS, JavaScript', section: 'Dasar Web', menit: 6, jenis: 'T', dark: true, kicker: '01 · Dasar Web', title: 'Tiga bahan sebuah website' });
  const cards = [['HTML', 'Kerangka', 'Seperti tulang: menentukan bentuk dan isi halaman.', '<h1>Halo</h1>', C.sTag, 'HARI INI', true],
                 ['CSS', 'Penampilan', 'Seperti pakaian: warna, font, dan tata letak.', 'h1 { color: red; }', C.sAttr, 'HARI INI', true],
                 ['JS', 'Gerakan', 'Seperti otot: bikin halaman bisa bereaksi.', 'alert("Halo!");', '7886A8', 'NANTI, DI RUMAH', false]];
  cards.forEach(([tag, role, desc, snip, col, badge, on], i) => {
    const x = M + i * 3.97;
    rr({ x, y: 2.2, w: 3.75, h: 4.4, r: 0.2, fill: C.navy2, line: { color: C.lineDark, width: 1 } });
    chip(x + 0.3, 2.5, on ? 1.35 : 2.1, 0.32, badge, { fill: on ? C.yellow : C.lineDark, color: on ? C.navy : C.inv2, size: 11 });
    mono({ x: x + 0.3, y: 3.05, w: 3.2, h: 0.9, text: tag, size: 52, bold: true, color: col, valign: 'middle' });
    head({ x: x + 0.3, y: 4.0, w: 3.2, h: 0.5, text: role, size: 26, color: on ? C.white : C.inv2 });
    text({ x: x + 0.3, y: 4.55, w: 3.2, h: 0.95, text: desc, size: 16, lh: 1.35, color: C.inv2 });
    rr({ x: x + 0.3, y: 5.7, w: 3.15, h: 0.6, r: 0.1, fill: C.code });
    mono({ x: x + 0.45, y: 5.7, w: 2.9, h: 0.6, text: snip, size: 17, color: on ? C.sTxt : C.sCom, valign: 'middle' });
  });
  N('6 menit',
    'Setiap website dibuat dari tiga bahan. HTML adalah kerangkanya, seperti tulang. CSS adalah penampilannya, seperti pakaian. JavaScript adalah gerakannya, seperti otot. Hari ini kita fokus ke dua yang pertama: kerangka dan penampilan. JavaScript nanti, di rumah, setelah kalian nyaman dengan dua ini.',
    'Tunjuk kartu satu per satu. Tanya: "kalau website tanpa CSS, kira-kira kayak apa?" Biarkan 2–3 siswa menebak. Jawabannya akan terlihat di slide 19.',
    'Siswa sering bertanya "kapan belajar JavaScript?". Jawab: itu langkah berikutnya, dan slide terakhir memuat peta belajarnya.');
})();

// ── 9 · Alat tempur ───────────────────────────────────────────────────────
(function () {
  page({ name: 'Alat yang dipakai', section: 'Dasar Web', menit: 6, jenis: 'K', kicker: '01 · Dasar Web', title: 'Tiga alat yang kamu butuhkan' });
  const rows = [['1', 'VS Code', 'Tempat menulis kode', 'Ctrl + S  =  simpan', 2.7],
                ['2', 'Live Server', 'Hasil langsung muncul setiap kamu simpan', 'Klik kanan → Open with Live Server', 4.45],
                ['3', 'Browser DevTools', 'Mengintip kode website mana pun', 'Tekan F12', 1.9]];
  rows.forEach(([n, t, d, hint, cw], i) => {
    const y = 2.25 + i * 1.5;
    ell({ x: M, y: y + 0.05, w: 0.7, h: 0.7, fill: C.blueLt });
    head({ x: M, y: y + 0.05, w: 0.7, h: 0.7, text: n, size: 24, color: C.blue, align: 'center', valign: 'middle' });
    head({ x: 1.85, y, w: 5.6, h: 0.45, text: t, size: 24, color: C.navy });
    text({ x: 1.85, y: y + 0.48, w: 5.7, h: 0.35, text: d, size: 16, color: C.txt2 });
    chip(1.85, y + 0.9, cw + 0.3, 0.34, hint, { size: 12, cs: 0.4 });
  });
  rr({ x: 8.2, y: 2.25, w: 4.3, h: 4.35, r: 0.2, fill: C.code, sh: 'dark' });
  text({ x: 8.55, y: 2.5, w: 3.6, h: 0.3, text: 'STRUKTUR FOLDER', font: 'head', bold: true, size: 11, charSpacing: 1.8, color: C.sCom });
  tree(8.55, 3.0, [{ n: 'portfolio/', dir: 1, hi: 1 }, { n: 'img/', dir: 1, d: 1 }, { n: 'index.html', d: 1 }, { n: 'style.css', d: 1 }], { size: 20 });
  text({ x: 8.55, y: 5.0, w: 3.7, h: 1.3, text: 'Satu folder, satu proyek. Semua file website-mu tinggal di dalamnya.', size: 15, lh: 1.4, color: C.inv2 });
  N('6 menit',
    'Tiga alat saja. VS Code untuk menulis kode. Live Server supaya begitu kita simpan file, browser langsung menampilkan hasilnya. Dan DevTools, tombol F12, untuk mengintip kode website mana pun, termasuk website yang kalian kagumi. Folder portofolio kita nanti akan berisi index.html, style.css, dan satu folder img untuk gambar.',
    'Demonstrasikan: tekan F12 di website sekolah atau Google, tunjukkan tab Elements. Jelaskan bahwa kode itu bisa dibaca siapa saja.',
    'Ekstensi Live Server harus sudah terpasang di PC Lab (cek sehari sebelum acara). Jika tombol "Go Live" tidak muncul di pojok kanan bawah VS Code, buka folder via File → Open Folder dulu.');
})();

// ── 10 · Checkpoint 0 ─────────────────────────────────────────────────────
(function () {
  page({ name: 'Checkpoint 0 — siapkan proyek', section: 'Dasar Web', menit: 11, jenis: 'P', title: 'Siapkan proyekmu', titleY: 0.98 });
  checkpoint(M, 0.45, 0, '11 menit');
  const steps = ['Buat folder portfolio di Desktop', 'Buka VS Code → File → Open Folder', 'Buat index.html, style.css, dan folder img', 'Di index.html ketik ! lalu Tab', 'Tulis <h1>Hello SI Fest!</h1> di dalam body', 'Klik kanan → Open with Live Server'];
  steps.forEach((t, i) => {
    const y = 2.15 + i * 0.77;
    ell({ x: M, y, w: 0.5, h: 0.5, fill: C.yellow });
    head({ x: M, y, w: 0.5, h: 0.5, text: String(i + 1), size: 17, color: C.navy, align: 'center', valign: 'middle' });
    text({ x: M + 0.75, y, w: 5.9, h: 0.5, text: t, size: 18, color: C.navy, valign: 'middle' });
  });
  const cb = codeBox(7.5, 2.15, 5.1, ['<body>', '  <h1>Hello SI Fest!</h1>', '</body>'], { file: 'index.html', size: 20, hl: [1] });
  const b = browser(7.5, cb.bottom + 0.3, 5.0, 2.35, { url: 'localhost:5500' });
  text({ x: 7.85, y: b.y + 0.3, w: 4.4, h: 0.8, text: 'Hello SI Fest!', font: 'serif', bold: true, size: 36, color: '000000', valign: 'middle', wrap: false });
  N('11 menit',
    'Checkpoint pertama: siapkan proyek. Ikuti enam langkah ini. Kalau selesai dan browser menampilkan "Hello SI Fest!", angkat tangan. Kakak-kakak panitia akan keliling membantu.',
    'Live-coding bersama dari langkah 1 sampai 6, layar pemateri diproyeksikan. Setelah itu biarkan siswa mencoba sendiri 5 menit. Panitia keliling.\nTips Emmet: ketik "!" lalu tekan Tab untuk membuat kerangka HTML otomatis.',
    '1) Folder dibuat tapi tidak dibuka lewat Open Folder, sehingga Live Server tidak muncul. 2) File tersimpan sebagai index.html.txt (ekstensi tersembunyi di Windows). 3) Lupa menyimpan (Ctrl+S), browser tampak kosong. 4) Emmet tidak jalan: pastikan bahasa file HTML (pojok kanan bawah VS Code).',
    'index.html:\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  <h1>Hello SI Fest!</h1>\n</body>\n</html>');
})();

// ── 11 · Section 02 ───────────────────────────────────────────────────────
sectionCover('02', 'HTML', 'Kerangka sebuah website. Setiap halaman dimulai dari sini', '08.20 – 09.20', 'HTML', 'Section 02 — HTML', 1);
N('1 menit', 'Sekarang kita masuk ke HTML. Satu jam ke depan, kita susun kerangka halaman profil kalian.', 'Transisi cepat.', 'Pastikan semua peserta sudah melewati Checkpoint 0 sebelum lanjut. Bantu yang tertinggal saat transisi.');

// ── 12 · Anatomi tag (dark) ───────────────────────────────────────────────
(function () {
  page({ name: 'Anatomi sebuah tag', section: 'HTML', menit: 5, jenis: 'K', dark: true, kicker: '02 · HTML', title: 'Anatomi sebuah tag' });
  const size = 40, cw = CHAR * size / 72, str = '<p class="intro">Halo!</p>', x0 = (W - cw * str.length) / 2;
  const at = (i) => x0 + i * cw;
  const runs = [{ text: '<', color: C.sPun }, { text: 'p', color: C.sTag }, { text: ' ', color: C.sPun }, { text: 'class', color: C.sAttr }, { text: '=', color: C.sPun },
                { text: '"intro"', color: C.sStr }, { text: '>', color: C.sPun }, { text: 'Halo!', color: C.sTxt }, { text: '</', color: C.sPun }, { text: 'p', color: C.sTag }, { text: '>', color: C.sPun }];
  mono({ x: x0, y: 2.2, w: cw * str.length + 0.2, h: 0.8, text: runs, size, valign: 'middle', color: C.sTxt });
  const seg = (a, b, y, col, label, desc) => {
    line({ x: at(a), y, w: (b - a) * cw, h: 0, color: col, width: 3 });
    const cx = at(a) + (b - a) * cw / 2;
    head({ x: cx - 1.6, y: y + 0.12, w: 3.2, h: 0.4, text: label, size: 22, align: 'center', color: col });
    text({ x: cx - 1.6, y: y + 0.55, w: 3.2, h: 0.35, text: desc, size: 15, align: 'center', color: C.inv2 });
  };
  seg(3, 16, 3.2, C.sAttr, 'atribut', 'info tambahan tentang elemen');
  seg(17, 22, 3.2, C.sStr, 'isi', 'yang tampil di layar');
  seg(0, 17, 4.65, C.sTag, 'tag pembuka', 'menandai awal elemen');
  seg(22, 26, 4.65, C.sTag, 'tag penutup', 'ada garis miring /');
  text({ x: M, y: 6.2, w: 11.7, h: 0.5, text: 'Elemen = tag pembuka + isi + tag penutup. Ada tag tanpa penutup, misalnya <img> dan <br>.', size: 17, color: C.inv2, align: 'center', valign: 'middle' });
  N('5 menit',
    'Ini adalah satu elemen HTML. Ada tag pembuka, yaitu p dalam kurung sudut. Di dalamnya ada atribut, informasi tambahan, di sini class sama dengan intro. Lalu isi, yaitu tulisan Halo yang akan tampil. Terakhir tag penutup, sama seperti pembuka tapi ada garis miring. Kalau kalian paham slide ini, kalian paham 80 persen HTML.',
    'Ketik elemen ini langsung di VS Code dan tunjukkan hasilnya di browser. Minta siswa mengetik <p>Namaku ...</p> dengan nama mereka sendiri.',
    'Kesalahan paling umum: lupa tag penutup atau lupa garis miring. Tunjukkan apa yang terjadi kalau </p> dihapus: teks setelahnya ikut berantakan.');
})();

// ── 13 · Kerangka dokumen ─────────────────────────────────────────────────
(function () {
  page({ name: 'Kerangka dokumen HTML', section: 'HTML', menit: 6, jenis: 'K', kicker: '02 · HTML', title: 'Kerangka wajib setiap halaman', titleH: 0.7 });
  codeBox(M, 1.95, 6.9, ['<!DOCTYPE html>', '<html lang="id">', '<head>', '  <meta charset="UTF-8">', '  <title>Profil Alya</title>', '</head>', '<body>', '  <h1>Halo!</h1>', '</body>', '</html>'],
          { file: 'index.html', size: 20, hl: [2, 6] });
  [['<!DOCTYPE html>', 'Memberi tahu browser: ini dokumen HTML5.'], ['<head>', 'Info tentang halaman. Tidak tampil di layar.'],
   ['<title>', 'Judul yang muncul di tab browser.'], ['<body>', 'Semua yang tampil di layar ada di sini.']].forEach(([a, b], i) => {
    const y = 2.0 + i * 1.2;
    line({ x: 8.2, y, w: 4.3, h: 0, color: C.line });
    mono({ x: 8.2, y: y + 0.15, w: 4.3, h: 0.35, text: a, size: 18, bold: true, color: C.blue, valign: 'middle' });
    text({ x: 8.2, y: y + 0.55, w: 4.3, h: 0.62, text: b, size: 16, lh: 1.25, color: C.txt2 });
  });
  N('6 menit',
    'Setiap halaman HTML punya kerangka yang sama. Head berisi informasi di balik layar, termasuk title yang muncul di tab browser. Body berisi semua yang tampil di layar. Kita tidak perlu menghafal ini, karena VS Code bisa membuatkannya lewat tanda seru dan Tab. Tapi kita perlu tahu fungsinya.',
    'Ganti isi title, simpan, dan tunjukkan tab browser berubah. Minta siswa mengganti title dengan nama mereka.',
    'Siswa menaruh teks di dalam head dan bingung kenapa tidak tampil. Ulangi: yang tampil hanya yang di dalam body.');
})();

// ── 14 · Teks dan judul ───────────────────────────────────────────────────
(function () {
  page({ name: 'Teks dan judul', section: 'HTML', menit: 5, jenis: 'K', kicker: '02 · HTML', title: 'Teks dan judul', titleH: 0.7 });
  const cb = codeBox(M, 1.95, 7.0, ['<h1>Alya Putri</h1>', '<h2>Tentang Saya</h2>', '<p>Aku <strong>suka</strong> web.</p>', '<p>Aku <em>ingin</em> belajar.</p>'], { file: 'index.html', size: 20 });
  const b = browser(8.2, 1.95, 4.4, cb.h, { url: 'localhost:5500' });
  text({ x: b.x + 0.25, y: b.y + 0.12, w: 3.9, h: 0.45, text: 'Alya Putri', font: 'serif', bold: true, size: 26, color: '000000' });
  text({ x: b.x + 0.25, y: b.y + 0.62, w: 3.9, h: 0.35, text: 'Tentang Saya', font: 'serif', bold: true, size: 20, color: '000000' });
  text({ x: b.x + 0.25, y: b.y + 1.02, w: 3.9, h: 0.3, text: [{ text: 'Aku ' }, { text: 'suka', bold: true }, { text: ' web.' }], font: 'serif', size: 15, color: '000000' });
  text({ x: b.x + 0.25, y: b.y + 1.32, w: 3.9, h: 0.3, text: [{ text: 'Aku ' }, { text: 'ingin', italic: true }, { text: ' belajar.' }], font: 'serif', size: 15, color: '000000' });
  [['h1 – h6', 'Judul, dari terbesar ke terkecil. Pakai satu h1 saja per halaman.'], ['strong · em', 'strong = penting (tebal).  em = ditekankan (miring).'], ['p', 'Satu paragraf. Browser memberi jarak otomatis di antaranya.']].forEach(([a, d], i) => {
    const y = 4.75 + i * 0.72;
    line({ x: M, y, w: 11.8, h: 0, color: C.line });
    mono({ x: M, y: y + 0.1, w: 2.6, h: 0.5, text: a, size: 18, bold: true, color: C.blue, valign: 'middle' });
    text({ x: 3.6, y: y + 0.1, w: 8.9, h: 0.5, text: d, size: 17, color: C.navy, valign: 'middle' });
  });
  N('5 menit',
    'Teks di HTML punya tingkatan. H1 sampai H6 adalah judul, dari yang terbesar. Pakai satu H1 saja per halaman, biasanya nama atau judul utama. P untuk paragraf. Strong untuk kata penting, dan em untuk penekanan. Perhatikan: kita memilih tag berdasarkan MAKNA, bukan berdasarkan tampilan. Soal tampilan, itu urusan CSS nanti.',
    'Siswa mengetik sendiri 4 baris kode ini dengan nama mereka. Berikan 3 menit.',
    'Siswa memilih h1 karena ingin teks besar. Luruskan: ukuran bisa diatur CSS nanti, tag dipilih menurut fungsi.',
    '<h1>Alya Putri</h1>\n<h2>Tentang Saya</h2>\n<p>Aku <strong>suka</strong> web.</p>\n<p>Aku <em>ingin</em> belajar.</p>');
})();

// ── 15 · Link dan gambar ──────────────────────────────────────────────────
(function () {
  page({ name: 'Link dan gambar', section: 'HTML', menit: 7, jenis: 'K', kicker: '02 · HTML', title: 'Link dan gambar', titleH: 0.7 });
  codeBox(M, 1.95, 6.9, ['<a href="https://github.com">', '  Lihat GitHub</a>', '<img src="img/foto.jpg"', '     alt="Foto Alya"', '     loading="lazy">'], { file: 'index.html', size: 20, hl: [2] });
  rr({ x: 8.2, y: 1.95, w: 4.3, h: 2.8, r: 0.16, fill: C.code, sh: 'dark' });
  text({ x: 8.5, y: 2.15, w: 3.6, h: 0.3, text: 'src dibaca dari lokasi index.html', size: 12, color: C.sCom });
  tree(8.5, 2.6, [{ n: 'portfolio/', dir: 1 }, { n: 'index.html', d: 1 }, { n: 'img/', dir: 1, d: 1 }, { n: 'foto.jpg', d: 2, hi: 1 }], { size: 18 });
  [['href', 'Alamat tujuan link.'], ['alt', 'Teks pengganti. Dibaca pembaca layar dan tampil jika gambar gagal dimuat.'], ['loading="lazy"', 'Gambar dimuat saat discroll, jadi hemat kuota.']].forEach(([a, d], i) => {
    const y = 5.05 + i * 0.6;
    line({ x: M, y, w: 11.8, h: 0, color: C.line });
    mono({ x: M, y: y + 0.07, w: 3.3, h: 0.45, text: a, size: 17, bold: true, color: C.blue, valign: 'middle' });
    text({ x: 4.2, y: y + 0.07, w: 8.3, h: 0.45, text: d, size: 16, color: C.navy, valign: 'middle' });
  });
  N('7 menit',
    'Dua tag yang bikin website terasa hidup: a untuk link dan img untuk gambar. Atribut href berisi alamat tujuan. Untuk gambar, src menunjuk lokasi file, relatif terhadap index.html. Atribut alt wajib: ia dibaca oleh pembaca layar untuk teman-teman tunanetra dan muncul jika gambar gagal dimuat. Tambahan modern: loading lazy supaya gambar baru dimuat saat discroll.',
    'Letakkan satu foto di folder img, ketik tag img bersama-sama. Minta siswa memakai foto sendiri atau foto bebas dari folder yang sudah disiapkan panitia.',
    'Penyebab gambar rusak nomor satu: path atau nama file tidak persis sama (huruf besar/kecil, ekstensi .jpg vs .jpeg). Siapkan satu foto contoh di setiap PC agar tidak ada yang menunggu.',
    '<a href="https://github.com">Lihat GitHub</a>\n<img src="img/foto.jpg" alt="Foto Alya" loading="lazy">');
})();

// ── 16 · Daftar dan semantik ──────────────────────────────────────────────
(function () {
  page({ name: 'Daftar dan tag semantik', section: 'HTML', menit: 6, jenis: 'K', kicker: '02 · HTML', title: 'Beri nama pada setiap bagian', titleH: 0.7 });
  codeBox(M, 1.95, 5.0, ['<ul>', '  <li>HTML</li>', '  <li>CSS</li>', '</ul>'], { file: 'index.html', size: 20 });
  text({ x: M, y: 4.55, w: 5.0, h: 0.4, text: 'ul = daftar bertitik  ·  ol = daftar bernomor', size: 16, color: C.navy });
  text({ x: M, y: 5.15, w: 5.0, h: 1.6, text: 'Tag semantik punya makna. Mesin pencari dan pembaca layar jadi paham struktur halamanmu.', size: 17, lh: 1.45, color: C.txt2 });
  const x = 6.6, w = 5.9;
  rr({ x, y: 1.95, w, h: 4.85, r: 0.2, fill: C.white, line: { color: C.line, width: 1.25 }, sh: 'light' });
  const bx = (y, h, label, o) => { rr({ x: x + 0.25, y, w: w - 0.5, h, r: 0.1, fill: o.fill || C.blueTint, line: { color: o.line || C.blueLt, width: 1.25 } });
    mono({ x: x + 0.45, y, w: 3, h: o.lh || h, text: label, size: 16, bold: true, color: C.blue, valign: 'middle' }); };
  bx(2.15, 0.7, '<header>', {}); bx(2.97, 0.55, '<nav>', {});
  rr({ x: x + 0.25, y: 3.64, w: w - 0.5, h: 2.2, r: 0.1, fill: 'none', line: { color: C.blue, width: 1.5, dash: true } });
  mono({ x: x + 0.45, y: 3.72, w: 2, h: 0.35, text: '<main>', size: 16, bold: true, color: C.blue, valign: 'middle' });
  [0, 1].forEach((i) => { rr({ x: x + 0.45 + i * 2.65, y: 4.18, w: 2.5, h: 1.45, r: 0.1, fill: C.yellowTint, line: { color: C.yellow, width: 1.25 } });
    mono({ x: x + 0.6 + i * 2.65, y: 4.18, w: 2.3, h: 1.45, text: '<section>', size: 16, bold: true, color: C.navy, valign: 'middle' }); });
  bx(5.98, 0.6, '<footer>', {});
  N('6 menit',
    'Dua hal terakhir di bagian HTML. Pertama, daftar: ul untuk daftar bertitik, li untuk tiap isinya. Kedua, tag semantik: header, nav, main, section, footer. Secara tampilan mereka sama dengan div, tapi namanya bermakna. Mesin pencari seperti Google dan pembaca layar jadi paham mana bagian atas, mana menu, mana isi utama.',
    'Tunjuk wireframe di kanan: "halaman profil kita nanti punya bentuk seperti ini". Siswa mengetik daftar skill mereka.',
    'Siswa membungkus semuanya dengan div karena sudah terbiasa dari tutorial lain. Ajak mereka memilih nama tag yang paling cocok.',
    '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>');
})();

// ── 17 · Checkpoint 1 ─────────────────────────────────────────────────────
(function () {
  page({ name: 'Checkpoint 1 — kerangka profil', section: 'HTML', menit: 30, jenis: 'P', title: 'Rangka dulu, dandan nanti', titleY: 0.98 });
  checkpoint(M, 0.45, 1, '30 menit');
  [['<header>', 'nama dan subjudul (h1, p)'], ['<nav>', '4 link ke bagian halaman'], ['<section> Tentang', 'foto dan satu paragraf'], ['<section> Skill', 'daftar skill (ul)'],
   ['<section> Project', 'minimal 2 project'], ['<section> Kontak', 'link email atau media sosial'], ['<footer>', 'hak cipta dengan namamu']].forEach(([a, b], i) => {
    const y = 2.1 + i * 0.66;
    checkbox(M, y + 0.06, 0.36, C.blue);
    mono({ x: M + 0.6, y, w: 2.9, h: 0.48, text: a, size: 15, bold: true, color: C.blue, valign: 'middle' });
    text({ x: 4.5, y, w: 3.3, h: 0.48, text: b, size: 15, color: C.navy, valign: 'middle' });
  });
  const b = browser(8.2, 2.05, 4.3, 3.55, { url: 'localhost:5500' });
  plainPage(b, 99, 0.8);
  rr({ x: 8.2, y: 5.85, w: 4.3, h: 0.85, r: 0.14, fill: C.yellowTint });
  text({ x: 8.4, y: 5.85, w: 3.9, h: 0.85, text: 'Tampilan polos itu NORMAL, dan sudah benar.', font: 'head', bold: true, size: 15, lh: 1.25, color: C.navy, valign: 'middle' });
  N('30 menit (08.50 – 09.20)',
    'Checkpoint besar pertama. Bangun kerangka halaman profil kalian pakai tujuh bagian di checklist. Jangan khawatir tampilannya polos seperti halaman tahun 1995. Itu benar, dan di bagian CSS nanti kita dandani. Centang tiap bagian kalau sudah selesai.',
    'Berikan 25 menit mengetik mandiri, panitia keliling. Di menit ke-25 tampilkan solusi di layar. Siswa yang selesai awal dibantu menambah project ketiga. Setelah selesai: istirahat 15 menit (09.20 – 09.35).',
    '1) Tag tidak ditutup, sehingga bagian setelahnya ikut menyatu. Cek lewat indentasi VS Code. 2) Semua pakai div. 3) Menaruh gambar sebelum folder img dibuat. 4) Link nav tidak berfungsi: href harus diawali # dan id section harus sama (href="#skill" dengan id="skill").',
    'Lihat starter-kit/index.html untuk versi lengkap. Kerangka body:\n<header>\n  <h1>Alya Putri</h1>\n  <p>Siswa SMA · Calon Web Developer</p>\n  <nav>\n    <a href="#tentang">Tentang</a> <a href="#skill">Skill</a>\n    <a href="#project">Project</a> <a href="#kontak">Kontak</a>\n  </nav>\n</header>\n<main>\n  <section id="tentang"> ... </section>\n  <section id="skill"> ... </section>\n  <section id="project"> ... </section>\n  <section id="kontak"> ... </section>\n</main>\n<footer> ... </footer>');
})();
