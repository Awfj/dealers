import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
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

library.add(fas, far);

class App extends Component {
  // addToCartHandler = (id, quantity) => {
  //   const cart = { ...this.state.cart };
  //   let addedProducts = cart.products.concat({ id, quantity });
  //   cart.products = addedProducts;
  //   if (!cart.full && cart.products.length >= 0) {
  //     cart.full = true;
  //   }
  //   this.setState({ cart });
  // };

  // removeFromCartHandler = addedProductIndex => {
  //   const cart = { ...this.state.cart };
  //   const products = cart.products.filter(
  //     (_, index) => index !== addedProductIndex
  //   );
  //   cart.products = products;
  //   if (cart.products.length === 0) {
  //     cart.full = false;
  //   }
  //   this.setState({ cart });
  // };

  render() {
    // console.log(this.props.cart)
    // console.log([...this.props.cart.products].length)
    return (
      <Fragment>
        <Header cartIsFull={this.props.cart.isFull} />
        <Switch>
          <Route path="/dealers" exact render={() => <Home />} />
          <Route path="/dealers/shop" render={props => <Shop {...props} />} />
          <Route path="/dealers/contact" render={() => <Contact />} />
          <Route
            path="/dealers/cart"
            render={props => (
              <Cart
                productsInCart={this.props.cart.products}
                clicked={this.props.onRemoveFromCart}
                {...props}
              />
            )}
          />
          <Route
            path="/dealers/details/:productId"
            render={props => (
              <ProductDetails addToCart={this.props.onAddToCart} {...props} />
            )}
          />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    collections: state.collections,
    cart: state.cart
  };
};

const mapDispatchTpProps = dispatch => {
  return {
    onAddToCart: (id, quantity) =>
      dispatch({ type: actionTypes.ADD_TO_CART, id, quantity }),
    onRemoveFromCart: addedProductIndex =>
      dispatch({ type: actionTypes.REMOVE_FROM_CART, addedProductIndex }),
    onToggleCartIcon: () => dispatch({ type: actionTypes.TOGGLE_CART_ICON })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchTpProps
)(App);
