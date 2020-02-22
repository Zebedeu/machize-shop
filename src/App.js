import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faHome, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import NavBar from './components/navBar';
import ProductList from './components/productList';
import Default from './components/default';
import Cart from './components/cart/cart';
import Details from './components/details';
import Modal from './components/modal';
import Checkout from './components/cart/checkout';
import Footer from './components/footer';
import Dashboard from './components/cart/dashboard';

library.add(faTrash, faHome, faCartPlus);


class App extends Component {

  render(){

  return (
    <Router>

    <div>
      <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route>
            <Default />
          </Route>
        </Switch>
        <Modal />
        <Footer />
      </div>
    </Router>
  );
}
}

export default App;
