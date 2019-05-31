import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Header.module.scss";
import SideDrawer from "./SideDrawer/SideDrawer";
import Navigation from "./Navigation/Navigation";

class Header extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true });
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    let cartClasses = "";
    if (this.props.cart.full) {
      cartClasses = classes.cartFull;
    }
    return (
      <header className={classes.Header}>
        <SideDrawer
          open={this.state.showSideDrawer}
          close={this.sideDrawerCloseHandler}
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
            <button onClick={this.sideDrawerOpenHandler}>
              <FontAwesomeIcon icon={["fas", "bars"]} />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;