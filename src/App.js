import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faHome, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './components/navBar';
import ProductList from './components/productList';
import Default from './components/default';
import Cart from './components/cart';
import Details from './components/details';
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
          <Route exact path="/">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;
