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
    <div className="container">
      <div className="input-container">
        <div>
          <input
            type="text"
            placeholder="Title"
            className="input-title"
            onChange={handleInputTitleChange}
            value={inputTitle}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Description (Optional)"
            className="input-description"
            onChange={handleInputDescChange}
            value={inputDescription}
          />
        </div>
        <div className="add-task-button-container">
          <Button onClick={handleAddTaskClick}>+</Button>
        </div>
      </div>
    </div>
  );
};

export default InputTask;
