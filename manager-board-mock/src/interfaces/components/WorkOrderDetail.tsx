"use client";

import { useEffect, useRef } from "react";
import type { WorkOrderCardDTO } from "@/application/WorkOrderBoardDTO";

/** Modal with the rest of a Work Order. Closes on ×, Esc or a backdrop click. */
export function WorkOrderDetail({ workOrder, onClose }: { workOrder: WorkOrderCardDTO; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="dialog"
      aria-labelledby="work-order-detail-title"
      onClose={onClose}
      onClick={(event) => {
        // A click on the <dialog> element itself (not its content) is the backdrop.
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className="dialog-inner">
        <div className="dialog-header">
          <div className="dialog-heading">
            <span className="card-id">{workOrder.id}</span>
            <h2 id="work-order-detail-title">{workOrder.title}</h2>
          </div>
          <button type="button" className="dialog-close" aria-label="Close" onClick={() => dialogRef.current?.close()}>
            ×
          </button>
        </div>

        <div className="dialog-meta">
          <span className={`card-status${workOrder.statusRecognised ? "" : " card-status--attention"}`}>
            {workOrder.statusLabel}
          </span>
          {workOrder.assignee && <span className="card-status">Assigned to {workOrder.assignee.name}</span>}
          {workOrder.blockedBy.length > 0 && (
            <span className="card-status card-status--attention">Blocked by {workOrder.blockedBy.join(", ")}</span>
          )}
        </div>

        <section>
          <h3>Problem</h3>
          <p>{workOrder.problem}</p>
        </section>
        <section>
          <h3>Requirements</h3>
          <ul>
            {workOrder.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Acceptance criteria</h3>
          <ul>
            {workOrder.acceptanceCriteria.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </dialog>
  );
}
