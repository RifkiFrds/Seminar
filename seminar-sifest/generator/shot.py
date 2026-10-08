"""Render slides from preview.html to PNG with headless Edge, then build 2x2 contact sheets.
usage: python shot.py preview.html OUTDIR 1,2,3,4"""
import re, subprocess, sys, os
from PIL import Image

src, out, nums = sys.argv[1], sys.argv[2], [int(x) for x in sys.argv[3].split(',')]
os.makedirs(out, exist_ok=True)
html = open(src, encoding='utf8').read()
html = re.sub(r'<script>.*?</script>', '', html, flags=re.S)
edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
files = []
for n in nums:
    h = html.replace('</style>', 'body{padding:0!important;background:#000!important}.lbl{display:none}.wrap{display:none;margin:0!important}#s%d{display:block}</style>' % n)
    p = os.path.abspath(os.path.join(out, 's%d.html' % n))
    open(p, 'w', encoding='utf8').write(h)
    png = os.path.abspath(os.path.join(out, 's%d.png' % n))
    subprocess.run([edge, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--window-size=1280,720',
                    '--virtual-time-budget=6000', '--screenshot=' + png, 'file:///' + p.replace(os.sep, '/')],
                   capture_output=True, timeout=90)
    files.append(png)
for i in range(0, len(files), 4):
    ims = [Image.open(f).convert('RGB') for f in files[i:i + 4]]
    sheet = Image.new('RGB', (2570, 1450), (60, 60, 60))
    for k, im in enumerate(ims):
        sheet.paste(im.crop((0, 0, 1280, 720)), ((k % 2) * 1290, (k // 2) * 730))
    sheet.save(os.path.join(out, 'sheet_%d.png' % (i // 4 + 1)))
print('done', len(files))
