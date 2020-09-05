import React from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import ProtectedRoute from './hocs/ProtectedRoute'

import Index from './pages/Index'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <Route path="/" exact component = {Index} />
        <Route path="/signup" component = {Signup} />
        <Route path="/login" component = {Login} />
        <ProtectedRoute path="/dashboard" component = {Dashboard} />
      </Switch>
    </>
  );
}

export default App;
