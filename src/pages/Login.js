import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    'padding': '2rem'
  },
  form: {
    display: 'flex',
    'flex-direction': 'column'
  },
  email: {
    'padding-top': '1rem'
  },
  password: {
    'padding-top': '1rem',
    'padding-bottom': '1rem'
  }
}))

function Login() {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Typography variant="h4">
        Login
      </Typography>
      <form className={classes.form}>
        <TextField label="Email" className={classes.email} />
        <TextField label="Password" className={classes.password}/>
        <Button variant="contained" color="primary">Login</Button>
      </form>
    </Container>
  )
}

export default Login
