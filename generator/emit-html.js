const fs = require('fs');
const { W, H, C, F } = require('./lib.js');

const PX = 96;                       // 1 inch = 96 css px
const i2p = (v) => (v * PX).toFixed(2);
const pt2p = (v) => (v * PX / 72).toFixed(2);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function emit(P, outFile) {
  const pages = P.map((s, idx) => {
    const bgc = s.dark ? C.ink : C.cream;
    let html = `<div class="slide" style="background:#${bgc}">`;
    for (const it of s.items) {
      if (it.t === 'bg') { html += `<div class="fill" style="background:#${it.fill}"></div>`; continue; }

      if (it.t === 'img') {
        { const fsx = require("fs");
          const lite = String(it.path).split("photos").join("preview");
          const src = fsx.existsSync(lite) ? lite : it.path;
          const b64 = fsx.readFileSync(src).toString("base64");
          const mt = /\.jpe?g$/i.test(src) ? "image/jpeg" : "image/png";
          html += `<img src="data:${mt};base64,${b64}" style="position:absolute;left:${i2p(it.x)}px;top:${i2p(it.y)}px;width:${i2p(it.w)}px;height:${i2p(it.h)}px;object-fit:cover">`; }
        continue;
      }

      if (it.t === 'rect') {
        const br = it.shape === 'ellipse' ? '50%'
                 : it.shape === 'roundRect' ? i2p(it.r ?? 0.05) + 'px' : '0';
        const bd = it.line ? `border:${it.line.width}px ${it.line.dash === 'dash' ? 'dashed' : 'solid'} #${it.line.color};` : '';
        const sh = it.sh ? (s.dark ? 'box-shadow:0 4px 16px rgba(0,0,0,.34);' : 'box-shadow:0 3px 13px rgba(158,150,134,.30);') : '';
        const bgf = it.fill === 'none' ? 'transparent'
                  : it.op != null ? 'rgba(' + parseInt(it.fill.slice(0,2),16) + ',' + parseInt(it.fill.slice(2,4),16) + ',' + parseInt(it.fill.slice(4,6),16) + ',' + it.op + ')'
                  : '#' + it.fill;
        const rot = it.rot ? `transform:rotate(${it.rot}deg);` : '';
        html += `<div style="position:absolute;left:${i2p(it.x)}px;top:${i2p(it.y)}px;width:${i2p(it.w)}px;height:${i2p(it.h)}px;background:${bgf};border-radius:${br};box-sizing:border-box;${bd}${sh}${rot}"></div>`;
        continue;
      }

      if (it.t === 'tri') {
        const cp = { down: 'polygon(0 0,100% 0,50% 100%)', up: 'polygon(50% 0,100% 100%,0 100%)',
                     right: 'polygon(0 0,100% 50%,0 100%)', left: 'polygon(100% 0,100% 100%,0 50%)' }[it.dir || 'down'];
        html += `<div style="position:absolute;left:${i2p(it.x)}px;top:${i2p(it.y)}px;width:${i2p(it.w)}px;height:${i2p(it.h)}px;background:#${it.fill};clip-path:${cp}"></div>`;
        continue;
      }

      if (it.t === 'line') {
        const horiz = Math.abs(it.w) >= Math.abs(it.h);
        const st = it.dash === 'dash' ? 'dashed' : 'solid';
        html += horiz
          ? `<div style="position:absolute;left:${i2p(it.x)}px;top:${i2p(it.y)}px;width:${i2p(it.w)}px;border-top:${it.width}px ${st} #${it.color}"></div>`
          : `<div style="position:absolute;left:${i2p(it.x)}px;top:${i2p(it.y)}px;height:${i2p(it.h)}px;border-left:${it.width}px ${st} #${it.color}"></div>`;
        continue;
      }

      if (it.t === 'text') {
        const runs = Array.isArray(it.text) ? it.text : [{ text: it.text }];
        const inner = runs.map((r) => {
          const st = [
            `font-family:'${(r.font || it.font) === F.head ? F.head : (r.font || it.font) === F.mono ? F.mono : F.body}',sans-serif`,
            `font-size:${pt2p(r.size ?? it.size)}px`,
            `font-weight:${(r.bold ?? it.bold) ? 700 : 400}`,
            (r.italic ?? it.italic) ? 'font-style:italic' : '',
            `color:#${r.color || it.color}`,
            (r.charSpacing ?? it.charSpacing) ? `letter-spacing:${pt2p(r.charSpacing ?? it.charSpacing)}px` : '',
          ].filter(Boolean).join(';');
          const br = r.breakLine ? '<br>' : '';
          return `<span style="${st}">${esc(r.text).replace(/\n/g, '<br>')}</span>${br}`;
        }).join('');
        const va = { top: 'flex-start', middle: 'center', bottom: 'flex-end' }[it.valign || 'top'];
        html += `<div class="tb" style="left:${i2p(it.x)}px;top:${i2p(it.y)}px;width:${i2p(it.w)}px;height:${i2p(it.h)}px;justify-content:${va};text-align:${it.align};line-height:${it.lh ?? 1.22};white-space:${it.wrap === false ? 'nowrap' : 'normal'}"><div style="width:100%">${inner}</div></div>`;
        continue;
      }
    }
    html += `<div class="pgn">${idx + 1}</div></div>`;
    return `<section class="wrap"><div class="lbl">SLIDE ${idx + 1} — ${esc(s.name || '')}</div>${html}</section>`;
  }).join('\n');

  const doc = `<!doctype html><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=ABeeZee:ital@0;1&display=swap" rel="stylesheet">
<style>
 body{margin:0;background:#3b3b40;font-family:system-ui;padding:24px}
 .wrap{margin:0 auto 34px;width:${W * PX}px}
 .lbl{color:#c9c6d6;font:600 12px/1.6 system-ui;letter-spacing:.09em;margin-bottom:6px}
 .slide{position:relative;width:${W * PX}px;height:${H * PX}px;overflow:hidden}
 .fill{position:absolute;inset:0}
 .tb{position:absolute;display:flex;flex-direction:column;box-sizing:border-box}
 .pgn{position:absolute;right:6px;bottom:4px;font:10px system-ui;color:#8a8a8a;opacity:.5}
</style>
${pages}`;
  fs.writeFileSync(outFile, doc, 'utf8');
  return outFile;
}
module.exports = { emit };
