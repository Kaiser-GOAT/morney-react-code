import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Money from './views/money';
import NoMatch from './views/nomatch';
import Statistics from './views/statistic';
import Tags from './views/tags';
import styled from 'styled-components';
import {Tag} from './views/tag'
const AppWrapper = styled.div`
color:#333;
background:#f5f5f5;
max-width:520px;
margin:0 auto;
`;
function App() {
  return (
    <Router>
     <AppWrapper>
        <Switch>
          
          <Route path="/tags" exact>
            <Tags />
          </Route>
           <Route path="/tags/:id" exact>
            <Tag />
          </Route>
          <Route path="/money" exact> 
            <Money />
          </Route>
          <Route path="/statistics" exact>
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        </AppWrapper>
    </Router>
  );
}


export default App;