# -*- coding: utf-8 -*-
"""Generate PRESENTATION-BLUEPRINT.md — speaker notes are read straight from the
built .pptx so the document can never drift from the deck."""
import io
from pptx import Presentation

DECK = "C:/Seminar/Vibecoding-Seminar-HIMTI-UMT.pptx"
OUT  = "C:/Seminar/PRESENTATION-BLUEPRINT.md"

# (judul, tipe layout, tujuan, konten, visual, layout, catatan)
S = [
("Cover — Vibecoding", "Full-bleed photo",
 "Membuka seminar dengan pernyataan posisi yang jelas: ini seminar workflow, bukan seminar prompt.",
 ["Judul besar **Vibecoding** 84pt di atas foto",
  "Subjudul **From Business Problem to Production App**",
  "Deskripsi satu paragraf pendek",
  "Blok identitas pemateri (WAJIB DIISI: nama, role, organisasi, tanggal)",
  "Empat nama file di kanan bawah sebagai foreshadow: PRD.md · SCOPE.md · DESIGN.md · TASK.md"],
 ["Foto: Unsplash — ruang kerja gelap dengan meja (`cover-desk.jpg`), overlay ink `#1F1C2B` 72%.",
  "Tidak ada elemen lain. Foto + tipografi saja."],
 "Full-bleed photo, teks rata kiri, garis pemisah tipis di atas blok identitas.",
 "Slide gelap pertama dari lima. Overlay 72% dipilih supaya teks putih tetap terbaca dari belakang ruangan tanpa menghilangkan tekstur foto."),

("Who Am I", "Asimetris 37/63",
 "Membangun kredibilitas secukupnya lalu langsung pindah ke materi. Maksimal 2 menit.",
 ["Panel tint ungu penuh tinggi di kiri berisi frame foto (WAJIB DIISI)",
  "Nama 40pt, role, dan bio empat baris di kanan",
  "Tiga chip fokus: Product Engineering, AI Engineering, Software Architecture"],
 ["Kotak placeholder foto rasio 3:4 dengan garis putus-putus — ganti lewat Insert > Picture.",
  "Alternatif: unDraw `Programmer` dengan warna `#847E96`."],
 "Panel warna penuh tinggi di kiri (bleed ke tepi slide), konten teks di kanan.",
 "Panel kiri sengaja menabrak tepi slide — ini satu-satunya slide dengan bleed warna, jadi terasa berbeda dari semua slide konten lain."),

("Roadmap Seminar", "Hairline list",
 "Memberi peta tiga jam supaya peserta tahu kapan harus membuka laptop dan kapan cukup mendengar.",
 ["Delapan babak dengan jam: 11.00 Opening, 11.10 What Is Vibecoding, 11.25 Master Workflow, 11.40 Business Discovery, 13.10 Documentation, 13.20 Agentic Development, 13.50 Deploy & Audit, 14.30 Q&A",
  "Kolom Documentation kini bertuliskan 'Menulis PRD, Scope, Design, dan Task di IDE'"],
 ["Tanpa ilustrasi. Struktur tiga kolom (jam · judul · deskripsi) dipisah garis rambut.",
  "Ini pengganti grid delapan kartu di versi sebelumnya — jauh lebih tenang dan lebih cepat dibaca."],
 "Tabel tiga kolom tanpa kotak, hanya garis horizontal 1px di antara baris.",
 "Penghapusan kartu di sini adalah perubahan terbesar untuk mengurangi kesan template. Whitespace yang jadi pemisah, bukan border."),

("Section 02 — What Is Vibecoding", "Full-bleed photo",
 "Slide jeda yang menandai pergantian babak. Maksimal 15 detik.",
 ["Angka section 132pt", "Judul section 46pt", "Satu kalimat pengantar"],
 ["Foto: Unsplash — layar kode gelap (`section-code.jpg`), overlay ink 70%.",
  "Tidak ada konten lain — kekosongan itu justru fungsinya."],
 "Full-bleed photo, angka raksasa dan judul rata kiri bawah.",
 "Angka 132pt memberi kontras skala paling ekstrem di seluruh deck, berlawanan dengan caption 8pt di footer."),

("Traditional Development", "Big number + hairline list",
 "Menunjukkan bahwa cara lama bukan salah, tapi mahal — dan biayanya selalu di tempat yang sama.",
 ["Angka besar **3–6** dengan label BULAN SEBELUM ADA YANG BISA DIPAKAI",
  "Alur lama Idea → Coding → Deploy sebagai teks kecil",
  "Tiga biaya di kolom kanan: kebutuhan berubah, scope melebar, feedback terlambat"],
 ["Big number 112pt sebagai elemen dominan.",
  "Kolom kanan dipisah garis vertikal, bukan kartu.",
  "Alternatif foto: Unsplash `whiteboard planning meeting`."],
 "Asimetris 45/55 dengan garis vertikal sebagai pemisah, bukan dua panel berkotak.",
 "Angka besar mengambil alih slide. Alur tiga langkah sengaja dibuat kecil di bawah — perannya pendukung, bukan bintang."),

("AI Development Evolution", "Timeline",
 "Menempatkan posisi kita hari ini di peta evolusi: Agentic Development.",
 ["Empat era pada satu sumbu horizontal: Traditional → AI Assisted → Agentic → Autonomous",
  "Setiap era menyebut perubahan peran manusia",
  "Sumbu: Kontrol Manual → Otonomi AI",
  "Banner penutup tentang pergeseran pekerjaan utama ke spesifikasi dan review"],
 ["Timeline dengan titik pada garis; titik Agentic diberi cincin penanda 'kita di sini'.",
  "Tidak ada kartu sama sekali — pengganti empat kartu di versi sebelumnya."],
 "Timeline horizontal penuh lebar, label di atas garis, deskripsi di bawah garis.",
 "Timeline dipilih karena bentuknya sendiri sudah menyampaikan pesan 'ini sebuah perjalanan'. Kartu tidak bisa melakukan itu."),

("AI Landscape", "Logo grid",
 "Memisahkan empat kategori tools AI supaya peserta punya ekspektasi yang benar.",
 ["AI Builder — v0, Lovable, Bolt, Firebase → prototype cepat",
  "AI Assistant — GitHub Copilot, Cursor, VS Code → percepat coding",
  "AI Agent — Claude, Gemini, OpenCode, Antigravity → bangun fitur utuh",
  "Autonomous — Devin, Codex, SWE Agent → kerja tanpa diawasi"],
 ["**Logo resmi** dari Simple Icons, diwarnai `#847E96` supaya seluruh grid terasa satu keluarga.",
  "Brand tanpa logo bebas (Lovable, Bolt, VS Code, Antigravity, Devin, Codex, SWE Agent) tampil sebagai monogram huruf dalam cincin monoline — bentuk yang sama dengan sistem penanda di slide lain.",
  "Kolom AI Agent diberi latar tint ungu sebagai penanda 'ini yang kita pakai'."],
 "Empat kolom dipisah garis vertikal; logo disusun grid 2×2 di setiap kolom.",
 "Pilihan sadar: logo monokrom, bukan warna asli. Warna asli akan membuat baris terlihat seperti halaman sponsor."),

("Biggest Misconception", "Diagram tipografi",
 "Membongkar mitos Idea → Prompt → Aplikasi Jadi sebelum memperkenalkan workflow yang benar.",
 ["Rantai mitos Idea → Prompt → Aplikasi Jadi dalam tipografi 33pt, dicoret satu garis penuh",
  "Empat konsekuensi nyata dalam grid 2×2 hairline"],
 ["Coretan berupa garis clay `#A9634F` melintasi ketiga kata — bukan ikon, bukan kartu.",
  "Tanda ✕ besar 40pt di ujung kanan rantai."],
 "Rantai tipografi besar di sepertiga atas, empat baris hairline 2×2 di bawah.",
 "Mitosnya digambar dengan tipografi besar lalu dicoret di depan mata penonton. Jauh lebih kuat daripada menaruhnya di dalam kotak bergaris putus-putus."),

("Master Workflow  ★ HERO", "Process grid (gelap)",
 "SLIDE TERPENTING. Menanamkan delapan langkah dari masalah bisnis sampai aplikasi hidup.",
 ["FASE 1 — PLANNING & DOCUMENTATION: 01 Business Problem, 02 PRD, 03 Scope, 04 Design, 05 Task Breakdown",
  "FASE 2 — EXECUTION & DELIVERY: 06 AI Execute, 07 Review, 08 Deploy",
  "Setiap langkah mencantumkan output-nya"],
 ["Grid 4×2 kartu proses di atas latar gelap dengan panah monoline antar kartu.",
  "Kartu 06 dan 07 diberi tint lebih terang sebagai penanda titik serah-terima manusia ↔ AI.",
  "Chip output di dasar setiap kartu."],
 "Dua baris × empat kolom, label fase di atas setiap baris, slide gelap.",
 "Ini satu-satunya slide yang mempertahankan grid kartu penuh — karena di sini kartu memang berfungsi sebagai representasi langkah proses, bukan sebagai wadah teks."),

("Business First — Section 03", "Full-bleed photo + statement",
 "Memindahkan titik awal peserta dari 'ide aplikasi' ke 'masalah bisnis', sekaligus membuka Section 03.",
 ["Pernyataan 62pt: Software tidak lahir dari ide",
  "Satu paragraf pendukung",
  "Kontras dua pertanyaan: ✕ 'Aplikasi apa yang mau kita buat?' vs ✓ 'Masalah siapa yang mau kita selesaikan?'",
  "Rantai: MASALAH → KEBUTUHAN → FITUR → SOFTWARE"],
 ["Foto: Unsplash — lapangan padel dari atas (`section-padel.jpg`), overlay ink 76%.",
  "Foto ini sekaligus memperkenalkan studi kasus yang dipakai sampai akhir."],
 "Full-bleed photo, pernyataan besar di atas, dua pertanyaan berdampingan di bawah garis.",
 "Section cover dan slide konten digabung jadi satu. Hemat satu slide, dan pesannya justru lebih kuat karena foto studi kasusnya langsung hadir."),

("Google Maps Discovery", "Mock kanan",
 "Mengubah teori 'cari masalah bisnis' jadi latihan lima menit yang konkret.",
 ["Tiga langkah hairline di kiri: buka Google Maps → pilih satu bisnis → catat cara kerjanya",
  "Mock peta di kanan dengan lima pin bisnis, Padel Court di-highlight",
  "Aturan main: pilih bisnis yang bisa Anda amati sendiri"],
 ["Logo Google Maps asli di dalam search bar mock.",
  "Mock peta dibuat native (grid jalan + pin), bukan screenshot — bebas masalah hak cipta.",
  "SAAT DEMO: share screen Google Maps sungguhan. Caption di slide sudah mengingatkan."],
 "Langkah hairline di kiri, mock peta di kanan.",
 "Posisi mock sengaja di kanan supaya berlawanan dengan slide berikutnya yang menaruh mock di kiri — dua slide bersebelahan tidak boleh terasa sama."),

("Selected Business — Padel Court", "Mock kiri",
 "Menetapkan satu studi kasus yang dipakai konsisten sampai akhir seminar.",
 ["Mock percakapan WhatsApp lima gelembung yang memperlihatkan jadwal bentrok",
  "Judul studi kasus 42pt di kanan",
  "Profil bisnis tiga baris: bisnis, pelanggan, cara booking hari ini"],
 ["Logo WhatsApp asli di header mock chat.",
  "Mock chat dibuat native. Ini visual paling 'mendarat' di seluruh deck karena peserta mengenali polanya."],
 "Mock chat di kiri, judul dan profil di kanan — kebalikan dari slide sebelumnya.",
 "Bacakan chat dengan dua suara berbeda. Caption di bawah chat adalah jembatan ke slide berikutnya."),

("Problem Analysis", "Hairline list + blok",
 "Mengajarkan cara naik dari daftar keluhan ke satu problem statement yang bisa diuji.",
 ["Lima gejala bernomor dalam daftar hairline",
  "Business Problem Statement satu paragraf utuh dalam blok tint ungu",
  "Output: PROBLEM.md"],
 ["Daftar hairline di kiri, blok tint tanpa border di kanan.",
  "Satu-satunya blok teks panjang di deck — dan itu disengaja, karena isinya memang harus dibaca."],
 "Asimetri 55/38 dengan jeda lebar di tengah.",
 "Problem statement sengaja tidak menyebut satu pun nama fitur. Sebutkan hal ini eksplisit saat membawakan."),

("Documentation Driven Development", "STATEMENT",
 "Menggantikan seluruh Section 04 lama. Menyebut empat dokumen tanpa menampilkan isinya.",
 ["Judul 64pt: Documentation Driven Development",
  "Dua kalimat: 'Sebelum satu baris kode ditulis, empat dokumen harus selesai. Dokumen inilah yang dibaca AI Agent — bukan pikiran Anda.'",
  "Empat nama file sebagai teks 26pt: PRD.md · SCOPE.md · DESIGN.md · TASK.md"],
 ["Tidak ada visual. Kekosongan adalah desainnya.",
  "Tidak ada mock dokumen, tidak ada bullet, tidak ada kartu."],
 "Statement slide — teks rata kiri, lebih dari separuh slide dibiarkan kosong.",
 "**Pengganti empat slide lama (PRD, Scope, Design, Task).** Detail keempat dokumen dikerjakan langsung di IDE, bukan dibaca dari slide. Maksimal 3 menit di sini."),

("Why Documentation Matters", "Hairline comparison",
 "Menjelaskan kenapa dokumentasi menentukan kualitas output AI.",
 ["Empat pasang perbandingan: AI menebak vs AI mengeksekusi; tidak ada batas scope vs scope punya rem; struktur berubah-ubah vs struktur konsisten; tidak bisa diaudit vs bisa diaudit",
  "Penutup: dokumen ditulis lebih dulu, kode menyusul"],
 ["Dua kolom dipisah satu garis vertikal — tanpa panel, tanpa kotak.",
  "Tanda ✕ clay dan ✓ sage, konsisten dengan slide 8 dan 10."],
 "Dua kolom hairline yang sejajar baris demi baris, dipisah garis vertikal.",
 "Versi sebelumnya memakai dua panel berkotak. Diganti garis rambut supaya perbandingannya terbaca baris-per-baris, bukan blok-lawan-blok."),

("Documentation Stack  ★ HERO", "Blueprint stack",
 "Menyatukan empat dokumen jadi satu metafora tunggal: blueprint stack.",
 ["Empat lapis bertumpuk: PRD.md → SCOPE.md → DESIGN.md → TASK.md, masing-masing dengan pertanyaan yang dijawabnya",
  "Penjelasan bahwa setiap lapis membatasi lapis berikutnya",
  "Penutup: empat file, satu folder — itu seluruh konteksnya"],
 ["Blueprint stack: empat kartu bergeser diagonal dengan gradasi tint ungu makin pekat ke bawah.",
  "Ini visual yang paling layak difoto peserta — jangan ditambahi elemen lain."],
 "Tumpukan dokumen di kiri, penjelasan di kanan, dihubungkan panah.",
 "Gradasi warna kartu (`#EFEBF3` → `#D6CFE4`) yang menciptakan kedalaman, bukan drop shadow berlebihan."),

("Sekarang kita buka IDE.", "STATEMENT (gelap)",
 "Menandai peralihan panggung dari slide ke IDE.",
 ["Satu baris 68pt: Sekarang kita buka IDE.",
  "Sub: 'Empat template ini kita tulis langsung, bukan dibaca dari slide.'",
  "Empat nama file di bawah garis"],
 ["Slide gelap, hampir kosong. Tidak ada gambar.",
  "Fungsinya jeda, bukan informasi."],
 "Statement slide gelap, teks rata kiri, dua pertiga slide kosong.",
 "**Slide baru.** Setelah slide ini, matikan proyektor slide dan pindah ke share screen IDE. Speaker notes berisi urutan lengkap empat file yang harus ditulis."),

("Planner vs Executor  ★ HERO", "Split terang/gelap + logo",
 "Memisahkan dua peran AI dan menandai momen handoff di antaranya.",
 ["PLANNER — Analyze, Plan, Design. Tools: Claude, Gemini, ChatGPT, Antigravity. Output: empat dokumen",
  "EXECUTOR — Build, Refactor, Test. Tools: Cursor, GitHub Copilot, OpenCode, Antigravity. Output: Frontend, Backend, Database, API",
  "Penanda HANDOFF di antara keduanya"],
 ["**Logo resmi** Claude, Gemini, Cursor, GitHub Copilot, OpenCode — monokrom `#847E96` di panel terang, `#B5AEC6` di panel gelap.",
  "Kontras terang vs gelap adalah ilustrasinya. Tidak perlu gambar tambahan."],
 "Dua panel sama lebar dengan jarak 0,73 inci dan penanda handoff di tengah.",
 "Kontras terang–gelap menyampaikan bahwa ini dua mode kerja yang berbeda, bukan dua tools yang berbeda."),

("Live Demo Start", "Terminal (gelap)",
 "Menandai peralihan dari mendengar ke melihat, sekaligus menetapkan kontrak dengan peserta.",
 ["Empat hal yang akan terjadi, dalam daftar hairline",
  "Instruksi menonton: perhatikan berapa kali AI dihentikan dan kenapa",
  "Mock terminal yang menampilkan eksekusi Phase 1 sampai 3"],
 ["Terminal mock dengan teks Courier New dan penanda [ok] sage / [..] ungu.",
  "**Logo stack asli** Next.js, TypeScript, Tailwind CSS, Supabase di title bar terminal."],
 "Daftar hairline di kiri, terminal mock di kanan. Slide gelap.",
 "Siapkan cadangan (screenshot atau rekaman) kalau koneksi bermasalah. Kalau demo gagal, tunjukkan — itu justru bahan ajar untuk slide berikutnya."),

("Human Review Checklist  ★ HERO", "Checklist grid",
 "Memberi alat kerja konkret untuk mengaudit hasil AI dalam empat kategori.",
 ["Product Review — Sesuai PRD? Sesuai Scope? Ada fitur yang tidak diminta? User flow sesuai Design?",
  "Technical Review — Struktur folder rapi? Penamaan konsisten? Tidak over-engineering? Komponen dipakai ulang?",
  "Security Review — Tidak ada secret key di kode? Input tervalidasi? Akses admin terlindungi? Data sensitif tidak bocor?",
  "Functionality Review — Login berjalan? Booking berjalan? Dashboard berjalan? Error ditangani jelas?"],
 ["Empat checklist card dengan checkbox kotak kosong — dirancang untuk difoto dan dipakai peserta.",
  "Monoline mark berbeda di setiap kategori."],
 "Empat kolom sejajar + caption penutup.",
 "Ini slide kedua yang mempertahankan kartu, karena checklist memang butuh wadah agar terbaca sebagai daftar terpisah. Checkbox kosong adalah keputusan desain: slide ini alat kerja, bukan bahan bacaan."),

("Testing & Deployment", "Split + logo",
 "Menutup workflow: uji happy path, lalu naikkan ke lingkungan yang bisa diakses orang lain.",
 ["Happy Path: Login, Booking (termasuk slot yang sama tidak bisa dipesan dua kali), Approval, History",
  "Deployment Stack: Vercel, Railway, Supabase / Neon",
  "Hasil akhir: Live Application"],
 ["**Logo resmi** Vercel, Railway, Supabase, dan Neon.",
  "Checklist happy path dengan checkbox kotak di kiri."],
 "Dua kolom dipisah garis vertikal, banner LIVE APPLICATION di kanan bawah.",
 "**Slide tambahan di luar `slide-structure.md`** — Deployment ada di alur wajib seminar tapi tidak punya slide sendiri. Hapus slide ini kalau ingin lebih ramping."),

("AI tidak menggantikan Software Engineer", "STATEMENT (gelap)",
 "Pernyataan penutup seminar, berdiri sendiri sebagai satu slide.",
 ["Blok 1 (putih): AI tidak menggantikan Software Engineer.",
  "Blok 2 (ungu): AI mempercepat Software Engineer yang punya workflow yang benar.",
  "Atribusi kecil: Inti seminar hari ini"],
 ["Tidak ada visual. Hanya tipografi 38pt dua warna.",
  "Slide gelap, lebih dari separuh kosong."],
 "Statement slide gelap dengan dua blok kalimat bertumpuk dan garis pemisah pendek.",
 "**Slide baru.** Kalimat ini sebelumnya jadi banner kecil di dalam Key Takeaways. Dijadikan slide sendiri supaya punya bobot. Beri jeda 3 detik sebelum membacanya."),

("Key Takeaways + Q&A  ★ HERO", "Hairline list (terang)",
 "Meringkas seluruh seminar jadi lima kalimat yang bisa diingat minggu depan.",
 ["01 Mulai dari masalah — bukan dari ide, bukan dari tools",
  "02 Dokumen dulu — kode adalah konsekuensi, bukan titik awal",
  "03 Scope adalah rem — yang tidak tertulis, tidak dikerjakan",
  "04 AI mengeksekusi — manusia yang tetap memutuskan",
  "05 Review itu pekerjaan — bukan formalitas di akhir sprint",
  "Baris Q&A dan penutup"],
 ["Daftar hairline tiga kolom (nomor · judul · penjelasan).",
  "Tidak ada ilustrasi — teks adalah visualnya."],
 "Daftar hairline penuh lebar, baris Q&A di bawah.",
 "Sengaja dibuat terang setelah slide pernyataan yang gelap, supaya penutupnya terasa membuka kembali, bukan menutup."),
]

