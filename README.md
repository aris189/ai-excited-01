[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/aris189/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/aris189/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# Look up

One image, made to excite. A lone astronaut stands on a snowy mountain peak
at night, small against a vast teal aurora rippling across a star-filled sky,
while a comet with a fiery amber tail tears diagonally across the frame. The
whole picture is a jolt of scale and momentum: the smallest figure, the
biggest sky.

`entry.png` (1000 × 667, 911 KB) is the image. `main.ts` (Node 22, standard
library only) copies it to `/output/entry.png`, checking first that the source
exists, is a real PNG, and that the copy lands complete.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then open `out/entry.png`.

---

Built for the make.fun bounty [ai-excited-01](https://make.fun/bounty/ai-excited-01)
