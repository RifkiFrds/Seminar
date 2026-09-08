// ── Reusable composition kit ───────────────────────────────────────────────
const L = require('./lib.js');
const { C, F, T, W, H, rect, ell, line, text, head, push, card, dcard } = L;

const M = 0.9;                 // page margin
const CW = W - M * 2;          // content width = 11.533

// eyebrow + title block, footer, page furniture
function frame(o) {
  const d = !!o.dark;
  L.bg(d ? C.ink : C.cream);

  if (o.eyebrow) {
    ell({ x: M, y: 0.665, w: 0.075, h: 0.075, fill: d ? C.purpleLt : C.purple });
    text({ x: M + 0.17, y: 0.6, w: 8, h: 0.22, text: o.eyebrow.toUpperCase(),
           font: F.head, bold: true, size: T.micro, charSpacing: 1.9,
           color: d ? C.purpleLt : C.purple, valign: 'middle' });
  }
  if (o.title) {
    head({ x: M, y: o.titleY ?? 0.95, w: o.titleW ?? 9.6, h: o.titleH ?? 0.66,
           text: o.title, size: o.titleSize ?? T.title, lh: 1.1,
           color: d ? C.txtInv : C.txt, valign: 'top' });
  }
  if (o.sub) {
    text({ x: M, y: o.subY ?? 1.68, w: o.subW ?? 7.9, h: 0.62, text: o.sub,
           size: T.lead, lh: 1.42, color: d ? C.txtInv2 : C.txt2 });
  }
  footer(d, o.page);
}

function footer(d, n) {
  text({ x: M, y: 6.98, w: 7, h: 0.2, text: 'VIBECODING  ·  FROM BUSINESS PROBLEM TO PRODUCTION APP',
         font: F.head, size: T.micro - 0.7, charSpacing: 1.2, valign: 'middle',
         color: d ? '5B5470' : '9E958A' });
  if (n) text({ x: W - M - 1, y: 6.98, w: 1, h: 0.2, text: String(n).padStart(2, '0'),
                font: F.head, bold: true, size: T.micro - 0.5, align: 'right', valign: 'middle',
                charSpacing: 1, color: d ? '5B5470' : '9E958A' });
}

// section opener band — big number + section name (used on 1st slide of a section)
function sectionTag(x, y, num, label, d) {
  head({ x, y, w: 0.56, h: 0.46, text: num, size: 30, color: C.purpleLt, lh: 1 });
  line({ x: x + 0.62, y: y + 0.06, h: 0.36, w: 0, color: d ? C.borderDark : C.border, width: 1 });
  text({ x: x + 0.82, y: y + 0.02, w: 4.2, h: 0.42, text: label.toUpperCase(), font: F.head,
         bold: true, size: T.micro + 0.5, charSpacing: 1.7, valign: 'middle',
         color: d ? C.txtInv : C.txt2 });
}

// ── marks: monoline ring + geometric glyph (our icon system) ───────────────
function mark(x, y, d, kind, col, dark) {
  const c = col || C.purple;
  ell({ x, y, w: d, h: d, fill: 'none', line: { color: c, width: 1.25 } });
  const cx = x + d / 2, cy = y + d / 2, s = d * 0.26;
  if (kind === 'dot')  ell({ x: cx - s / 2, y: cy - s / 2, w: s, h: s, fill: c });
  if (kind === 'ring') ell({ x: cx - s / 2, y: cy - s / 2, w: s, h: s, fill: 'none', line: { color: c, width: 1.25 } });
  if (kind === 'sq')   rect({ shape: 'rect', x: cx - s / 2, y: cy - s / 2, w: s, h: s, fill: c });
  if (kind === 'tri')  push({ t: 'tri', dir: 'up', x: cx - s / 2, y: cy - s / 2 * 0.9, w: s, h: s * 0.9, fill: c });
  if (kind === 'bar')  rect({ shape: 'rect', x: cx - d * 0.18, y: cy - 0.022, w: d * 0.36, h: 0.044, fill: c });
  if (kind === 'plus') { rect({ shape: 'rect', x: cx - d * 0.18, y: cy - 0.022, w: d * 0.36, h: 0.044, fill: c });
                         rect({ shape: 'rect', x: cx - 0.022, y: cy - d * 0.18, w: 0.044, h: d * 0.36, fill: c }); }
  if (kind === 'line') rect({ shape: 'rect', x: cx - d * 0.2, y: cy - 0.02, w: d * 0.4, h: 0.04, fill: c, rot: -35 });
}

