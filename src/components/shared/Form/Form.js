import React, { Component } from "react";

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
    // console.log(this.props)

    let submitted = null;
    if(this.props.formState.failedSubmition) {
      submitted = this.props.notification;
    } 
    return (
      <form onSubmit={this.props.submitHandler}>
        {formElementsArray.map(formElement => {
          // console.log(formElement);
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
              changeHandler={(event) => this.props.changeHandler(event, formElement.id)}
            />
          );
        })}
        <button>Send Message</button>
        {submitted}
      </form>
    );
  }
}

export default Form;
