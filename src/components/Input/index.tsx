import React, { FC, useCallback } from "react";
import cn from "classnames";
import { ClearInput, TaskItemType } from "src/types/types";

interface Props extends Pick<TaskItemType, "isDone"> {
  className?: string;
  value: string;
  setValue?: (value) => void;
  onBlur?: VoidFunction;
  onKeyDown?: VoidFunction | ClearInput;
}

const Input: FC<Props> = ({
  className,
  value,
  isDone,
  setValue,
  onBlur,
  onKeyDown,
  ...props
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setInputValue = useCallback(({ target }) => setValue(target.value), []);

  return (
    <input
      className={cn(
        "w-full bg-transparent text-white text-2xl font-bolder outline-none",
        className,
        {
          "line-through": isDone,
        }
      )}
      value={value}
      onChange={setInputValue}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
};

export default Input;
