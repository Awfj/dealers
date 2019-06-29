import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { initCollections } from "../../store/reducers/app";
import { authCheckState } from "../../store/reducers/auth";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import ProductDetails from "../ProductDetails/ProductDetails";
import Contact from "../Contact/Contact";
import Cart from "../Cart/Cart";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

library.add(fas, far);

class App extends Component {
  componentDidMount() {
    this.props.onInitCollections();
    this.props.onAuthCheckState();
  }

  render() {
    return (
      <Fragment>
        <Header
          cartIsFull={this.props.cartIsFull}
          isSideDrawerOpen={this.props.isSideDrawerOpen}
          openSideDrawer={this.props.onOpenSideDrawer}
          closeSideDrawer={this.props.onCloseSideDrawer}
          isSignIn={this.props.isSignIn}
        />
        <main>
          <Switch>
            <Route
              path="/dealers"
              exact
              render={() => <Home collections={this.props.collections} />}
            />
            <Route
              path="/dealers/shop"
              render={props => (
                <Shop collections={this.props.collections} {...props} />
              )}
            />
            <Route
              path="/dealers/contact"
              render={props => <Contact {...props} />}
            />
            <Route
              path="/dealers/cart"
              render={props => (
                <Cart products={this.props.products} {...props} />
              )}
            />
            <Route
              path="/dealers/sign-up"
              render={props => <SignUp {...props} />}
            />
            <Route
              path="/dealers/sign-in"
              render={props => <SignIn {...props} />}
            />
            <Route
              path="/dealers/details/:productId"
              render={props => (
                <ProductDetails products={this.props.products} {...props} />
              )}
            />
            <Redirect to="/dealers" />
          </Switch>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    collections: state.app.collections,
    products: state.app.collections.products,
    cartIsFull: state.app.cart.isFull,
    isSideDrawerOpen: state.app.isSideDrawerOpen,
    isSignIn: state.auth.idToken !== null
  };
};

const mapDispatchTpProps = dispatch => {
  return {
    onInitCollections: () => dispatch(initCollections()),
    onOpenSideDrawer: () => dispatch({ type: "OPEN_SIDE_DRAWER" }),
    onCloseSideDrawer: () => dispatch({ type: "CLOSE_SIDE_DRAWER" }),
    onAuthCheckState: () => dispatch(authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchTpProps
)(App);
