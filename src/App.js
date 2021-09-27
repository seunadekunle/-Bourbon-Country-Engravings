import React, { Fragment, Suspense } from "react";
import "./GlobalStyle.css";
import "react-toastify/dist/ReactToastify.css";

import { StoreContext } from "./Context/StoreContext";
import StoreProvider from "./Context/StoreContext";

import { ModalProvider } from "styled-react-modal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Store = React.lazy(() => import("./components/Store"));
const Cart = React.lazy(() => import("./components/Cart"));
const Header = React.lazy(() => import("./components/Header"));

const Final = React.lazy(() => import("./components/Final"));
const Checkout = React.lazy(() => import("./components/Checkout"));
export default function App() {
  return (
    <StoreProvider>
      <ModalProvider>
        <Router>
          <Header />
        <Suspense fallback="loading...">

          <Switch>
            <Route path="/" exact component={Store} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/final" component={Final} />
          </Switch>
</Suspense>

        </Router>
      </ModalProvider>
    </StoreProvider>
  );
}
