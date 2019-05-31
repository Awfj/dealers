import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./ProductDetails.module.scss";

class ProductDetails extends Component {
  state = {
    quantity: 1
  };

  increaseQuantityHandler = () => {
    const quantity = this.state.quantity; 
    this.setState({quantity: quantity + 1})
  };

  decreaseQuantityHandler = () => {
    const quantity = this.state.quantity;
    this.setState({quantity: quantity <= 1 ? quantity : quantity - 1})
  };

  render() {
    return (
      <div className={classes.productDetails}>
        <img
          src={this.props.products[this.props.match.params.productId - 1].image}
          alt={this.props.products[this.props.match.params.productId - 1].name}
        />
        <section>
          <h2>
            {this.props.products[this.props.match.params.productId - 1].name}
          </h2>
          <p>
            {
              this.props.products[this.props.match.params.productId - 1]
                .description
            }
          </p>
          <p className={classes.price}>
            ${this.props.products[this.props.match.params.productId - 1].price}
          </p>
          <div className={classes.productQuantity}>
            <button onClick={this.decreaseQuantityHandler}>
              <FontAwesomeIcon icon={["fas", "minus"]} />
            </button>
            <span>{this.state.quantity}</span>
            <button onClick={this.increaseQuantityHandler}>
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </button>
          </div>
          <button
            className={classes.btnCart}
            onClick={() =>
              this.props.addToCart(
                this.props.match.params.productId,
                this.state.quantity
              )
            }
          >
            Add to Cart
          </button>
        </section>
      </div>
    );
  }
}

export default ProductDetails;
