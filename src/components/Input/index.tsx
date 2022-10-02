import React, { FC } from "react";
import { TaskItemType } from "src/components/TasksList/types";

interface Props extends Pick<TaskItemType, "isDone"> {
  value: string;
}

const Input: FC<Props> = ({ value, isDone }) => {
  return <input value={value} />;
};

export default Input;
