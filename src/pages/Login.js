import  React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserContext from '../UserContext';

const useStyles = makeStyles((theme) => ({
  container: {
    'padding': '2rem'
  },
  form: {
    display: 'flex',
    'flex-direction': 'column'
  },
  title: {
    'padding-bottom': '1rem'
  },
  email: {
    'padding-bottom': '1rem'
  },
  password: {
    'padding-bottom': '1rem'
  }
}))

function Login() {

  const { login } = useContext(UserContext)

  const history = useHistory()
  const classes = useStyles();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:5000/auth/login', {method: 'POST', headers: {
      'Content-Type': 'application/json',
          },
      body: JSON.stringify({ email, password})
    })

    const json = await response.json()
    if (json['access_token']) {
      login(json['access_token'])
      history.push('/dashboard')
    } else {
      setError('That email and password was incorrect. Please try again.')
    }
  }

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Login
      </Typography>
      <Typography variant="body1" className={classes.title}>
        {error}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField label="Email" className={classes.email} onInput={ event => setEmail(event.target.value) } />
        <TextField label="Password" type="password" className={classes.password} onInput={ event => setPassword(event.target.value) }/>
        <Button variant="contained" type="submit" color="primary">Login</Button>
      </form>
    </Container>
  )
}

export default Login
