import React, { Component, Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import Layout from "../../hoc/Layout/Layout";
import Home from "../Home/Home";
import Contact from '../Contact/Contact';
import bannerHome from "../../assets/images/banner/banner-home.png";
import product_1 from '../../assets/images/products/product_1.jpg';
import product_2 from '../../assets/images/products/product_2.jpg';
import product_3 from '../../assets/images/products/product_3.jpg';

library.add(fas, far);

class App extends Component {
  state = {
    banner: {
      home: {
        name: "Madewell",
        type: "Summer Collection",
        price: 1.999,
        discountPrice: 1.499,
        image: bannerHome
      }
    },
    products: [
      {
        name: "The Shoe",
        collection: "Summer Collection",
        price: 50.0,
        image: product_1,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptas? Cum expedita natus et fugit non sapiente adipisci distinctio minima mollitia, molestias possimus nulla assumenda, odit sequi a quidem est?"
      },
      {
        name: "Marc Jacobs Bag",
        collection: "Summer Collection",
        price: 9.5,
        image: product_2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur accusantium aliquid pariatur delectus itaque praesentium repellendus! Accusamus velit, obcaecati cupiditate voluptatem corrupti molestiae dicta itaque non. Ipsam, explicabo at."
      },
      {
        name: "The Belt",
        collection: "Summer Collection",
        price: 9.5,
        image: product_3,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sequi accusamus quisquam, delectus distinctio ad omnis similique dolorum pariatur provident enim. Deleniti suscipit provident sed quam doloribus, amet tempora numquam."
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <Layout>
          <Home
            banner={this.state.banner.home}
            products={this.state.products}
          />
          {/* <Contact banner={this.state.banner.home} /> */}
        </Layout>
      </Fragment>
    );
  }
}

export default App;
