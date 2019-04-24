import React, { Component, Fragment } from "react";

import BlockCover from "../../components/BlockCover/BlockCover";

// const COLLECTION_PRICES = {
//   summer: 1.999
// };

class Home extends Component {
  state = {
    collections: {
      summer: {
        collectionType: "Summer Collection",
        collectionName: "Madewell",
        price: 1.999,
        discountPrice: 1.499
      }
    },
    blockCoverPics: {
      banner: "../../assets/images/block-cover/block-cover-1.png"
    }
  };

  render() {
    return (
      <Fragment>
        <h1>Home</h1>
        <BlockCover
          collection={this.state.collections.summer}
          blockCover={this.state.blockCoverPics}
        />
      </Fragment>
    );
  }
}

export default Home;
