import * as actionTypes from "../actions/actionTypes";

import bannerHome from "../../assets/images/banner/banner-home.png";
import product_1 from "../../assets/images/products/product-1.png";
import product_2 from "../../assets/images/products/product-2.png";
import product_3 from "../../assets/images/products/product-3.png";

const initialState = {
  collections: {
    name: "Madewell",
    type: "Summer Collection",
    price: "1.999",
    discountPrice: "1.499",
    image: bannerHome,
    products: [
      {
        id: 1,
        name: "The Shoe",
        price: "9.50",
        image: product_1,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptas? Cum expedita natus et fugit non sapiente adipisci distinctio minima mollitia, molestias possimus nulla assumenda, odit sequi a quidem est?"
      },
      {
        id: 2,
        name: "Marc Jacobs Bag",
        price: "19.50",
        image: product_2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur accusantium aliquid pariatur delectus itaque praesentium repellendus! Accusamus velit, obcaecati cupiditate voluptatem corrupti molestiae dicta itaque non. Ipsam, explicabo at."
      },
      {
        id: 3,
        name: "The Belt",
        price: "29.50",
        image: product_3,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sequi accusamus quisquam, delectus distinctio ad omnis similique dolorum pariatur provident enim. Deleniti suscipit provident sed quam doloribus, amet tempora numquam."
      }
    ]
  },
  cart: {
    products: [],
    isFull: false
  }
};
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action);
    case actionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action);
    default:
      return state;
  }
};

export default reducer;
