import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'

import Login from './pages/Login'
import Index from './pages/Index'
import Dashboard from './pages/Dashboard'

// TODO use Context and protected routes for the dashboard
    // TODO move router to index.js possibly
function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Switch>
        <Route path="/" exact component = {Index} />
        <Route path="/login" component = {Login} />
        <Route path="/dashboard" component = {Dashboard} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
