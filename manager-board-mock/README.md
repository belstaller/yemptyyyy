# Manager Work Order board — local mock

A small, view-only copy of the Manager's Work Order board that runs entirely on
your machine. No backend, login or workspace is needed: the Work Orders are
made-up data stored in the app, and the page makes no calls to any service.

Stack: Next.js 16 (App Router), React 19, TypeScript 5 (strict), Node.js 20.

## Install and start

Requires Node.js 20.9 or newer.

```bash
cd manager-board-mock
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts:

| Command             | What it does                          |
| ------------------- | ------------------------------------- |
| `npm run typecheck` | TypeScript check (strict mode)        |
| `npm run build`     | Production build                      |
| `npm start`         | Serve the production build            |

> If `npm run build` fails with `Cannot read properties of null (reading 'useContext')`,
> your shell probably exports `NODE_ENV=development`. Run `env -u NODE_ENV npm run build` instead.

## Edit the made-up data

All Work Orders live in [`src/infrastructure/mockWorkOrders.ts`](src/infrastructure/mockWorkOrders.ts).
Edit that file and reload the page (`npm run dev` picks up changes automatically).

Each Work Order has:

| Field                | Required | Notes                                               |
| -------------------- | -------- | --------------------------------------------------- |
| `id`                 | yes      | Shown on the card, e.g. `"WO-01AB98"`               |
| `title`              | yes      |                                                     |
| `status`             | yes      | Decides the column (see below)                      |
| `problem`            | yes      | Shown when the card is opened                       |
| `requirements`       | yes      | List of strings                                     |
| `acceptanceCriteria` | yes      | List of strings                                     |
| `assignee`           | no       | `{ name: "Ada Lovelace" }`, or add `kind: "agent"` for an agent |
| `blockedBy`          | no       | Ids of blocking Work Orders — shows a "WAITING" marker |
| `blocks`             | no       | Ids this Work Order blocks — shows a "BLOCKS" marker (added automatically for ids listed in other Work Orders' `blockedBy`) |

How `status` maps to the board:

| `status`        | Column          |
| --------------- | --------------- |
| `"backlog"`     | Backlog         |
| `"todo"`        | To Do           |
| `"in_progress"` | In progress     |
| `"in_review"`   | In review       |
| `"done"`        | Done            |
| `"cancelled"`   | Not shown       |
| anything else   | Needs attention — a sixth column that only appears when needed, showing the original status |

A column with no Work Orders stays on the board and says "No work orders".

The board is view-only: cards can't be dragged. Click a card to see its problem,
requirements and acceptance criteria; close with ×, Esc or a click outside.

## Where things are

The app follows the repo's Clean Architecture layers:

- `src/domain/` — Work Order type, status vocabulary, and the rule that places Work Orders in columns
- `src/application/` — `GetWorkOrderBoard` use case and the board DTOs
- `src/infrastructure/` — in-memory repository and the made-up data
- `src/interfaces/components/` — board, column, card and detail dialog
- `src/app/` — Next.js entry (`page.tsx` wires the repository into the use case)
