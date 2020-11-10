import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';

function App() {
  return (
  <Router className="flex">
    <Navbar/>
    <Home/>
    <Home/>
  </Router>
  );
}

export default App;
