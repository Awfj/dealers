import React, { Component } from "react";

// import Banner from "../../components/shared/Banner/Banner";
import ContactForm from "../../components/pages/contact/ContactForm/ContactForm";

class Contact extends Component {
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
    return (
      <div>
        {/* <Banner banner={props.banner} /> */}
        <ContactForm
          formData={this.state.formData}
          formState={this.state.formState}
          addresses={this.state.addresses}
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default Contact;
