import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import ProductPage from './ProductPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={ProductPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  );
};

export default App;
