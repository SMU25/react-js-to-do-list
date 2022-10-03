import React, { FC } from "react";
import { TaskItemType } from "src/types/types";
import { TaskItem } from "./TaskItem";

interface Props {
  tasksList: TaskItemType[];
}

const TasksList: FC<Props> = ({ tasksList = [] }) => {
  if (!tasksList.length) return null;

  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex flex-col justify-center max-w-2xl w-full items-center bg-slate-300 px-7 py-10 rounded-lg">
        {tasksList.map((item: TaskItemType) => (
          <TaskItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
