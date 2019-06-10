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

export const setCollections = collections => {
  return {
    type: actionTypes.SET_COLLECTIONS,
    collections
  };
};

export const getCollectionsFailed = () => {
  return {
    type: actionTypes.GET_COLLECTIONS_FAILED
  };
};

export const initCollections = () => {
  return dispatch => {
    axios
      .get("https://dealers-df82e.firebaseio.com/collections.json")
      .then(response => {
        dispatch(setCollections(response.data));
      })
      .catch(error => {
        dispatch(getCollectionsFailed(error));
      });
  };
};
