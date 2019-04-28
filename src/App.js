import React, {Fragment} from "react";

import Layout from './hoc/Layout/Layout';
import Home from "./containers/Home/Home";

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
