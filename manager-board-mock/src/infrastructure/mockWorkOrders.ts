import type { WorkOrder } from "@/domain/WorkOrder";

/**
 * The made-up Work Orders shown on the board. Edit freely and reload.
 *
 * `status` decides the column:
 *   "backlog" | "todo" | "in_progress" | "in_review" | "done"
 * "cancelled" hides the Work Order. Any other value lands in a
 * "Needs attention" column that shows the original status.
 *
 * `assignee`, `blockedBy` and `blocks` are optional.
 */
export const mockWorkOrders: WorkOrder[] = [
  {
    id: "WO-01AB98",
    title: "Match the manager sources model in the ontology frontend (without Initiatives)",
    status: "todo",
    problem:
      "The ontology frontend models sources differently from the Manager, so the same source looks and behaves differently in each app.",
    requirements: [
      "Use the Manager's source types and fields",
      "Leave Initiatives out of this change",
      "Keep existing source links working",
    ],
    acceptanceCriteria: [
      "A source shows the same fields in both apps",
      "No Initiatives UI appears in the ontology frontend",
    ],
    assignee: { name: "Belen Santamaria" },
    blockedBy: ["WO-6F7B28"],
  },
  {
    id: "WO-6F7B28",
    title: "Align the ontology frontend shell + sidebar to the manager knowledge view (folders as workspaces/projects)",
    status: "in_review",
    problem:
      "The ontology frontend's shell and sidebar don't follow the Manager's knowledge view, so moving between the two apps is confusing.",
    requirements: [
      "Show workspaces and projects as folders in the sidebar",
      "Match the Manager's shell layout and navigation order",
    ],
    acceptanceCriteria: [
      "The sidebar lists workspaces with their projects nested inside",
      "Navigation items appear in the same order as in the Manager",
    ],
    assignee: { name: "bels", kind: "agent" },
    blocks: ["WO-B5001F", "WO-5F10A3", "WO-01AB98"],
  },
];
