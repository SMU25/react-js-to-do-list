import React, { FC, useCallback } from "react";
import cn from "classnames";
import { VoidFunctionWithValue, TaskItemType } from "src/types/types";

interface Props extends Pick<TaskItemType, "isDone"> {
  className?: string;
  labelText?: string;
  value: string;
  setValue?: (value) => void;
  onBlur?: VoidFunction;
  onKeyDown?: VoidFunction | VoidFunctionWithValue;
}

const Input: FC<Props> = ({
  className,
  labelText,
  value,
  isDone,
  setValue,
  onBlur,
  onKeyDown,
  ...props
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setInputValue = useCallback(({ target }) => setValue(target.value), []);

  const shownLabel = !value && labelText;

  return (
    <div className="relative w-full text-white">
      {shownLabel && (
        <label className="absolute left-2 text-3xl font-bold">
          {labelText}
        </label>
      )}
      <input
        className={cn(
          "w-full bg-transparent text-2xl outline-none font-semibold tracking-wide",
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
    </div>
  );
};

export default Input;
