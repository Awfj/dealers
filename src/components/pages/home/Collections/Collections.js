import React from "react";

import classes from "./Collections.module.scss";
import ProductsPreview from "../../../shared/ProductsPreview/ProductsPreview";

const collections = props => {
  return (
    <div className={classes.Collections}>
      <h3>Collections</h3>

      <ProductsPreview products={props.products} />
    </div>
  );
};

export default collections;
