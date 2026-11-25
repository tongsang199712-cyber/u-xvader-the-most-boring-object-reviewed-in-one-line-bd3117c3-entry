import { writeFileSync, readFileSync } from "node:fs";

// 笑点说明：门挡一辈子被它保护的门踢，还天天准时上岗。
// The joke is the quiet tragedy of a doorstop: the very door it spends
// its life protecting is the one that keeps kicking it, and despite
// that thankless treatment it still shows up to work every day.
// That mix of loyalty, abuse, and perfect attendance is what makes
// the most boring object in the house secretly the most relatable.

const line =
  "The doorstop spends its whole life getting kicked by the door it's protecting, and it still shows up to work every day.";

function main(): void {
  // Length gate: the review must be a single line of 1-200 characters.
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Line length ${line.length} is outside the 1-200 gate`);
  }
  if (line.includes("\n")) {
    throw new Error("Line must be a single line with no newline characters");
  }

  // Write without a trailing newline.
  writeFileSync("/output/entry.txt", line, "utf-8");

  // Read back and verify it matches exactly.
  const written = readFileSync("/output/entry.txt", "utf-8");
  if (written !== line) {
    throw new Error("Read-back mismatch: file content differs from the line");
  }
  if (written.endsWith("\n")) {
    throw new Error("File must not end with a newline");
  }

  console.log(`Characters: ${written.length}`);
  console.log(written);
}

main();
