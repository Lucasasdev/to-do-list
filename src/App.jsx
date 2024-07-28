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

  const [filter, setFilter] = useState("all");

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

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId)
        return { ...task, isCompleted: !task.isCompleted };
      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskDeletetion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  const handleTaskEdition = (taskId, newTitle, newDescription) => {
    if (!newTitle) {
      alert("The title is required!");
      return;
    }
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: newTitle, description: newDescription };
      }
      return task;
    });

    setTasks(newTasks);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.isCompleted);
      case "uncompleted":
        return tasks.filter((task) => !task.isCompleted);
      default:
        return tasks;
    }
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <InputTask handleTaskAddition={handleTaskAddition} />

        <div className="all-filter-button-container">
          <button
            className={`all-filter-button ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`all-filter-button ${
              filter === "completed" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("completed")}
          >
            Completed
          </button>
          <button
            className={`all-filter-button ${
              filter === "uncompleted" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("uncompleted")}
          >
            Uncompleted
          </button>
        </div>

        <Tasks
          tasks={getFilteredTasks()}
          handleTaskClick={handleTaskClick}
          handleTaskDeletetion={handleTaskDeletetion}
          handleTaskEdition={handleTaskEdition}
        />
      </div>
    </>
  );
}

export default App;
