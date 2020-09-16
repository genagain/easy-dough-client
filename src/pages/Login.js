import  React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../UserContext';

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
      <input type="text" placeholder="Email" onChange={ event => setEmail(event.target.value)} />
      <input type="password" placeholder="Password" onChange={ event => setPassword(event.target.value)}/>
      <button type="submit">Log In</button>
    </form>
    <button onClick={handleDemoLogin}>Demo Log In</button>
    </>

  )
}

export default Login
