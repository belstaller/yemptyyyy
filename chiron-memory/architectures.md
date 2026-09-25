# architecture

How the system is put together — layers, boundaries, and how data flows.

## manager-board-mock is a standalone app with its own layers

What: The local Work Order board mock lives in manager-board-mock/ with its own package.json and the same domain/application/infrastructure/interfaces layers under src/; src/app/page.tsx is the composition root that wires the in-memory repository into the GetWorkOrderBoard use case · Why: the work order asked for a standalone app, and architecture.json forbids interfaces/ from importing infrastructure/, so the wiring sits in Next's app/ entry outside the layers · Where: manager-board-mock/src/app/page.tsx · Learned: in Next apps under this architecture, keep app/ as a thin composition root and put components in interfaces/
