import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../store/reducers/auth";

import classes from "./SignIn.module.scss";
import Form from "../../components/shared/Form/Form";

class SignIn extends Component {
  state = {
    formData: {
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
    isSignUp: false
  };

  updateState = updatedFormData => {
    this.setState({ formData: updatedFormData });
  };

  submitForm = event => {
    event.preventDefault();

    this.props.onVerifyForm(
      event,
      this.state.formData,
      this.props.location.pathname
    );
    this.props.onAuth(
      this.state.formData.email.value,
      this.state.formData.password.value,
      this.state.isSignUp
    );
  };

  render() {
    return (
      <section className={classes.signIn}>
        <h2>Sign In</h2>
        <Form
          formData={this.state.formData}
          formState={this.props.formState}
          htmlPath={this.props.location.pathname}
          submitForm={event => this.submitForm(event)}
          updateState={this.updateState}
          changeFormElement={this.props.onChangeFormElement}
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
    onAuth: (email, password, isSignUp) =>
      dispatch(auth(email, password, isSignUp)),
    onVerifyForm: (event, formData, htmlPath) =>
      dispatch({ type: "VERIFY_FORM", event, formData, htmlPath }),
    onChangeFormElement: (event, formElementId, formData, updateState) =>
      dispatch({
        type: "CHANGE_FORM_ELEMENT",
        event,
        formElementId,
        formData,
        updateState
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
