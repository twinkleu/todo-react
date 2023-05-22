import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ label, checked, onChange, complete }) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <div className="checkbox">
      <label
        className="checkbox-label"
        style={{ textDecoration: complete ? "line-through" : "" }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="checkbox-input"
        />
        <span className={`checkbox-custom ${checked ? "checked" : ""}`}></span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
