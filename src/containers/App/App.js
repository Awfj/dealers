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
import bannerHome from "../../assets/images/banner/banner-home.png";
import product_1 from "../../assets/images/products/product-1.png";
import product_2 from "../../assets/images/products/product-2.png";
import product_3 from "../../assets/images/products/product-3.png";

library.add(fas, far);

class App extends Component {
  state = {
    collections: {
      name: "Madewell",
      type: "Summer Collection",
      price: "1.999",
      discountPrice: "1.499",
      image: bannerHome,
      products: [
        {
          id: 1,
          name: "The Shoe",
          price: "9.50",
          image: product_1,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptas? Cum expedita natus et fugit non sapiente adipisci distinctio minima mollitia, molestias possimus nulla assumenda, odit sequi a quidem est?"
        },
        {
          id: 2,
          name: "Marc Jacobs Bag",
          price: "19.50",
          image: product_2,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur accusantium aliquid pariatur delectus itaque praesentium repellendus! Accusamus velit, obcaecati cupiditate voluptatem corrupti molestiae dicta itaque non. Ipsam, explicabo at."
        },
        {
          id: 3,
          name: "The Belt",
          price: "29.50",
          image: product_3,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sequi accusamus quisquam, delectus distinctio ad omnis similique dolorum pariatur provident enim. Deleniti suscipit provident sed quam doloribus, amet tempora numquam."
        }
      ]
    },
    cart: {
      full: false,
      products: []
    }
  };

  // test = () => {
  //   const cart = { ...this.state.cart };
  //   if (!cart.full && this.state.cart.products.length >= 0) {
  //     cart.full = true;
  //   }
  //   this.setState({ cart });
  //   console.log('asf')
  // }

  // componentDidMount() {
  //   this.test();
  // }

  addToCartHandler = (id, quantity) => {
    const cart = { ...this.state.cart };
    let addedProducts = cart.products.concat({ id, quantity });
    cart.products = addedProducts;
    if (!cart.full && cart.products.length >= 0) {
      cart.full = true;
    }
    this.setState({ cart });
  };

  removeFromCartHandler = addedProductIndex => {
    const cart = { ...this.state.cart };
    const products = cart.products.filter(
      (_, index) => index !== addedProductIndex
    );
    cart.products = products;
    if (cart.products.length === 0) {
      cart.full = false;
    }
    this.setState({ cart });
  };

  render() {
    return (
      <Fragment>
        <Header cart={this.state.cart} />
        <Switch>
          <Route
            path="/dealers"
            exact
            render={() => (
              <Home
                banner={this.state.collections}
                collections={this.state.collections}
              />
            )}
          />
          <Route
            path="/dealers/shop"
            render={props => (
              <Shop collections={this.state.collections} {...props} />
            )}
          />
          <Route
            path="/dealers/contact"
            render={() => <Contact banner={this.state.collections} />}
          />
          <Route
            path="/dealers/cart"
            render={props => (
              <Cart
                collections={this.state.collections}
                cartState={this.state.cart}
                clicked={this.removeFromCartHandler}
                {...props}
              />
            )}
          />
          <Route
            path="/dealers/details/:productId"
            render={props => (
              <ProductDetails
                addToCart={this.addToCartHandler}
                products={this.state.collections.products}
                increaseQuantity={this.increaseQuantityHandler}
                decreaseQuantity={this.decreaseQuantityHandler}
                {...props}
              />
            )}
          />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;