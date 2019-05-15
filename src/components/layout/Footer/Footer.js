import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Footer.module.scss";

const footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.wrapper}>
        <div className={classes.about}>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae
            reiciendis distinctio voluptates sed dolorum excepturi iure eaque,
            aut unde.
          </p>
        </div>

        <div className={classes.contact}>
          <h4>Contact Info</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> 203 Fake St.
            Mountain View, San Francisco, California, USA
          </p>
          <p>
            <a href="/">
              <FontAwesomeIcon icon={["fas", "phone"]} /> +2 392 3929 210
            </a>
          </p>

          <p>
            <FontAwesomeIcon icon={["fas", "envelope"]} />{" "}
            emailaddress@domain.com
          </p>
        </div>

        <div className={classes.subscribe}>
          <h4>Subscribe</h4>
          <form>
            <input type="text" placeholder="Email" />
            <button>Send</button>
          </form>
        </div>
      </div>
      <p className={classes.copyright}>
        Copyright ©2019 All rights reserved | This template is made with{" "}
        <FontAwesomeIcon icon={["fas", "heart"]} /> by <a target="_blank" rel="noopener" href="https://colorlib.com/">Colorlib</a>
      </p>
    </footer>
  );
};

export default footer;
