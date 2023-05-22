import React, { useState } from "react";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import "./TodoRow.scss";
import "../Checkbox/Checkbox.scss";

const TodoRow = ({ todo, item, index, onDelete, onComplete }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = () => {
    onDelete(index);
  };

  const handleCompleteChange = () => {
    onComplete(index);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="todo-row"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Checkbox
        label={item.todo}
        checked={item.complete}
        onChange={handleCompleteChange}
        complete={item.complete}
      />
      {isHovered && (
        <Button variant="small" onClick={handleDelete}>
          Delete
        </Button>
      )}
    </div>
  );
};

export default TodoRow;
