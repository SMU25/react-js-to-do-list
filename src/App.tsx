import React from "react";
import Header from "src/components/Header";
import TasksList from "src/components/TasksList";
import AddTask from "src/components/AddTask";
import "./styles.css";

//mocks
const ITEMS = [
  { id: 1, description: "test", isDone: true },
  { id: 2, description: "test2", isDone: false },
  { id: 3, description: "test3", isDone: true },
  { id: 4, description: "test4", isDone: false },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="bg-cyan-800 py-10">
        <TasksList tasksList={ITEMS} />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
