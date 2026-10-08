"""Download illustrations (unDraw mirror, MIT) into generator/assets/raw.
Downloaded files are untrusted: they are only ever rasterised (SVG -> PNG), never executed."""
import os, re, sys, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(HERE, 'assets', 'raw')
os.makedirs(RAW, exist_ok=True)

ILL = ['programming_2svr', 'website_setup_5hr2', 'server_status_5pbv', 'web_devices_ad58', 'responsive_6c8s',
       'design_process_iqqg', 'designer_kcp7', 'building_blocks_n0nc', 'questions_75e0', 'typing_jie3',
       'development_ouy3', 'developer_activity_bv83', 'time_management_30iu', 'work_time_lhoj',
       'artificial_intelligence_upfn', 'presentation1_tqkp', 'celebration_0jvk', 'super_thank_you_obwk',
       'maker_launch_crhe', 'mobile_browsers_lib5', 'team_spirit_hrr4', 'interaction_design_odgc',
       'design_tools_42tf', 'mobile_testing_reah', 'in_progress_ql66', 'browser_stats_704t', 'group_chat_v059',
       'secure_server_s9u8', 'real-time_sync_o57k']
BASE = 'https://raw.githubusercontent.com/cuuupid/undraw-illustrations/master/svg/'
UA = {'User-Agent': 'Mozilla/5.0'}

def get(url, dest):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    open(dest, 'wb').write(data)
    return len(data)

bad = re.compile(rb'<script|onload=|onclick=|javascript:|<foreignObject', re.I)
for n in ILL:
    dest = os.path.join(RAW, n + '.svg')
    try:
        get(BASE + n + '.svg', dest)
        if bad.search(open(dest, 'rb').read()):
            os.remove(dest); print('REJECTED (unsafe content)', n)
    except Exception as e:
        print('FAIL', n, e)

print(len(os.listdir(RAW)), 'files in', RAW)
