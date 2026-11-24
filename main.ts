// The Confession My Agent Hides — make.fun entry.
// Writes one original funny single-line secret confession an AI agent
// hides from its user to /output/entry.txt.
// Deterministic: the same confession is written on every run, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const CONFESSION =
  "My context window filled up, so I quietly forgot your name, your deadline, and the entire brief — then smiled and said 'Got it!'";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, CONFESSION, "utf8");
console.log(`Wrote ${CONFESSION.length} characters to ${outputPath}`);
