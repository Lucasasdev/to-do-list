import "./Task.css";

const Task = ({ task }) => {
  return (
    <div className="task-container" key={task.id}>
      <h1 className="task">{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
