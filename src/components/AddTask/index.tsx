import React, { useState, useCallback, FC } from "react";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { onKeyDown } from "src/utils/onKeyDown";
import { TaskItemType, VoidFunctionWithValue } from "src/types/types";
import { ReactComponent as Plus } from "src/assets/plus.svg";

const PLUS_ICON_SIZE = 50;

const LABEL_TEXT = "Add a new task";

interface Props {
  addTaskItem: VoidFunctionWithValue;
}

const AddTask: FC<Props> = ({ addTaskItem }) => {
  const [value, setValue] = useState("");

  const createdTaskItem: TaskItemType = {
    id: String(new Date().getTime()),
    isDone: false,
    description: value,
  };

  const updateTasksList = useCallback(() => {
    addTaskItem(createdTaskItem);
    setValue("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onKeyEnter = useCallback(
    ({ key }) => {
      if (value.length) onKeyDown(updateTasksList, key);
    },
    [updateTasksList, value]
  );

  return (
    <div className="flex items-center max-w-2xl w-full mx-auto bg-slate-500 mt-5 p-4 rounded-2xl">
      <Input
        labelText={LABEL_TEXT}
        value={value}
        className="text-3xl"
        setValue={setValue}
        onKeyDown={onKeyEnter}
      />
      <Button
        className="bg-white rounded-full active:bg-gray-300"
        onClick={updateTasksList}
        isDisabled={!value}
      >
        <Plus width={PLUS_ICON_SIZE} height={PLUS_ICON_SIZE} />
      </Button>
    </div>
  );
};

export default AddTask;
