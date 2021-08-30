import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
// import Cookie from "js-cookie";

// const cartItems = Cookie.getJSON("cartItems") || [];
// const initialState = { cart: { cartItems } };
const initialState = {};
const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)));

const Root = () => {
  return (
    <Provider store={store} >
      <h3>React Product Card Plugin</h3>
      <Router>
        <Switch>
          <Route exact path="/Nav1/app1" component={Products} />
          <Route path="/Nav1/products/:id" component={ProductDetails} />
          <Route path="/Nav1/cart" component={Cart} />
        </Switch>
      </Router>
    </Provider >
  )
};

export default Root