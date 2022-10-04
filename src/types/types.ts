export interface TaskItemType {
  id: string;
  description: string;
  isDone?: boolean;
}

export type VoidFunctionWithValue = (value) => void;
