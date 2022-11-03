import React, { FC, useCallback } from "react";
import cn from "classnames";
import { VoidFunctionWithValue, TaskItemType } from "src/types/types";

interface Props extends Pick<TaskItemType, "isDone"> {
  className?: string;
  labelText?: string;
  value: string;
  setValue: (value: string) => void;
  isDone?: boolean;
  disabled?: boolean;
  onUpdate?: VoidFunction;
  onKeyDown?: VoidFunction | VoidFunctionWithValue;
}

const Input: FC<Props> = ({
  className,
  labelText,
  value,
  setValue,
  isDone,
  onUpdate,
  onKeyDown,
  disabled,
  ...props
}) => {
  const setInputValue = useCallback(
    ({ target }) => setValue(target.value),
    [setValue]
  );

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
        onKeyUp={onUpdate}
        onKeyDown={onKeyDown}
        onBlur={onUpdate}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default Input;
