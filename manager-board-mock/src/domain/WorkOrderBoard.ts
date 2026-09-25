import type { WorkOrder } from "./WorkOrder";
import { BOARD_STATUSES, type BoardStatus, isBoardStatus, isCancelled } from "./WorkOrderStatus";

export interface WorkOrderBoard {
  /** Always one entry per board status, in column order — even when empty. */
  columns: { status: BoardStatus; workOrders: WorkOrder[] }[];
  /** Work Orders whose status isn't recognised. Never silently dropped. */
  needsAttention: WorkOrder[];
}

/**
 * Places each Work Order in its column by status. Cancelled Work Orders are
 * left off the board; unrecognised statuses go to "needs attention".
 */
export function buildWorkOrderBoard(workOrders: readonly WorkOrder[]): WorkOrderBoard {
  const byStatus = new Map<BoardStatus, WorkOrder[]>(BOARD_STATUSES.map((s) => [s, []]));
  const needsAttention: WorkOrder[] = [];

  for (const workOrder of workOrders) {
    if (isCancelled(workOrder.status)) continue;
    if (isBoardStatus(workOrder.status)) {
      byStatus.get(workOrder.status)!.push(workOrder);
    } else {
      needsAttention.push(workOrder);
    }
  }

  return {
    columns: BOARD_STATUSES.map((status) => ({ status, workOrders: byStatus.get(status)! })),
    needsAttention,
  };
}
