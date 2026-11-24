import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one word the entrant's ex would use to describe them:
// not a partner, a babysitter — they raised them, never dated them.
const WORD = "babysitter";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
