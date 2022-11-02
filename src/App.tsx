import React, { useState, useEffect, useCallback, createContext } from "react";
import Header from "src/components/Header";
import TasksList from "src/components/TasksList";
import AddTask from "src/components/AddTask";
import { getItemLocalStorage } from "src/utils/getItemLocalStorage";
import { setItemLocalStorage } from "src/utils/setItemLocalStorage";
import { TaskItemType } from "./types/types";
import "./styles.css";

export const AppContext = createContext(null);

const BANNER_TEXT = "All notes are saved automatically !";

function App() {
  const [tasksList, setTasksList] = useState<TaskItemType[]>(
    getItemLocalStorage()
  );

  const addTaskItem = useCallback(
    (value: TaskItemType) => {
      if (tasksList?.length) setTasksList((prev) => [...prev, value]);
      else {
        setTasksList([value]);
      }
    },
    [tasksList]
  );

  const deleteTaskItem = useCallback(
    (currentId: string) =>
      setTasksList((prev) => prev.filter(({ id }) => id !== currentId)),
    []
  );

  const updateTaskItem = useCallback((currentId: string, value: string) => {
    setTasksList((prev) =>
      prev.map((item) =>
        item.id !== currentId ? item : { ...item, description: value }
      )
    );
  }, []);

  const checkTaskItem = useCallback((currentId: string) => {
    setTasksList((prev) =>
      prev.map((item) =>
        item.id !== currentId ? item : { ...item, isDone: !item.isDone }
      )
    );
  }, []);

  useEffect(() => setItemLocalStorage(tasksList), [tasksList]);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ deleteTaskItem, updateTaskItem, checkTaskItem }}
      >
        <Header />
        <div className="flex justify-center items-center max-w-2xl bg-slate-700 mt-9 mx-auto p-7 border-2 border-slate-400 rounded-md">
          <p className="text-emerald-600 text-2xl font-medium text-center">
            {BANNER_TEXT}
          </p>
        </div>
        <div className="pt-7 pb-10">
          <AddTask addTaskItem={addTaskItem} />
          <TasksList tasksList={tasksList} />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
