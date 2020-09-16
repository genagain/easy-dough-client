import  React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../UserContext';

    //<Container maxWidth="xs" className={classes.container}>
      //<Typography variant="h4" className={classes.title}>
        //Login
      //</Typography>
      //<Typography variant="body1" className={classes.title}>
        //{error}
      //</Typography>
      //<form className={classes.form} onSubmit={handleLogin}>
        //<TextField data-testid="textField-email" label="Email" className={classes.field} onInput={ event => setEmail(event.target.value) } />
        //<TextField data-testid="textField-password" label="Password" type="password" className={classes.field} onInput={ event => setPassword(event.target.value) }/>
        //<div className={classes.buttons}>
          //<Button variant="contained" type="submit" color="primary">Log In</Button>
          //<Button variant="contained" color="secondary" onClick={handleDemoLogin}>Demo Log In</Button>
        //</div>
      //</form>
    //</Container>
//
// TODO after removing MUI, refactor into one Auth form with isSignup prop, make the errors red and add component the tests using jest.fn() (hopefully I don't have to touch the page tests) 
function Login() {

  const { login } = useContext(UserContext)

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function authenticate(email, password) {
    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    const response = await fetch(`${apiUrl}/auth/login`, {method: 'POST', headers: {
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

  async function handleLogin(event) {
    event.preventDefault()
    await authenticate(email, password)
  }

  async function handleDemoLogin() {
    const email = 'john@test.com'
    const password = 'test_password'
    await authenticate(email, password)
  }

  return (
    <>
    <h4>Login</h4>
    <form onSubmit={handleLogin}>
      <input name="email" type="text" placeholder="Email" onChange={ event => setEmail(event.target.value)} />
      <input name="password" type="password" placeholder="Password" onChange={ event => setPassword(event.target.value)}/>
      <button type="submit">Log In</button>
    </form>
    <button onClick={handleDemoLogin}>Demo Log In</button>
    </>

  )
}

export default Login
