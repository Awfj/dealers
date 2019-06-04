import React, { Component, Fragment } from "react";

// import CoverBlocks from "../../components/pages/home/CoverBlocks/CoverBlocks";
// import Banner from "../../components/shared/Banner/Banner";
import ProductsPreview from '../../components/shared/ProductsPreview/ProductsPreview';

// import coverBlockImg_1 from "../../assets/images/cover-block/cover-block-1.png";
// import coverBlockImg_2 from "../../assets/images/cover-block/cover-block-2.png";

class Home extends Component {
  // state = {
  //   coverBlock: {
  //     title: "#NEW SUMMER COLLECTION 2019",
  //     items: [
  //       { name: "Jacket", image: coverBlockImg_1 },
  //       { name: "New Denim Coat", image: coverBlockImg_2 }
  //     ]
  //   }
  // };

  render() {
    return (
      <Fragment>
        {/* <Banner banner={this.props.collections} /> */}
        <ProductsPreview />
        {/* <CoverBlocks
          title={this.state.coverBlock.title}
          items={this.state.coverBlock.items}
          products={this.props.products}
        /> */}
      </Fragment>
    );
  }
}

export default Home;
