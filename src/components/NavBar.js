import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UserContext from '../UserContext';

const useStyles = makeStyles((theme) => ({
    root: {
          flexGrow: 1,
        },
    menuButton: {
          marginRight: theme.spacing(2),
        },
    auth : {
      'text-decoration': 'none',
      color: 'white',
      padding: '1 rem'
    },
    index : {
      'text-decoration': 'none',
      color: 'white',
      '&:hover' : {
        'text-decoration': 'none',
      }
    },
}));

function NavBar() {
    const classes = useStyles();
    const { accessToken, logout } = useContext(UserContext)

    return (
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
         <Grid
            justify="space-between" // Add it here :)
            container 
          >
      <Grid item xs={10}>
                <Typography variant="h6">
                  <Link to='/' className={classes.index}>
                    Easy Dough
                  </Link>
                </Typography>
      </Grid>
               { accessToken ? (
                 <Typography variant="button">
                    <Link to='/' onClick={logout} className={classes.auth}>
                     Logout
                   </Link>
                  </Typography>
               ) : (
                 <>
      <Grid item>
                  <Typography variant="button">
                   <Link to='/signup' className={classes.auth}>
                    Sign Up
                   </Link>
                  </Typography>
      </Grid>
      <Grid item>
                  <Typography variant="button">
                   <Link to='/login' className={classes.auth}>
                    Login
                   </Link>
                  </Typography>
      </Grid>
                 </>
               )
               }
      </Grid>
              </Toolbar>
            </AppBar>
          </div>
        );
}

export default NavBar;
