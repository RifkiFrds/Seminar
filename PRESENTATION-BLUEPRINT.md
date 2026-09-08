# VIBECODING — PRESENTATION BLUEPRINT
**From Business Problem to Production App**  ·  Seminar HIMTI UMT

Blueprint lengkap dari deck `Vibecoding-Seminar-HIMTI-UMT.pptx`.
Speaker notes di bawah diambil langsung dari file `.pptx`, jadi keduanya selalu sinkron.

| | |
|---|---|
| **Jumlah slide** | 23 |
| **Rasio** | 16:9 (13,333 × 7,5 inci) |
| **Font** | Montserrat (heading) · ABeeZee (body) · Courier New (terminal mock) |
| **Palette** | Cream `#F8F4EF` · Ink `#1F1C2B` · Purple `#847E96` · Purple Light `#B5AEC6` · Tint `#EFEBF3` · Border `#DDD7CF` |
| **Aksen terbatas** | Clay `#A9634F` (anti-pattern) · Sage `#5F7A63` (konfirmasi) |
| **Slide gelap** | 1, 4, 9, 10, 17, 19, 22 |
| **Statement slide** | 14, 17, 22 |
| **Foto** | 1, 4, 10 (Unsplash, overlay ink 70–76%) |
| **Logo asli** | 7, 11, 12, 18, 19, 21 (Simple Icons, monokrom) |
| **Hero slides** | 9, 16, 18, 20, 23 |

---

## Ringkasan perubahan dari versi sebelumnya

**Dihapus (4 slide):** PRD, Scope, Design, Task Breakdown — isinya tidak lagi ditampilkan karena akan ditulis langsung di IDE.

**Ditambah (3 slide):** Documentation Driven Development (statement), Sekarang kita buka IDE (statement), AI tidak menggantikan Software Engineer (statement).

**Digabung (2 → 1):** Section cover Business Discovery + Business First jadi satu slide foto.

**Diubah total layout-nya:** Roadmap (grid kartu → hairline list), Traditional Development (kartu → big number), AI Evolution (kartu → timeline), AI Landscape (teks → logo grid), Biggest Misconception (panel → diagram tipografi), Why Documentation Matters (panel → hairline comparison), Key Takeaways (kartu → hairline list).

**Total: 25 → 23 slide.**

---

## Slide 1

### Judul
Cover — Vibecoding

### Tujuan Slide
Membuka seminar dengan pernyataan posisi yang jelas: ini seminar workflow, bukan seminar prompt.

### Konten
- Judul besar **Vibecoding** 84pt di atas foto
- Subjudul **From Business Problem to Production App**
- Deskripsi satu paragraf pendek
- Blok identitas pemateri (WAJIB DIISI: nama, role, organisasi, tanggal)
- Empat nama file di kanan bawah sebagai foreshadow: PRD.md · SCOPE.md · DESIGN.md · TASK.md

### Visual yang Disarankan
- Foto: Unsplash — ruang kerja gelap dengan meja (`cover-desk.jpg`), overlay ink `#1F1C2B` 72%.
- Tidak ada elemen lain. Foto + tipografi saja.

### Layout
**Tipe: Full-bleed photo.** Full-bleed photo, teks rata kiri, garis pemisah tipis di atas blok identitas.

### Speaker Notes

> Selamat datang. Sebelum mulai, tiga pertanyaan cepat - angkat tangan:
> 1) Siapa yang pernah membuat aplikasi sendiri?
> 2) Siapa yang pernah memakai ChatGPT atau AI lain untuk coding?
> 3) Siapa yang pernah copy-paste kode dari AI tanpa benar-benar membacanya?
> (Tunggu reaksi. Yang ketiga biasanya paling banyak - itu titik masuk kita.)
>
> Hari ini kita tidak belajar prompt. Kita belajar WORKFLOW. Kita mulai dari masalah bisnis nyata di sekitar kita, lalu mengubahnya jadi aplikasi yang jalan.
>
> Empat nama file di pojok kanan bawah itu inti seminar hari ini. Nanti kita bahas satu per satu.
>
> ISI DULU: ganti "Nama Pemateri" dan baris "Role / Organisasi / Tanggal".

### Catatan Desain
Slide gelap pertama dari lima. Overlay 72% dipilih supaya teks putih tetap terbaca dari belakang ruangan tanpa menghilangkan tekstur foto.

---

## Slide 2

### Judul
Who Am I

### Tujuan Slide
Membangun kredibilitas secukupnya lalu langsung pindah ke materi. Maksimal 2 menit.

### Konten
- Panel tint ungu penuh tinggi di kiri berisi frame foto (WAJIB DIISI)
- Nama 40pt, role, dan bio empat baris di kanan
- Tiga chip fokus: Product Engineering, AI Engineering, Software Architecture

### Visual yang Disarankan
- Kotak placeholder foto rasio 3:4 dengan garis putus-putus — ganti lewat Insert > Picture.
- Alternatif: unDraw `Programmer` dengan warna `#847E96`.

### Layout
**Tipe: Asimetris 37/63.** Panel warna penuh tinggi di kiri (bleed ke tepi slide), konten teks di kanan.

### Speaker Notes

> Perkenalan singkat - maksimal 2 menit. Yang penting bukan CV, tapi kredibilitas konteks:
> sebutkan satu produk atau proyek nyata yang pernah Anda bawa sampai production, dan satu pengalaman konkret memakai AI Agent di pekerjaan sehari-hari.
>
> Tutup dengan mengundang interaksi: "Potong saya kapan saja kalau ada yang mau ditanya."
>
> ISI DULU: nama, role, bio, dan foto.

