import { useSelector } from "react-redux";
import Task from "../task/Task";

const Tasks = () => {
  const { tasks } = useSelector((rootReducer) => rootReducer.taskReducer);

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} />
      ))}
    </>
  );
};

export default Tasks;
