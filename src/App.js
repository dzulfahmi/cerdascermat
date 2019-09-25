import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Timer from './pages/Timer';
import Home from './pages/Home';
import Point from './pages/Point';

function App() {
  return (
    <Router>
      <div>
        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/timer/">Timer</Link>
            </li>
            <li>
              <Link to="/point/">Point</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/timer/" component={Timer} />
        <Route path="/point/" component={Point} />
      </div>
    </Router>
  );
}

export default App;
