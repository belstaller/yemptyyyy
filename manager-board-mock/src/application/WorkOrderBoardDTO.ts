export interface AssigneeDTO {
  name: string;
  initials: string;
  isAgent: boolean;
}

export interface WorkOrderCardDTO {
  id: string;
  title: string;
  /** Human label for known statuses, the original value otherwise. */
  statusLabel: string;
  statusRecognised: boolean;
  problem: string;
  requirements: string[];
  acceptanceCriteria: string[];
  assignee?: AssigneeDTO;
  blockedBy: string[];
  /** Ids of the Work Orders this one blocks. */
  blocks: string[];
}

export interface BoardColumnDTO {
  key: string;
  label: string;
  kind: "status" | "needs-attention";
  workOrders: WorkOrderCardDTO[];
}

export interface WorkOrderBoardDTO {
  columns: BoardColumnDTO[];
}