### Catatan Desain
Panel kiri sengaja menabrak tepi slide — ini satu-satunya slide dengan bleed warna, jadi terasa berbeda dari semua slide konten lain.

---

## Slide 3

### Judul
Roadmap Seminar

### Tujuan Slide
Memberi peta tiga jam supaya peserta tahu kapan harus membuka laptop dan kapan cukup mendengar.

### Konten
- Delapan babak dengan jam: 11.00 Opening, 11.10 What Is Vibecoding, 11.25 Master Workflow, 11.40 Business Discovery, 13.10 Documentation, 13.20 Agentic Development, 13.50 Deploy & Audit, 14.30 Q&A
- Kolom Documentation kini bertuliskan 'Menulis PRD, Scope, Design, dan Task di IDE'

### Visual yang Disarankan
- Tanpa ilustrasi. Struktur tiga kolom (jam · judul · deskripsi) dipisah garis rambut.
- Ini pengganti grid delapan kartu di versi sebelumnya — jauh lebih tenang dan lebih cepat dibaca.

### Layout
**Tipe: Hairline list.** Tabel tiga kolom tanpa kotak, hanya garis horizontal 1px di antara baris.

### Speaker Notes

> Beri gambaran besar supaya peserta tahu kapan harus buka laptop dan kapan cukup mendengar.
>
> Pesan penting: bagian teori (11.00-11.40) itu singkat. Sisanya praktik. Jadi jangan tinggalkan sesi siang - di situ aplikasinya benar-benar dibangun.
>
> Catat perubahan penting: sesi Documentation jam 13.10 tidak dibahas lewat slide. Kita langsung buka IDE dan menulis template PRD, Scope, Design, dan Task bersama-sama.
>
> Ingatkan juga: ISHOMA 12.00-13.00. Sesudah itu semua harus sudah punya akses AI dan browser.

### Catatan Desain
Penghapusan kartu di sini adalah perubahan terbesar untuk mengurangi kesan template. Whitespace yang jadi pemisah, bukan border.

---

## Slide 4

### Judul
Section 02 — What Is Vibecoding

### Tujuan Slide
Slide jeda yang menandai pergantian babak. Maksimal 15 detik.

### Konten
- Angka section 132pt
- Judul section 46pt
- Satu kalimat pengantar

### Visual yang Disarankan
- Foto: Unsplash — layar kode gelap (`section-code.jpg`), overlay ink 70%.
- Tidak ada konten lain — kekosongan itu justru fungsinya.

### Layout
**Tipe: Full-bleed photo.** Full-bleed photo, angka raksasa dan judul rata kiri bawah.

### Speaker Notes

> Slide jeda. Tarik napas, ganti energi.
>
> Satu kalimat pengantar saja: "Sebelum kita bicara cara kerjanya, kita samakan dulu apa yang sebenarnya berubah."
>
> Jangan berlama-lama di sini - maksimal 15 detik.

### Catatan Desain
Angka 132pt memberi kontras skala paling ekstrem di seluruh deck, berlawanan dengan caption 8pt di footer.

---

## Slide 5

### Judul
Traditional Development

### Tujuan Slide
Menunjukkan bahwa cara lama bukan salah, tapi mahal — dan biayanya selalu di tempat yang sama.

### Konten
- Angka besar **3–6** dengan label BULAN SEBELUM ADA YANG BISA DIPAKAI
- Alur lama Idea → Coding → Deploy sebagai teks kecil
- Tiga biaya di kolom kanan: kebutuhan berubah, scope melebar, feedback terlambat

### Visual yang Disarankan
- Big number 112pt sebagai elemen dominan.
- Kolom kanan dipisah garis vertikal, bukan kartu.
- Alternatif foto: Unsplash `whiteboard planning meeting`.

### Layout
**Tipe: Big number + hairline list.** Asimetris 45/55 dengan garis vertikal sebagai pemisah, bukan dua panel berkotak.

### Speaker Notes

> Pertanyaan pembuka: "Kalau kalian dapat tugas bikin aplikasi, langkah pertama kalian apa?" Jawaban paling sering: langsung ngoding, atau langsung cari template.
>
> Angka 3-6 bulan itu yang harus mendarat. Itu jarak antara ide dan sesuatu yang benar-benar bisa dipakai orang, dengan cara lama.
>
> Lalu tunjukkan di mana biayanya (kolom kanan). Semua asumsi disimpan di kepala developer, bukan di dokumen.
>
> Jembatan ke slide berikutnya: "Sekarang AI datang. Pertanyaannya, AI ini mempercepat langkah yang mana?"

### Catatan Desain
Angka besar mengambil alih slide. Alur tiga langkah sengaja dibuat kecil di bawah — perannya pendukung, bukan bintang.

---

## Slide 6

### Judul
AI Development Evolution

### Tujuan Slide
Menempatkan posisi kita hari ini di peta evolusi: Agentic Development.

### Konten
- Empat era pada satu sumbu horizontal: Traditional → AI Assisted → Agentic → Autonomous
- Setiap era menyebut perubahan peran manusia
- Sumbu: Kontrol Manual → Otonomi AI
- Banner penutup tentang pergeseran pekerjaan utama ke spesifikasi dan review

### Visual yang Disarankan
- Timeline dengan titik pada garis; titik Agentic diberi cincin penanda 'kita di sini'.
- Tidak ada kartu sama sekali — pengganti empat kartu di versi sebelumnya.

