import React, { FC, memo } from "react";
import { TaskItemType } from "src/types/types";
import { TaskItem } from "./TaskItem";

interface Props {
  tasksList: TaskItemType[];
}

const TasksList: FC<Props> = memo(({ tasksList = [] }) => {
  if (!tasksList.length) return null;

  return (
    <div className="flex justify-center w-full h-full mt-14">
      <div className="flex flex-col items-center justify-center max-w-2xl w-full bg-slate-300 px-7 py-10 rounded-md">
        {tasksList.map((item: TaskItemType) => (
          <TaskItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
});

export default TasksList;
