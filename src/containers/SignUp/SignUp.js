import React, { Component } from "react";
import Form from "../../components/shared/Form/Form";

class Auth extends Component {
  state = {
    formData: {
      email: {
        elementType: "input",
        label: "Email",
        elementConfig: {
          type: "email"
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
    formState: {
      failedSubmit: false,
      isValid: false,
      isSubmitted: false
    },
    isSignUp: false
  };
  render() {
    return (
      <section>
        <h2>Sign Up</h2>
        <Form 
          formData={this.state.formData}
          formState={this.state.formState}
        />
      </section>
    );
  }
}

export default Auth;
