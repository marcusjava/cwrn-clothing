import React from "react";

import "./styles.scss";

function FormInput({ handleChange, label, name, ...props }) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        name={name}
        {...props}
      />
      {label ? (
        <label
          className={`${props.value.length && "shrink"} form-input-label`}
          htmlFor={name}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
