import React, { Component, Fragment } from "react";

import CoverBlocks from "../../components/CoverBlocks/CoverBlocks";
import Banner from "../../components/Banner/Banner";
import ProductsPreview from '../../components/ProductsPreview/ProductsPreview';

import bannerHome from "../../assets/images/banner/banner-home.png";
import coverBlockImg_1 from "../../assets/images/cover-block/cover-block-1.png";
import coverBlockImg_2 from "../../assets/images/cover-block/cover-block-2.png";

class Home extends Component {
  state = {
    coverBlock: {
      title: "#NEW SUMMER COLLECTION 2019",
      items: [
        { name: "Jacket", image: coverBlockImg_1 },
        { name: "New Denim Coat", image: coverBlockImg_2 }
      ]
    }
  };

  render() {
    return (
      <Fragment>
        {/* <Banner banner={this.props.banner} /> */}
        <ProductsPreview products={this.props.products} />
        {/* <CoverBlocks
          title={this.state.coverBlock.title}
          items={this.state.coverBlock.items}
        /> */}
      </Fragment>
    );
  }
}

export default Home;
