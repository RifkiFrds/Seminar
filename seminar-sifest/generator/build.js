// node build.js          -> pptx (brand) + pptx (SafeFonts) + preview.html + blueprint
// node build.js --html   -> preview.html only (fast QA loop)
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const OUT = path.resolve(__dirname, '..');
const variant = process.env.VARIANT;

if (!variant) {
  const htmlOnly = process.argv.includes('--html');
  for (const v of htmlOnly ? ['brand'] : ['brand', 'safe']) {
    const r = spawnSync(process.execPath, [__filename, ...process.argv.slice(2)], { env: { ...process.env, VARIANT: v }, stdio: 'inherit' });
    if (r.status) process.exit(r.status);
  }
  process.exit(0);
}

const L = require('./lib.js');
require('./slides1.js');
if (fs.existsSync(path.join(__dirname, 'slides2.js'))) require('./slides2.js');
if (fs.existsSync(path.join(__dirname, 'slides3.js'))) require('./slides3.js');

(async () => {
  const safe = variant === 'safe';
  if (!safe) {
    require('./emit-html.js').emit(L.P, path.join(__dirname, 'preview.html'), L.FONTS);
    console.log('preview.html  (' + L.P.length + ' slides)');
    if (process.argv.includes('--html')) return;
    require('./blueprint.js').write(L.P, path.join(OUT, 'PRESENTATION-BLUEPRINT.md'));
  } else {
    require('./emit-html.js').emit(L.P, path.join(__dirname, 'preview-safe.html'), L.FONTS);
  }
  const f = path.join(OUT, safe ? 'SI-Fest-2026-Sesi1-SafeFonts.pptx' : 'SI-Fest-2026-Sesi1.pptx');
  await require('./emit-pptx.js').emit(L.P, f, L.FONTS);
  console.log('pptx ->', f);
})();
