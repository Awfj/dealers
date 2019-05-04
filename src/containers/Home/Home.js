import React, { Component, Fragment } from "react";

import CoverBlocks from "../../components/CoverBlocks/CoverBlocks";
import Banner from "../../components/Banner/Banner";
import bannerCollection from "../../assets/images/banner/banner-collection.png";
import coverBlockImg_1 from "../../assets/images/cover-block/cover-block-1.png";
import coverBlockImg_2 from "../../assets/images/cover-block/cover-block-2.png";

// const COLLECTION_PRICES = {
//   summer: 1.999
// };

class Home extends Component {
  state = {
    banner: {
      collection: {
        name: "Madewell",
        type: "Summer Collection",
        price: 1.999,
        discountPrice: 1.499,
        image: bannerCollection
      }
    },
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
        <Banner collection={this.state.banner.collection} />
        <CoverBlocks
          title={this.state.coverBlock.title}
          items={this.state.coverBlock.items}
        />
      </Fragment>
    );
  }
}

export default Home;
