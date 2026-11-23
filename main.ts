// One-Star Review of Something Essential
// Writes exactly one single-line deadpan one-star review (<= 160 chars)
// to <output>/entry.txt. Deterministic, no network, no cwd dependence.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. Gravity holds everything down, including my mood, my posture, and my phone the second it leaves my hand.";

if (REVIEW.length > 160 || REVIEW.includes("\n")) {
  throw new Error("review must be one line of at most 160 characters");
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  process.env.MAKEFUN_BOT_DIR ??
  "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, REVIEW + "\n", "utf8");
