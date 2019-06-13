import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import { connect } from "react-redux";

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
        <Header />
        <Switch>
          <Route path="/dealers" exact render={() => <Home />} />
          <Route path="/dealers/shop" render={props => <Shop {...props} />} />
          <Route path="/dealers/contact" render={() => <Contact />} />
          <Route path="/dealers/cart" render={props => <Cart {...props} />} />
          <Route
            path="/dealers/signup"
            render={props => <SignUp {...props} />}
          />
          <Route
            path="/dealers/details/:productId"
            render={props => <ProductDetails {...props} />}
          />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

const mapDispatchTpProps = dispatch => {
  return {
    onInitCollections: () =>
      dispatch(dispatch => {
        axios
          .get("https://dealers-df82e.firebaseio.com/collections.json")
          .then(response => {
            dispatch({
              type: "SET_COLLECTIONS",
              collections: response.data
            });
          })
          .catch(error => {
            dispatch({
              type: "GET_COLLECTIONS_FAILED",
              error
            });
          });
      })
  };
};

export default connect(
  null,
  mapDispatchTpProps
)(App);
