import { TO_DO_LIST_ITEMS_KEY } from "src/constants/localStorageKeys";

const TO_DO_LIST_ITEMS_STRINGIFY = localStorage.getItem(TO_DO_LIST_ITEMS_KEY);

export const getItemLocalStorage = (key = TO_DO_LIST_ITEMS_KEY) =>
  JSON.parse(localStorage.getItem(key));

export const setItemLocalStorage = (item = [], key = TO_DO_LIST_ITEMS_KEY) =>
  localStorage.setItem(key, JSON.stringify(item));

if (!TO_DO_LIST_ITEMS_STRINGIFY?.length) setItemLocalStorage();
