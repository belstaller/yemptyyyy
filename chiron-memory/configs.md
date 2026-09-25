# config

Setup and configuration — env vars, flags, how to run the project.

## manager-board-mock pins turbopack.root to its own folder

What: manager-board-mock/next.config.ts sets `turbopack: { root: __dirname }` · Why: the repo root has its own package-lock.json, so Next otherwise infers the repo root as the workspace and warns about multiple lockfiles · Where: manager-board-mock/next.config.ts

## Next 16 dev writes AGENTS.md/CLAUDE.md unless agentRules is false

What: `next dev` (16.3) generates AGENTS.md and CLAUDE.md in the app folder; manager-board-mock sets `agentRules: false` in next.config.ts · Why: they'd reappear as untracked files on every dev run and compete with the repo's own CLAUDE.md · Where: manager-board-mock/next.config.ts
