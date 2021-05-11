import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Header from './components/Header'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       
       <Header></Header>
       <AppBody>
         <Sidebar/>
       </AppBody>


        <Switch>       
          <Route path="/" exact>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;

`;
