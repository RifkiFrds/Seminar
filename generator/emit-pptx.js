const pptxgen = require('./node_modules/pptxgenjs');
const { W, H, C, F, shadow } = require('./lib.js');

const SHAPE = { roundRect: 'roundRect', rect: 'rect', ellipse: 'ellipse' };

function emit(P, outFile, fonts) {
  const pres = new pptxgen();
  pres.defineLayout({ name: 'VIBE', width: W, height: H });
  pres.layout = 'VIBE';
  pres.author = 'HIMTI UMT — Seminar Vibecoding';
  pres.title  = 'Vibecoding — From Business Problem to Production App';

  const fam = (f) => (f === F.head ? fonts.head : f === F.mono ? F.mono : fonts.body);

  for (const s of P) {
    const sl = pres.addSlide();
    sl.background = { color: s.dark ? C.ink : C.cream };

    for (const it of s.items) {
      if (it.t === 'bg') { sl.background = { color: it.fill }; continue; }

      if (it.t === 'img') {
        sl.addImage({ path: it.path, x: it.x, y: it.y, w: it.w, h: it.h,
                      sizing: it.cover ? { type: 'cover', w: it.w, h: it.h } : undefined });
        continue;
      }

      if (it.t === 'rect') {
        const o = { x: it.x, y: it.y, w: it.w, h: it.h,
                    fill: it.op != null ? { color: it.fill, transparency: Math.round((1 - it.op) * 100) }
                                        : { color: it.fill } };
        if (it.fill === 'none') o.fill = { type: 'none' };
        if (it.line) o.line = { color: it.line.color, width: it.line.width, dashType: it.line.dash || 'solid' };
        else o.line = { type: 'none' };
        if (it.sh) o.shadow = shadow(!!s.dark);
        if (it.rot) o.rotate = it.rot;
        if (it.shape === 'roundRect') o.rectRadius = it.r ?? 0.05;
        sl.addShape(SHAPE[it.shape] || 'rect', o);
        continue;
      }

      if (it.t === 'tri') {
        const rot = { up: 0, right: 90, down: 180, left: 270 }[it.dir || 'down'];
        sl.addShape('triangle', {
          x: it.x, y: it.y, w: it.w, h: it.h, rotate: rot,
          fill: { color: it.fill }, line: { type: 'none' },
        });
        continue;
      }

      if (it.t === 'line') {
        sl.addShape('line', {
          x: it.x, y: it.y, w: it.w, h: it.h,
          line: { color: it.color, width: it.width, dashType: it.dash || 'solid' },
        });
        continue;
      }

      if (it.t === 'text') {
        const runs = Array.isArray(it.text) ? it.text : [{ text: it.text }];
        const body = runs.map((r, i) => ({
          text: r.text,
          options: {
            fontFace: fam(r.font || it.font),
            fontSize: r.size ?? it.size,
            bold: r.bold ?? it.bold ?? false,
            italic: r.italic ?? it.italic ?? false,
            color: r.color || it.color,
            charSpacing: r.charSpacing ?? it.charSpacing,
            breakLine: r.breakLine ?? (i < runs.length - 1 ? false : undefined),
            bullet: r.bullet ?? it.bullet,
          },
        }));
        sl.addText(body, {
          x: it.x, y: it.y, w: it.w, h: it.h,
          isTextBox: true, margin: 0,
          align: it.align, valign: it.valign,
          fontFace: fam(it.font), fontSize: it.size, bold: !!it.bold,
          color: it.color, charSpacing: it.charSpacing,
          lineSpacingMultiple: it.lh ?? 1.22,
          paraSpaceAfter: it.gap ?? 0,
          wrap: it.wrap !== false,
          fit: 'none',
        });
        continue;
      }
    }

    if (s.notes) sl.addNotes(s.notes);
  }

  return pres.writeFile({ fileName: outFile }).then(() => outFile);
}

module.exports = { emit };
