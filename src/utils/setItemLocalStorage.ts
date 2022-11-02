import { TO_DO_LIST_ITEMS_KEY } from "src/constants/localStorage";
import { TaskItemType } from "src/types/types";

export const setItemLocalStorage = (
  value: TaskItemType[] = [],
  key: string = TO_DO_LIST_ITEMS_KEY
) => localStorage.setItem(key, JSON.stringify(value));
