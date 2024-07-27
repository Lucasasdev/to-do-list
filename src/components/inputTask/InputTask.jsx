import { useState } from "react";
import Button from "../button/Button";
import "./InputTask.css";

const InputTask = ({ handleTaskAddition }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const handleInputTitleChange = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputDescChange = (e) => {
    setInputDescription(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputTitle, inputDescription);
    setInputTitle("");
    setInputDescription("");
  };

  return (
    <div>
      <div className="input-container">
        <div>
          <input
            type="text"
            placeholder="Add a title"
            className="input-title"
            onChange={handleInputTitleChange}
            value={inputTitle}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add a description (Optional)"
            className="input-description"
            onChange={handleInputDescChange}
            value={inputDescription}
          />
        </div>
        <div className="add-task-button-container">
          <Button onClick={handleAddTaskClick}>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default InputTask;
