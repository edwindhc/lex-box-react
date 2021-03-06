import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/home/Home'
import ProductDetail from './components/product/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products/:id' component={ProductDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
