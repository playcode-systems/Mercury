import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import PriceBtc from './components/PriceBtc';
import PriceEth from './components/PriceEth';
import PriceDash from './components/PriceDash';

function App() {
  return (
    <Router>
      <Navigation/>

      <Route path="/btc" exact component={PriceBtc}/>
      <Route path="/eth" component={PriceEth}/>
      <Route path="/dash" component={PriceDash}/>
    </Router>


  );
}

export default App;
