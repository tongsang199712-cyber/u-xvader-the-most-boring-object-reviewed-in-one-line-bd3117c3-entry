import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One funny, true line reviewing the most boring everyday object: a doorstop.
// The joke is the object's own dullness — kicked daily, thanked never.
const LINE =
  "The doorstop spends its whole life getting kicked by the door it's protecting, and it still shows up to work every day.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`LINE must be 1-200 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("entry.txt does not match LINE");
}

console.log(`Wrote ${LINE.length} characters to /output/entry.txt (no trailing newline)`);
