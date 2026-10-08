const fs = require('fs');
const { W, H } = require('./lib.js');
const PX = 96, i2p = (v) => (v * PX).toFixed(2), pt2p = (v) => (v * PX / 72).toFixed(2);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rgba = (h, o) => `rgba(${parseInt(h.slice(0, 2), 16)},${parseInt(h.slice(2, 4), 16)},${parseInt(h.slice(4, 6), 16)},${o})`;

function emit(P, outFile, fonts) {
  const fam = (f) => (f === 'head' ? `'${fonts.head}'` : f === 'mono' ? `'${fonts.mono}',monospace` : f === 'serif' ? "'Times New Roman',serif" : `'${fonts.body}'`);
  const pages = P.map((s) => {
    let h = `<div class="slide" style="background:#${s.bg}">`;
    for (const it of s.items) {
      if (it.t === 'rect') {
        const br = it.shape === 'ellipse' ? '50%' : it.shape === 'roundRect' ? i2p(Math.min(it.r, Math.min(it.w, it.h) / 2)) + 'px' : '0';
        const bd = it.line ? `border:${it.line.width}px ${it.line.dash ? 'dashed' : 'solid'} #${it.line.color};` : '';
        const sh = it.sh ? (it.sh === 'dark' ? 'box-shadow:0 3px 14px rgba(0,0,0,.4);' : 'box-shadow:0 3px 14px rgba(122,130,153,.25);') : '';
        const bg = it.fill === 'none' ? 'transparent' : it.op != null ? rgba(it.fill, it.op) : '#' + it.fill;
        h += `<div style="position:absolute;left:${i2p(it.x)}px;top:${i2p(it.y)}px;width:${i2p(it.w)}px;height:${i2p(it.h)}px;background:${bg};border-radius:${br};box-sizing:border-box;${bd}${sh}${it.rot ? `transform:rotate(${it.rot}deg);` : ''}"></div>`;
      } else if (it.t === 'line') {
        const horiz = Math.abs(it.w || 0) >= Math.abs(it.h || 0);
        const st = it.dash ? 'dashed' : 'solid';
        h += horiz
          ? `<div style="position:absolute;left:${i2p(it.x)}px;top:${i2p(it.y)}px;width:${i2p(it.w)}px;border-top:${it.width}px ${st} #${it.color}"></div>`
          : `<div style="position:absolute;left:${i2p(it.x)}px;top:${i2p(it.y)}px;height:${i2p(it.h)}px;border-left:${it.width}px ${st} #${it.color}"></div>`;
      } else if (it.t === 'text') {
        const runs = Array.isArray(it.text) ? it.text : [{ text: it.text }];
        const inner = runs.map((r) => {
          const st = [`font-family:${fam(r.font || it.font)}`, `font-size:${pt2p(r.size ?? it.size)}px`,
            `font-weight:${(r.bold ?? it.bold) ? 700 : 400}`, (r.italic ?? it.italic) ? 'font-style:italic' : '',
            `color:#${r.color || it.color}`, (r.charSpacing ?? it.charSpacing) ? `letter-spacing:${pt2p(r.charSpacing ?? it.charSpacing)}px` : ''].filter(Boolean).join(';');
          return `<span style="${st}">${esc(r.text).replace(/\n/g, '<br>')}</span>${r.breakLine ? '<br>' : ''}`;
        }).join('');
        const va = { top: 'flex-start', middle: 'center', bottom: 'flex-end' }[it.valign || 'top'];
        h += `<div class="tb" style="left:${i2p(it.x)}px;top:${i2p(it.y)}px;width:${i2p(it.w)}px;height:${i2p(it.h)}px;justify-content:${va};text-align:${it.align};line-height:${it.lh ?? 1.15};white-space:${it.wrap === false ? 'pre' : 'normal'}"><div style="width:100%">${inner}</div></div>`;
      }
    }
    h += '</div>';
    return `<section class="wrap" id="s${s.n}"><div class="lbl">SLIDE ${s.n} — ${esc(s.name || '')}</div>${h}</section>`;
  }).join('\n');
  const gf = `<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">`;
  fs.writeFileSync(outFile, `<!doctype html><meta charset="utf-8">${fonts.head === 'Calibri' ? '' : gf}
<style>body{margin:0;background:#2a2d36;padding:20px;font-family:system-ui}
.wrap{margin:0 auto 30px;width:${W * PX}px}.lbl{color:#c9c6d6;font:600 12px system-ui;letter-spacing:.09em;margin-bottom:6px}
.slide{position:relative;width:${W * PX}px;height:${H * PX}px;overflow:hidden}
.tb{position:absolute;display:flex;flex-direction:column;box-sizing:border-box}</style>
${pages}
<script>var q=new URLSearchParams(location.search).get('s');if(q){document.querySelectorAll('.wrap').forEach(function(e){if(e.id!=='s'+q)e.style.display='none'})}function fit(){document.body.style.zoom=Math.min(1,(innerWidth-30)/1300)}fit();addEventListener('resize',fit)</script>`, 'utf8');
}
module.exports = { emit };
