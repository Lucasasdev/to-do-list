import Task from "../task/Task";

const Tasks = ({ tasks, handleTaskClick }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} handleTaskClick={handleTaskClick} />
      ))}
    </>
  );
};

export default Tasks;
