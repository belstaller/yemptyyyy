import type { WorkOrderCardDTO } from "@/application/WorkOrderBoardDTO";
import { AgentIcon, LinkIcon, LockIcon } from "./icons";

function formatIds(ids: string[]): string {
  const [first, ...rest] = ids;
  return rest.length > 0 ? `${first} +${rest.length}` : (first ?? "");
}

export function WorkOrderCard({ workOrder, onOpen }: { workOrder: WorkOrderCardDTO; onOpen: () => void }) {
  const { assignee } = workOrder;
  return (
    <button type="button" className="card" onClick={onOpen} aria-haspopup="dialog">
      <span className="card-topline">
        <span className="card-id">{workOrder.id}</span>
        <span className={`card-status${workOrder.statusRecognised ? "" : " card-status--attention"}`}>
          {workOrder.statusLabel}
        </span>
      </span>
      <span className="card-title">{workOrder.title}</span>
      {workOrder.blockedBy.length > 0 && (
        <span className="chip chip--waiting" title={`Blocked by ${workOrder.blockedBy.join(", ")}`}>
          <LockIcon />
          WAITING {formatIds(workOrder.blockedBy)}
          <span className="chip-dot" />
        </span>
      )}
      {workOrder.blocks.length > 0 && (
        <span className="chip chip--blocks" title={`Blocks ${workOrder.blocks.join(", ")}`}>
          <LinkIcon />
          BLOCKS {formatIds(workOrder.blocks)}
          <span className="chip-dot" />
        </span>
      )}
      {assignee && (
        <span className="assignee">
          {assignee.isAgent ? (
            <span className="assignee-agent">
              <AgentIcon />
            </span>
          ) : (
            <span className="avatar">{assignee.initials}</span>
          )}
          {assignee.name}
        </span>
      )}
    </button>
  );
}
