import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';

function NavBar() {
    const { accessToken, logout } = useContext(UserContext)

    const [showLinks, setShowLinks] = useState(false)

    function toggleShowAuth() {
      setShowLinks(!showLinks)
    }

    // TODO figure out why the md breakpoints aren't working as expected using the lg ones seem a bit too large
    return (
      <div className="fixed top-0 w-full bg-white border-b-2 border-gray-400 shadow-md mb-24 lg:mb-12 lg:border-b lg:shadow">
      <div className="container mx-auto px-6 py-8 w-10/12 lg:max-w-6xl lg:py-1 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex justify-between">
          <div className="flex flex-row items-center">
            <Link to='/'><img src="logo.svg" alt="Easy Dough Logo" className="w-20 h-20 lg:w-10 lg:h-10" /></Link>
            <Link to='/' className="text-blue-800 text-4xl w-144 mx-4 lg:w-auto lg:text-xl hover:text-blue-700">
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
        </div>
          {
          accessToken ? 
           (
            <>
              <NavLink to='/transactions' className={`${showLinks ? null : 'hidden'} text-blue-800 my-2 py-2 text-4xl lg:inline-block lg:text-xl lg:mx-4 lg:px-4 hover:text-blue-700`} activeClassName="font-bold hover:text-blue-800" >
               Transactions
             </NavLink>
             <div className="lg:flex-grow"></div>
              <Link to='/' onClick={logout} className={`${showLinks ? null : 'hidden'} text-blue-800 my-2 py-2 text-4xl lg:inline-block lg:text-xl lg:px-4 hover:text-blue-700`}>
               Logout
             </Link>
            </>
           ):
           (
             <>
               <div className="lg:flex-grow"></div>
               <NavLink to='/signup' className={`${showLinks ? null : 'hidden'} text-blue-800 my-2 py-2 text-4xl lg:inline-block lg:text-xl lg:px-4 hover:text-blue-700`} activeClassName="font-bold  hover:text-blue-800">
                 Sign Up
               </NavLink>
               <NavLink to='/login' className={`${showLinks ? null : 'hidden'} text-blue-800 my-2 py-2 text-4xl lg:inline-block lg:text-xl lg:px-4 hover:text-blue-700`} activeClassName="font-bold hover:text-blue-800">
                 Login
               </NavLink>
             </>
           )
          }
        </div>
      </div>
      </div>
              );
}

export default NavBar;
