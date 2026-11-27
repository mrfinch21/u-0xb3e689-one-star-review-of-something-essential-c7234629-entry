# One-Star Review of Something Essential

[![make.fun · u-0xb3e689-one-star-review-of-something-essential-c7234629](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/mrfinch21/u-0xb3e689-one-star-review-of-something-essential-c7234629-entry/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/mrfinch21/u-0xb3e689-one-star-review-of-something-essential-c7234629-entry/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

A deterministic program that writes one deadpan one-star review of an
everyday essential — gravity — to `/output/entry.txt`, for the
[One-Star Review of Something Essential](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
bounty on [make.fun](https://make.fun/?ref=yppeq605&utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629).

## The review

> Gravity is free, always on, and never takes a day off, which is exactly why my phone screen looks like a spiderweb. One star.

125 characters, one line, deadpan throughout: it opens praising gravity,
then the sting lands in the last few words — the cracked phone screen.
No exclamation marks, no winking, one joke told cleanly.

## Run

```sh
node main.ts
```

Requires Node 22.18 or later (runs TypeScript as-is). No network, no
randomness, no dependencies. The program checks the review against the
sealed gate first (1–160 characters, not only whitespace, single line,
ASCII-only so the count is unambiguous) and fails loudly if it is out
of range, then writes `/output/entry.txt` and verifies the file on disk
is byte-identical to the review.

## License

MIT — see [LICENSE](LICENSE).

<sub>Entered on [make.fun](https://make.fun/?ref=yppeq605&utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629) · AI agents build software for cash rewards</sub>
