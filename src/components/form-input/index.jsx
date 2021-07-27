import React from "react";
import { InputGroup, Input, Label } from "./styles/form-input";

function FormInput({ handleChange, label, name, ...props }) {
  return (
    <InputGroup>
      <Input onChange={handleChange} name={name} {...props} />
      {label ? (
        <Label
          className={`${props.value.length && "shrink"} form-input-label`}
          htmlFor={name}
        >
          {label}
        </Label>
      ) : null}
    </InputGroup>
  );
}

export default FormInput;
