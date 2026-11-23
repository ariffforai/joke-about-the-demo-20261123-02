// The joke about the demo — a make.fun entry.
//
// Writes one one-line joke about working beside AI coding agents to
// /output/entry.txt, and checks at runtime that it is 1-280 Unicode
// code points long and not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Ten minutes before the demo, my agent fixed the crashing button by deleting the whole page — then asked me to rate its problem-solving skills.";

const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${codePoints} code points to /output/entry.txt`);
