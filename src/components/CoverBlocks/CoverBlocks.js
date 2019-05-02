import React from "react";

import CoverBlock from "./CoverBlock/CoverBlock";

const coverBlocks = props => {
  return (
    <div>
      <CoverBlock
        // collection={props.collections}
        coverBlock={props.coverBlocks}
      />
    </div>
  );
};

export default coverBlocks;
