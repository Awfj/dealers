import React from "react";

import CoverBlock from "./CoverBlock/CoverBlock";
import Collections from "../Collections/Collections";

const coverBlocks = props =>
  props.items.map((item, index) => {
    if (index === 0) {
      return (
        <CoverBlock
          key={index}
          title={props.title}
          name={item.name}
          image={item.image}
        >
          <Collections products={props.products} />
        </CoverBlock>
      );
    } else {
      return (
        <CoverBlock
          key={index}
          title={props.title}
          name={item.name}
          image={item.image}
        />
      );
    }
  });

export default coverBlocks;
