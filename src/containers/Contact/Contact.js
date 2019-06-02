import React, { Component } from "react";

// import Banner from "../../components/shared/Banner/Banner";
import ContactForm from "../../components/pages/contact/ContactForm/ContactForm";

class Contact extends Component {
  render() {
    return (
      <div>
        {/* <Banner banner={props.banner} /> */}
        <ContactForm />
      </div>
    );
  }
}

export default Contact;
