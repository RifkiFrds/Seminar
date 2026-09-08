// Rasterise Simple Icons brand marks to PNG, tinted to the deck palette.
// Run once: node gen-logos.js   (output -> assets/logos/<slug>-<tone>.png)
const fs = require('fs');
const path = require('path');
const si = require('simple-icons');
const { Resvg } = require('@resvg/resvg-js');

const OUT = path.join(__dirname, 'assets', 'logos');
fs.mkdirSync(OUT, { recursive: true });

const TONES = { light: '847E96', dark: 'B5AEC6' };
const SLUGS = ['v0', 'vercel', 'firebase', 'githubcopilot', 'cursor', 'claude',
               'googlegemini', 'opencode', 'railway', 'supabase', 'neon',
               'nextdotjs', 'typescript', 'tailwindcss', 'whatsapp', 'googlemaps'];

const cap = (s) => 'si' + s.charAt(0).toUpperCase() + s.slice(1);
const made = [];

for (const slug of SLUGS) {
  const ico = si[cap(slug)];
  if (!ico) { console.log('MISSING  ' + slug); continue; }
  for (const [tone, hex] of Object.entries(TONES)) {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
                '<path fill="#' + hex + '" d="' + ico.path + '"/></svg>';
    const png = new Resvg(svg, { fitTo: { mode: 'width', value: 256 } }).render().asPng();
    fs.writeFileSync(path.join(OUT, slug + '-' + tone + '.png'), png);
  }
  made.push(ico.title);
}
console.log('rendered ' + made.length + ' marks x 2 tones');
console.log(made.join(', '));
