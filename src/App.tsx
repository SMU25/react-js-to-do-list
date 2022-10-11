import React, { useState, useEffect, useCallback, createContext } from "react";
import Header from "src/components/Header";
import TasksList from "src/components/TasksList";
import AddTask from "src/components/AddTask";
import { TO_DO_LIST_ITEMS_KEY } from "src/constants/localStorageKeys";
import "./styles.css";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "./services/localStorage";
import { TaskItemType } from "./types/types";

export const AppContext = createContext(null);

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

  const updateTaskItem = useCallback(
    (currentId: string, value: string) => {
      const currentTaskItem = tasksList.find(({ id }) => id === currentId);
      currentTaskItem.description = value;

      localStorage.setItem(TO_DO_LIST_ITEMS_KEY, JSON.stringify(tasksList));
    },
    [tasksList]
  );

  const checkTaskItem = useCallback(
    (currentId: string) => {
      const currentTaskItem = tasksList.find(({ id }) => id === currentId);
      currentTaskItem.isDone = !currentTaskItem.isDone;

      localStorage.setItem(TO_DO_LIST_ITEMS_KEY, JSON.stringify(tasksList));
    },
    [tasksList]
  );

  useEffect(() => {
    setItemLocalStorage(tasksList);
  }, [tasksList]);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ deleteTaskItem, updateTaskItem, checkTaskItem }}
      >
        <Header />
        <div className="py-10">
          <AddTask addTaskItem={addTaskItem} />
          <TasksList tasksList={tasksList} />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
