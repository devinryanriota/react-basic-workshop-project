import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';
import { HOME_PATH } from './routes'
import Home from './routes/Home'

class App extends React.Component {
  render = () => {
    return (
      <Router>
        <Switch>
          <Route exact path = { HOME_PATH } component = { Home } />
        </Switch>
      </Router>
    )
  }
}

export default App