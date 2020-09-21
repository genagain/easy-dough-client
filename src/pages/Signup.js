import  React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import AuthForm from '../components/AuthForm'

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

    if (response.ok) {
      history.push('/login')
    } else {
      const json = await response.json()
      setError(json['message'])
    }
  }

  return (
    <div className="flex flex-col items-center">
    <h4 className="text-6xl lg:text-4xl">Sign Up</h4>
    {error ? <p>{error}</p> : null}
    <AuthForm isSignup onSubmit={handleSubmit} fieldSetters={{setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation}}/>
    </div>
  )
}

export default Signup
