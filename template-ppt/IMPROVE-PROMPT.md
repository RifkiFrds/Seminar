# PROMPT — IMPROVE DECK VIBECODING

Salin seluruh isi di bawah ini sebagai prompt.

---

## KONTEKS

Kamu adalah Senior Presentation Designer dengan standar Apple Keynote, Stripe, Linear, Vercel.

Ada deck seminar 25 slide bernama **Vibecoding — From Business Problem to Production App** (audiens: mahasiswa Informatika, level beginner–intermediate, durasi 3 jam, Bahasa Indonesia dengan istilah industri tetap Inggris).

File yang ada:

- `Vibecoding-Seminar-HIMTI-UMT.pptx` — deck saat ini
- `PRESENTATION-BLUEPRINT.md` — blueprint 25 slide lengkap dengan speaker notes
- `ppt-design-system.md` — design system (palette, tipografi, layout)
- `generator/` — source code deck (Node + pptxgenjs). `node generator/build.js` membangun ulang `.pptx` dan `preview.html`
  - `lib.js` palette & type scale · `kit.js` komponen · `slidesA–E.js` slide 1–7, 8–12, 13–17, 18–21, 22–25

Deck sekarang **secara teknis rapi tapi secara desain masih terasa AI-generated**. Tugasmu memperbaiki itu, bukan membangun ulang dari nol.

---

## MASALAH 1 — DECK MASIH TERASA "DIHASILKAN", BUKAN "DIRANCANG"

### Diagnosis (ini yang harus diperbaiki)

1. **Satu pola dipakai berulang di hampir semua slide:** eyebrow → judul → subjudul → deretan kartu seragam → footer. Penonton hafal polanya di slide ke-5 dan berhenti memperhatikan.
2. **Grid kartu di mana-mana.** 4 kolom, 3 kolom, 5 kolom — bentuknya beda, ritmenya sama. Terlalu banyak kartu putih rounded dengan border tipis.
3. **Tidak ada kontras skala.** Hampir semua teks ada di rentang 9–17pt. Tidak ada momen di mana satu kalimat mengambil alih seluruh layar.
4. **Nol gambar nyata.** Semua visual adalah vector shape buatan. Bersih, tapi steril — tidak ada tekstur, tidak ada manusia, tidak ada dunia nyata.
5. **Whitespace terlalu merata.** Setiap slide "seimbang" dengan cara yang sama. Tidak ada asimetri yang disengaja.
6. **Tidak ada slide yang berani kosong.** Setiap slide diisi sampai penuh secara sopan.

### Yang harus dikerjakan

**A. Pecah monotoni dengan minimal 4 tipe slide baru yang belum ada:**

- **Statement slide** — satu kalimat 60–80pt di tengah, sisanya kosong total. Tidak ada kartu, tidak ada subjudul, tidak ada ilustrasi. Minimal 3 buah, ditaruh di titik peralihan section.
- **Full-bleed image slide** — foto memenuhi seluruh slide, teks overlay di atas overlay gelap. Pakai untuk section cover.
- **Big number slide** — satu angka/statistik 120pt+ dengan label kecil di bawahnya.
- **Quote slide** — satu kutipan besar, italic, dengan atribusi kecil.

**B. Tambah kontras skala ekstrem.** Judul hero naik ke 60–80pt. Caption turun ke 8–9pt. Hilangkan zona tengah yang aman.

**C. Kurangi kartu.** Buang minimal 30% kartu putih. Ganti dengan:
- teks langsung di atas latar (tanpa container)
- pembatas berupa whitespace, bukan border
- daftar dengan garis tipis pemisah, bukan kotak

**D. Asimetri yang disengaja.** Jangan selalu bagi rata. Coba 70/30, teks menempel ke satu sisi, gambar menabrak tepi slide (bleed).

**E. Jangan tambah accent line di bawah judul, jangan tambah color bar/stripe di tepi slide atau tepi kartu.** Itu justru penanda paling kuat dari slide buatan AI.

---

