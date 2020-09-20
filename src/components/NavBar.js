import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

function NavBar() {
    const { accessToken, logout } = useContext(UserContext)

    return (
      <>
        <div className="flex flex-row">
          <Link to='/'>
            <h1>Easy Dough</h1>
          </Link>
          <div className="flex-grow"></div>
          <div clasName="flex-none">
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
          </div>
        </div>
      </>
              );
}

export default NavBar;
