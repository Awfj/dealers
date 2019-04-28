import React from 'react';

import classes from './Header.module.scss';

const header = (props) => {
  return(
    <header className={classes.Header}>
      <a href="/">Dealers</a>
      <nav>
        <a href="/">Collection</a>
        <a href="/">Shop</a>
        <a href="/">Catalogs</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  )
};

export default header;