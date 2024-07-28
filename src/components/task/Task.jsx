import "./Task.css";

const Task = ({
  task,
  handleTaskClick,
  handleTaskDeletetion,
  handleTaskEdition,
}) => {
  const handleEdit = () => {
    const newTitle = prompt("Enter the new title:");
    const newDescription = prompt("Enter the new description:");

    handleTaskEdition(task.id, newTitle, newDescription);
  };

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

      <div className="edit-button-container">
        <button className="edit-task-button" onClick={handleEdit}>
          E
        </button>
      </div>
      <div className="remove-task-container">
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