### Layout
**Tipe: Timeline.** Timeline horizontal penuh lebar, label di atas garis, deskripsi di bawah garis.

### Speaker Notes

> Poin utama: ini bukan soal tools, ini soal siapa yang memegang kendali di tiap tahap.
>
> 01 Traditional - manusia menulis semuanya.
> 02 AI Assisted - Copilot, Cursor. AI melengkapi baris. Produktivitas naik, arsitektur tetap di kepala kita.
> 03 Agentic - INI POSISI KITA HARI INI (tunjuk titik yang dilingkari). AI membaca dokumen, menyusun rencana, mengeksekusi banyak file sekaligus. Peran kita berubah jadi reviewer.
> 04 Autonomous - Devin, Codex, SWE Agent. Belum sepenuhnya matang, tapi arahnya jelas.
>
> Baris "Manusia: ..." di bawah setiap tahap adalah inti slide ini. Bacakan keempatnya berurutan.

### Catatan Desain
Timeline dipilih karena bentuknya sendiri sudah menyampaikan pesan 'ini sebuah perjalanan'. Kartu tidak bisa melakukan itu.

---

## Slide 7

### Judul
AI Landscape

### Tujuan Slide
Memisahkan empat kategori tools AI supaya peserta punya ekspektasi yang benar.

### Konten
- AI Builder — v0, Lovable, Bolt, Firebase → prototype cepat
- AI Assistant — GitHub Copilot, Cursor, VS Code → percepat coding
- AI Agent — Claude, Gemini, OpenCode, Antigravity → bangun fitur utuh
- Autonomous — Devin, Codex, SWE Agent → kerja tanpa diawasi

### Visual yang Disarankan
- **Logo resmi** dari Simple Icons, diwarnai `#847E96` supaya seluruh grid terasa satu keluarga.
- Brand tanpa logo bebas (Lovable, Bolt, VS Code, Antigravity, Devin, Codex, SWE Agent) tampil sebagai monogram huruf dalam cincin monoline — bentuk yang sama dengan sistem penanda di slide lain.
- Kolom AI Agent diberi latar tint ungu sebagai penanda 'ini yang kita pakai'.

### Layout
**Tipe: Logo grid.** Empat kolom dipisah garis vertikal; logo disusun grid 2×2 di setiap kolom.

### Speaker Notes

> Jelaskan cepat, satu kategori satu kalimat. Yang penting bukan hafal nama tools, tapi paham bedanya.
>
> Builder: bagus untuk memvalidasi ide dalam 10 menit. Batasnya, begitu produk tumbuh kita sering kesulitan mengontrol kodenya.
> Assistant: teman mengetik. Tetap kita yang berpikir.
> Agent (kolom yang di-highlight): ini yang kita pakai hari ini. Bedanya, dia bekerja dari DOKUMEN, bukan dari satu kalimat prompt.
> Autonomous: masa depan yang sudah mulai jalan.
>
> Pertanyaan retoris: "Kalau AI Agent bekerja dari dokumen, siapa yang bikin dokumennya?" Jawabannya: kita. Itu inti seminar ini.
>
> Catatan: sebagian brand tampil sebagai nama, bukan logo, karena logonya tidak tersedia bebas. Fokusnya kategori, bukan merek.

### Catatan Desain
Pilihan sadar: logo monokrom, bukan warna asli. Warna asli akan membuat baris terlihat seperti halaman sponsor.

---

## Slide 8

### Judul
Biggest Misconception

### Tujuan Slide
Membongkar mitos Idea → Prompt → Aplikasi Jadi sebelum memperkenalkan workflow yang benar.

### Konten
- Rantai mitos Idea → Prompt → Aplikasi Jadi dalam tipografi 33pt, dicoret satu garis penuh
- Empat konsekuensi nyata dalam grid 2×2 hairline

### Visual yang Disarankan
- Coretan berupa garis clay `#A9634F` melintasi ketiga kata — bukan ikon, bukan kartu.
- Tanda ✕ besar 40pt di ujung kanan rantai.

### Layout
**Tipe: Diagram tipografi.** Rantai tipografi besar di sepertiga atas, empat baris hairline 2×2 di bawah.

### Speaker Notes

> Ini slide konfrontasi. Bacakan baris mitos dengan nada "kedengarannya enak, kan?" - Idea, Prompt, Aplikasi Jadi. Lalu tunjuk garis coretnya.
>
> Lalu bongkar: yang terjadi sebenarnya ada di bawah. Ambil satu contoh nyata yang pernah Anda alami, misalnya AI membuat 12 tabel database padahal yang dibutuhkan 3.
>
> Kalimat kunci yang wajib diucapkan: "Prompt yang bagus tidak bisa menyelamatkan spesifikasi yang tidak pernah ditulis."
>
> Transisi: "Jadi kalau bukan Idea - Prompt - Jadi, lalu bagaimana? Slide berikutnya adalah slide terpenting hari ini."

### Catatan Desain
Mitosnya digambar dengan tipografi besar lalu dicoret di depan mata penonton. Jauh lebih kuat daripada menaruhnya di dalam kotak bergaris putus-putus.

---

## Slide 9

### Judul
Master Workflow  ★ HERO

### Tujuan Slide
SLIDE TERPENTING. Menanamkan delapan langkah dari masalah bisnis sampai aplikasi hidup.

