import React from "react";

import classes from "./ContactForm.module.scss";
import Form from "../../../shared/Form/Form";

const contactForm = props => {
  const submitButton = <button>Send Message</button>;
  let notification = null;
  if (props.formState.isSubmitted && props.formState.isValid) {
    notification = <p className={classes.success}>We'll contact you.</p>;
  } else if (
    props.formState.failedSubmit &&
    !props.formState.isValid
  ) {
    notification = (
      <p className={classes.error}>All required fields must be filled in.</p>
    );
  }

  return (
    <section className={classes.form}>
      <h2>Get in Touch</h2>
      <div className={classes.wrapper}>
        <Form
          formData={props.formData}
          formState={props.formState}
          submitHandler={props.submitHandler}
          changeHandler={props.changeHandler}
          notification={notification}
          submitButton={submitButton}
        />

        <div className={classes.addresses}>
          {props.addresses.map((address, index) => {
            return (
              <div className={classes.addressGroup} key={index}>
                <h4>{address.city}</h4>
                <p>{address.address}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default contactForm;
