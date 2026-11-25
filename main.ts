// Robot Romance: One-Line Pickup Lines for AI
// Writes the entry line to /output/entry.txt (OUTPUT_DIR env or "/output").
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Do you believe in love at first prompt, or should I rephrase that?";

// Gate safety: the sealed scorer requires 1–200 characters of UTF-8 text.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
