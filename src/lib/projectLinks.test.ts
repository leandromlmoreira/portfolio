/// <reference types="node" />
import { test } from "node:test";
import assert from "node:assert/strict";
import { hasPublicCode, hostOf, liveHost } from "./projectLinks.ts";

test("hostOf tira o protocolo e a barra final", () => {
  assert.equal(hostOf("https://commit-city-lm.vercel.app"), "commit-city-lm.vercel.app");
  assert.equal(hostOf("https://leandromlmoreira.github.io/toro/"), "leandromlmoreira.github.io/toro");
  assert.equal(hostOf("http://localhost:8081/"), "localhost:8081");
});

test("hostOf mantém o caminho de sites servidos numa subpasta", () => {
  assert.equal(
    hostOf("https://vela-banco-lm.vercel.app/banco-digital/"),
    "vela-banco-lm.vercel.app/banco-digital",
  );
});

test("liveHost usa o endereço ao vivo do projeto", () => {
  assert.equal(liveHost({ live: "https://lastro-lm.vercel.app" }), "lastro-lm.vercel.app");
});

test("hasPublicCode só aceita projetos com repositório", () => {
  assert.equal(hasPublicCode({ live: "https://x.dev", repo: "https://github.com/leandromlmoreira/toro" }), true);
  assert.equal(hasPublicCode({ live: "https://x.dev" }), false);
  assert.equal(hasPublicCode({ live: "https://x.dev", repo: "" }), false);
});