### Konten
- FASE 1 — PLANNING & DOCUMENTATION: 01 Business Problem, 02 PRD, 03 Scope, 04 Design, 05 Task Breakdown
- FASE 2 — EXECUTION & DELIVERY: 06 AI Execute, 07 Review, 08 Deploy
- Setiap langkah mencantumkan output-nya

### Visual yang Disarankan
- Grid 4×2 kartu proses di atas latar gelap dengan panah monoline antar kartu.
- Kartu 06 dan 07 diberi tint lebih terang sebagai penanda titik serah-terima manusia ↔ AI.
- Chip output di dasar setiap kartu.

### Layout
**Tipe: Process grid (gelap).** Dua baris × empat kolom, label fase di atas setiap baris, slide gelap.

### Speaker Notes

> INI SLIDE TERPENTING HARI INI. Jangan buru-buru. Alokasikan minimal 10 menit di sini.
>
> Cara membawakan: tunjuk satu per satu, dan tekankan bahwa output langkah sebelumnya adalah INPUT langkah berikutnya. Itu sebabnya urutannya tidak boleh dilompati.
>
> 01-05 adalah pekerjaan MANUSIA (Fase 1). Di sinilah nilai kita sebagai engineer.
> 06 adalah pekerjaan AI (Fase 2).
> 07-08 kembali ke manusia.
>
> Pertanyaan ke peserta: "Menurut kalian, langkah mana yang paling sering dilewati orang?" Jawabannya hampir selalu 02 sampai 05 - dan itulah kenapa hasil AI mereka berantakan.
>
> Kalimat penutup slide: "AI cuma mengerjakan satu kotak dari delapan. Tujuh sisanya tetap tanggung jawab kita."

### Catatan Desain
Ini satu-satunya slide yang mempertahankan grid kartu penuh — karena di sini kartu memang berfungsi sebagai representasi langkah proses, bukan sebagai wadah teks.

---

## Slide 10

### Judul
Business First — Section 03

### Tujuan Slide
Memindahkan titik awal peserta dari 'ide aplikasi' ke 'masalah bisnis', sekaligus membuka Section 03.

### Konten
- Pernyataan 62pt: Software tidak lahir dari ide
- Satu paragraf pendukung
- Kontras dua pertanyaan: ✕ 'Aplikasi apa yang mau kita buat?' vs ✓ 'Masalah siapa yang mau kita selesaikan?'
- Rantai: MASALAH → KEBUTUHAN → FITUR → SOFTWARE

### Visual yang Disarankan
- Foto: Unsplash — lapangan padel dari atas (`section-padel.jpg`), overlay ink 76%.
- Foto ini sekaligus memperkenalkan studi kasus yang dipakai sampai akhir.

### Layout
**Tipe: Full-bleed photo + statement.** Full-bleed photo, pernyataan besar di atas, dua pertanyaan berdampingan di bawah garis.

### Speaker Notes

> Buka sesi ini dengan pertanyaan: "Coba sebutkan satu ide aplikasi yang kalian punya." Biasanya keluar jawaban seperti aplikasi kasir, aplikasi absensi.
>
> Lalu balik pertanyaannya: "Siapa orang nyata yang hari ini rugi karena masalah itu?" Kalau tidak bisa dijawab dengan nama atau tempat konkret, idenya masih di udara.
>
> Dua pertanyaan di bawah adalah inti slide. Pertanyaan yang salah dimulai dari solusi. Pertanyaan yang benar dimulai dari orang.
>
> Rantai paling bawah adalah urutan yang tidak boleh dibalik: Masalah, Kebutuhan, Fitur, baru Software.
>
> Foto lapangan padel ini sekaligus memperkenalkan studi kasus yang dipakai sampai akhir seminar.

### Catatan Desain
Section cover dan slide konten digabung jadi satu. Hemat satu slide, dan pesannya justru lebih kuat karena foto studi kasusnya langsung hadir.

---

## Slide 11

### Judul
Google Maps Discovery

### Tujuan Slide
Mengubah teori 'cari masalah bisnis' jadi latihan lima menit yang konkret.

### Konten
- Tiga langkah hairline di kiri: buka Google Maps → pilih satu bisnis → catat cara kerjanya
- Mock peta di kanan dengan lima pin bisnis, Padel Court di-highlight
- Aturan main: pilih bisnis yang bisa Anda amati sendiri

### Visual yang Disarankan
- Logo Google Maps asli di dalam search bar mock.
- Mock peta dibuat native (grid jalan + pin), bukan screenshot — bebas masalah hak cipta.
- SAAT DEMO: share screen Google Maps sungguhan. Caption di slide sudah mengingatkan.

### Layout
**Tipe: Mock kanan.** Langkah hairline di kiri, mock peta di kanan.

### Speaker Notes

> Ini momen peserta harus buka HP atau laptop. Beri waktu 5 menit, jangan lebih.
>
> Instruksi tegas: JANGAN memilih ide aplikasi. Pilih TEMPAT. Padel court, coffee shop, laundry, barbershop, coworking space - apa saja yang benar-benar ada di sekitar kampus.
>
> Kriteria bisnis yang bagus untuk latihan: operasionalnya masih manual, dan Anda bisa membayangkan alur kerjanya tanpa harus mewawancarai pemiliknya.
>
> Saat demo: langsung share screen Google Maps sungguhan. Mock di slide hanya cadangan.
>
> Setelah 5 menit, minta 2 sampai 3 peserta menyebutkan pilihannya. Lalu umumkan bahwa kita semua akan pakai satu contoh yang sama: Padel Court.

