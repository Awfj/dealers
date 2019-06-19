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
    const htmlPath = this.props.location.pathname;
    let signUp = {};
    let signIn = {};
    let formElement = {};
    let isValid = true;

    if (htmlPath.includes("sign-up")) {
      signUp = { ...this.state.formData.signUp };
      formElement = { ...signUp[inputIdentifier] };
    } else if (htmlPath.includes("sign-in")) {
      signIn = { ...this.state.formData.signIn };
      formElement = { ...signIn[inputIdentifier] };
    }

    formElement.value = event.target.value;
    formElement.valid = this.props.onCheckFormElementsValidity(
      formElement.value,
      formElement.validation
    );
    formElement.touched = true;

    if (htmlPath.includes("sign-up")) {
      signUp[inputIdentifier] = formElement;
      for (let inputIdentifier in signUp) {
        isValid = signUp[inputIdentifier].valid && isValid;
      }
      formData.signUp = signUp;
    } else if (htmlPath.includes("sign-in")) {
      signIn[inputIdentifier] = formElement;
      for (let inputIdentifier in signIn) {
        isValid = signIn[inputIdentifier].valid && isValid;
      }
      formData.signIn = signIn;
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
          htmlPath={this.props.location.pathname}
          submitForm={(event) =>
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
