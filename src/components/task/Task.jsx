import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletetion }) => {
  return (
    <div
      className="task-container"
      style={task.isCompleted ? { background: "rgba(0, 205, 45, 0.3)" } : {}}
    >
      <div
        className="content-container"
        onClick={() => handleTaskClick(task.id)}
      >
        <h1 className="task">{task.title}</h1>
        <p className="description">{task.description}</p>
      </div>

      <div className="icon-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletetion(task.id)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Task;
