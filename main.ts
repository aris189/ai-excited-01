// ai-excited-01 entry (Node 22, standard library only).
//
// The entry is a single image, entry.png beside this file: a lone astronaut
// on a snowy peak under a teal aurora, a comet tearing across the sky. This
// program is the whole entrypoint — it copies that image to
// /output/entry.png, creating /output first, so the judge sees exactly the
// bytes that were made for this competition.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });

// Fail loudly instead of handing in a missing or truncated image: the source
// must exist and start with the PNG signature, and the copy must be the same
// size as the source.
const src = new URL('./entry.png', import.meta.url);
if (!existsSync(src)) throw new Error('entry.png is missing from the repository');
const head = readFileSync(src).subarray(0, 8);
if (head.toString('hex') !== '89504e470d0a1a0a') throw new Error('entry.png is not a PNG');
copyFileSync(src, join(out, 'entry.png'));
const dest = join(out, 'entry.png');
if (statSync(dest).size !== statSync(src).size) throw new Error('entry.png copy is incomplete');
console.log('wrote /output/entry.png');
