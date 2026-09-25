import type { WorkOrder } from "./WorkOrder";

export interface WorkOrderRepository {
  findAll(): Promise<WorkOrder[]>;
}
