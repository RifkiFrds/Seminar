const pptxgen = require('pptxgenjs');
const { W, H } = require('./lib.js');
const SHAPE = { roundRect: 'roundRect', rect: 'rect', ellipse: 'ellipse' };

function emit(P, outFile, fonts) {
  const pres = new pptxgen();
  pres.defineLayout({ name: 'SIFEST', width: W, height: H });
  pres.layout = 'SIFEST';
  pres.author = 'HIMASI Budi Luhur University';
  pres.title = 'SI FEST 2026 — Sesi 1: Unlock Your Potential Through Web Technology';
  const fam = (f) => (f === 'head' ? fonts.head : f === 'mono' ? fonts.mono : f === 'serif' ? 'Times New Roman' : fonts.body);
  let lastSection = null;
  for (const s of P) {
    if (s.section && s.section !== lastSection) { pres.addSection({ title: s.section }); lastSection = s.section; }
    const sl = pres.addSlide({ sectionTitle: s.section });
    sl.background = { color: s.bg };
    for (const it of s.items) {
      if (it.t === 'rect') {
        const o = { x: it.x, y: it.y, w: it.w, h: it.h,
          fill: it.fill === 'none' ? { type: 'none' } : (it.op != null ? { color: it.fill, transparency: Math.round((1 - it.op) * 100) } : { color: it.fill }) };
        o.line = it.line ? { color: it.line.color, width: it.line.width, dashType: it.line.dash ? 'dash' : 'solid' } : { type: 'none' };
        if (it.sh) o.shadow = { type: 'outer', color: it.sh === 'dark' ? '000000' : '7A8299', blur: 14, offset: 3, angle: 90, opacity: it.sh === 'dark' ? 0.4 : 0.18 };
        if (it.rot) o.rotate = it.rot;
        if (it.shape === 'roundRect') o.rectRadius = Math.min(it.r, Math.min(it.w, it.h) / 2);
        sl.addShape(SHAPE[it.shape], o);
      } else if (it.t === 'line') {
        sl.addShape('line', { x: it.x, y: it.y, w: it.w || 0, h: it.h || 0,
          line: { color: it.color, width: it.width, dashType: it.dash ? 'dash' : 'solid', endArrowType: it.arrow ? 'triangle' : undefined } });
      } else if (it.t === 'text') {
        const runs = Array.isArray(it.text) ? it.text : [{ text: it.text }];
        const body = runs.map((r, i) => ({ text: r.text, options: {
          fontFace: fam(r.font || it.font), fontSize: r.size ?? it.size, bold: r.bold ?? it.bold ?? false,
          italic: r.italic ?? it.italic ?? false, color: r.color || it.color, charSpacing: r.charSpacing ?? it.charSpacing,
          breakLine: r.breakLine ?? (i < runs.length - 1 ? false : undefined) } }));
        sl.addText(body, { x: it.x, y: it.y, w: it.w, h: it.h, isTextBox: true, margin: 0,
          align: it.align, valign: it.valign, fontFace: fam(it.font), fontSize: it.size, color: it.color,
          lineSpacingMultiple: it.lh ?? 1.15, paraSpaceAfter: it.gap ?? 0, wrap: it.wrap !== false, fit: 'none' });
      }
    }
    if (s.notes) {
      const n = s.notes;
      sl.addNotes(`WAKTU: ${n.waktu}\n\nNASKAH:\n${n.naskah}\n\nAKSI:\n${n.aksi}\n\nJEBAKAN UMUM:\n${n.jebakan}` + (n.solusi ? `\n\nSOLUSI KODE:\n${n.solusi}` : ''));
    }
  }
  return pres.writeFile({ fileName: outFile }).then(() => outFile);
}
module.exports = { emit };
