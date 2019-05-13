import React, { Component } from "react";

import Banner from "../../components/Banner/Banner";
import Form from "../../components/pages/contact/Form/Form";

class Contact extends Component {
  state = {
    addresses: [
      {city: 'New York', address: '203 Fake St. Mountain View, San Francisco, California, USA'},
      {city: 'London', address: '203 Fake St. Mountain View, San Francisco, California, USA'},
      {city: 'Canada', address: '203 Fake St. Mountain View, San Francisco, California, USA'}
    ]
  }

  render() {
    return (
      <div>
        {/* <Banner banner={props.banner} /> */}
        <Form addresses={this.state.addresses} />
      </div>
    );
  }
}

export default Contact;
