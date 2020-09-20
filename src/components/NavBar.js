import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

function NavBar() {
    const { accessToken, logout } = useContext(UserContext)

    const [showAuth, setShowAuth] = useState(false)

    function toggleShowAuth() {
      setShowAuth(!showAuth)
    }

    return (
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col">
        <div className="flex justify-between">
          <Link to='/' className="text-6xl">
            <h1>Easy Dough</h1>
          </Link>
        <button type="button" className={ showAuth ? "focus:text-gray-600" : "focus:outline-none"} aria-label="toggle menu">
                  <svg viewBox="0 0 24 24" className="h-16 w-16 fill-current">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
                </button>
        </div>
          {
          accessToken ? 
           (
              <Link to='/' onClick={logout} className="text-4xl">
               Logout
             </Link>
           ):
           (
             <>
               <Link to='/signup' className="text-4xl">
                 Sign Up
               </Link>
               <Link to='/login' className="text-4xl">
                 Login
               </Link>
             </>
           )
          }
        </div>
      </div>
              );
}

export default NavBar;
