import React, { Component, Fragment } from "react";

import Header from "../../components/Header/Header";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <Header toggleSideDrawer={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} />
        <main>{this.props.children}</main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
