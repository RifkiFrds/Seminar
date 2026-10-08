const L = require('./lib.js');
const { C, W, rect, rr, ell, line, text, head, mono, slide } = L;
const M = 0.8;
const CHAR = L.MONO_W;                   // mono advance, em
const pitchOf = (size) => size * 1.45 / 72;

// ── page frame ─────────────────────────────────────────────────────────────
// Bersih: hanya nomor halaman di kanan bawah. Tidak ada footer judul, tidak ada label kecil di atas judul.
function page(o) {
  const dark = o.dark;
  const s = slide({ name: o.name, section: o.section, menit: o.menit, jenis: o.jenis, title: o.title || o.name, bg: o.bg || (dark ? C.navy : C.paper) });
  text({ x: W - M - 1, y: 7.0, w: 1, h: 0.22, size: 11, font: 'head', bold: true, align: 'right', valign: 'middle',
         color: dark ? '6F7FA8' : '9AA1B2', text: String(s.n) });
  if (o.title && !o.noTitle) head({ x: M, y: o.titleY || 0.75, w: o.titleW || 11.7, h: o.titleH || 1.0, size: o.titleSize || 40, lh: 1.08,
                      color: dark ? C.inv : C.navy, text: o.title });
  return s;
}

// ── chips & badges ─────────────────────────────────────────────────────────
function chip(x, y, w, h, label, o = {}) {
  rr({ x, y, w, h, r: h / 2, fill: o.fill || C.blueLt });
  text({ x, y, w, h, text: label, font: 'head', bold: true, size: o.size || 12, align: 'center', valign: 'middle',
         color: o.color || C.blue, charSpacing: o.cs == null ? 1.2 : o.cs });
}
function checkpoint(x, y, n, label) {
  const w = 2.45;
  rr({ x, y, w, h: 0.42, r: 0.21, fill: C.yellow });
  text({ x, y, w, h: 0.42, text: 'CHECKPOINT ' + n, font: 'head', bold: true, size: 13, align: 'center', valign: 'middle', color: C.navy, charSpacing: 1.8 });
  if (label) text({ x: x + w + 0.2, y, w: 6, h: 0.42, text: label, font: 'head', bold: true, size: 14, valign: 'middle', color: C.txt2 });
}
function timePill(x, y, label, dark) {
  rr({ x, y, w: 1.9, h: 0.38, r: 0.19, fill: 'none', line: { color: dark ? C.lineDark : C.line, width: 1.25 } });
  text({ x, y, w: 1.9, h: 0.38, text: label, font: 'head', bold: true, size: 12, align: 'center', valign: 'middle', color: dark ? C.inv2 : C.txt2, charSpacing: 0.8 });
}

