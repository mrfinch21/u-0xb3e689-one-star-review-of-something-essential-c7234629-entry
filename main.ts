// One-Star Review of Something Essential — make.fun entry
// Deterministic, no network, no randomness: writes one single-line
// deadpan one-star review of an everyday essential to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

// The review. One line, deadpan, one joke: praise gravity, then let the
// sting land in the last few words (the cracked phone screen).
const REVIEW =
  "Gravity is free, always on, and never takes a day off, which is exactly why my phone screen looks like a spiderweb. One star.";

// Mirror of the sealed gate (RULES.txt: "The gate"):
// /output/entry.txt must be UTF-8 text of 1 to 160 characters, not only
// whitespace. A single line, so no newline inside the review itself.
function gateCheck(text: string): void {
  if (text.length < 1 || text.length > 160) {
    throw new Error(`gate: review is ${text.length} characters, must be 1-160`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: review is only whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("gate: review must be a single line");
  }
}

const outDir = "/output";
const outPath = `${outDir}/entry.txt`;

gateCheck(REVIEW);
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, REVIEW, "utf8");

// Read-back verify: the file on disk must be byte-identical to the review.
const onDisk = readFileSync(outPath, "utf8");
if (onDisk !== REVIEW) {
  throw new Error("verify: /output/entry.txt does not match the review");
}
const sha = createHash("sha256").update(onDisk, "utf8").digest("hex");
console.log(`wrote ${outPath} (${REVIEW.length} chars, sha256 ${sha})`);
console.log(REVIEW);
