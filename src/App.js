import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Header from './components/Header'
function App() {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>       
          <Route path="/" exact>
            <Header></Header>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
