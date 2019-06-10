import React, { Component } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as actions from "../../store/actions/index";
import classes from "./ProductDetails.module.scss";

class ProductDetails extends Component {
  state = {
    quantity: 1
  };

  increaseQuantityHandler = () => {
    const quantity = this.state.quantity;
    this.setState({ quantity: quantity + 1 });
  };

  decreaseQuantityHandler = () => {
    const quantity = this.state.quantity;
    this.setState({ quantity: quantity <= 1 ? quantity : quantity - 1 });
  };

  render() {
    let currentProduct = {};

    if (this.props.products.length > 0) {
      currentProduct = this.props.products.find(
        product => product.id === +this.props.match.params.productId
      );
    }

    return (
      <div className={classes.productDetails}>
        <img src={currentProduct.image} alt={currentProduct.name} />
        <section>
          <h2>{currentProduct.name}</h2>
          <p>{currentProduct.description}</p>
          <p className={classes.price}>${currentProduct.price}</p>
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
              this.props.onAddToCart(
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

const mapStateToProps = state => {
  return {
    products: state.collections.products
  };
};

const mapDispatchTpProps = dispatch => {
  return {
    onAddToCart: (id, quantity) => dispatch(actions.addToCart(id, quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchTpProps)(ProductDetails);
