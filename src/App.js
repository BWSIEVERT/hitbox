import React from 'react'
import './App.css';

// Component Imports
import Home from './Components/Home/Home'
import TeamStats from './Components/TeamStats/TeamStats'

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
        <Route exact path='/' component={Home} />
        <Route path='/League/Team/Statistics' component={TeamStats} />
      </Switch>
    </Router>
  );
}

export default App;
