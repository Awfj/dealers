import React, { Component } from "react";
import { connect } from 'react-redux';

import Catalog from "../../components/pages/shop/Catalog/Catalog";

class Shop extends Component {
  state = {
    sortPrices: {
      10: false,
      20: false,
      30: false
    },
    foundProducts: [],
  };

  checkboxHandle = sortPrice => {
    const products = this.props.collections.products;
    const sortPrices = { ...this.state.sortPrices };
    const keysSortPrices = [];

    sortPrices[sortPrice] = !sortPrices[sortPrice];
    const arrSortPrices = Object.entries(sortPrices);

    arrSortPrices.forEach(sortPrice => (sortPrice[1] ? keysSortPrices.push(sortPrice[0]) : null));
    const minSortPrice = Math.min(...keysSortPrices);

    this.setState({
      sortPrices: sortPrices,
      foundProducts: products.filter(product => product.price < minSortPrice)
    });
  };

  render() {
    return (
      <div>
        <Catalog
          url={this.props.match.url}
          foundProducts={this.state.foundProducts}
          checkbox={this.checkboxHandle}
          sortPrices={Object.keys(this.state.sortPrices)}
          sortPricesCheck={Object.values(this.state.sortPrices)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    collections: state.collections
  }
}

export default connect(mapStateToProps)(Shop);