### Catatan Desain
Posisi mock sengaja di kanan supaya berlawanan dengan slide berikutnya yang menaruh mock di kiri — dua slide bersebelahan tidak boleh terasa sama.

---

## Slide 12

### Judul
Selected Business — Padel Court

### Tujuan Slide
Menetapkan satu studi kasus yang dipakai konsisten sampai akhir seminar.

### Konten
- Mock percakapan WhatsApp lima gelembung yang memperlihatkan jadwal bentrok
- Judul studi kasus 42pt di kanan
- Profil bisnis tiga baris: bisnis, pelanggan, cara booking hari ini

### Visual yang Disarankan
- Logo WhatsApp asli di header mock chat.
- Mock chat dibuat native. Ini visual paling 'mendarat' di seluruh deck karena peserta mengenali polanya.

### Layout
**Tipe: Mock kiri.** Mock chat di kiri, judul dan profil di kanan — kebalikan dari slide sebelumnya.

### Speaker Notes

> Ceritakan kasusnya seperti cerita, bukan seperti spesifikasi.
>
> Padel Arena menyewakan lapangan per jam. Semua booking masuk lewat WhatsApp ke satu nomor admin, lalu dicatat di buku. Ramai di sore dan malam.
>
> Bacakan chat di kiri dengan dua suara berbeda untuk pelanggan dan admin - biasanya peserta langsung tertawa karena kenal betul polanya.
>
> Poin yang harus mendarat: masalahnya bukan "belum punya aplikasi". Masalahnya adalah jadwal bentrok, tidak ada histori, dan admin jadi satu-satunya titik kegagalan.

### Catatan Desain
Bacakan chat dengan dua suara berbeda. Caption di bawah chat adalah jembatan ke slide berikutnya.

---

## Slide 13

### Judul
Problem Analysis

### Tujuan Slide
Mengajarkan cara naik dari daftar keluhan ke satu problem statement yang bisa diuji.

### Konten
- Lima gejala bernomor dalam daftar hairline
- Business Problem Statement satu paragraf utuh dalam blok tint ungu
- Output: PROBLEM.md

### Visual yang Disarankan
- Daftar hairline di kiri, blok tint tanpa border di kanan.
- Satu-satunya blok teks panjang di deck — dan itu disengaja, karena isinya memang harus dibaca.

### Layout
**Tipe: Hairline list + blok.** Asimetri 55/38 dengan jeda lebar di tengah.

### Speaker Notes

> Cara kerjanya: kumpulkan gejala dulu (kolom kiri), baru rumuskan masalahnya (blok kanan).
>
> Gejala itu apa yang orang keluhkan. Problem statement adalah rumusan yang menjelaskan KENAPA gejala itu terjadi dan APA akibatnya bagi bisnis.
>
> Perhatikan bahwa problem statement di kanan tidak menyebut satu pun nama fitur. Tidak ada kata login, tidak ada kata dashboard. Itu disengaja - fitur baru muncul di PRD.
>
> Uji kualitas problem statement dengan satu pertanyaan: kalau masalah ini selesai, apakah pemilik bisnis merasakan bedanya? Kalau tidak, rumusannya masih terlalu teknis.
>
> Ini output pertama peserta hari ini. Minta mereka menyimpannya sebagai PROBLEM.md.

### Catatan Desain
Problem statement sengaja tidak menyebut satu pun nama fitur. Sebutkan hal ini eksplisit saat membawakan.

---

## Slide 14

### Judul
Documentation Driven Development

### Tujuan Slide
Menggantikan seluruh Section 04 lama. Menyebut empat dokumen tanpa menampilkan isinya.

### Konten
- Judul 64pt: Documentation Driven Development
- Dua kalimat: 'Sebelum satu baris kode ditulis, empat dokumen harus selesai. Dokumen inilah yang dibaca AI Agent — bukan pikiran Anda.'
- Empat nama file sebagai teks 26pt: PRD.md · SCOPE.md · DESIGN.md · TASK.md

### Visual yang Disarankan
- Tidak ada visual. Kekosongan adalah desainnya.
- Tidak ada mock dokumen, tidak ada bullet, tidak ada kartu.

### Layout
**Tipe: STATEMENT.** Statement slide — teks rata kiri, lebih dari separuh slide dibiarkan kosong.

### Speaker Notes

> Ini slide pengganti untuk seluruh Section 04 yang lama. Sengaja hampir kosong.
>
> Jangan menjelaskan isi dokumen di sini. Cukup sebut nama dan fungsinya dalam satu kalimat masing-masing:
> PRD - apa yang dibangun dan untuk siapa.
> SCOPE - sampai mana batasnya.
> DESIGN - bagaimana bentuk dan strukturnya.
> TASK - dalam urutan apa dikerjakan.
>
> Analogi yang mudah diterima: AI Agent itu seperti freelancer sangat cepat yang baru bergabung hari ini, tidak pernah bertemu klien, dan tidak boleh bertanya. Satu-satunya yang dia punya adalah file yang kita berikan. Kalau file-nya kosong, dia akan mengarang.
>
> Maksimal 3 menit di slide ini. Detail keempat dokumen akan kita tulis langsung di IDE.

### Catatan Desain
**Pengganti empat slide lama (PRD, Scope, Design, Task).** Detail keempat dokumen dikerjakan langsung di IDE, bukan dibaca dari slide. Maksimal 3 menit di sini.

---

## Slide 15

### Judul
Why Documentation Matters

### Tujuan Slide
Menjelaskan kenapa dokumentasi menentukan kualitas output AI.

