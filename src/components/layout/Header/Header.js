import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Header.module.scss";
import SideDrawer from "./SideDrawer/SideDrawer";
import Navigation from "./Navigation/Navigation";

const header = props => {
  let cartClasses = "";
  if (props.cartIsFull) {
    cartClasses = classes.cartIsFull;
  }
  return (
    <header className={classes.Header}>
      <SideDrawer
        isSideDrawerOpen={props.isSideDrawerOpen}
        closeSideDrawer={props.closeSideDrawer}
      />
      <div className={classes.wrapper}>
        <Link to="/dealers/" className={classes.logo}>
          Dealers
        </Link>

        <Navigation navHeader={classes.navigation} />

        <div className={classes.icons}>
          {/* <a href="/">
              <FontAwesomeIcon icon={["fas", "search"]} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={["far", "heart"]} />
            </a> */}
          <Link to="/dealers/cart" className={cartClasses}>
            <FontAwesomeIcon
              icon={["fas", "shopping-bag"]}
              className={classes.cart}
            />
          </Link>
          <button onClick={props.openSideDrawer}>
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default header;
