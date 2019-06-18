import React from "react";

import classes from "./ContactForm.module.scss";
import Form from "../../../shared/Form/Form";

const contactForm = props => {
    return (
    <section className={classes.form}>
      <h2>Get in Touch</h2>
      <div className={classes.wrapper}>
        <Form
          formData={props.formData}
          isFormValid={props.isFormValid}
          formState={props.formState}
          submitForm={props.submitForm}
          changeHandler={props.changeHandler}
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
