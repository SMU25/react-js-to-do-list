const KEY_ENTER = "Enter";

export const onKeyDown = (
  func: VoidFunction,
  keyEvent: string,
  key: string = KEY_ENTER
) => {
  if (keyEvent.includes(key)) func();
};
