// ── Extra composition types: photo covers, statement slides, logo rows ─────
const path = require('path');
const L = require('./lib.js');
const K = require('./kit.js');
const { C, F, T, W, H, rect, ell, line, text, head, img, push } = L;
const { M, CW, footer } = K;

const ASSET = (...p) => path.join(__dirname, 'assets', ...p);
const LOGO = (slug, tone) => ASSET('logos', slug + '-' + (tone || 'light') + '.png');
const PHOTO = (name) => ASSET('photos', name);

// full-bleed photo + ink overlay. Returns nothing; caller adds the type.
function photoBed(name, opacity) {
  img({ path: PHOTO(name), x: 0, y: 0, w: W, h: H, cover: true });
  rect({ shape: 'rect', x: 0, y: 0, w: W, h: H, fill: C.ink, op: opacity ?? 0.66 });
}

// section cover: photo + oversized number + section name
function photoCover(o) {
  L.bg(C.ink);
  photoBed(o.photo, o.op);
  text({ x: M, y: 1.05, w: 6, h: 0.24, text: o.eyebrow.toUpperCase(), font: F.head, bold: true,
         size: T.micro + 0.5, charSpacing: 2.2, color: C.purpleLt, valign: 'middle' });
  head({ x: M, y: 1.9, w: 3.0, h: 1.9, text: o.num, size: 132, color: 'FFFFFF', lh: 1 });
  head({ x: M, y: 4.1, w: 9.6, h: o.titleH ?? 0.9, text: o.title, size: o.titleSize ?? 46,
         color: C.txtInv, lh: 1.1 });
  if (o.sub) text({ x: M, y: o.subY ?? 5.25, w: o.subW ?? 7.2, h: 0.8, text: o.sub,
                    size: T.lead, color: 'CFC9DC', lh: 1.5 });
  footer(true, o.page);
}

// statement slide: one sentence owns the screen
function statement(o) {
  const d = !!o.dark;
  L.bg(d ? C.ink : C.cream);
  if (o.photo) photoBed(o.photo, o.op);
  if (o.eyebrow) {
    ell({ x: M, y: 1.045, w: 0.075, h: 0.075, fill: d ? C.purpleLt : C.purple });
    text({ x: M + 0.17, y: 0.98, w: 8, h: 0.22, text: o.eyebrow.toUpperCase(), font: F.head,
           bold: true, size: T.micro, charSpacing: 1.9,
           color: d ? C.purpleLt : C.purple, valign: 'middle' });
  }
  head({ x: M, y: o.y ?? 2.35, w: o.w ?? 11.0, h: o.h ?? 2.4, text: o.text,
         size: o.size ?? T.statement, color: d ? C.txtInv : C.txt, lh: 1.16, valign: 'top' });
  if (o.sub) text({ x: M, y: o.subY ?? 5.15, w: o.subW ?? 8.4, h: 0.9, text: o.sub,
                    size: o.subSize ?? T.lead, color: d ? 'A9A2BA' : C.txt2, lh: 1.55 });
  footer(d, o.page);
}

// a row of brand marks; item = { logo, scale } or { label }
function logoRow(x, y, size, gap, items, tone) {
  const dark = tone === 'dark';
  let cx = x;
  for (const it of items) {
    if (it.logo) {
      const s = size * (it.scale ?? 1);
      img({ path: LOGO(it.logo, tone), x: cx, y: y + (size - s) / 2, w: s, h: s });
      cx += s + gap;
    } else {
      const w = it.label.length * 0.077 + 0.34;
      text({ x: cx, y, w, h: size, text: it.label, font: F.head, bold: true,
             size: T.micro, charSpacing: 0.5, valign: 'middle',
             color: dark ? C.purpleLt : C.purple });
      cx += w + gap;
    }
  }
  return cx - gap;
}

// brand mark with its name underneath — for wider, labelled rows
function logoTile(x, y, size, slug, label, tone) {
  const dark = tone === 'dark';
  if (slug) img({ path: LOGO(slug, tone), x, y, w: size, h: size });
  else {
    ell({ x, y, w: size, h: size, fill: 'none',
          line: { color: dark ? '4E466B' : C.border, width: 1.25 } });
    text({ x, y, w: size, h: size, text: label.slice(0, 1), font: F.head, bold: true,
           size: T.cardTitle, align: 'center', valign: 'middle',
           color: dark ? C.purpleLt : C.purple });
  }
  text({ x: x - 0.35, y: y + size + 0.12, w: size + 0.7, h: 0.2, text: label, size: T.micro,
         align: 'center', valign: 'middle', color: dark ? 'A9A2BA' : C.txt2 });
}

// hairline list row — replaces card grids
function hairRow(x, y, w, title, desc, o = {}) {
  const d = !!o.dark;
  line({ x, y, w, h: 0, color: d ? C.borderDark : C.border, width: 1 });
  if (o.num) text({ x, y: y + 0.16, w: 0.5, h: 0.24, text: o.num, font: F.head, bold: true,
                    size: T.micro, charSpacing: 1.2, valign: 'middle',
                    color: d ? '6E6688' : C.purpleLt });
  const tx = x + (o.num ? 0.62 : 0);
  head({ x: tx, y: y + 0.16, w: (o.tw ?? w * 0.42) - 0.1, h: 0.26, text: title,
         size: o.size ?? T.cardTitle, color: d ? C.txtInv : C.txt, valign: 'middle' });
  if (desc) text({ x: tx + (o.tw ?? w * 0.42), y: y + 0.14, w: w - (o.tw ?? w * 0.42) - (o.num ? 0.62 : 0),
                   h: o.dh ?? 0.3, text: desc, size: T.small, color: d ? C.txtInv2 : C.txt2, lh: 1.35 });
}

// oversized figure
function bigNum(x, y, num, label, o = {}) {
  head({ x, y, w: o.w ?? 6.4, h: o.h ?? 1.9, text: num, size: o.size ?? 132,
         color: o.color || C.txt, lh: 1 });
  text({ x, y: y + (o.h ?? 1.9) + 0.14, w: o.lw ?? 5.4, h: 0.5, text: label, font: F.head,
         bold: true, size: T.micro + 0.5, charSpacing: 1.9, color: C.purple, lh: 1.5 });
}

module.exports = { ASSET, LOGO, PHOTO, photoBed, photoCover, statement,
                   logoRow, logoTile, hairRow, bigNum };
