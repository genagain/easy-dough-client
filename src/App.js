import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import ProtectedRoute from './hocs/ProtectedRoute'

import Login from './pages/Login'
import Index from './pages/Index'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Switch>
        <Route path="/" exact component = {Index} />
        <Route path="/login" component = {Login} />
        <ProtectedRoute path="/dashboard" component = {Dashboard} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
