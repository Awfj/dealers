import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addToCart = (id, quantity) => {
  console.log('asf')
  return {
    type: actionTypes.ADD_TO_CART,
    id,
    quantity
  };
};

export const removeFromCart = addedProductIndex => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    addedProductIndex
  };
};

export const initProducts = () => {
  return dispatch => {
    axios
      .get("")
      .then(response => {
        dispatch();
      })
      .catch(error => {
        dispatch();
      });
  };
};

export const test = (id, quantity) => {
  return dispatch => {
    new Promise((resolve) =>
      resolve(() => dispatch(addToCart(id, quantity)))
    )}
    // axios
    //   .get("")
    //   // .then(() => dispatch(addToCart(id, quantity)))
    //   .catch(() => dispatch(addToCart(id, quantity)));
  };

