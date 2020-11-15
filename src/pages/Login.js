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
      history.push('/transactions')
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
    <div className="flex flex-col mb-144 lg:mb-48">
      <h4 className="text-6xl m-auto lg:text-4xl">Login</h4>
      {error ? <p>{error}</p> : null}
      <AuthForm onSubmit={handleLogin} fieldSetters={{ setEmail, setPassword }}/>
      <button onClick={handleDemoLogin} className="m-auto w-84 lg:w-32 my-6 py-6 px-6 border border-blue-800 hover:border-blue-700 rounded-lg text-blue-800 hover:text-blue-700 text-5xl lg:my-2 lg:p-2 text-4xl lg:text-lg">Demo Log In</button>
    </div>

  )
}

export default Login
