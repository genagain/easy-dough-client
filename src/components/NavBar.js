import React, { useContext } from 'react';
//import  Link from '@material-ui/core/Link';
import  { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import UserContext from '../UserContext';

const useStyles = makeStyles((theme) => ({
    root: {
          flexGrow: 1,
        },
    menuButton: {
          marginRight: theme.spacing(2),
        },
    title: {
          flexGrow: 1,
        },
    login : {
      'text-decoration': 'none',
      color: 'white'
    },
    index : {
      'text-decoration': 'none',
      color: 'white',
      '&:hover' : {
        'text-decoration': 'none',
      }
    },
}));

// TODO change index link
function NavBar() {
    const classes = useStyles();
    const { accessToken, logout } = useContext(UserContext)

    return (
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  <Link to='/' className={classes.index}>
                    Easy Dough
                  </Link>
                </Typography>
               { accessToken ? (
                <Button color="inherit" onClick={logout} className={classes.login}>
                  Logout
                </Button>
               ) : (
                <Typography variant="button">
                 <Link to='/login' className={classes.login}>
                  Login
                 </Link>
                </Typography>
               )
               }
              </Toolbar>
            </AppBar>
          </div>
        );
}

export default NavBar;
