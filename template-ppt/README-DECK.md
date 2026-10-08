# Vibecoding — Seminar Deck

**From Business Problem to Production App** · HIMTI UMT · **23 slide** · 16:9

---

## File

| File | Isi |
|---|---|
| `Vibecoding-Seminar-HIMTI-UMT.pptx` | **Deck utama.** Montserrat + ABeeZee |
| `Vibecoding-Seminar-HIMTI-UMT-SafeFonts.pptx` | Deck identik dengan font Calibri — cadangan untuk laptop presentasi |
| `PRESENTATION-BLUEPRINT.md` | Blueprint 23 slide: judul, tujuan, konten, visual, layout, speaker notes, catatan desain |
| `generator/` | Source code deck + folder `assets/` (foto & logo) |
| `generator/preview.html` | Preview seluruh slide di browser, ukuran presisi |

Speaker notes tertanam di setiap slide. Buka lewat **View → Notes Page** atau **Presenter View**.

---

## Sebelum presentasi — 2 langkah wajib

### 1. Pasang font

- [Montserrat](https://fonts.google.com/specimen/Montserrat) · [ABeeZee](https://fonts.google.com/specimen/ABeeZee)
- Ekstrak, blok semua `.ttf`, klik kanan → **Install for all users**, lalu restart PowerPoint

Kalau tidak bisa dipasang, pakai versi `-SafeFonts`.

### 2. Isi placeholder

| Slide | Yang harus diisi |
|---|---|
| **1 — Cover** | `Nama Pemateri` dan baris `Role · Organisasi · Tanggal Seminar` |
| **2 — Who Am I** | Nama, role, bio, dan **foto** (kotak garis putus-putus, rasio 3:4) |

---

## Struktur

| # | Slide | Tipe layout | Section |
|---|---|---|---|
| 1 | Cover | Full-bleed photo | 01 Opening |
| 2 | Who Am I | Asimetris 37/63 | |
| 3 | Roadmap Seminar | Hairline list | |
| 4 | Section 02 — What Is Vibecoding | Full-bleed photo | 02 What Is Vibecoding |
| 5 | Traditional Development | Big number | |
| 6 | AI Development Evolution | Timeline | |
| 7 | AI Landscape | Logo grid | |
| 8 | Biggest Misconception | Diagram tipografi | |
| 9 | **Master Workflow** ★ | Process grid (gelap) | |
| 10 | Business First | Full-bleed photo + statement | 03 Business Discovery |
| 11 | Google Maps Discovery | Mock kanan | |
| 12 | Selected Business — Padel Court | Mock kiri | |
| 13 | Problem Analysis | Hairline list + blok | |
| 14 | **Documentation Driven Development** | **STATEMENT** | 04 Documentation |
| 15 | Why Documentation Matters | Hairline comparison | |
| 16 | **Documentation Stack** ★ | Blueprint stack | |
| 17 | **Sekarang kita buka IDE.** | **STATEMENT** (gelap) | |
| 18 | **Planner vs Executor** ★ | Split terang/gelap + logo | 05 Agentic Development |
| 19 | Live Demo Start | Terminal (gelap) | |
| 20 | **Human Review Checklist** ★ | Checklist grid | 06 Human Review |
| 21 | Testing & Deployment | Split + logo | 07 Closing |
| 22 | **AI tidak menggantikan Software Engineer** | **STATEMENT** (gelap) | |
| 23 | **Key Takeaways + Q&A** ★ | Hairline list | |

★ = hero slide

**Alur Section 04 sekarang:** slide 14 (statement, sebut empat dokumen tanpa isinya) → 15 (kenapa penting) → 16 (blueprint stack) → **17 (pindah ke IDE)**. Isi PRD, Scope, Design, dan Task ditulis langsung di IDE, tidak ditampilkan di slide. Urutan pengerjaannya ada di speaker notes slide 17.

---

## Aset

### Foto — Unsplash (Unsplash License, bebas pakai tanpa atribusi)

| Slide | File | Sumber |
|---|---|---|
| 1 | `cover-desk.jpg` | unsplash.com/photos/1562813733-b31f71025d54 |
| 4 | `section-code.jpg` | unsplash.com/photos/1625838144804-300f3907c110 |
| 10 | `section-padel.jpg` | unsplash.com/photos/1646649853703-7645147474ba |

Semua diberi overlay ink `#1F1C2B` 70–76% supaya teks terbaca dari belakang ruangan.

### Logo — Simple Icons (CC0)

Dirender jadi PNG 256px dan diwarnai `#847E96` (slide terang) atau `#B5AEC6` (slide gelap):

`v0` · `Firebase` · `GitHub Copilot` · `Cursor` · `Claude` · `Google Gemini` · `OpenCode` · `Vercel` · `Railway` · `Supabase` · `Neon` · `Next.js` · `TypeScript` · `Tailwind CSS` · `WhatsApp` · `Google Maps`

Brand tanpa logo bebas (**Lovable, Bolt, VS Code, Antigravity, Devin, Codex, SWE Agent**) tampil sebagai monogram huruf dalam cincin monoline. Simple Icons menghapus logo VS Code dan OpenAI karena kebijakan merek dagang, jadi keduanya tidak diambil dari sumber lain.

Pemakaian logo di sini adalah nominative fair use untuk konteks edukasi.

---

## Cara mengubah deck

```bash
node C:/Seminar/generator/build.js
```

| File | Isi |
|---|---|
| `generator/lib.js` | Palette, font, type scale |
| `generator/kit.js` | Komponen dasar: frame, card, chip, mark, arrow |
| `generator/kit2.js` | Komponen baru: photoBed, photoCover, statement, logoRow, logoTile, hairRow, bigNum |
| `generator/slidesA.js` | Slide 1–6 |
| `generator/slidesB.js` | Slide 7–11 |
| `generator/slidesC.js` | Slide 12–16 |
| `generator/slidesD.js` | Slide 17–20 |
| `generator/slidesE.js` | Slide 21–23 |
| `generator/gen-logos.js` | Render ulang logo dari Simple Icons |

`node build.js --html` hanya membangun `preview.html` (lebih cepat).

Setelah mengubah teks slide, jalankan juga:

```bash
python C:/Seminar/generator/make-blueprint.py
```

---

## Prinsip desain yang dipakai

Deck ini sengaja **tidak** memakai satu pola layout berulang. Aturan yang dijaga:

- Tidak ada dua slide berurutan dengan tipe layout yang sama
- Tiga statement slide (14, 17, 22) yang lebih dari separuhnya kosong
- Kontras skala ekstrem: 132pt (angka section) sampai 8pt (footer)
- Kartu hanya dipakai di dua slide yang memang butuh wadah (9 Master Workflow, 20 Checklist). Sisanya memakai garis rambut dan whitespace
- Tanpa accent line di bawah judul, tanpa color bar atau stripe di tepi slide maupun tepi kartu
