import  React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
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
  title: {
    'padding-bottom': '1rem'
  },
  field: {
    'padding-bottom': '1rem'
  },
}))

function Signup() {

  const history = useHistory()
  const classes = useStyles();

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    if (password !== passwordConfirmation) {
      setError('Please make ensure the passwords provided match')
      return
    }

    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    const response = await fetch(`${apiUrl}/auth/signup`, {method: 'POST', headers: {
      'Content-Type': 'application/json',
          },
      body: JSON.stringify({ firstname, lastname, email, password})
    })

    if (response.status === 200) {
      history.push('/login')
    } else {
      const json = await response.json()
      setError(json['message'])
    }
  }

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Sign Up
      </Typography>
      <Typography variant="body1" className={classes.title}>
        {error}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField required data-testid="textField-firstname" label="First Name" className={classes.field} onInput={ event => setFirstname(event.target.value) } />
        <TextField required data-testid="textField-lastname" label="Last Name" className={classes.field} onInput={ event => setLastname(event.target.value) } />
        <TextField required data-testid="textField-email" label="Email" className={classes.field} onInput={ event => setEmail(event.target.value) } />
        <TextField required data-testid="textField-password" label="Password" type="password" className={classes.field} onInput={ event => setPassword(event.target.value) }/>
        <TextField required data-testid="textField-password-confirmation" label="Password Confirmation" type="password" className={classes.field} onInput={ event => setPasswordConfirmation(event.target.value) }/>
        <Button variant="contained" type="submit" color="primary">Sign Up</Button>
      </form>
    </Container>
  )
}

export default Signup
