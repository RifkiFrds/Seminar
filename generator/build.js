// Build the Vibecoding seminar deck.
//   node build.js            -> pptx (brand fonts) + pptx (safe fonts) + HTML preview
//   node build.js --html     -> HTML preview only (fast QA loop)
const path = require('path');
const L = require('./lib.js');

require('./slidesA.js');
require('./slidesB.js');
require('./slidesC.js');
require('./slidesD.js');
require('./slidesE.js');

const OUT = path.resolve(__dirname, '..');
const htmlOnly = process.argv.includes('--html');

const { emit: emitHtml } = require('./emit-html.js');
emitHtml(L.P, path.join(__dirname, 'preview.html'));
console.log('HTML preview  ->', path.join(__dirname, 'preview.html'), '(' + L.P.length + ' slides)');

if (htmlOnly) return;

const { emit: emitPptx } = require('./emit-pptx.js');
(async () => {
  await emitPptx(L.P, path.join(OUT, 'Vibecoding-Seminar-HIMTI-UMT.pptx'),
                 { head: 'Montserrat', body: 'ABeeZee' });
  console.log('PPTX (brand) ->', path.join(OUT, 'Vibecoding-Seminar-HIMTI-UMT.pptx'));

  await emitPptx(L.P, path.join(OUT, 'Vibecoding-Seminar-HIMTI-UMT-SafeFonts.pptx'),
                 { head: 'Calibri', body: 'Calibri' });
  console.log('PPTX (safe)  ->', path.join(OUT, 'Vibecoding-Seminar-HIMTI-UMT-SafeFonts.pptx'));
})();
