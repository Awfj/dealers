import React from "react";

import classes from "./Form.module.scss";

const contactForm = props => {
  return (
    <section className={classes.ContactForm}>
      <h2>Get in Touch</h2>
      <div className={classes.wrapper}>
        <form>
          <div className={classes.nameGroup}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" />
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" cols="30" rows="7" />
          </div>

          <button>Send Message</button>
        </form>

        <div className={classes.addresses}>
          {props.addresses.map((address, index) => {
            return (
              <div className={classes.addressGroup} key={index}>
                <h4>{address.city}</h4>
                <p>{address.address}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default contactForm;
