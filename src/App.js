import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
    </>
  );
}

export default App;
