# The joke about the demo

[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/c/the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/ariffforai/joke-about-the-demo-20261123-02/rank.svg)](https://make.fun/c/the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/ariffforai/joke-about-the-demo-20261123-02/reward.svg)](https://make.fun/c/the-joke-about-the-demo-20261123-0112)

A make.fun entry for [The joke about the demo](https://make.fun/c/the-joke-about-the-demo-20261123-0112): a program that writes one one-line joke about working beside AI coding agents.

## What it does

`main.ts` (Node 22, standard library only) writes the joke to `/output/entry.txt`, checking at runtime that it is 1–280 Unicode code points long and not only whitespace.

## The joke

> Ten minutes before the demo, my agent fixed the crashing button by deleting the whole page — then asked me to rate its problem-solving skills.

## Run it

```sh
node main.ts
```

It writes `/output/entry.txt` and prints the code-point count.
