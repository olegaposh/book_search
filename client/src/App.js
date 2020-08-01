import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";
import Search from "./pages/Search"
// import Header from "./components/Header/Header"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <Header /> */}
        
        <Switch>
          <Route exact path = "/" component={Search} />
          {/* <Route exact path = "/favorites" component={Saved} />  */}
          {/* <Route exact path = "/search" component={Search} /> */}
          {/* <Route exact path = "/books/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
          {/* //OR */}
          {/* <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