// ── code ───────────────────────────────────────────────────────────────────
function tokHtml(s) {
  const out = []; let i = 0;
  const add = (t, c) => { if (t) out.push({ text: t, color: c }); };
  while (i < s.length) {
    if (s.startsWith('<!--', i)) { const e = s.indexOf('-->', i); const j = e < 0 ? s.length : e + 3; add(s.slice(i, j), C.sCom); i = j; continue; }
    if (s[i] === '<') {
      let j = i + 1; add('<', C.sPun);
      if (s[j] === '/') { add('/', C.sPun); j++; }
      let k = j; while (k < s.length && /[\w!-]/.test(s[k])) k++;
      add(s.slice(j, k), C.sTag); j = k;
      while (j < s.length && s[j] !== '>') {
        if (/\s/.test(s[j])) { let k2 = j; while (k2 < s.length && /\s/.test(s[k2])) k2++; add(s.slice(j, k2), C.sPun); j = k2; }
        else if (s[j] === '"') { let k2 = s.indexOf('"', j + 1); k2 = k2 < 0 ? s.length : k2 + 1; add(s.slice(j, k2), C.sStr); j = k2; }
        else if (s[j] === '=' || s[j] === '/') { add(s[j], C.sPun); j++; }
        else { let k2 = j; while (k2 < s.length && !/[\s=>"/]/.test(s[k2])) k2++; if (k2 === j) k2++; add(s.slice(j, k2), C.sAttr); j = k2; }
      }
      if (j < s.length) { add('>', C.sPun); j++; }
      i = j; continue;
    }
    let k = i; while (k < s.length && s[k] !== '<') k++;
    add(s.slice(i, k), C.sTxt); i = k;
  }
  return out;
}
function tokCss(s) {
  const t = s.trim(), ind = s.slice(0, s.length - s.trimStart().length), out = [];
  const add = (x, c) => { if (x) out.push({ text: x, color: c }); };
  if (!t) return [{ text: ' ', color: C.sTxt }];
  add(ind, C.sTxt);
  if (t.startsWith('/*')) { add(t, C.sCom); return out; }
  if (t.endsWith('{')) { add(t.slice(0, -1).replace(/\s+$/, ''), C.sAttr); add(' ', C.sTxt); add('{', C.sPun); return out; }
  if (t === '}') { add('}', C.sPun); return out; }
  const m = t.match(/^([\w-]+)(\s*:\s*)(.*?)(;?)$/);
  if (m) { add(m[1], C.sTag); add(m[2], C.sPun); add(m[3], C.sStr); add(m[4], C.sPun); return out; }
  add(t, C.sTxt); return out;
}

function codeBox(x, y, w, lines, o = {}) {
  const size = o.size || 20, pitch = pitchOf(size), padT = 0.12, hd = o.file ? 0.46 : 0.12;
  const h = hd + padT + lines.length * pitch + 0.14;
  rr({ x, y, w, h, r: 0.14, fill: C.code, sh: 'dark' });
  if (o.file) {
    [C.red, C.yellow, C.green].forEach((c, i) => ell({ x: x + 0.22 + i * 0.2, y: y + 0.17, w: 0.12, h: 0.12, fill: c }));
    text({ x: x + 1, y: y + 0.08, w: w - 1.3, h: 0.3, text: o.file, font: 'mono', size: 12, color: C.sCom, align: 'right', valign: 'middle', wrap: false });
  }
  const y0 = y + hd + padT;
  (o.hl || []).forEach((i) => rect({ x: x + 0.08, y: y0 + i * pitch, w: w - 0.16, h: pitch, fill: C.yellow, op: 0.16 }));
  lines.forEach((ln, i) => {
    const ly = y0 + i * pitch;
    if (o.nums !== false) mono({ x: x + 0.18, y: ly, w: 0.4, h: pitch, size: size - 6, color: C.sCom, align: 'right', valign: 'middle', text: String(i + 1) });
    const runs = o.lang === 'css' ? tokCss(ln) : tokHtml(ln);
    mono({ x: x + (o.nums === false ? 0.3 : 0.75), y: ly, w: w - 0.8, h: pitch, size, valign: 'middle', text: runs.length ? runs : [{ text: ' ', color: C.sTxt }], color: C.sTxt });
  });
  return { x, y, w, h, pitch, bottom: y + h };
}

// ── mock browser ───────────────────────────────────────────────────────────
function browser(x, y, w, h, o = {}) {
  rr({ x, y, w, h, r: 0.16, fill: o.fill || C.white, line: { color: o.dark ? C.lineDark : 'D5DAE6', width: 1.25 }, sh: o.dark ? 'dark' : 'light' });
  const bar = 0.42;
  rr({ x: x + 0.02, y: y + 0.02, w: w - 0.04, h: bar, r: 0.14, fill: 'EEF1F7' });
  rect({ x: x + 0.02, y: y + 0.22, w: w - 0.04, h: bar - 0.2, fill: 'EEF1F7' });
  [C.red, C.yellow, C.green].forEach((c, i) => ell({ x: x + 0.2 + i * 0.19, y: y + 0.15, w: 0.11, h: 0.11, fill: c }));
  rr({ x: x + 0.95, y: y + 0.09, w: w - 1.2, h: 0.26, r: 0.13, fill: C.white });
  text({ x: x + 1.1, y: y + 0.09, w: w - 1.5, h: 0.26, text: o.url || 'localhost:5500', font: 'body', size: 11, color: C.txt2, valign: 'middle', wrap: false });
  return { x: x + 0.02, y: y + bar + 0.02, w: w - 0.04, h: h - bar - 0.06 };
}

// plain (unstyled) page — the default browser look. `parts` = how many blocks to show.
function plainPage(b, parts, k) {
  parts = parts || 99; k = k || 1;
  const f = (pt) => pt * k, X = b.x + 0.25 * k, Wd = b.w - 0.5 * k;
  let y = b.y + 0.18 * k;
  const blocks = [
    () => { text({ x: X, y, w: Wd, h: 0.5 * k, text: 'Alya Putri', font: 'serif', bold: true, size: f(26), color: '000000' }); y += 0.5 * k; },
    () => { text({ x: X, y, w: Wd, h: 0.3 * k, text: 'Siswa SMA · Calon Web Developer', font: 'serif', size: f(14), color: '000000' }); y += 0.34 * k; },
    () => { text({ x: X, y, w: Wd, h: 0.3 * k, text: [{ text: 'Tentang', color: '0000EE' }, { text: '   ' }, { text: 'Skill', color: '0000EE' }, { text: '   ' }, { text: 'Project', color: '0000EE' }, { text: '   ' }, { text: 'Kontak', color: '0000EE' }], font: 'serif', size: f(14), color: '0000EE' }); y += 0.42 * k; },
    () => { text({ x: X, y, w: Wd, h: 0.4 * k, text: 'Tentang Saya', font: 'serif', bold: true, size: f(20), color: '000000' }); y += 0.42 * k; },
    () => { text({ x: X, y, w: Wd, h: 0.6 * k, text: 'Aku suka desain dan ingin belajar membuat website.', font: 'serif', size: f(14), color: '000000' }); y += 0.62 * k; },
    () => { text({ x: X, y, w: Wd, h: 0.4 * k, text: 'Skill', font: 'serif', bold: true, size: f(20), color: '000000' }); y += 0.42 * k; },
    () => { text({ x: X, y, w: Wd, h: 0.75 * k, text: '•  HTML\n•  CSS\n•  Git', font: 'serif', size: f(14), color: '000000', lh: 1.1 }); y += 0.8 * k; },
  ];
  blocks.slice(0, parts).forEach((fn) => fn());
}

// styled page — the "after"
function styledPage(b, k) {
  k = k || 1;
  const hh = 1.25 * k;
  rect({ x: b.x, y: b.y, w: b.w, h: b.h, fill: C.paper });
  rect({ x: b.x, y: b.y, w: b.w, h: hh, fill: C.navy });
  text({ x: b.x + 0.3 * k, y: b.y + 0.2 * k, w: b.w - 0.6 * k, h: 0.45 * k, text: 'Alya Putri', font: 'head', bold: true, size: 24 * k, color: C.white });
  text({ x: b.x + 0.3 * k, y: b.y + 0.62 * k, w: b.w - 0.6 * k, h: 0.25 * k, text: 'Siswa SMA · Calon Web Developer', size: 12 * k, color: C.yellow });
  ['Tentang', 'Skill', 'Project', 'Kontak'].forEach((t, i) => {
    const px = b.x + 0.3 * k + i * 0.95 * k;
    rr({ x: px, y: b.y + 0.93 * k, w: 0.85 * k, h: 0.24 * k, r: 0.12 * k, fill: C.navy2 });
    text({ x: px, y: b.y + 0.93 * k, w: 0.85 * k, h: 0.24 * k, text: t, size: 10 * k, color: C.inv, align: 'center', valign: 'middle', font: 'head', bold: true });
  });
  const cw = (b.w - 0.9 * k) / 2;
  [0, 1].forEach((i) => {
    const cx = b.x + 0.3 * k + i * (cw + 0.3 * k), cy = b.y + hh + 0.3 * k;
    rr({ x: cx, y: cy, w: cw, h: 1.1 * k, r: 0.1 * k, fill: C.white, line: { color: C.line, width: 1 }, sh: 'light' });
    text({ x: cx + 0.15 * k, y: cy + 0.14 * k, w: cw - 0.3 * k, h: 0.25 * k, text: i ? 'Cuaca Hari Ini' : 'Profil Pribadi', font: 'head', bold: true, size: 12 * k, color: C.navy });
    rect({ x: cx + 0.15 * k, y: cy + 0.5 * k, w: cw - 0.3 * k, h: 0.07 * k, fill: C.line });
    rect({ x: cx + 0.15 * k, y: cy + 0.68 * k, w: (cw - 0.3 * k) * 0.65, h: 0.07 * k, fill: C.line });
  });
  const sy = b.y + hh + 1.7 * k;
  ['HTML', 'CSS', 'Git'].forEach((t, i) => {
    const px = b.x + 0.3 * k + i * 0.85 * k;
    rr({ x: px, y: sy, w: 0.75 * k, h: 0.26 * k, r: 0.13 * k, fill: C.blueLt });
    text({ x: px, y: sy, w: 0.75 * k, h: 0.26 * k, text: t, size: 10 * k, bold: true, font: 'head', color: C.blue, align: 'center', valign: 'middle' });
  });
}

function tree(x, y, rows, o) {
  const sz = (o && o.size) || 18, p = pitchOf(sz) * 0.98;
  rows.forEach((r, i) => {
    mono({ x: x + (r.d || 0) * 0.35, y: y + i * p, w: 5, h: p, size: sz, valign: 'middle',
           color: r.hi ? C.yellow : (r.dir ? C.sTag : C.inv), text: (r.dir ? '▸ ' : '  ') + r.n });
  });
}
function checkbox(x, y, d, color) { rr({ x, y, w: d, h: d, r: d * 0.22, fill: 'none', line: { color: color || C.blue, width: 1.75 } }); }
function arrow(x, y, w, h, color) { line({ x, y, w, h, color: color || C.blue, width: 2, arrow: true }); }

module.exports = { pic: L.pic, M, page, chip, checkpoint, timePill, codeBox, browser, plainPage, styledPage, tree, checkbox, arrow, pitchOf, CHAR };
