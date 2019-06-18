import React from "react";
import { connect } from "react-redux";

import Input from "./Input/Input";

const form = (props) => {
  const formElementsArray = [];

  for (let key in props.formData) {
    formElementsArray.push({
      id: key,
      config: props.formData[key]
    });
  }

  let notification = null;
  if (props.formState.failedSubmit) {
    notification = props.notification;
  } else if (props.formState.isSubmitted) {
    notification = props.notification;
  }

  return (
    <form onSubmit={props.submitHandler}>
      {formElementsArray.map(formElement => {
        return (
          <Input
            key={formElement.id}
            id={formElement.id}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changeHandler={event =>
              props.changeHandler(event, formElement.id)
            }
            onCheckValidity={props.onCheckValidity}
          />
        );
      })}
      {props.submitButton}
      {notification}
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckValidity: (value, rules) =>
      dispatch({ type: "CHECK_VALIDITY", value, rules })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(form);
