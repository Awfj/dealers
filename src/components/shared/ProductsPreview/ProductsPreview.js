import React from "react";

import classes from "./ProductsPreview.module.scss";
import ProductPreview from "./ProductPreview/ProductPreview";

const productsPreview = props => {
  return (
    <div>
      <div className={classes.ProductsPreview}>
        {props.collections.products.map((product) => {
          return (
            <ProductPreview
              id={product.id}
              key={product.id}
              image={product.image}
              name={product.name}
              collection={props.collections.type}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default productsPreview;
