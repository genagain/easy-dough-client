import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Index from './pages/Index'

function App() {
  return (
    <>
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
