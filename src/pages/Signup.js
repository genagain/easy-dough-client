import  React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

    //<Container maxWidth="xs" className={classes.container}>
      //<Typography variant="h4" className={classes.title}>
        //Sign Up
      //</Typography>
      //<Typography variant="body1" className={classes.title}>
        //{error}
      //</Typography>
      //<form className={classes.form} onSubmit={handleSubmit}>
        //<div className={classes.names}>
          //<TextField required data-testid="textField-firstname" label="First Name" className={classes.field} onInput={ event => setFirstname(event.target.value) } />
          //<TextField required data-testid="textField-lastname" label="Last Name" className={classes.field} onInput={ event => setLastname(event.target.value) } />
        //</div>
        //<TextField required data-testid="textField-email" label="Email" className={classes.field} onInput={ event => setEmail(event.target.value) } />
        //<TextField required data-testid="textField-password" label="Password" type="password" className={classes.field} onInput={ event => setPassword(event.target.value) }/>
        //<TextField required data-testid="textField-password-confirmation" label="Password Confirmation" type="password" className={classes.field} onInput={ event => setPasswordConfirmation(event.target.value) }/>
        //<Button variant="contained" type="submit" color="primary">Sign Up</Button>
      //</form>
    //</Container>

function Signup() {

  const history = useHistory()

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    let validEmail = /^[A-Za-z0-9_.]+@\w+.\w+.\w+/
    if(!validEmail.test(email)) {
      setError('Please provide a valid email')
      return
    }

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
    <>
    <h4>Sign Up</h4>
    <form onSubmit={handleSubmit}>
      <input placeholder="First Name" type="text" onChange={ event => setFirstname(event.target.value)} />
      <input placeholder="Last Name" type="text" onChange={ event => setLastname(event.target.value)}/>
      <input placeholder="Email" type="text" onChange={ event => setEmail(event.target.value)} />
      <input placeholder="Password" type="password" onChange={ event => setPassword(event.target.value)}/>
      <input placeholder="Confirm Password" type="password" onChange={ event => setPasswordConfirmation(event.target.value)}/>
      <button type="submit">Sign Up</button>
    </form>
    </>
  )
}

export default Signup
