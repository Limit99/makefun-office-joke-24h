import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One-Line Office Joke: one short joke about office life, at most 200 characters.
const LINE =
  "My calendar invited me to a meeting about meetings, and the only agenda item was finding time to schedule the follow-up about the first meeting.";
const MAX_CHARS = 200;

function main(): void {
  // Revision: also reject line breaks and blank text, matching the sealed gate exactly.
  if (LINE.includes("\n") || LINE.trim().length === 0) {
    throw new Error("entry must be a single non-empty line");
  }
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`entry is ${LINE.length} characters, outside 1-${MAX_CHARS}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
}

main();
