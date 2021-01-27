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
  const [errors, setErrors] = useState([])

  async function handleSubmit(event) {
    event.preventDefault()
    setErrors([])

    let validEmail = /^[A-Za-z0-9_.]+@\w+.\w+.\w+/
    if(!validEmail.test(email)) {
      setErrors(prevErrors => [...prevErrors, 'Please provide a valid email'])
    }

    if (password !== passwordConfirmation) {
      setErrors(prevErrors => [...prevErrors, 'Please make ensure the passwords provided match'])
    }

    if (errors.length === 0) {
      return
    }

    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    const response = await fetch(`${apiUrl}/auth/signup`, {method: 'POST', headers: {
      'Content-Type': 'application/json',
          },
      body: JSON.stringify({ firstname, lastname, email, password})
    })

    setErrors([])
    if (response.ok) {
      history.push('/login')
    } else {
      const json = await response.json()
      setErrors([json['message']])
    }
  }

  return (
    <div className="flex flex-col">
    <h4 className="m-auto text-6xl lg:text-4xl">Sign Up</h4>
    {
      errors.map(error => (
      <p key={error}>{error}</p> 
      ))
    }
    <AuthForm isSignup onSubmit={handleSubmit} fieldSetters={{setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation}}/>
    </div>
  )
}

export default Signup
