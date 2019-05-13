import React, { Component, Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import Header from "../../components/layout/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
// import Contact from "../Contact/Contact";
import bannerHome from "../../assets/images/banner/banner-home.png";
import product_1 from "../../assets/images/products/product_1.jpg";
import product_2 from "../../assets/images/products/product_2.jpg";
import product_3 from "../../assets/images/products/product_3.jpg";

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
          price: "9.50",
          image: product_2,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur accusantium aliquid pariatur delectus itaque praesentium repellendus! Accusamus velit, obcaecati cupiditate voluptatem corrupti molestiae dicta itaque non. Ipsam, explicabo at."
        },
        {
          id: 3,
          name: "The Belt",
          price: "9.50",
          image: product_3,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sequi accusamus quisquam, delectus distinctio ad omnis similique dolorum pariatur provident enim. Deleniti suscipit provident sed quam doloribus, amet tempora numquam."
        }
      ]
    },
    cart: {
      full: false,
      products: 0
    }
  };

  cartHandler = () => {
    // let cart = { ...this.state.cart };
    // cart.full = true;
    // this.setState({ cart });
    this.setState(prevState => ({
      cart: {
        ...prevState.cart,
        full: true
      }
    }));
  };

  render() {
    return (
      <Fragment>
        <Header cart={this.state.cart} />
        <ProductDetails
          clicked={this.cartHandler}
          products={this.state.collections.products}
        />
        {/* <Home
          banner={this.state.collections}
          products={this.state.collections.products}
        /> */}
        {/* <Contact banner={this.state.collections} /> */}
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default App;
