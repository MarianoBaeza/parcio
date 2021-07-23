import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
      <Route exact path='/main' component={Main} />
    </BrowserRouter>
  );
}

export default App;
