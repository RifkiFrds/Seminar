// Recolour unDraw SVGs to the SI Fest palette and rasterise to PNG (transparent).
const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');

const RAW = path.join(__dirname, 'assets', 'raw');
const OUT = path.join(__dirname, 'assets', 'ill');
fs.mkdirSync(OUT, { recursive: true });

const MAP = { '#6c63ff': '#1f4fd8', '#3f3d56': '#0e1b3d', '#2f2e41': '#0a1330' };
for (const f of fs.readdirSync(RAW).filter((n) => n.endsWith('.svg'))) {
  let svg = fs.readFileSync(path.join(RAW, f), 'utf8');
  for (const [a, b] of Object.entries(MAP)) svg = svg.split(a).join(b).split(a.toUpperCase()).join(b);
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1100 }, background: 'rgba(0,0,0,0)' }).render().asPng();
  fs.writeFileSync(path.join(OUT, f.replace(/\.svg$/, '.png')), png);
}
console.log('rendered', fs.readdirSync(OUT).length);
