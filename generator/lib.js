// ── Vibecoding Deck — shared primitive layer ───────────────────────────────
// Every slide is a flat list of primitives. Two emitters consume the same
// list: pptxgenjs (the deliverable) and HTML (for pixel-faithful visual QA).

const W = 13.333, H = 7.5;               // LAYOUT_WIDE canvas, inches

const C = {
  cream:      'F8F4EF',
  white:      'FFFFFF',
  ink:        '1F1C2B',   // deep plum-black — dark slides
  inkSoft:    '2B2738',
  inkCard:    '312C41',
  purple:     '847E96',
  purpleDeep: '635C77',
  purpleLt:   'B5AEC6',
  purpleTint: 'EFEBF3',
  border:     'DDD7CF',
  borderDark: '463F59',
  txt:        '1A1A1A',
  txt2:       '5F5F5F',
  txtInv:     'F8F4EF',
  txtInv2:    'A9A2BA',
  clay:       'A9634F',   // anti-pattern / ✗ only
  sage:       '5F7A63',   // ✓ only
};

const F = { head: 'Montserrat', body: 'ABeeZee', mono: 'Courier New' };

const T = {
  mega: 76, hero: 52, statement: 40, title: 34, titleSm: 27, lead: 16.5,
  cardTitle: 14.5, body: 12, small: 10.5, cap: 9.5, micro: 8.5, num: 9,
};

const shadow = (dark) => dark
  ? { type: 'outer', color: '000000', blur: 16, offset: 4, angle: 90, opacity: 0.34 }
  : { type: 'outer', color: '9E9686', blur: 13, offset: 3, angle: 90, opacity: 0.15 };

// ── slide registry ────────────────────────────────────────────────────────
const P = [];
let CUR = null;
function slide(meta) { CUR = { ...meta, items: [] }; P.push(CUR); return CUR; }
function push(o) { CUR.items.push(o); return o; }
function notes(s) { CUR.notes = s; }

const bg   = (fill) => push({ t: 'bg', fill });
const img  = (o) => push({ t: 'img', ...o });
const rect = (o) => push({ t: 'rect', shape: 'roundRect', r: 0.05, ...o });
const ell  = (o) => push({ t: 'rect', shape: 'ellipse', ...o });
const line = (o) => push({ t: 'line', color: C.border, width: 1, ...o });
const text = (o) => push({ t: 'text', font: F.body, size: T.body, color: C.txt,
                           align: 'left', valign: 'top', ...o });
const head = (o) => text({ font: F.head, bold: true, color: C.txt, ...o });

// white card on cream
const card = (o) => rect({ fill: C.white, line: { color: C.border, width: 1 }, sh: true, ...o });
// card on a dark slide
const dcard = (o) => rect({ fill: C.inkCard, line: { color: C.borderDark, width: 1 }, ...o });

module.exports = { W, H, C, F, T, shadow, P, slide, notes, push, bg, img, rect, ell, line,
                   text, head, card, dcard };
