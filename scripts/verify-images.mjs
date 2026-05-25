/**
 * Verifies Unsplash direct photo URLs (source.unsplash.com is deprecated).
 * Run: node scripts/verify-images.mjs
 */
import { readFileSync } from "node:fs";

const imagesTs = readFileSync("src/lib/data/images.ts", "utf8");
const ids = [...imagesTs.matchAll(/"(\d{10,}-[a-f0-9]+)"/gi)].map((m) => m[1]);
const unique = [...new Set(ids)];

let failed = 0;
for (const id of unique) {
  const url = `https://images.unsplash.com/photo-${id}?w=800&q=80`;
  try {
    const res = await fetch(url, { method: "GET", redirect: "follow" });
    if (!res.ok) {
      console.error(`FAIL ${res.status} photo-${id}`);
      failed++;
    } else {
      console.log(`OK   photo-${id}`);
    }
  } catch (err) {
    console.error(`ERR  photo-${id}`, err.message);
    failed++;
  }
  await new Promise((r) => setTimeout(r, 200));
}

console.log(`\n${unique.length} URLs checked, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
