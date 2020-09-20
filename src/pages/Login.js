import  React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import AuthForm from '../components/AuthForm'
import UserContext from '../UserContext';

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

  //<button onClick={handleDemoLogin} className="text-4xl py-3">Demo Log In</button>
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-6xl">Login</h4>
      {error ? <p>{error}</p> : null}
      <AuthForm onSubmit={handleLogin} fieldSetters={{ setEmail, setPassword }}/>
    </div>

  )
}

export default Login
