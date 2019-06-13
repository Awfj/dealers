import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "./Input/Input";

class Form extends Component {
  render() {
    const formElementsArray = [];

    for (let key in this.props.formData) {
      formElementsArray.push({
        id: key,
        config: this.props.formData[key]
      });
    }

    let notification = null;
    if (this.props.formState.failedSubmit) {
      notification = this.props.notification;
    } else if (this.props.formState.isSubmitted) {
      notification = this.props.notification;
    }

    return (
      <form onSubmit={this.props.submitHandler}>
        {formElementsArray.map(formElement => {
          return (
            <Input
              key={formElement.id}
              id={formElement.id}
              label={formElement.config.label}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changeHandler={event =>
                this.props.changeHandler(event, formElement.id)
              }
            />
          );
        })}
        {this.props.submitButton}
        {notification}
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: event => dispatch({ type: "SUBMIT_FORM", event })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
