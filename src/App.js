import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import GlobalStyle  from './globalStyles'
import {Navbar} from './components'

function App() {
  return (
      <Router>
      <GlobalStyle/>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
  );
}

export default App;