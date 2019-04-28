import React, {Fragment} from "react";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

import Layout from './hoc/Layout/Layout';
import Home from "./containers/Home/Home";

library.add(fas, far);

function App() {
  return (
    <Fragment>
      <Layout>
        <Home />
      </Layout>
    </Fragment>
  );
}

export default App;
