import React, { Component } from "react";

import classes from "./ContactForm.module.scss";
import Form from "../../../shared/Form/Form";

class ContactForm extends Component {
  state = {
    formData: {
      firstName: {
        elementType: "input",
        label: "First Name*",
        elementConfig: {
          type: "text"
        },
        valid: false,
        touched: false,
        value: "",
        validation: {
          required: true
        }
      },
      lastName: {
        elementType: "input",
        label: "Last Name*",
        elementConfig: {
          type: "text"
        },
        valid: false,
        touched: false,
        value: "",
        validation: {
          required: true
        }
      },
      email: {
        elementType: "input",
        label: "Email*",
        elementConfig: {
          type: "text"
        },
        valid: false,
        touched: false,
        value: "",
        validation: {
          required: true,
          isEmail: true
        }
      },
      subject: {
        elementType: "input",
        label: "Subject*",
        elementConfig: {
          type: "text"
        },
        valid: false,
        touched: false,
        value: "",
        validation: {
          required: true
        }
      },
      message: {
        elementType: "textarea",
        label: "Message*",
        valid: false,
        touched: false,
        value: "",
        validation: {
          required: true
        }
      }
    },
    formState: {
      failedSubmit: false,
      isValid: false,
      isSubmitted: false
    },
    loading: false,
    addresses: [
      {
        city: "New York",
        address: "203 Fake St. Mountain View, San Francisco, California, USA"
      },
      {
        city: "London",
        address: "203 Fake St. Mountain View, San Francisco, California, USA"
      },
      {
        city: "Canada",
        address: "203 Fake St. Mountain View, San Francisco, California, USA"
      }
    ]
  };

  submitHandler = event => {
    event.preventDefault();

    const formState = { ...this.state.formState };

    if (this.state.formState.isValid) {
      formState.isSubmitted = true;
      formState.failedSubmit = false;

      this.setState({ formState });
    } else {
      formState.failedSubmit = true;

      this.setState({ formState });
    }
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  changeHandler = (event, inputIdentifier) => {
    const formData = { ...this.state.formData };
    const formElement = { ...formData[inputIdentifier] };
    const formState = { ...this.state.formState };

    formElement.value = event.target.value;
    formElement.valid = this.checkValidity(
      formElement.value,
      formElement.validation
    );
    formElement.touched = true;
    formData[inputIdentifier] = formElement;

    let isValid = true;
    for (let inputIdentifier in formData) {
      isValid = formData[inputIdentifier].valid && isValid;
    }
    formState.isValid = isValid;

    this.setState({ formData, formState });
  };

  render() {
    const submitButton = <button>Send Message</button>
    let notification = null;
    if (
      this.state.formState.isSubmitted &&
      this.state.formState.isValid
    ) {
      notification = <p className={classes.success}>We'll contact you.</p>;
    } else if (
      this.state.formState.failedSubmit &&
      !this.state.formState.isValid
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
            submitHandler={this.submitHandler}
            formData={this.state.formData}
            changeHandler={this.changeHandler}
            formState={this.state.formState}
            notification={notification}
            submitButton={submitButton}
          />

          <div className={classes.addresses}>
            {this.state.addresses.map((address, index) => {
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
  }
}

export default ContactForm;