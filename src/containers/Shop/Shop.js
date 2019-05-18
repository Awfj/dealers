import React, {Component} from 'react'

import Catalog from '../../components/pages/shop/Catalog/Catalog';

class Shop extends Component {
  state = {
    checkbox: false
  }

  checkboxHandle = () => {
    this.setState({checkbox: true})
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <Catalog checkbox={this.checkboxHandle} checkState={this.state.checkbox} collections={this.props.collections} />
      </div>
    )
  }
}

export default Shop
