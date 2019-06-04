import React from "react";
import { connect } from 'react-redux';

import classes from "./Cart.module.scss";

const cart = props => {
  let body = null;

  if (props.productsInCart.length >= 1) {
    body = (
      <div className={classes.table}>
        {props.productsInCart.map((addedProduct, index) => {
          return props.collections.products.map(product => {
            if (+addedProduct.id === product.id) {
              return (
                <div className={classes.product} key={product.id}>
                  <div className={classes.cell}>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className={classes.cell}>
                    <p>{product.name}</p>
                  </div>
                  <div className={classes.cell}>
                    <p>{addedProduct.quantity}</p>
                  </div>
                  <div className={classes.cell}>
                    <p>${+product.price * addedProduct.quantity}</p>
                  </div>
                  <div className={classes.cell}>
                    <button onClick={() => props.clicked(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            } else {
              return (body = null);
            }
          });
        })}
      </div>
    );
  } else {
    body = <h1>Your Cart is empty</h1>;
  }

  return <div className={classes.cart}>{body}</div>;
};

const mapStateToProps = state => {
  return {
    collections: state.collections,
    // productsInCart: state.cart.products,
  }
}

export default connect(mapStateToProps)(cart);
