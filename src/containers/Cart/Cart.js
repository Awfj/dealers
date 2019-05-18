import React, { Component } from 'react'

export default class Cart extends Component {
  state = {
    products: []
  }
  // componentWillMount () {
    //   const query = new URLSearchParams( this.props.location.search );
    //   console.log(query)
    // }
    render() {
    // console.log(this.props)
    
    // this.props.collections.products
    return (
      <div>
        {this.state.products.map(product => {
          return (
            <div key={product.id}>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
