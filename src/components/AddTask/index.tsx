import React, { useState, useCallback } from "react";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { ReactComponent as Plus } from "src/assets/plus.svg";

const KEY_ENTER = "Enter";
const PLUS_ICON_SIZE = 50;

const AddTask = () => {
  const [value, setValue] = useState("");

  const clearInput = useCallback(({ key }) => {
    if (key.includes(KEY_ENTER)) setValue("");
  }, []);

  return (
    <div className="flex max-w-2xl w-full mx-auto bg-slate-500 mt-14 p-4 rounded-2xl">
      <Input
        value={value}
        className="text-3xl"
        setValue={setValue}
        onKeyDown={clearInput}
      />
      <Button
        className="bg-white rounded-full active:bg-gray-300"
        onClick={clearInput}
        isDisabled={!value}
      >
        <Plus width={PLUS_ICON_SIZE} height={PLUS_ICON_SIZE} />
      </Button>
    </div>
  );
};

export default AddTask;
