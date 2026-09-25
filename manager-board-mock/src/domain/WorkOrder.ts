export interface Assignee {
  name: string;
  /** Agents get a robot badge instead of initials, like in the Manager. */
  kind?: "person" | "agent";
}

export interface WorkOrder {
  /** Short display id, e.g. "WO-01AB98". */
  id: string;
  title: string;
  /**
   * Raw status value. Kept as a plain string on purpose: made-up data may
   * contain values the board doesn't recognise, and those must still show.
   */
  status: string;
  problem: string;
  requirements: string[];
  acceptanceCriteria: string[];
  assignee?: Assignee;
  /** Ids of the Work Orders that block this one. */
  blockedBy?: string[];
  /** Ids of the Work Orders this one blocks, including ones not on the board. */
  blocks?: string[];
}
