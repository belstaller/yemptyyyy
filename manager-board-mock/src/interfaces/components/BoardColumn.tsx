import type { BoardColumnDTO, WorkOrderCardDTO } from "@/application/WorkOrderBoardDTO";
import { ColumnIcon } from "./icons";
import { WorkOrderCard } from "./WorkOrderCard";

export function BoardColumn({
  column,
  onOpen,
}: {
  column: BoardColumnDTO;
  onOpen: (workOrder: WorkOrderCardDTO) => void;
}) {
  return (
    <section
      className={`column${column.kind === "needs-attention" ? " column--attention" : ""}`}
      aria-labelledby={`column-${column.key}`}
    >
      <h2 className="column-header" id={`column-${column.key}`}>
        <ColumnIcon columnKey={column.key} />
        {column.label}
        <span className="column-count">{column.workOrders.length}</span>
      </h2>
      <div className="column-body">
        {column.workOrders.length === 0 ? (
          <p className="column-empty">No work orders</p>
        ) : (
          column.workOrders.map((workOrder) => (
            <WorkOrderCard key={workOrder.id} workOrder={workOrder} onOpen={() => onOpen(workOrder)} />
          ))
        )}
      </div>
    </section>
  );
}
