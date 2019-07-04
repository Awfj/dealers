import React, { Component } from "react";
import { connect } from "react-redux";

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

  updateState = updatedFormData => {
    this.setState({ formData: updatedFormData });
  };

  render() {
    const htmlPath = this.props.location.pathname;

    return (
      <div>
        {/* <Banner banner={props.banner} /> */}
        <ContactForm
          formData={this.state.formData}
          isFormValid={this.state.isFormValid}
          formState={this.props.formState}
          htmlPath={htmlPath}
          submitForm={event =>
            this.props.onVerifyForm(event, this.state.formData, htmlPath)
          }
          updateState={this.updateState}
          changeFormElement={this.props.onChangeFormElement}
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
    onVerifyForm: (event, formData, htmlPath) =>
      dispatch({ type: "VERIFY_FORM", event, formData, htmlPath }),
    onChangeFormElement: (
      event,
      formElementId,
      formData,
      updateState
    ) =>
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
)(Contact);
