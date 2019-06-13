const initialState = {
  collections: {
    products: []
  },
  cart: {
    products: [],
    isFull: false
  },
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action);
    case "REMOVE_FROM_CART":
      return removeFromCart(state, action);
    case "SET_COLLECTIONS":
      return setCollections(state, action);
    case "GET_COLLECTIONS_FAILED":
      return getCollectionsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;

const addToCart = (state, action) => {
  const cart = { ...state.cart };
  const updatedProducts = cart.products.concat({
    id: action.id,
    quantity: action.quantity
  });
  cart.products = updatedProducts;

  if (cart.products.length > 0) {
    cart.isFull = true;
  }

  return {
    ...state,
    cart
  };
};

const removeFromCart = (state, action) => {
  const cart = { ...state.cart };
  const updatedProducts = cart.products.filter(
    (_, index) => index !== action.addedProductIndex
  );
  cart.products = updatedProducts;

  if (cart.products.length === 0) {
    cart.isFull = false;
  }

  return {
    ...state,
    cart
  };
};

const setCollections = (state, action) => {
  const collections = { ...action.collections };
  return { ...state, collections: collections };
};

const getCollectionsFailed = state => {
  return { ...state, error: true };
};