## MASALAH 2 — SECTION 4 (DOCUMENTATION) TERLALU PANJANG

**Kondisi sekarang:** 6 slide (13–18) yang menampilkan isi PRD, Scope, Design, dan Task Breakdown secara detail, lengkap dengan mock dokumen.

**Masalah:** pemateri akan **pindah ke IDE** dan menunjukkan template PRD, Scope, Design, dan Task yang asli secara live. Menampilkan isinya dua kali membuang waktu dan membuat sesi jadi membosankan sebelum demo dimulai.

### Yang harus dikerjakan

**Hapus slide 14, 15, 16, dan 17** (PRD, Scope, Design, Task Breakdown). Semua detail isi dokumen tidak lagi ditampilkan di deck.

**Ganti dengan maksimal 2 slide:**

**Slide baru A — statement slide (WAJIB)**
- Judul besar 60–72pt: `Documentation Driven Development`
- Deskripsi singkat maksimal 2 kalimat. Contoh: *"Sebelum satu baris kode ditulis, empat dokumen harus selesai. Dokumen inilah yang dibaca AI Agent — bukan pikiran Anda."*
- Empat nama file berjajar sebagai teks besar, bukan kartu: `PRD.md` · `SCOPE.md` · `DESIGN.md` · `TASK.md`
- Tidak ada isi dokumen. Tidak ada mock. Tidak ada bullet penjelas.
- Banyak ruang kosong. Slide ini harus terasa lega, bukan padat.

**Slide baru B — transisi ke IDE (OPSIONAL, sangat disarankan)**
- Satu baris besar: `Sekarang kita buka IDE.`
- Sub kecil: *"Empat template ini kita tulis langsung, bukan dibaca dari slide."*
- Slide gelap, hampir kosong. Fungsinya memberi jeda dan menandai peralihan panggung.

**Pertahankan slide 18 (Documentation Stack)** — slide ini tidak menampilkan isi dokumen, hanya metafora blueprint stack empat lapis. Ini hero slide yang diminta design system dan jadi gambar yang paling layak difoto peserta. Kalau ingin lebih ramping lagi, gabungkan Slide baru A ke dalam slide ini dan hapus slide A.

**Pertahankan slide 13 (Why Documentation Matters)** — ini argumen kenapa dokumentasi penting, bukan isi dokumennya. Tapi rampingkan: buang salah satu dari dua panel perbandingan kalau terasa penuh.

**Hasil akhir Section 4: 3–4 slide, turun dari 6.** Total deck jadi sekitar 21–23 slide, masih dalam rentang 20–25.

---

## MASALAH 3 — GUNAKAN GAMBAR DAN LOGO ASLI

Deck saat ini 100% vector buatan sendiri. Sekarang **boleh dan disarankan memakai gambar publik dan logo resmi**.

### Logo tools (pakai logo asli, jangan teks)

Slide **AI Landscape** dan **Planner vs Executor** harus memakai logo resmi, bukan daftar teks:

- **AI Builder** — Lovable, Bolt, v0 (Vercel), Firebase Studio
- **AI Assistant** — GitHub Copilot, Cursor, VS Code
- **AI Agent** — Antigravity, Claude, Gemini, OpenCode
- **Autonomous** — Devin, OpenAI Codex, SWE Agent
- **Deployment** — Vercel, Railway, Supabase, Neon

Sumber logo:
- Situs resmi masing-masing → halaman `/brand`, `/press`, atau `/logo`
- **Simple Icons** (simpleicons.org) — SVG monokrom, gratis, konsisten, paling cocok dengan design system ini
- **Worldvectorlogo** / **Vectorlogo.zone**

Aturan pemakaian:
- Gunakan **versi monokrom** dan beri warna `#847E96` (di slide terang) atau `#B5AEC6` (di slide gelap) supaya seluruh baris logo terasa satu keluarga. Kalau logo memang perlu warna aslinya, pakai warna asli untuk semua logo di baris itu — jangan campur.
- Tinggi logo seragam secara **optis**, bukan secara matematis (logo bulat perlu sedikit lebih besar dari logo kotak).
- Jangan regangkan, jangan miringkan, jangan beri drop shadow.
- Pemakaian ini adalah nominative fair use untuk konteks edukasi — sah selama tidak menyiratkan sponsorship atau afiliasi.

