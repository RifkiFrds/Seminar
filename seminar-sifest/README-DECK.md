# SI FEST 2026 · Sesi 1 — Deck Workshop Web

**Unlock Your Potential Through Web Technology** · 33 slide · 16:9 · 230 menit (07.30 – 11.20)

## File

| File | Isi |
|---|---|
| `SI-Fest-2026-Sesi1.pptx` | Deck utama. Font Plus Jakarta Sans + JetBrains Mono |
| `SI-Fest-2026-Sesi1-SafeFonts.pptx` | Identik, font Calibri + Consolas. **Cadangan untuk PC Lab** |
| `PRESENTATION-BLUEPRINT.md` | Tabel 33 slide: judul, bagian, durasi, jenis (teori / ketik bareng / praktik) |
| `starter-kit/` | Solusi akhir `index.html`, `style.css`, `img/foto.jpg` untuk acuan pemateri |
| `generator/` | Source code (Node + pptxgenjs). `node generator/build.js` membangun ulang |
| `PROMPT-EXECUTOR-SESI1.md` | Prompt yang dipakai untuk membuat deck ini |

Speaker notes ada di setiap slide (View → Notes Page / Presenter View): waktu, naskah, aksi, jebakan umum. Slide checkpoint juga memuat **solusi kode**.

## Sebelum hari-H

1. **Pasang font** (jika memakai deck utama): [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) dan [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono). Jika tidak bisa, pakai versi SafeFonts.
2. **Isi placeholder:**
   - Slide 1: `[Nama Pemateri]`, `[Role · Organisasi]`, kotak **LOGO HIMASI** dan **LOGO BLU** (ganti dengan file logo resmi)
   - Slide 2: nama, role, foto (rasio 3:4), cerita singkat
   - Slide 33: kotak logo, `[@akun_pemateri]`, `[email pemateri]`
3. **Uji di PC Lab (sehari sebelumnya):** VS Code + ekstensi Live Server terpasang, Emmet berfungsi (`!` + Tab), internet bisa membuka `netlify.com/drop` dan `fonts.google.com`.
4. **Siapkan foto contoh** di setiap PC (folder `img/`) agar tidak ada siswa yang menunggu.
5. **Verifikasi alur Netlify Drop.** Situs yang tidak diklaim bersifat sementara, jadi siapkan opsi cadangan (GitHub Pages atau publish di rumah).

## Alokasi waktu

| Waktu | Bagian | Slide |
|---|---|---|
| 07.30 – 07.50 | Pembukaan | 1–5 |
| 07.50 – 08.20 | Dasar Web + Checkpoint 0 | 6–10 |
| 08.20 – 09.20 | HTML + Checkpoint 1 | 11–17 |
| 09.20 – 09.35 | Istirahat | |
| 09.35 – 10.35 | CSS + Checkpoint 2 | 18–26 |
| 10.35 – 11.20 | Debugging, AI tutor, sprint, publish, showcase, penutup | 27–33 |

## Cara mengubah deck

| File | Isi |
|---|---|
| `generator/lib.js` | Palet, font, primitif |
| `generator/kit.js` | Komponen: frame, code box, mock browser, checkpoint |
| `generator/slides1.js` · `slides2.js` · `slides3.js` | Slide 1–17 · 18–26 · 27–33 |
| `generator/emit-pptx.js` · `emit-html.js` | Pembuat PPTX dan preview HTML |

```bash
cd generator && npm install && node build.js
```

`node build.js --html` hanya membangun `preview.html`. `python shot.py preview.html OUTDIR 1,2,3` merender slide ke PNG lewat Edge headless.
