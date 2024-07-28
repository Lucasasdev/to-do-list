import Task from "../task/Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletetion }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletetion={handleTaskDeletetion}
        />
      ))}
    </>
  );
};

export default Tasks;
