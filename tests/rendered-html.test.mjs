import assert from "node:assert/strict";
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

test("renders the real Inspiration Beggar portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Inspiration Beggar/);
  assert.match(html, /IncreTop/);
  assert.match(html, /Beat Shapes/);
  assert.match(html, /store\.steampowered\.com\/app\/4710920/);
  assert.match(html, /store\.steampowered\.com\/app\/4015080/);
});

test("does not ship fictional placeholder projects", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(
    html,
    /Aster Vale|Orbit Foundry|Mosslight Mail|Velvet Dungeon|impress\.games|Systems that grow|Games that click/i,
  );
});
