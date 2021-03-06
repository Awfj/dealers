import React from "react";

import classes from "./Form.module.scss";
import Input from "./Input/Input";

const form = props => {
  const formElementsArray = [];
  let button = null;

  if (props.htmlPath.includes("sign-up")) {
    button = <button>Sign Up</button>;
  } else if (props.htmlPath.includes("sign-in")) {
    button = <button>Sign In</button>;
  } else if (props.htmlPath.includes("contact")) {
    button = <button>Send Message</button>;
  }

  for (let key in props.formData) {
    formElementsArray.push({
      id: key,
      config: props.formData[key]
    });
  }
  let notification = null;

  if (!props.formState.submitFailedFor.includes(props.htmlPath)) {
    notification = null;
  } else if (props.formState.isSubmitSucceded && props.formState.isValid) {
    notification = <p className={classes.success}>We'll contact you.</p>;
  } else if (props.formState.isSubmitFailed && !props.formState.isValid) {
    notification = (
      <p className={classes.error}>All required fields must be filled in.</p>
    );
  }
  
  return (
    <form className={classes.form} onSubmit={props.submitForm}>
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
            changeFormElement={event =>
              props.changeFormElement(
                event,
                formElement.id,
                props.formData,
                props.updateState
              )
            }
          />
        );
      })}
      {button}
      {notification}
    </form>
  );
};

export default form;
