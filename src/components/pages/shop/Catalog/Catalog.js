import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProductsPreview from "../../../shared/ProductsPreview/ProductsPreview";
import classes from "./Catalog.module.scss";

const productsSearch = props => {
  const form = (
    <form>
      {props.sortPrices.map((sortPrice) => (
        <div key={sortPrice}>
          <input
            onClick={() => props.checkbox(sortPrice)}
            id={sortPrice}
            type="checkbox"
            name={sortPrice}
          />
          <label htmlFor={sortPrice}>
            {"<"} ${sortPrice}
          </label>
        </div>
      ))}
    </form>
  );

  return (
    <div className={classes.catalog}>
      <section>
        <header>
          <h2>Shop All</h2>
          <div className={classes.buttons}>
            {/* <button>
              Latest <FontAwesomeIcon icon={["fas", "caret-down"]} />
            </button>
            <button>
              Reference <FontAwesomeIcon icon={["fas", "caret-down"]} />
            </button> */}
          </div>
        </header>
        <ProductsPreview
          foundProducts={props.foundProducts}
          url={props.url}
          classes='catalog'

          sortPricesCheck={props.sortPricesCheck}

          collections={props.collections}
        />
      </section>

      <aside>
        {/* <section className={classes.categories}>
          <h3>Categories</h3>
          <div className={classes.buttons}>
            <button>Men</button>
            <button>Women</button>
            <button>Children</button>
          </div>
        </section> */}

        <section className={classes.filter}>
          <h3>Filter by Price</h3>
          {form}
        </section>
      </aside>
    </div>
  );
};

export default productsSearch;
