import React, { Component } from "react";

import classes from "./ContactForm.module.scss";
import Form from "../../../shared/Form/Form";

class ContactForm extends Component {
  state = {
    formData: {
      firstName: {
        label: "First Name",
        elementType: "input",
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
        label: "Last Name",
        elementType: "input",
        elementConfig: {
          type: "text"
        },
        valid: false,
        touched: false,
        value: "",
        validation: {
          required: true
        }
      }
    },
    formIsValid: false,
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

  componentWillMount() {
    this.addRequired();
  }

  formSubmitHandler = event => {
    event.preventDefault();
  };

  addRequired() {
    const formData = { ...this.state.formData };

    for (let inputIdentifier in formData) {
      const formElement = { ...formData[inputIdentifier] };
      
      formElement.label += '*';
      formData[inputIdentifier] = formElement;
    }
    this.setState({formData});
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    return isValid;
  }

  changeHandler = (event, inputIdentifier) => {
    const formData = { ...this.state.formData };
    const formElement = { ...formData[inputIdentifier] };

    formElement.value = event.target.value;
    formElement.valid = this.checkValidity(
      formElement.value,
      formElement.validation
    );
    formElement.touched = true;
    formData[inputIdentifier] = formElement;

    // console.log(formData);

    let formIsValid = true;
    for (let inputIdentifier in formData) {
      formIsValid = formData[inputIdentifier].valid && formIsValid;
    }

    this.setState({ formData, formIsValid });
  };

  render() {
    // console.log(this.state.formData);
    return (
      <section className={classes.form}>
        <h2>Get in Touch</h2>
        <div className={classes.wrapper}>
          <Form
            submitHandler={this.formSubmitHandler}
            formData={this.state.formData}
            changeHandler={this.changeHandler}
          />
          {/* <form>
            <div className={classes.nameGroup}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" />
              </div>
  
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" />
              </div>
            </div>
  
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
            </div>
  
            <div>
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" />
            </div>
  
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" cols="30" rows="7" />
            </div>
  
            <button>Send Message</button>
          </form> */}

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
