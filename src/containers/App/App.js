import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import { initCollections } from "../../store/reducers/app";

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

library.add(fas, far);
// console.log(process.env.REACT_APP_API_KEY)
class App extends Component {
  componentDidMount() {
    this.props.onInitCollections();
  }
  render() {
    return (
      <Fragment>
        <Header
          cartIsFull={this.props.cartIsFull}
          isSideDrawerOpen={this.props.isSideDrawerOpen}
          openSideDrawer={this.props.onOpenSideDrawer}
          closeSideDrawer={this.props.onCloseSideDrawer}
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
            <Route path="/dealers/contact" render={() => <Contact />} />
            <Route
              path="/dealers/cart"
              render={props => (
                <Cart products={this.props.products} {...props} />
              )}
            />
            <Route
              path="/dealers/signup"
              render={props => <SignUp {...props} />}
            />
            <Route
              path="/dealers/details/:productId"
              render={props => (
                <ProductDetails products={this.props.products} {...props} />
              )}
            />
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
    isSideDrawerOpen: state.app.isSideDrawerOpen
  };
};

const mapDispatchTpProps = dispatch => {
  return {
    onInitCollections: () => dispatch(initCollections()),
    onOpenSideDrawer: () => dispatch({ type: "OPEN_SIDE_DRAWER" }),
    onCloseSideDrawer: () => dispatch({ type: "CLOSE_SIDE_DRAWER" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchTpProps
)(App);
