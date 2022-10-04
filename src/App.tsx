import React, { useState, useEffect, useCallback, createContext } from "react";
import Header from "src/components/Header";
import TasksList from "src/components/TasksList";
import AddTask from "src/components/AddTask";
import "./styles.css";
import { TaskItemType } from "./types/types";

export const AppContext = createContext(null);

const TO_DO_LIST_ITEMS_KEY = "TO_DO_LIST_ITEMS";

const TO_DO_LIST_ITEMS = JSON.parse(localStorage.getItem(TO_DO_LIST_ITEMS_KEY));

function App() {
  const [tasksList, setTasksList] = useState<TaskItemType[]>(TO_DO_LIST_ITEMS);

  const addTaskItem = useCallback(
    (value: TaskItemType) => setTasksList((prev) => [...prev, value]),
    []
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
    localStorage.setItem(TO_DO_LIST_ITEMS_KEY, JSON.stringify(tasksList));
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
