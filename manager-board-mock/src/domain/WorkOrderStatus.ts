/** Statuses that map to a board column, in the Manager's column order. */
export const BOARD_STATUSES = ["backlog", "todo", "in_progress", "in_review", "done"] as const;

export type BoardStatus = (typeof BOARD_STATUSES)[number];

export const CANCELLED_STATUS = "cancelled";

/** Column wording, matching the Manager. */
export const BOARD_STATUS_LABELS: Record<BoardStatus, string> = {
  backlog: "Backlog",
  todo: "To Do",
  in_progress: "In progress",
  in_review: "In review",
  done: "Done",
};

export function isBoardStatus(status: string): status is BoardStatus {
  return (BOARD_STATUSES as readonly string[]).includes(status);
}

export function isCancelled(status: string): boolean {
  return status === CANCELLED_STATUS;
}
