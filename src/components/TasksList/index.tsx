import React, { FC } from "react";
import { TaskItem } from "./TaskItem";
import { TaskItemType } from "./types";

interface Props {
  tasksList: TaskItemType[];
}

const TasksList: FC<Props> = ({ tasksList = [] }) => {
  if (!tasksList.length) return null;

  return (
    <div className="flex justify-center w-full bg-cyan-800 py-5">
      <div className="flex flex-col justify-center max-w-lg w-full items-center bg-slate-300 p-5 rounded-lg">
        {tasksList.map((item: TaskItemType) => (
          <TaskItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
