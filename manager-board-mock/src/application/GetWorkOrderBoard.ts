import type { Assignee, WorkOrder } from "@/domain/WorkOrder";
import { buildWorkOrderBoard } from "@/domain/WorkOrderBoard";
import type { WorkOrderRepository } from "@/domain/WorkOrderRepository";
import { BOARD_STATUS_LABELS, isBoardStatus } from "@/domain/WorkOrderStatus";
import type { AssigneeDTO, BoardColumnDTO, WorkOrderBoardDTO, WorkOrderCardDTO } from "./WorkOrderBoardDTO";

export const NEEDS_ATTENTION_LABEL = "Needs attention";

export class GetWorkOrderBoard {
  constructor(private readonly workOrders: WorkOrderRepository) {}

  async execute(): Promise<WorkOrderBoardDTO> {
    const board = buildWorkOrderBoard(await this.workOrders.findAll());
    const onBoard = [...board.columns.flatMap((c) => c.workOrders), ...board.needsAttention];
    const toCard = (workOrder: WorkOrder) => toCardDTO(workOrder, onBoard);

    const columns: BoardColumnDTO[] = board.columns.map((column) => ({
      key: column.status,
      label: BOARD_STATUS_LABELS[column.status],
      kind: "status",
      workOrders: column.workOrders.map(toCard),
    }));

    // Only shown when something needs attention, so the default board keeps
    // exactly the Manager's five columns.
    if (board.needsAttention.length > 0) {
      columns.push({
        key: "needs-attention",
        label: NEEDS_ATTENTION_LABEL,
        kind: "needs-attention",
        workOrders: board.needsAttention.map(toCard),
      });
    }

    return { columns };
  }
}

function toCardDTO(workOrder: WorkOrder, onBoard: readonly WorkOrder[]): WorkOrderCardDTO {
  const { status } = workOrder;
  const recognised = isBoardStatus(status);
  return {
    id: workOrder.id,
    title: workOrder.title,
    statusLabel: isBoardStatus(status) ? BOARD_STATUS_LABELS[status] : status,
    statusRecognised: recognised,
    problem: workOrder.problem,
    requirements: workOrder.requirements,
    acceptanceCriteria: workOrder.acceptanceCriteria,
    assignee: workOrder.assignee && toAssigneeDTO(workOrder.assignee),
    blockedBy: workOrder.blockedBy ?? [],
    blocks: [
      ...new Set([
        ...(workOrder.blocks ?? []),
        ...onBoard.filter((other) => other.blockedBy?.includes(workOrder.id)).map((other) => other.id),
      ]),
    ],
  };
}

function toAssigneeDTO(assignee: Assignee): AssigneeDTO {
  const initials = assignee.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
  return { name: assignee.name, initials, isAgent: assignee.kind === "agent" };
}
