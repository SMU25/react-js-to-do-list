import React, { useState, useCallback, FC } from "react";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { TaskItemType } from "src/types/types";
import { ReactComponent as Done } from "src/assets/done.svg";
import { ReactComponent as NotDone } from "src/assets/not-done.svg";
import { ReactComponent as Trash } from "src/assets/trash.svg";

const CHECK_ICON_SIZE = 40;
const TRASH_ICON_SIZE = 30;

export const TaskItem: FC<TaskItemType> = ({ description, isDone }) => {
  const [isDoneTask, setIsDoneTask] = useState(isDone);
  const toogleIsDone = useCallback(() => {
    setIsDoneTask((prev) => !prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDoneTask]);

  const [inputValue, setInputValue] = useState(description);

  const Check = isDoneTask ? Done : NotDone;

  return (
    <div className="flex items-center w-full bg-input-bg-task my-2 p-4 rounded-2xl">
      <Button className="mr-3" onClick={toogleIsDone}>
        <Check width={CHECK_ICON_SIZE} height={CHECK_ICON_SIZE} />
      </Button>
      <Input value={inputValue} isDone={isDoneTask} setValue={setInputValue} />
      <Button className="ml-5" onClick={() => {}}>
        <Trash width={TRASH_ICON_SIZE} height={TRASH_ICON_SIZE} />
      </Button>
    </div>
  );
};
