import React, { Component } from "react";
import { connect } from "react-redux";

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
    }
  };

  updateState = updatedFormData => {
    this.setState({ formData: updatedFormData });
  };

  render() {
    return (
      <section className={classes.auth}>
        <h2>Sign Up</h2>
        <Form
          formData={this.state.formData}
          formState={this.props.formState}
          htmlPath={this.props.location.pathname}
          submitForm={event =>
            this.props.onSubmitForm(event, this.state.isFormValid)
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
    onSubmitForm: (event, isFormValid) =>
      dispatch({ type: "SUBMIT_FORM", event, isFormValid }),
    onChangeFormElement: (
      event,
      formElementId,
      formData,
      htmlPath,
      updateState
    ) =>
      dispatch({
        type: "CHANGE_FORM_ELEMENT",
        event,
        formElementId,
        formData,
        htmlPath,
        updateState
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
