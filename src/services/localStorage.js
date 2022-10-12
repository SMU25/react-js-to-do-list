import { TO_DO_LIST_ITEMS_KEY } from "src/constants/localStorage";

const NULL_TYPE = "null";
const UNDEFINED_STRING = "undefined";

const TO_DO_LIST_ITEMS_STRINGIFY = localStorage.getItem(TO_DO_LIST_ITEMS_KEY);

const IS_NOT_VALID =
  TO_DO_LIST_ITEMS_STRINGIFY.includes(NULL_TYPE) ||
  TO_DO_LIST_ITEMS_STRINGIFY.includes(UNDEFINED_STRING);

export const getItemLocalStorage = (key = TO_DO_LIST_ITEMS_KEY) =>
  JSON.parse(localStorage.getItem(key));

export const setItemLocalStorage = (item = [], key = TO_DO_LIST_ITEMS_KEY) =>
  localStorage.setItem(key, JSON.stringify(item));

if (IS_NOT_VALID) setItemLocalStorage();
