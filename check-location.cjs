const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const output = path.join(__dirname, "out");
const html = fs.readFileSync(path.join(output, "index.html"), "utf8");
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "Duplicate HTML ids");
for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) {
  assert.ok(ids.includes(id), `Broken anchor: ${id}`);
}
for (const [, raw] of html.matchAll(
  /(?:src|href)="(\/[^"?#]*)(?:\?[^"#]*)?"/g,
)) {
  if (raw === "/") continue;
  assert.ok(
    fs.existsSync(path.join(output, decodeURIComponent(raw.slice(1)))),
    `Missing exported resource: ${raw}`,
  );
}
assert.match(html, /lang="zh-CN"/);
assert.match(html, /陕西北路1620号/);
assert.match(html, /https:\/\/uri\.amap\.com\/search/);
assert.match(html, /_next\/static/);
assert.ok(!html.includes("<script>\nconst $="), "Legacy DOM script remains");
console.log(
  "Export verified: local assets, unique IDs, anchors, metadata and location links.",
);
