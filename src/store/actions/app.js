import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addToCart = (id, quantity) => {
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