### Konten
- Empat pasang perbandingan: AI menebak vs AI mengeksekusi; tidak ada batas scope vs scope punya rem; struktur berubah-ubah vs struktur konsisten; tidak bisa diaudit vs bisa diaudit
- Penutup: dokumen ditulis lebih dulu, kode menyusul

### Visual yang Disarankan
- Dua kolom dipisah satu garis vertikal — tanpa panel, tanpa kotak.
- Tanda ✕ clay dan ✓ sage, konsisten dengan slide 8 dan 10.

### Layout
**Tipe: Hairline comparison.** Dua kolom hairline yang sejajar baris demi baris, dipisah garis vertikal.

### Speaker Notes

> Pesan inti: dokumen bukan formalitas kampus. Dokumen adalah ANTARMUKA kita dengan AI Agent.
>
> Bacakan berpasangan kiri-kanan, baris per baris. Empat pasang saja, jangan ditambah.
>
> Yang paling sering dialami peserta adalah baris kedua: tidak ada batas scope. Tanya ke audiens: "Siapa yang pernah minta AI bikin satu fitur, lalu keluarnya sepuluh?"
>
> Istilah yang perlu diingat: Documentation Driven Development.

### Catatan Desain
Versi sebelumnya memakai dua panel berkotak. Diganti garis rambut supaya perbandingannya terbaca baris-per-baris, bukan blok-lawan-blok.

---

## Slide 16

### Judul
Documentation Stack  ★ HERO

### Tujuan Slide
Menyatukan empat dokumen jadi satu metafora tunggal: blueprint stack.

### Konten
- Empat lapis bertumpuk: PRD.md → SCOPE.md → DESIGN.md → TASK.md, masing-masing dengan pertanyaan yang dijawabnya
- Penjelasan bahwa setiap lapis membatasi lapis berikutnya
- Penutup: empat file, satu folder — itu seluruh konteksnya

### Visual yang Disarankan
- Blueprint stack: empat kartu bergeser diagonal dengan gradasi tint ungu makin pekat ke bawah.
- Ini visual yang paling layak difoto peserta — jangan ditambahi elemen lain.

### Layout
**Tipe: Blueprint stack.** Tumpukan dokumen di kiri, penjelasan di kanan, dihubungkan panah.

### Speaker Notes

> Ini slide yang paling ingin saya minta peserta foto.
>
> Metafora: ini blueprint. Seperti membangun rumah - tidak ada tukang yang mulai memasang bata sebelum ada gambar kerja.
>
> Tekankan urutan mengunci: PRD menentukan Scope, Scope menentukan Design, Design menentukan Task. Kalau melompat, lapisan di bawahnya kehilangan pijakan dan AI akan mengisinya dengan tebakan.
>
> Hitung waktunya di depan peserta: menulis empat dokumen ini butuh 30 sampai 45 menit dibantu AI. Bandingkan dengan berhari-hari memperbaiki aplikasi yang salah arah.
>
> Penutup: "Empat file, satu folder. Itu seluruh konteks yang dibutuhkan AI Agent." Lalu langsung ke slide berikutnya - kita buka IDE.

### Catatan Desain
Gradasi warna kartu (`#EFEBF3` → `#D6CFE4`) yang menciptakan kedalaman, bukan drop shadow berlebihan.

---

## Slide 17

### Judul
Sekarang kita buka IDE.

### Tujuan Slide
Menandai peralihan panggung dari slide ke IDE.

### Konten
- Satu baris 68pt: Sekarang kita buka IDE.
- Sub: 'Empat template ini kita tulis langsung, bukan dibaca dari slide.'
- Empat nama file di bawah garis

### Visual yang Disarankan
- Slide gelap, hampir kosong. Tidak ada gambar.
- Fungsinya jeda, bukan informasi.

### Layout
**Tipe: STATEMENT (gelap).** Statement slide gelap, teks rata kiri, dua pertiga slide kosong.

### Speaker Notes

> JEDA PANGGUNG. Slide ini menandai peralihan dari mendengar ke mengerjakan.
>
> Sampaikan kontraknya sebelum pindah: "Saya akan tulis empat file ini dari nol. Kalian ikuti di laptop masing-masing, pakai bisnis pilihan kalian sendiri - bukan padel court."
>
> Yang dikerjakan di IDE, berurutan:
> 1. PRD.md - product name, problem, goals, users, features
> 2. SCOPE.md - in scope, out of scope, technical constraints
> 3. DESIGN.md - pages, user flow, database concept
> 4. TASK.md - phase 1 sampai 6 beserta task-nya
>
> Target 30-40 menit. Jangan sempurna, cukup lengkap. Sempurna itu musuh selesai.
>
> Kalau ada peserta yang tertinggal, bagikan file template Anda supaya mereka bisa menyusul.

### Catatan Desain
**Slide baru.** Setelah slide ini, matikan proyektor slide dan pindah ke share screen IDE. Speaker notes berisi urutan lengkap empat file yang harus ditulis.

---

## Slide 18

### Judul
Planner vs Executor  ★ HERO

### Tujuan Slide
Memisahkan dua peran AI dan menandai momen handoff di antaranya.

### Konten
- PLANNER — Analyze, Plan, Design. Tools: Claude, Gemini, ChatGPT, Antigravity. Output: empat dokumen
- EXECUTOR — Build, Refactor, Test. Tools: Cursor, GitHub Copilot, OpenCode, Antigravity. Output: Frontend, Backend, Database, API
- Penanda HANDOFF di antara keduanya

