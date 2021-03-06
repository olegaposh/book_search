import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";
import Search from "./pages/Search"
import Header from "./components/Header/Header"
import Saved from "./pages/Saved"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path = "/" component={Search} />
          <Route exact path = "/favorites" component={Saved} /> 
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
