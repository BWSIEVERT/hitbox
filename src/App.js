import React from 'react'
import './App.css';

// Component Imports
import Home from './Components/Home/Home'

// Router Imports
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
