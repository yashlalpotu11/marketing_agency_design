import React from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import GlobalStyle  from './globalStyles'
import {Navbar, Footer} from './components'
import ScrollToTop from './components/ScrollToTop'
import Services from "./pages/Services/Services"
import Products from "./pages/Products/Products"
// import { Redirect } from 'react-router';

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
          <Route path="/services" exact={true} component={Services} />
          <Route path="/products" exact={true} component={Products} />
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;