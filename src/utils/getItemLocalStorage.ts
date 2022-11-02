import { TO_DO_LIST_ITEMS_KEY } from "src/constants/localStorage";
import { NULL_TYPE, UNDEFINED_TYPE } from "src/constants/types";

export const getItemLocalStorage = (key: string = TO_DO_LIST_ITEMS_KEY) => {
  const stringifyItem = localStorage.getItem(key);

  if (
    !stringifyItem ||
    stringifyItem.includes(NULL_TYPE) ||
    stringifyItem.includes(UNDEFINED_TYPE)
  ) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};
