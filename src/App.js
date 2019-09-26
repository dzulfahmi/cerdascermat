import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Timer from './pages/Timer';
import Home from './pages/Home';
import Point from './pages/Point';
import Navbar from './components/Navbar';
import PTimer from './pages/PTimer';

function App() {
  return (
    <Router>
      <div>

        <Navbar/>

        <Route path="/" exact component={Home} />
        <Route path="/timer/" component={Timer} />
        <Route path="/point/" component={Point} />
        <Route path="/ptimer/" component={PTimer} />
      </div>
    </Router>
  );
}

export default App;
