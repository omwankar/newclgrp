async function firstPhotoId(keyword) {
  const r = await fetch(
    `https://unsplash.com/s/photos/${encodeURIComponent(keyword)}`
  );
  const t = await r.text();
  const m = t.match(/href="\/photos\/([a-zA-Z0-9_-]+)"/);
  if (!m) return null;
  const pr = await fetch(`https://unsplash.com/photos/${m[1]}`);
  const pt = await pr.text();
  const im = pt.match(/images\.unsplash\.com\/(photo-[0-9a-f-]+)/i);
  return im ? im[1] : null;
}

async function verify(id) {
  const r = await fetch(`https://images.unsplash.com/${id}?w=800&q=80`);
  return r.ok;
}

const keywords = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      "world-map",
      "business-handshake",
      "contact-business",
      "cargo-ship-port",
      "freight-truck",
      "supply-chain",
      "cloud-server",
      "customs-document",
      "artificial-intelligence",
      "container-ship",
      "air-cargo",
    ];

for (const kw of keywords) {
  const id = await firstPhotoId(kw);
  const ok = id ? await verify(id) : false;
  console.log(`${ok ? "OK" : "FAIL"}\t${kw}\t${id ?? "none"}`);
  await new Promise((x) => setTimeout(x, 400));
}
