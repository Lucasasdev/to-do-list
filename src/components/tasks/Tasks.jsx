import Task from "../task/Task";

const Tasks = ({
  tasks,
  handleTaskClick,
  handleTaskDeletetion,
  handleTaskEdition,
}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletetion={handleTaskDeletetion}
          handleTaskEdition={handleTaskEdition}
        />
      ))}
    </>
  );
};

export default Tasks;
