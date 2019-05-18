import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProductsPreview from "../../../shared/ProductsPreview/ProductsPreview";
import classes from "./Catalog.module.scss";

const productsSearch = props => {
  let test = <ProductsPreview collections={props.collections} />;
  // let test2 = props.products;

  // if(props.checkState) {
  //   test = <ProductsPreview />;
  // }
  return (
    <div className={classes.search}>
      <section>
        <header>
          <h2>Shop All</h2>
          <div className={classes.buttons}>
            <button>Latest <FontAwesomeIcon icon={['fas', 'caret-down']} /></button>
            <button>Reference <FontAwesomeIcon icon={['fas', 'caret-down']} /></button>
          </div>
        </header>
        {test}
      </section>

      <aside>
        <section className={classes.categories}>
          <h3>Categories</h3>
          <div className={classes.buttons}>
            <button>Men</button>
            <button>Women</button>
            <button>Children</button>
          </div>
        </section>

        <section className={classes.filter}>
          <h3>Filter by Price</h3>
          <div>
            <form>
              <div className={classes.checkbox}>
                <input onClick={props.checkbox} id="price-1" type="checkbox" name="price-1" />
                <label htmlFor="price-1">{"<"} 10</label>
              </div>
              <div>
                <input id="price-2" type="checkbox" name="price-2" />
                <label htmlFor="price-2">{"<"} 20</label>
              </div>
              <div>
                <input id="price-3" type="checkbox" name="price-3" />
                <label htmlFor="price-3">{"<"} 30</label>
              </div>
            </form>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default productsSearch;
