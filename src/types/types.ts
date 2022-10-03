export interface TaskItemType {
  id: number;
  description: string;
  isDone?: boolean;
}

export type ClearInput = (value) => void;
