import React, { Component, Fragment } from "react";

import CoverBlocks from "../../components/CoverBlocks/CoverBlocks";
// import coverBlockImg_1 from "../../assets/images/cover-block/cover-block-1.png";
import coverBlockImg_2 from "../../assets/images/cover-block/cover-block-2.png";
import coverBlockImg_3 from "../../assets/images/cover-block/cover-block-3.png";

// const COLLECTION_PRICES = {
//   summer: 1.999
// };

class Home extends Component {
  state = {
    collections: {
      summer: {
        // collectionType: "Summer Collection",
        // collectionName: "Madewell",
        // price: 1.999,
        // discountPrice: 1.499
      }
    },
    coverBlock: {
      title: '#NEW SUMMER COLLECTION 2019',
      items: ["Jacket", "New Denim Coat"],
      images: [coverBlockImg_2, coverBlockImg_3]
    }
  };

  render() {
    return (
      <Fragment>
        <CoverBlocks
          // collection={this.state.collections.summer}
          coverBlocks={this.state.coverBlock}
        />
      </Fragment>
    );
  }
}

export default Home;
