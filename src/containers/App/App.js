import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

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
            path="/dealers/details/:productId"
            render={props => <ProductDetails {...props} />}
          />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
