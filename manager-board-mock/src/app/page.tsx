import { GetWorkOrderBoard } from "@/application/GetWorkOrderBoard";
import { InMemoryWorkOrderRepository } from "@/infrastructure/InMemoryWorkOrderRepository";
import { mockWorkOrders } from "@/infrastructure/mockWorkOrders";
import { WorkOrderBoard } from "@/interfaces/components/WorkOrderBoard";

// Composition root: the only place that wires infrastructure into the use case.
export default async function Page() {
  const board = await new GetWorkOrderBoard(new InMemoryWorkOrderRepository(mockWorkOrders)).execute();

  return (
    <main className="page">
      <div className="board-surface">
        <WorkOrderBoard board={board} />
      </div>
    </main>
  );
}
