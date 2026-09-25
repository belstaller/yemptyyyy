"use client";

import { useState } from "react";
import type { WorkOrderBoardDTO, WorkOrderCardDTO } from "@/application/WorkOrderBoardDTO";
import { BoardColumn } from "./BoardColumn";
import { WorkOrderDetail } from "./WorkOrderDetail";

/** View-only board: cards open their details but can't be moved. */
export function WorkOrderBoard({ board }: { board: WorkOrderBoardDTO }) {
  const [selected, setSelected] = useState<WorkOrderCardDTO | null>(null);

  return (
    <>
      <div className="board">
        {board.columns.map((column) => (
          <BoardColumn key={column.key} column={column} onOpen={setSelected} />
        ))}
      </div>
      {selected && <WorkOrderDetail key={selected.id} workOrder={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
