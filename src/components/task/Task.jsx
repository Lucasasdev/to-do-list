import { useSelector } from "react-redux";

import "./Task.css";

const Task = () => {
  const { tasks } = useSelector((rootReducer) => rootReducer.taskReducer);

  return (
    <>
      {tasks.map((task) => (
        <div className="task-container">
          <h1 key={task.id} className="task">
            {task.title}
          </h1>
        </div>
      ))}
    </>
  );
};

export default Task;