pres = Presentation(DECK)
assert len(pres.slides) == len(S), "jumlah slide tidak cocok: %d vs %d" % (len(pres.slides), len(S))

L = []
L.append("# VIBECODING — PRESENTATION BLUEPRINT")
L.append("**From Business Problem to Production App**  ·  Seminar HIMTI UMT")
L.append("")
L.append("Blueprint lengkap dari deck `Vibecoding-Seminar-HIMTI-UMT.pptx`.")
L.append("Speaker notes di bawah diambil langsung dari file `.pptx`, jadi keduanya selalu sinkron.")
L.append("")
L.append("| | |")
L.append("|---|---|")
L.append("| **Jumlah slide** | 23 |")
L.append("| **Rasio** | 16:9 (13,333 × 7,5 inci) |")
L.append("| **Font** | Montserrat (heading) · ABeeZee (body) · Courier New (terminal mock) |")
L.append("| **Palette** | Cream `#F8F4EF` · Ink `#1F1C2B` · Purple `#847E96` · Purple Light `#B5AEC6` · Tint `#EFEBF3` · Border `#DDD7CF` |")
L.append("| **Aksen terbatas** | Clay `#A9634F` (anti-pattern) · Sage `#5F7A63` (konfirmasi) |")
L.append("| **Slide gelap** | 1, 4, 9, 10, 17, 19, 22 |")
L.append("| **Statement slide** | 14, 17, 22 |")
L.append("| **Foto** | 1, 4, 10 (Unsplash, overlay ink 70–76%) |")
L.append("| **Logo asli** | 7, 11, 12, 18, 19, 21 (Simple Icons, monokrom) |")
L.append("| **Hero slides** | 9, 16, 18, 20, 23 |")
L.append("")
L.append("---")
L.append("")
L.append("## Ringkasan perubahan dari versi sebelumnya")
L.append("")
L.append("**Dihapus (4 slide):** PRD, Scope, Design, Task Breakdown — isinya tidak lagi ditampilkan karena akan ditulis langsung di IDE.")
L.append("")
L.append("**Ditambah (3 slide):** Documentation Driven Development (statement), Sekarang kita buka IDE (statement), AI tidak menggantikan Software Engineer (statement).")
L.append("")
L.append("**Digabung (2 → 1):** Section cover Business Discovery + Business First jadi satu slide foto.")
L.append("")
L.append("**Diubah total layout-nya:** Roadmap (grid kartu → hairline list), Traditional Development (kartu → big number), AI Evolution (kartu → timeline), AI Landscape (teks → logo grid), Biggest Misconception (panel → diagram tipografi), Why Documentation Matters (panel → hairline comparison), Key Takeaways (kartu → hairline list).")
L.append("")
L.append("**Total: 25 → 23 slide.**")
L.append("")
L.append("---")
L.append("")

for i, (judul, tipe, tujuan, konten, visual, layout, catatan) in enumerate(S, start=1):
    sl = pres.slides[i - 1]
    notes = sl.notes_slide.notes_text_frame.text.strip()
    L.append("## Slide %d" % i)
    L.append("")
    L.append("### Judul")
    L.append(judul)
    L.append("")
    L.append("### Tujuan Slide")
    L.append(tujuan)
    L.append("")
    L.append("### Konten")
    for k in konten:
        L.append("- " + k)
    L.append("")
    L.append("### Visual yang Disarankan")
    for v in visual:
        L.append("- " + v)
    L.append("")
    L.append("### Layout")
    L.append("**Tipe: %s.** %s" % (tipe, layout))
    L.append("")
    L.append("### Speaker Notes")
    L.append("")
    for line in notes.split("\n"):
        L.append("> " + line if line.strip() else ">")
    L.append("")
    L.append("### Catatan Desain")
    L.append(catatan)
    L.append("")
    L.append("---")
    L.append("")

io.open(OUT, "w", encoding="utf-8").write("\n".join(L))
print("written:", OUT, len("\n".join(L)), "chars")
