import React from "react";
import Header from "src/components/Header";
import TasksList from "src/components/TasksList";
import "./styles.css";

//mocks
const ITEMS = [
  { id: 1, title: "1", description: "test", isDone: true },
  { id: 2, title: "2", description: "test2", isDone: false },
  { id: 3, title: "3", description: "test3", isDone: true },
  { id: 4, title: "4", description: "test4", isDone: false },
];

function App() {
  return (
    <div className="App">
      <Header />
      <TasksList tasksList={ITEMS} />
    </div>
  );
}

export default App;
