import React from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import GlobalStyle  from './globalStyles'
import {Navbar, Footer} from './components'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
      <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <Route exact  path="/react_marketing">
        <Redirect to='/'/>
      </Route>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;