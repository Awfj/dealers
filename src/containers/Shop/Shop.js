import React, {Component} from 'react'

import ProductsSearch from '../../components/pages/shop/Search/Search';

class Shop extends Component {
  state = {
    checkbox: false
  }

  checkboxHandle = () => {
    this.setState({checkbox: true})
  }

  render() {
    return (
      <div>
        <ProductsSearch checkbox={this.checkboxHandle} checkState={this.state.checkbox} products={this.props.products} />
      </div>
    )
  }
}

export default Shop
