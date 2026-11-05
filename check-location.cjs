const fs = require('node:fs');
const html = fs.readFileSync('dist/index.html', 'utf8');
new Function(html.match(/<script>([\s\S]*?)<\/script>/)[1]);
for (const [, src] of html.matchAll(/src="(assets\/[^"]+)"/g)) {
  if (!fs.existsSync('dist/' + src)) throw Error('Missing asset: ' + src);
}
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
if (new Set(ids).size !== ids.length) throw Error('Duplicate HTML ids');
for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.includes(id)) throw Error('Broken anchor: ' + id);
}
console.log('JavaScript syntax, local assets, unique IDs and page anchors verified.');
