import React from "react";

import classes from "./ProductsPreview.module.scss";
import ProductPreview from "./ProductPreview/ProductPreview";

const productsPreview = props => {
  return (
    <div className={classes.ProductsPreview}>
      {props.products.map((product, index) => {
        return (
          <ProductPreview
            key={index}
            image={product.image}
            name={product.name}
            collection={product.collection}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default productsPreview;
