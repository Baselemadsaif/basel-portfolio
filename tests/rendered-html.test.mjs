import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Basel Al-Saif \| Portfolio<\/title>/i);
  assert.match(html, /DevOps engineering for/);
  assert.match(html, /Professional experience\./);
  assert.match(html, /Certifications and training\./);
  assert.match(html, /Tools and technologies\./);
  assert.match(html, /\+962 778621178/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("includes portfolio navigation, metadata, and public assets", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /href="#experience"/);
  assert.match(html, /href="#certificates"/);
  assert.match(html, /href="#knowledge"/);
  assert.match(html, /property="og:title" content="Basel Al-Saif \| Portfolio"/);
  assert.match(html, /property="og:image" content="https?:\/\/[^"]+\/og\.png"/);

  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, /Associate Cloud Engineer/);
  assert.match(page, /Docker Certified Associate/);
  assert.match(page, /Optimum Partners/);

  await Promise.all([
    access(new URL("../public/basel-al-saif.jpg", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
});
