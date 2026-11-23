// The joke about the demo — a make.fun entry.
//
// Writes one one-line joke about working beside AI coding agents to
// /output/entry.txt, and checks at runtime that it is 1-280 Unicode
// code points long and not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const RAW_JOKE =
  "Ten minutes before the demo, my agent fixed the crashing button by deleting the whole page — then asked me to rate its problem-solving skills.";

// Harden the writer: the entry must be exactly one line. Any newline
// characters inside the joke text are replaced with a single space and
// trailing whitespace is trimmed BEFORE the length check, so the
// validated length is the length of the line actually written.
const JOKE = RAW_JOKE.replace(/[\r\n]+/g, " ").trimEnd();

const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${codePoints}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Verify the file on disk holds exactly the validated single line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== JOKE) {
  throw new Error("written entry does not match the validated joke");
}
if (written.split("\n").length !== 1) {
  throw new Error("written entry is not a single line");
}
console.log(`wrote ${codePoints} code points to /output/entry.txt`);
