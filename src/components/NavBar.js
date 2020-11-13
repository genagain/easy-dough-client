import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

function NavBar() {
    const { accessToken, logout } = useContext(UserContext)

    const [showLinks, setShowLinks] = useState(false)

    function toggleShowAuth() {
      setShowLinks(!showLinks)
    }

    // TODO figure out why the md breakpoints aren't working as expected using the lg ones seem a bit too large
    return (
      <div className="border-b-2 border-gray-400 shadow-md mb-24 lg:mb-12 lg:border-b lg:shadow ">
      <div className="container mx-auto px-6 py-4 lg:px-2">
        <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex justify-between">
          <Link to='/' className="text-6xl lg:text-4xl">
            <h1>Easy Dough</h1>
          </Link>
        <div className="pt-3 lg:hidden">
        <button type="button" onClick={toggleShowAuth} className={ showLinks ? "text-gray-500" : "outline-none"} aria-label="toggle menu">
                  <svg viewBox="0 0 24 24" className="h-16 w-16 fill-current">
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
                </button>
        </div>
        </div>
          {
          accessToken ? 
           (
            <>
              <Link to='/transactions' className={`${showLinks ? null : 'hidden'} my-2 py-2 text-4xl lg:inline-block lg:text-2xl lg:px-4`}>
               Transactions
             </Link>
             <div className="lg:flex-grow"></div>
              <Link to='/' onClick={logout} className={`${showLinks ? null : 'hidden'} my-2 py-2 text-4xl lg:inline-block lg:text-2xl lg:px-4`}>
               Logout
             </Link>
            </>
           ):
           (
             <>
               <div className="lg:flex-grow"></div>
               <Link to='/signup' className={`${showLinks ? null : 'hidden'} my-2 py-2 text-4xl lg:inline-block lg:text-2xl lg:px-4`}>
                 Sign Up
               </Link>
               <Link to='/login' className={`${showLinks ? null : 'hidden'} my-2 py-2 text-4xl lg:inline-block lg:text-2xl lg:px-4`}>
                 Login
               </Link>
             </>
           )
          }
        </div>
      </div>
      </div>
              );
}

export default NavBar;
