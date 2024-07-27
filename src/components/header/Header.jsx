import { addTask } from "../../redux/task/actions";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const { tasks } = useSelector((rootReducer) => rootReducer.taskReducer);

  console.log({ tasks });

  const tasksList = [
    {
      id: 1,
      title: "test",
      description: "first test",
      isCompleted: false,
    },
    {
      id: 2,
      title: "test 2",
      description: "second test",
      isCompleted: false,
    },
  ];

  const dispatch = useDispatch();

  const handleTitleClick = () => {
    dispatch(addTask(tasksList));
  };

  return (
    <div onClick={handleTitleClick}>
      <h1 className="header">To do Challenge</h1>
    </div>
  );
};

export default Header;
