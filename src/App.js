import React from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import ProtectedRoute from './hocs/ProtectedRoute'

import Index from './pages/Index'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Transactions from './pages/Transactions'

function App() {
  return (
    <>
    <NavBar />
    <div className="mt-56 lg:mt-32">
      <Switch>
        <Route path="/" exact component = {Index} />
        <Route path="/signup" component = {Signup} />
        <Route path="/login" component = {Login} />
        <ProtectedRoute path="/transactions" component = {Transactions} />
      </Switch>
    </div>
    </>
  );
}

export default App;
