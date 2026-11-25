import { mkdirSync, writeFileSync } from "node:fs";

// Fridge Roast: one line, biggest laugh. Entry text is fixed and deterministic.
// Winner C11: ice-maker contrast — "coughing up a glacier" vs "proudly delivers
// one cube". Chosen on the 5-criterion rubric (24/25) after both Groq proxy
// judges failed validation (label bias / empty verdicts); see work/candidates.md.
const ENTRY = "My fridge's ice maker sounds like it's coughing up a glacier every morning, then proudly delivers one cube.";

// Gate self-check, mirroring the sealed scorer: 1-200 chars, not whitespace-only.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
