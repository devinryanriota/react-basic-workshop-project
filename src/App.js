import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';
import { HOME_PATH } from './routes'
import Home from './routes/Home'
import Header from './components/Header'

class App extends React.Component {
  render = () => {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path = { HOME_PATH } component = { Home } />
        </Switch>
      </Router>
    )
  }
}

export default App