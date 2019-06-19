import React, { Component } from "react";
import { connect } from "react-redux";

import { checkFormElementsValidity } from "../../store/reducers/form";

import classes from "./Auth.module.scss";
import Form from "../../components/shared/Form/Form";

class Auth extends Component {
  state = {
    formData: {
      signUp: {
        name: {
          elementType: "input",
          label: "Name",
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
          label: "Email",
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
        password: {
          elementType: "input",
          label: "Password",
          elementConfig: {
            type: "password"
          },
          valid: false,
          touched: false,
          value: "",
          validation: {
            required: true,
            minLength: 6
          }
        }
      },
      signIn: {
        email: {
          elementType: "input",
          label: "Email",
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
        password: {
          elementType: "input",
          label: "Password",
          elementConfig: {
            type: "password"
          },
          valid: false,
          touched: false,
          value: "",
          validation: {
            required: true,
            minLength: 6
          }
        }
      }
    },
    isFormValid: false
  };

  changeHandler = (event, inputIdentifier) => {
    const formData = { ...this.state.formData };
    const formState = { ...this.state.formState };
    let formElement = {};
    let isValid = true;

    if (this.props.location.pathname.includes("sign-up")) {
      formElement = { ...formData.signUp[inputIdentifier] };
    } else if (this.props.location.pathname.includes("sign-in")) {
      formElement = { ...formData.signIn[inputIdentifier] };
    } else {
      formElement = { ...formData[inputIdentifier] };
    }

    formElement.value = event.target.value;
    formElement.valid = this.props.onCheckFormElementsValidity(
      formElement.value,
      formElement.validation
    );
    formElement.touched = true;

    if (this.props.location.pathname.includes("sign-up")) {
      formData.signUp[inputIdentifier] = formElement;
      for (let inputIdentifier in formData.signUp) {
        isValid = formData.signUp[inputIdentifier].valid && isValid;
      }
    } else if (this.props.location.pathname.includes("sign-in")) {
      formData.signIn[inputIdentifier] = formElement;
      for (let inputIdentifier in formData.signIn) {
        isValid = formData.signIn[inputIdentifier].valid && isValid;
      }
    } else {
      formData[inputIdentifier] = formElement;
      for (let inputIdentifier in formData) {
        isValid = formData[inputIdentifier].valid && isValid;
      }
    }

    formState.isValid = isValid;

    this.setState({ formData, isFormValid: isValid });
  };

  render() {
    return (
      <section className={classes.auth}>
        <h2>Sign Up</h2>
        <Form
          formData={this.state.formData}
          isFormValid={this.state.isFormValid}
          formState={this.props.formState}
          htmlPathname={this.props.location.pathname}
          submitForm={event =>
            this.props.onSubmitForm(event, this.state.isFormValid)
          }
          changeHandler={this.changeHandler}
        />
      </section>
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
    onSubmitForm: (event, isFormValid) =>
      dispatch({ type: "SUBMIT_FORM", event, isFormValid }),
    onCheckFormElementsValidity: (value, rules) =>
      dispatch(checkFormElementsValidity(value, rules))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
