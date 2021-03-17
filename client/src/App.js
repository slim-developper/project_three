import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import AuthCompete from './components/Auth/AuthCompete';
import show from './components/Auth/show';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/compete" exact component={AuthCompete} />
        <Route path="/show" exact component={show} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
