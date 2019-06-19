import React, { Component } from "react";
import { connect } from "react-redux";

import { checkFormElementsValidity } from "../../store/reducers/form";

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
    isFormValid: false,
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

  changeHandler = (event, inputIdentifier) => {
    const formData = { ...this.state.formData };
    const formElement = { ...formData[inputIdentifier] };
    const formState = { ...this.state.formState };

    formElement.value = event.target.value;
    formElement.valid = this.props.onCheckFormElementsValidity(
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

    this.setState({ formData, isFormValid: isValid });
  };

  render() {
    return (
      <div>
        {/* <Banner banner={props.banner} /> */}
        <ContactForm
          formData={this.state.formData}
          isFormValid={this.state.isFormValid}
          formState={this.props.formState}
          submitForm={(event) => this.props.onSubmitForm(event, this.state.isFormValid)}
          changeHandler={this.changeHandler}
          addresses={this.state.addresses}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    formState: state.form.formState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: (event, isFormValid) => dispatch({ type: "SUBMIT_FORM", event, isFormValid }),
    onCheckFormElementsValidity: (value, rules) =>
      dispatch(checkFormElementsValidity(value, rules))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
