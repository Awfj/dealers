import React from "react";

import classes from "./Form.module.scss";
import Input from "./Input/Input";

const form = props => {
  const formElementsArray = [];

  for (let key in props.formData) {
    formElementsArray.push({
      id: key,
      config: props.formData[key]
    });
  }

  let notification = null;
  if (props.formState.isSubmitSucceded && props.isFormValid) {
    notification = <p className={classes.success}>We'll contact you.</p>;
  } else if (props.formState.isSubmitFailed && !props.isFormValid) {
    notification = (
      <p className={classes.error}>All required fields must be filled in.</p>
    );
  }

  return (
    <form onSubmit={props.submitForm}>
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
            changeHandler={event => props.changeHandler(event, formElement.id)}
          />
        );
      })}
      <button>Send Message</button>
      {notification}
    </form>
  );
};

export default form;