### Foto

Untuk section cover dan statement slide, pakai foto dari **Unsplash** atau **Pexels** (gratis, tanpa atribusi wajib).

Kata kunci per slide:

| Slide | Kata kunci |
|---|---|
| Cover | `dark workspace laptop night`, `minimal desk dark` |
| Section 02 What Is Vibecoding | `code screen macro`, `terminal dark` |
| Section 03 Business Discovery | `padel court`, `small business owner`, `city street shops` |
| Section 04 Documentation | `blueprint architect desk`, `notebook plan sketch` |
| Section 05 Agentic Development | `developer working laptop`, `pair programming` |
| Section 06 Human Review | `code review two people`, `magnifying glass detail` |
| Deployment | `server room`, `network night city` |

Aturan foto:
- **Selalu beri overlay** `#1F1C2B` dengan opacity 55–70% sebelum menaruh teks di atasnya. Tanpa overlay, teks tidak terbaca dari belakang ruangan.
- Pilih foto bertone gelap/netral supaya menyatu dengan palette cream + ungu lembut.
- Minimal 2400px sisi terpanjang. Tanpa watermark, tanpa blur.
- Maksimal 6 foto di seluruh deck. Lebih dari itu, deck berubah jadi galeri dan kehilangan fokus.

### Ilustrasi

Kalau perlu ilustrasi (bukan foto): **unDraw** dengan warna diatur ke `#847E96`, atau **Storyset** dengan warna kustom. Jangan campur dua sumber ilustrasi berbeda di satu deck.

---

## YANG TIDAK BOLEH BERUBAH

- Palette: cream `#F8F4EF`, ink `#1F1C2B`, purple `#847E96`, purple light `#B5AEC6`, tint `#EFEBF3`, border `#DDD7CF`, teks `#1A1A1A` / `#5F5F5F`
- Font: Montserrat (heading), ABeeZee (body)
- Rasio 16:9, margin minimal 0,9 inci
- Studi kasus **Padel Court Booking System** dipakai konsisten dari awal sampai akhir
- Master Workflow 8 langkah (Business Problem → PRD → Scope → Design → Task Breakdown → AI Execute → Review → Deploy)
- Hero slides tetap: Cover, Master Workflow, Documentation Stack, Planner vs Executor, Human Review Checklist, Key Takeaways
- Speaker notes di setiap slide — perbarui isinya kalau slide berubah, jangan dihapus
- Bahasa Indonesia, istilah industri tetap Inggris

---

## CARA MENGERJAKAN

1. Ubah source di `generator/slidesA–E.js`, bukan file `.pptx` langsung.
2. Untuk gambar dan logo: unduh ke `generator/assets/`, lalu sisipkan dengan `addImage` (pptxgenjs menerima path file atau data URI base64).
3. Jalankan `node generator/build.js` untuk membangun ulang.
4. Buka `generator/preview.html` di browser untuk cek layout sebelum membuka PowerPoint.
5. Jalankan `python generator/make-blueprint.py` supaya `PRESENTATION-BLUEPRINT.md` ikut diperbarui.

## OUTPUT YANG DIHARAPKAN

1. File `.pptx` final yang sudah diperbaiki
2. Ringkasan perubahan: slide apa yang dihapus, ditambah, dan diubah
3. Daftar gambar dan logo yang dipakai beserta sumbernya
4. `PRESENTATION-BLUEPRINT.md` yang sudah diperbarui

## KRITERIA SELESAI

Deck dianggap berhasil kalau **tidak ada dua slide berurutan yang memakai pola layout yang sama**, ada minimal 3 statement slide yang hampir kosong, ada foto atau logo asli di minimal 6 slide, dan Section 4 tidak lagi menampilkan isi dokumen PRD/Scope/Design/Task.
