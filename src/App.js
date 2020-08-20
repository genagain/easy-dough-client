import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'

import Login from './pages/Login'
import Index from './pages/Index'

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Switch>
        <Route path="/" exact component = {Index} />
        <Route path="/login" component = {Login} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
