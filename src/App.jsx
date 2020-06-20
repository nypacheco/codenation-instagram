import React from 'react';
import {
  BrowserRouter, Route, Switch, useParams, Redirect,
} from 'react-router-dom';

import Home from './containers/Home';

const User = () => {
  const { username } = useParams();

  return username === 'batman'
    ? <Redirect to="/" />
    : <h1>usuario específico: {username}</h1>;
};

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/users">
        <h1>users</h1>
      </Route>

      <Route exact path="/users/:username">
        <User />
      </Route>

      <Route path="/">
        <h1>Error</h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
