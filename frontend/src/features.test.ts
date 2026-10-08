import assert from "node:assert/strict";
import { test } from "node:test";
import { FEATURES, hasFeature, manualUrl, unlockedFeatures } from "./features.ts";

test("HeimPlan 3D: every feature is unlocked, with or without packs", () => {
  for (const f of FEATURES) {
    assert.equal(unlockedFeatures([]).has(f), true, f);
    assert.equal(hasFeature(f, []), true, f);
    assert.equal(hasFeature(f, [{ features: ["teleport"] }]), true, f);
  }
  assert.equal(hasFeature("time_travel"), true);
});

test("manual links follow the language and point add-ons at their section", () => {
  assert.equal(manualUrl("de", "time_travel"), "https://mastershort.de/heimplan3d/anleitung/pro-erweiterungen/?lang=de#67-zeitreise");
  assert.equal(manualUrl("en-GB"), "https://mastershort.de/en/heimplan3d/manual/?lang=en");
});