### Visual yang Disarankan
- **Logo resmi** Claude, Gemini, Cursor, GitHub Copilot, OpenCode — monokrom `#847E96` di panel terang, `#B5AEC6` di panel gelap.
- Kontras terang vs gelap adalah ilustrasinya. Tidak perlu gambar tambahan.

### Layout
**Tipe: Split terang/gelap + logo.** Dua panel sama lebar dengan jarak 0,73 inci dan penanda handoff di tengah.

### Speaker Notes

> Bedakan dua peran ini dengan tegas. Ini kesalahan paling umum yang saya lihat.
>
> Planner: AI yang diajak berpikir. Anda berdiskusi, membantah, memotong fitur. Outputnya DOKUMEN, bukan kode.
> Executor: AI yang diberi dokumen dan disuruh membangun. Di sini Anda tidak berdiskusi lagi soal fitur - keputusannya sudah diambil.
>
> Kesalahan umum: memakai satu sesi chat untuk keduanya. Akibatnya AI mengubah keputusan produk di tengah proses coding, dan hasilnya tidak pernah stabil.
>
> Kata kuncinya HANDOFF (tunjuk panah di tengah). Ada momen jelas di mana perencanaan berhenti dan eksekusi dimulai. Momen itu adalah saat keempat dokumen selesai - yang barusan kita tulis di IDE.
>
> Tiga aturan Planner yang wajib disebut: (1) beri konteks utuh, jangan diringkas; (2) satu dokumen per sesi; (3) selalu potong hasilnya, karena Planner selalu terlalu optimistis.
>
> Siklus Executor untuk tiap phase: Specification, Planning, Implementation, Refactor, Testing. Diulang per phase, bukan sekaligus.

### Catatan Desain
Kontras terang–gelap menyampaikan bahwa ini dua mode kerja yang berbeda, bukan dua tools yang berbeda.

---

## Slide 19

### Judul
Live Demo Start

### Tujuan Slide
Menandai peralihan dari mendengar ke melihat, sekaligus menetapkan kontrak dengan peserta.

### Konten
- Empat hal yang akan terjadi, dalam daftar hairline
- Instruksi menonton: perhatikan berapa kali AI dihentikan dan kenapa
- Mock terminal yang menampilkan eksekusi Phase 1 sampai 3

### Visual yang Disarankan
- Terminal mock dengan teks Courier New dan penanda [ok] sage / [..] ungu.
- **Logo stack asli** Next.js, TypeScript, Tailwind CSS, Supabase di title bar terminal.

### Layout
**Tipe: Terminal (gelap).** Daftar hairline di kiri, terminal mock di kanan. Slide gelap.

### Speaker Notes

> Ini titik balik seminar - dari mendengar jadi melihat.
>
> Sebelum mulai, sampaikan kontraknya: saya akan sengaja BERHENTI di beberapa titik. Setiap berhenti, kalian yang menilai hasilnya sebelum saya lanjut.
>
> Kalau live demo gagal (dan kadang memang gagal), JANGAN panik dan jangan buru-buru diperbaiki diam-diam. Justru tunjukkan: inilah kenapa Human Review ada di workflow. Kegagalan di panggung adalah bahan ajar terbaik.
>
> Siapkan cadangan: screenshot atau rekaman hasil yang sudah jadi, kalau koneksi atau kuota bermasalah.
>
> Target waktu: 30 menit. Jangan sampai kehabisan waktu untuk sesi audit - itu bagian yang paling berharga.

### Catatan Desain
Siapkan cadangan (screenshot atau rekaman) kalau koneksi bermasalah. Kalau demo gagal, tunjukkan — itu justru bahan ajar untuk slide berikutnya.

---

## Slide 20

### Judul
Human Review Checklist  ★ HERO

### Tujuan Slide
Memberi alat kerja konkret untuk mengaudit hasil AI dalam empat kategori.

### Konten
- Product Review — Sesuai PRD? Sesuai Scope? Ada fitur yang tidak diminta? User flow sesuai Design?
- Technical Review — Struktur folder rapi? Penamaan konsisten? Tidak over-engineering? Komponen dipakai ulang?
- Security Review — Tidak ada secret key di kode? Input tervalidasi? Akses admin terlindungi? Data sensitif tidak bocor?
- Functionality Review — Login berjalan? Booking berjalan? Dashboard berjalan? Error ditangani jelas?

### Visual yang Disarankan
- Empat checklist card dengan checkbox kotak kosong — dirancang untuk difoto dan dipakai peserta.
- Monoline mark berbeda di setiap kategori.

### Layout
**Tipe: Checklist grid.** Empat kolom sejajar + caption penutup.

### Speaker Notes

> Ini slide yang paling ingin saya minta peserta foto. Empat kategori ini adalah alat kerja, bukan teori.
>
> Product Review: bandingkan hasil dengan PRD dan Scope. Fitur yang tidak diminta itu CACAT, bukan bonus.
> Technical Review: bayangkan Anda membuka kode ini bulan depan. Masih paham?
> Security Review: ini yang paling sering hilang dari hasil AI. Cek secret key hardcoded dan validasi input - dua ini saja sudah menyelamatkan banyak proyek.
> Functionality Review: jalankan sendiri. Jangan percaya laporan AI bahwa semuanya sudah berhasil.
>
> Sesi audit (14.00-14.30): pilih 2 sampai 3 hasil peserta, tampilkan di layar, dan bedah bersama memakai empat kategori ini. Jaga nada tetap membangun - kita membedah kode, bukan orangnya.
>
> Kalimat penutup: kalau tidak ada yang me-review, pelanggan Anda yang jadi reviewer pertama.

