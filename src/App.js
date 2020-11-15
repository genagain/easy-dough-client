import React from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProtectedRoute from './hocs/ProtectedRoute'

import Index from './pages/Index'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Transactions from './pages/Transactions'

// TODO: consider having a uniform width for each page and using margin auto
function App() {
  return (
    <>
    <NavBar />
    <div className="mt-56 lg:mt-24">
      <Switch>
        <Route path="/" exact component = {Index} />
        <Route path="/signup" component = {Signup} />
        <Route path="/login" component = {Login} />
        <ProtectedRoute path="/transactions" component = {Transactions} />
      </Switch>
    </div>
    <Footer />
    </>
  );
}

export default App;
