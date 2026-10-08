const fs = require('fs');
exports.write = (P, file) => {
  const tot = P.reduce((a, s) => a + s.menit, 0);
  const prak = P.filter((s) => s.jenis === 'K' || s.jenis === 'P').reduce((a, s) => a + s.menit, 0);
  const rows = P.map((s) => `| ${s.n} | ${s.title.replace(/\|/g, '/')} | ${s.section} | ${s.menit} | ${{ T: 'Teori', K: 'Ketik bareng', P: 'Praktik mandiri' }[s.jenis]} |`).join('\n');
  fs.writeFileSync(file, `# PRESENTATION BLUEPRINT — SI FEST 2026 · Sesi 1

Total ${P.length} slide · ${tot} menit slide + 15 menit istirahat = ${tot + 15} menit (07.30 – 11.20).
Praktik (ketik bareng + mandiri): **${prak} menit = ${(prak / (tot + 15) * 100).toFixed(0)}%** dari total waktu sesi, termasuk istirahat.

| # | Slide | Bagian | Menit | Jenis |
|---|---|---|---|---|
${rows}

Istirahat 15 menit: 09.20 – 09.35 (setelah slide 17).
`);
};
