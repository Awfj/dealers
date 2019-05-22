import React, { Component } from "react";

import Catalog from "../../components/pages/shop/Catalog/Catalog";

class Shop extends Component {
  state = {
    checkbox: false,
    sortPrices: [10, 20, 30]
  };

  checkboxHandle = () => {
    this.setState({ checkbox: !this.state.checkbox });
  };

  render() {
    return (
      <div>
        <Catalog
          url={this.props.match.url}
          sortPrices={this.state.sortPrices}
          checkbox={this.checkboxHandle}
          checkState={this.state.checkbox}
          collections={this.props.collections}
        />
      </div>
    );
  }
}

export default Shop;
