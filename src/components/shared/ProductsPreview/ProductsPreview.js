import React from "react";

import classes from "./ProductsPreview.module.scss";
import ProductPreview from "./ProductPreview/ProductPreview";

const productsPreview = props => {
  let body = null;

  if (props.url === "/dealers/shop" && props.sortPricesCheck.includes(true)) {
    body = props.foundProducts.map(product => (
      <ProductPreview
        id={product.id}
        key={product.id}
        image={product.image}
        name={product.name}
        collectionType={props.collections.type}
        price={product.price}
      />
    ));
  } else {
    body = props.collections.products.map(product => (
      <ProductPreview
        id={product.id}
        key={product.id}
        image={product.image}
        name={product.name}
        collectionType={props.collections.type}
        price={product.price}
      />
    ));
  }

  return (
    <div
      className={[classes.ProductsPreview, classes[props.classes]].join(" ")}
    >
      {body}
    </div>
  );
};

export default productsPreview;
