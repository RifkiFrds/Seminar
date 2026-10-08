// SI FEST 2026 · Sesi 1 — primitive layer. Slides are flat lists of primitives;
// two emitters consume them: pptxgenjs (deliverable) and HTML (visual QA).
const W = 13.333, H = 7.5;

const C = {
  navy: '0E1B3D', navy2: '17285A', navy3: '0A1330',
  blue: '1F4FD8', blueMid: '3B6AEA', blueLt: 'DCE6FF', blueTint: 'EEF3FF',
  red: 'E63946', yellow: 'FFC83D', yellowTint: 'FFF3CF',
  paper: 'FAF8F4', white: 'FFFFFF',
  txt: '0E1B3D', txt2: '5B6478', line: 'E3DFD6', lineDark: '2A3C6E',
  inv: 'F4F6FB', inv2: 'A9B6D6', green: '1E9E68', greenLt: '8FE3B0',
  // syntax colours
  sTag: '8DB4FF', sAttr: 'FFD36E', sStr: '8FE3B0', sPun: 'C9D3EE', sTxt: 'F4F6FB', sCom: '7886A8',
  code: '0B1530',
};

const SAFE = process.env.VARIANT === 'safe';
const FONTS = SAFE
  ? { head: 'Calibri', body: 'Calibri', mono: 'Consolas' }
  : { head: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans', mono: 'JetBrains Mono' };
const MONO_W = SAFE ? 0.55 : 0.6;

const P = []; let CUR = null;
function slide(meta) { CUR = { ...meta, items: [], n: P.length + 1 }; P.push(CUR); return CUR; }
const push = (o) => { CUR.items.push(o); return o; };
const notes = (o) => { CUR.notes = o; };

const fs = require('fs');
const path = require('path');
const ILL = path.join(__dirname, 'assets', 'ill');
// illustration helper: keeps aspect ratio. pass w OR h (plus x,y). returns placed box.
function pic(name, o) {
  const file = path.join(ILL, name + '.png');
  const b = fs.readFileSync(file);
  const ar = b.readUInt32BE(16) / b.readUInt32BE(20);
  const w = o.w || o.h * ar, h = o.h || o.w / ar;
  push({ t: 'img', path: file, x: o.x, y: o.y, w, h });
  return { x: o.x, y: o.y, w, h };
}

const rect = (o) => push({ t: 'rect', shape: 'rect', ...o });
const rr = (o) => push({ t: 'rect', shape: 'roundRect', r: 0.12, ...o });
const ell = (o) => push({ t: 'rect', shape: 'ellipse', ...o });
const line = (o) => push({ t: 'line', color: C.line, width: 1, ...o });
const text = (o) => push({ t: 'text', font: 'body', size: 16, color: C.txt, align: 'left', valign: 'top', ...o });
const head = (o) => text({ font: 'head', bold: true, ...o });
const mono = (o) => text({ font: 'mono', wrap: false, ...o });

module.exports = { pic, W, H, C, P, slide, push, notes, rect, rr, ell, line, text, head, mono, FONTS, MONO_W, SAFE };
