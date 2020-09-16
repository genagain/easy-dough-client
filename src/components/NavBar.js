import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

function NavBar() {
    const { accessToken, logout } = useContext(UserContext)

    return (
      <>
                  <Link to='/'>
                    <h1>Easy Dough</h1>
                  </Link>
               { accessToken ? 
                 (
                    <Link to='/' onClick={logout}>
                     Logout
                   </Link>
                 ):
                 (
                   <>
                   <Link to='/signup'>
                     Sign Up
                   </Link>
                   <Link to='/login'>
                     Login
                   </Link>
                   </>
                 )
               }
      </>
              );
}

export default NavBar;
