import React from "react";

import classes from "./Input.module.scss";

const input = props => {
  let inputElement = null;
  const inputClasses = [classes.input];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          id={props.id}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changeFormElement}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          id={props.id}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changeFormElement}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changeFormElement}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          id={props.id}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changeFormElement}
        />
      );
  }
  
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
