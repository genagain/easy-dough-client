import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
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
      
        },
    login : {
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
                <Typography variant="h6" className={classes.title}>
                  <Link to='/' className={classes.index}>
                    Easy Dough
                  </Link>
                </Typography>
      </Grid>
               { accessToken ? (
                <Button color="inherit" onClick={logout} className={classes.login}>
                  Logout
                </Button>
               ) : (
                 <>
      <Grid item>
                  <Typography variant="button">
                   <Link to='/signup' className={classes.login}>
                    Sign Up
                   </Link>
                  </Typography>
      </Grid>
      <Grid item>
                  <Typography variant="button">
                   <Link to='/login' className={classes.login}>
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
