import React from 'react';

import { Route } from 'react-router-dom';

import './App.css';
import { Navigation } from './components';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => (
  <div>
    <Navigation />
    <Route path="/" exact component={Home} />
    <Route path="/About" exact component={About} />
    <Route path="/Contact" exact component={Contact} />
    
  </div>
);

export default App;
