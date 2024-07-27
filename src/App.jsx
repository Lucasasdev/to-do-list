import Header from "./components/header/Header";
import InputTask from "./components/inputTask/InputTask";
import Tasks from "./components/tasks/Tasks";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Fist example",
      description: "Firt description exemple",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Second example",
      description: "Second description example",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Third example",
      description: "Third description example",
      isCompleted: false,
    },
  ]);

  const handleTaskAddition = (inputTitle, inputDescription) => {
    if (!inputTitle) {
      alert("The title field is required.");
      return;
    }

    const newTask = [
      {
        id: uuidv4(),
        title: inputTitle,
        description: inputDescription,
        isCompleted: false,
      },
      ...tasks,
    ];

    setTasks(newTask);
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <InputTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
