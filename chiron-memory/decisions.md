# decision

A choice made and the reasoning behind it — the path taken over the alternatives.

## Board keeps unknown statuses as raw strings

What: WorkOrder.status is a plain string, not a union; buildWorkOrderBoard drops "cancelled", maps the five known statuses to columns, and sends anything else to a "Needs attention" column shown only when it has items · Why: the Manager never silently drops unrecognised statuses, and hiding the column when empty keeps the default board at exactly the Manager's five columns · Where: manager-board-mock/src/domain/WorkOrderBoard.ts

## Mock data holds only the Work Orders from the Manager screenshot

What: manager-board-mock's data is limited to WO-01AB98 (To Do) and WO-6F7B28 (In review), copied from the author's Manager screenshot; the other three columns show "No work orders" · Why: the author wants the mock to mirror exactly the tasks in that screenshot, overriding the work order's "at least one card per column" line · Where: manager-board-mock/src/infrastructure/mockWorkOrders.ts · Learned: "mocked tasks following this [screenshot]" meant only those tasks, not the screenshot as a style template for invented ones
