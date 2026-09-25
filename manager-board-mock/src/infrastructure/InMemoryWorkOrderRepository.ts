import type { WorkOrder } from "@/domain/WorkOrder";
import type { WorkOrderRepository } from "@/domain/WorkOrderRepository";

/** Serves Work Orders from a static list — no backend, no network. */
export class InMemoryWorkOrderRepository implements WorkOrderRepository {
  constructor(private readonly workOrders: readonly WorkOrder[]) {}

  async findAll(): Promise<WorkOrder[]> {
    return [...this.workOrders];
  }
}