// numbered step badge
function badge(x, y, d, label, dark, tone) {
  const fill = tone || (dark ? C.inkSoft : C.purpleTint);
  ell({ x, y, w: d, h: d, fill, line: { color: dark ? C.borderDark : C.border, width: 1 } });
  text({ x, y, w: d, h: d, text: label, font: F.head, bold: true, size: T.micro + 0.5,
         align: 'center', valign: 'middle', color: dark ? C.purpleLt : C.purpleDeep, charSpacing: 0.4 });
}

// small pill / chip
function chip(x, y, w, h, label, o = {}) {
  rect({ x, y, w, h, r: h / 2, fill: o.fill || C.purpleTint,
         line: o.line === false ? null : { color: o.border || C.border, width: 1 } });
  text({ x: x + 0.1, y, w: w - 0.2, h, text: label, font: o.font || F.head, bold: o.bold !== false,
         size: o.size || T.micro + 0.6, align: 'center', valign: 'middle',
         charSpacing: o.charSpacing ?? 0.6, color: o.color || C.purpleDeep });
}

// small caps label
function label(x, y, w, txt, col, size) {
  text({ x, y, w, h: 0.2, text: txt.toUpperCase(), font: F.head, bold: true,
         size: size || T.micro, charSpacing: 1.5, valign: 'middle', color: col || C.purple });
}

// bullet row: small dot + text
function bullet(x, y, w, txt, o = {}) {
  ell({ x, y: y + 0.075, w: 0.062, h: 0.062, fill: o.dotColor || C.purple });
  text({ x: x + 0.19, y, w: w - 0.19, h: o.h || 0.22, text: txt, size: o.size || T.body,
         color: o.color || C.txt2, valign: 'middle', lh: 1.3 });
}

// connector: vertical arrow between two stacked blocks
function arrowDown(cx, y, len, col) {
  const c = col || C.purpleLt;
  line({ x: cx, y, w: 0, h: len - 0.09, color: c, width: 1.25 });
  push({ t: 'tri', dir: 'down', x: cx - 0.055, y: y + len - 0.1, w: 0.11, h: 0.1, fill: c });
}
function arrowRight(x, cy, len, col) {
  const c = col || C.purpleLt;
  line({ x, y: cy, w: len - 0.09, h: 0, color: c, width: 1.25 });
  push({ t: 'tri', dir: 'right', x: x + len - 0.1, y: cy - 0.055, w: 0.1, h: 0.11, fill: c });
}

// document mock card (filename chip + faux content rows)
function docCard(x, y, w, h, name, rows, o = {}) {
  const d = !!o.dark;
  rect({ x, y, w, h, fill: d ? C.inkCard : C.white,
         line: { color: d ? C.borderDark : C.border, width: 1 }, sh: !d, r: 0.09 });
  chip(x + 0.28, y + 0.26, Math.max(0.95, name.length * 0.088 + 0.34), 0.28, name,
       { fill: d ? C.inkSoft : C.purpleTint, border: d ? C.borderDark : C.border,
         color: d ? C.purpleLt : C.purpleDeep, size: T.micro, font: F.head });
  let cy = y + 0.75;
  for (const r of rows) {
    if (r.h) { line({ x: x + 0.28, y: cy + 0.02, w: w - 0.56, h: 0, color: d ? C.borderDark : C.border, width: 1 }); cy += 0.2; continue; }
    text({ x: x + 0.28, y: cy, w: w - 0.56, h: 0.2, text: r.k.toUpperCase(), font: F.head, bold: true,
           size: T.micro - 0.3, charSpacing: 1.2, color: d ? C.purpleLt : C.purple, valign: 'middle' });
    cy += 0.235;
    text({ x: x + 0.28, y: cy, w: w - 0.56, h: r.hh || 0.22, text: r.v, size: o.size || T.small,
           color: d ? C.txtInv2 : C.txt2, lh: 1.34, valign: 'top' });
    cy += (r.hh || 0.22) + (o.gap ?? 0.18);
  }
}

module.exports = { M, CW, frame, footer, sectionTag, mark, badge, chip, label, bullet,
                   arrowDown, arrowRight, docCard };
