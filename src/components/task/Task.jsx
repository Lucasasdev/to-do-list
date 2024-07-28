import "./Task.css";

const Task = ({ task, handleTaskClick }) => {
  return (
    <div
      className="task-container"
      style={task.isCompleted ? { background: "rgba(0, 205, 45, 0.3)" } : {}}
    >
      <div onClick={() => handleTaskClick(task.id)}>
        <h1 className="task">{task.title}</h1>
        <p className="description">{task.description}</p>
      </div>
    </div>
  );
};

export default Task;
