from pathlib import Path
from urllib.parse import quote

p = Path(__file__).parent / 'dist/index.html'
html = p.read_text(encoding='utf-8')
address = '上海市普陀区宜川路街道陕西北路1620号'
map_url = 'https://uri.amap.com/search?keyword=' + quote('上海市普陀区陕西北路1620号') + '&city=上海&callnative=1'
css = '''
.location{padding:80px 0 85px}.location-layout{display:grid;grid-template-columns:1.55fr 1fr;gap:0;border:1px solid #dce4d6;border-radius:24px;overflow:hidden;background:#fffef8}.neighborhood{margin:0;position:relative;background:#edf3e6;min-width:0;display:flex;flex-direction:column;justify-content:center}.neighborhood svg{display:block;width:100%;height:auto}.map-caption{position:absolute;bottom:14px;left:20px;right:20px;font-size:10px;color:#687b60}.location-card{padding:44px 32px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.location-chip{display:inline-flex;align-items:center;gap:7px;background:#eef2e6;border-radius:30px;padding:5px 12px;font-size:11px;color:#64805c}.location-chip svg{width:15px;height:15px;fill:currentColor}.location-card h3{font-size:27px;margin:20px 0 12px;line-height:1.5}.store-address{font-style:normal;font-size:15px;line-height:2;color:#586e55}.location-hint{font-size:12px;color:#7d8975;margin:20px 0 25px;line-height:1.9}.location-buttons{display:flex;flex-wrap:wrap;gap:10px}.location-buttons .button{padding:11px 16px;font-size:12px;gap:14px}.copy-status{min-height:20px;margin:12px 0 0;font-size:11px;color:#64805c}.map-label{font-family:'Noto Sans SC','Microsoft YaHei',sans-serif;fill:#738469;font-size:15px}.road-label{fill:#7e8d73;font-size:17px;letter-spacing:5px}.footer-detail{flex-wrap:wrap;justify-content:flex-end;max-width:70%;gap:8px 25px}.footer-detail .footer-address{max-width:310px}
@media(max-width:1000px){.location-card{padding:30px 24px}.location-card h3{font-size:23px}.location-layout{grid-template-columns:1.2fr 1fr}}
@media(max-width:700px){.location{padding:55px 0}.location-layout{grid-template-columns:1fr;border-radius:18px}.neighborhood svg{width:100%}.location-card{padding:26px 24px}.location-card h3{margin-top:15px}.location-hint{margin:14px 0 20px}.map-caption{font-size:9px;bottom:9px;left:14px}.footer-detail{max-width:100%;align-items:flex-start}.footer-detail .footer-address{max-width:100%}}
'''
section = '''
<section class="section wrap location" id="location" aria-labelledby="location-title">
<div class="section-head"><div><div class="eyebrow">FOLLOW THE PAWS, FIND US</div><h2 id="location-title">循着小爪印，来日和坐坐</h2></div><p>在熟悉的街角，等一个毛茸茸的你。</p></div>
<div class="location-layout">
<figure class="neighborhood"><svg viewBox="0 0 760 550" role="img" aria-labelledby="map-title map-desc">
<title id="map-title">爪爪日和门店街区示意地图</title><desc id="map-desc">门店位于上海市普陀区陕西北路1620号，按照提供的地图红色定位点标注在1号楼西北侧，附近道路有澳门路、陕西北路和普陀路。示意图非等比例，实际路线请查看高德地图。</desc>
<defs><pattern id="map-dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#dce6d0"/></pattern><filter id="pin-shadow" x="-40%" y="-40%" width="180%" height="200%"><feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#3f6347" flood-opacity=".18"/></filter></defs>
<rect width="760" height="550" fill="#edf3e6"/><rect width="760" height="550" fill="url(#map-dots)"/>
<path d="M0 420 Q85 385 160 460L290 550H0Z" fill="#d5e4bf"/><path d="M80 0H245L78 130H0V60Z" fill="#d5e4bf"/>
<g fill="#e0e7d7" stroke="#d2dcc9" stroke-width="2"><rect x="365" y="4" width="170" height="90" rx="15" transform="rotate(-36 450 50)"/><rect x="555" y="65" width="165" height="105" rx="15" transform="rotate(-36 637 115)"/><path d="M230 160L360 68 436 162 310 253Z"/><path d="M85 290L175 224 270 293 221 378 156 377Z"/><path d="M480 450L654 335 738 432 560 548Z"/><path d="M10 475L76 432 169 506 140 550H10Z"/></g>
<path d="M-70 330L470 -75M-60 285L445 680M235 660L855 220" fill="none" stroke="#d8e2cd" stroke-width="54" stroke-linejoin="round"/>
<path d="M-70 330L470 -75M-60 285L445 680M235 660L855 220" fill="none" stroke="#fffef7" stroke-width="40" stroke-linejoin="round"/>
<path d="M-70 330L470 -75M-60 285L445 680M235 660L855 220" fill="none" stroke="#dbe4d0" stroke-width="2" stroke-dasharray="7 10"/>
<path d="M320 256L505 130 619 291 469 399 356 363Z" fill="#f7f0da" stroke="#e6dbc0" stroke-width="2"/>
<path d="M340 320L419 273 500 348 515 422 431 475 320 388Z" fill="#dbe6cd" stroke="#bdcea9" stroke-width="2"/>
<g class="map-label"><text x="410" y="402">1号楼</text><text x="292" y="173" text-anchor="middle" font-size="13">汉庭酒店</text><text x="153" y="310" text-anchor="middle" font-size="13">澳门轻奢酒店</text><text x="580" y="430" font-size="13" transform="rotate(-35 580 430)">全季酒店</text></g>
<g class="map-label road-label"><text x="95" y="222" transform="rotate(-37 95 222)">澳门路</text><text x="154" y="470" transform="rotate(38 154 470)">陕西北路</text><text x="540" y="470" transform="rotate(-35 540 470)">普陀路</text></g>
<g fill="#a4bb8b"><circle cx="54" cy="397" r="19"/><circle cx="81" cy="413" r="13"/><circle cx="699" cy="214" r="18"/><circle cx="722" cy="229" r="12"/></g><g stroke="#7e9d6a" stroke-width="3" stroke-linecap="round"><path d="M54 409v14M699 226v14"/></g>
<g fill="#97ac81" opacity=".7"><use href="#paw" x="263" y="374" width="20" height="20" transform="rotate(-18 273 384)"/><use href="#paw" x="284" y="348" width="19" height="19" transform="rotate(8 293 357)"/><use href="#paw" x="306" y="325" width="18" height="18" transform="rotate(-15 315 334)"/></g>
<ellipse cx="354" cy="316" rx="33" ry="10" fill="#476343" opacity=".13"/>
<g filter="url(#pin-shadow)"><path d="M354 319C344 305 319 286 319 263a35 35 0 0 1 70 0c0 23-25 42-35 56Z" fill="#426b50" stroke="#fffef7" stroke-width="5"/><use href="#paw" x="337" y="243" width="34" height="34" fill="#fff5cf"/>
<rect x="398" y="208" width="222" height="79" rx="17" fill="#fffef7"/><path d="M400 251L385 264 400 269" fill="#fffef7"/><text x="419" y="240" fill="#2d4a37" font-size="21" font-weight="700">爪爪日和 · 在这里</text><text x="419" y="266" fill="#829074" font-size="13">陕西北路 1620 号</text></g>
<g transform="translate(691 44)" fill="#64805c"><text text-anchor="middle" y="-5" font-size="12" font-family="Arial">N</text><path d="M0 3L-7 25 0 21 7 25Z"/></g>
<g transform="translate(25 42)"><rect width="160" height="33" rx="16" fill="#fffef7"/><text x="80" y="22" text-anchor="middle" fill="#708363" font-size="11" letter-spacing="2" font-family="Arial">OUR LITTLE NEIGHBORHOOD</text></g>
</svg><figcaption class="map-caption">街区示意图 · 依据门店提供的位置绘制，非等比例；出行请查看实时地图。</figcaption></figure>
<div class="location-card"><span class="location-chip"><svg aria-hidden="true"><use href="#paw"/></svg> 毛孩子的快乐目的地</span><h3>我们在这里，<br>等你和小可爱。</h3><address class="store-address" id="store-address">上海市普陀区宜川路街道<br><strong>陕西北路1620号</strong></address><p class="location-hint">记住这个小街角：<br>陕西北路，靠近普陀路、澳门路。<br>带上牵引绳或航空箱，一起慢慢来。</p><div class="location-buttons"><a class="button" href="MAP_URL" target="_blank" rel="noopener noreferrer">高德地图查看 <span class="arrow">↗</span></a><button class="button light" id="copy-address" type="button">复制地址</button></div><p class="copy-status" id="copy-address-status" role="status" aria-live="polite"></p></div>
</div></section>
'''.replace('MAP_URL', map_url.replace('&', '&amp;'))
assert 'id="location"' not in html
html = html.replace('</style>', css + '</style>', 1)
html = html.replace('<section class="visit-shell"', section + '\n<section class="visit-shell"', 1)
html = html.replace('<a href="#visit">来店坐坐</a>', '<a href="#location">门店位置</a>')
html = html.replace('<span>门店地址 · 待填写你的门店地址</span>', '<a class="footer-address" href="#location">门店地址 · ' + address + '</a>')
script = '''
const copyAddressButton=document.querySelector('#copy-address');
copyAddressButton.addEventListener('click',async()=>{
 const address='ADDRESS';const status=document.querySelector('#copy-address-status');
 try{await navigator.clipboard.writeText(address);status.textContent='地址已复制，带上小可爱出发吧。';copyAddressButton.textContent='已复制 ✓'}
 catch{status.textContent='请长按或选中上方地址复制。';const selection=window.getSelection();const range=document.createRange();range.selectNodeContents(document.querySelector('#store-address'));selection.removeAllRanges();selection.addRange(range)}
});
'''.replace('ADDRESS', address)
html = html.replace('</script>', script + '</script>', 1)
p.write_text(html, encoding='utf-8')
print('Location section, neighborhood SVG, address links and clipboard action added.')