### Catatan Desain
Ini slide kedua yang mempertahankan kartu, karena checklist memang butuh wadah agar terbaca sebagai daftar terpisah. Checkbox kosong adalah keputusan desain: slide ini alat kerja, bukan bahan bacaan.

---

## Slide 21

### Judul
Testing & Deployment

### Tujuan Slide
Menutup workflow: uji happy path, lalu naikkan ke lingkungan yang bisa diakses orang lain.

### Konten
- Happy Path: Login, Booking (termasuk slot yang sama tidak bisa dipesan dua kali), Approval, History
- Deployment Stack: Vercel, Railway, Supabase / Neon
- Hasil akhir: Live Application

### Visual yang Disarankan
- **Logo resmi** Vercel, Railway, Supabase, dan Neon.
- Checklist happy path dengan checkbox kotak di kiri.

### Layout
**Tipe: Split + logo.** Dua kolom dipisah garis vertikal, banner LIVE APPLICATION di kanan bawah.

### Speaker Notes

> Testing di sini bukan unit test. Ini uji jalur utama - happy path. Untuk MVP, itu sudah cukup.
>
> Empat skenario di kiri adalah kontrak minimum. Kalau salah satu gagal, jangan deploy.
>
> Perhatikan skenario Booking: yang diuji bukan cuma "booking tersimpan", tapi juga "slot yang sama tidak bisa dipesan lagi". Itu justru masalah bisnis aslinya.
>
> Deployment: jangan berlama-lama memilih stack. Vercel untuk frontend, Railway untuk backend, Supabase atau Neon untuk database. Semua punya tier gratis yang cukup untuk MVP.
>
> Pesan penting: aplikasi yang tidak bisa diakses orang lain belum selesai. Deploy adalah bagian dari definisi selesai, bukan tahap opsional.

### Catatan Desain
**Slide tambahan di luar `slide-structure.md`** — Deployment ada di alur wajib seminar tapi tidak punya slide sendiri. Hapus slide ini kalau ingin lebih ramping.

---

## Slide 22

### Judul
AI tidak menggantikan Software Engineer

### Tujuan Slide
Pernyataan penutup seminar, berdiri sendiri sebagai satu slide.

### Konten
- Blok 1 (putih): AI tidak menggantikan Software Engineer.
- Blok 2 (ungu): AI mempercepat Software Engineer yang punya workflow yang benar.
- Atribusi kecil: Inti seminar hari ini

### Visual yang Disarankan
- Tidak ada visual. Hanya tipografi 38pt dua warna.
- Slide gelap, lebih dari separuh kosong.

### Layout
**Tipe: STATEMENT (gelap).** Statement slide gelap dengan dua blok kalimat bertumpuk dan garis pemisah pendek.

### Speaker Notes

> Berhenti di sini. Diam 3 detik sebelum bicara.
>
> Bacakan pelan, dua kalimat, dengan jeda di antaranya:
> "AI tidak menggantikan Software Engineer."
> (jeda)
> "AI mempercepat Software Engineer yang punya workflow yang benar."
>
> Jangan menambahkan penjelasan apa pun setelah ini. Biarkan kalimatnya bekerja sendiri, lalu lanjut ke Key Takeaways.

### Catatan Desain
**Slide baru.** Kalimat ini sebelumnya jadi banner kecil di dalam Key Takeaways. Dijadikan slide sendiri supaya punya bobot. Beri jeda 3 detik sebelum membacanya.

---

## Slide 23

### Judul
Key Takeaways + Q&A  ★ HERO

### Tujuan Slide
Meringkas seluruh seminar jadi lima kalimat yang bisa diingat minggu depan.

### Konten
- 01 Mulai dari masalah — bukan dari ide, bukan dari tools
- 02 Dokumen dulu — kode adalah konsekuensi, bukan titik awal
- 03 Scope adalah rem — yang tidak tertulis, tidak dikerjakan
- 04 AI mengeksekusi — manusia yang tetap memutuskan
- 05 Review itu pekerjaan — bukan formalitas di akhir sprint
- Baris Q&A dan penutup

### Visual yang Disarankan
- Daftar hairline tiga kolom (nomor · judul · penjelasan).
- Tidak ada ilustrasi — teks adalah visualnya.

### Layout
**Tipe: Hairline list (terang).** Daftar hairline penuh lebar, baris Q&A di bawah.

### Speaker Notes

> Bacakan lima poin ini pelan. Jangan buru-buru - ini yang akan mereka bawa pulang.
>
> Pertanyaan yang biasanya muncul di Q&A, siapkan jawabannya:
> - AI Builder vs AI Agent, pilih yang mana? Builder untuk validasi ide, Agent untuk produk yang akan dirawat.
> - Apakah developer akan tergantikan? Yang tergantikan adalah orang yang cuma bisa mengetik kode tanpa memahami masalah.
> - Bagaimana cara mulai belajar? Ambil satu bisnis di sekitar Anda, kerjakan delapan langkah workflow tadi sampai selesai. Satu proyek utuh lebih berharga daripada sepuluh tutorial.
>
> Tutup dengan tantangan konkret: minggu ini, pilih satu bisnis, tulis empat dokumennya, bangun MVP-nya. Kirim hasilnya ke grup.

### Catatan Desain
Sengaja dibuat terang setelah slide pernyataan yang gelap, supaya penutupnya terasa membuka kembali, bukan menutup.

---
