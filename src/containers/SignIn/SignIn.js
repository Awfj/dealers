import React, { Component } from "react";
import { connect } from "react-redux";

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
    }
  };

  updateState = updatedFormData => {
    this.setState({ formData: updatedFormData });
  };

  render() {
    const htmlPath = this.props.location.pathname;

    return (
      <section className={classes.signIn}>
        <h2>Sign Up</h2>
        <Form
          formData={this.state.formData}
          formState={this.props.formState}
          htmlPath={htmlPath}
          submitForm={event =>
            this.props.onSubmitForm(event, this.state.formData, htmlPath)
          }
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
    onSubmitForm: (event, formData, htmlPath) =>
      dispatch({ type: "SUBMIT_FORM", event, formData, htmlPath }),
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
