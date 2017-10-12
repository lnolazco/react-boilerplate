import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../screens/Home';
import About from '../screens/About';
import AppMenu from '../components/AppMenu';

const Root = () => {
  return (
    <Router>
      <AppMenu>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </AppMenu>
    </Router>
  );
};

export default Root;
