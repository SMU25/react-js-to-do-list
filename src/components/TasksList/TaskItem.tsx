import React, { FC } from "react";
import Input from "../Input";
import { TaskItemType } from "./types";

export const TaskItem: FC<TaskItemType> = ({
  id,
  title,
  description,
  isDone,
}) => {
  return (
    <div>
      <Input value={description} isDone={isDone} />
    </div>
  );
};
