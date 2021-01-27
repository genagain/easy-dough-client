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

    const allFields = [firstname, lastname, email, password, passwordConfirmation]

    allFields.forEach(field => {
      if (field === '') {
        setErrors(['Please fill out all of the fields'])
      }
    })

    let validEmail = /^[A-Za-z0-9_.]+@\w+.\w+.\w+/
    if(!validEmail.test(email)) {
      setErrors(prevErrors => [...prevErrors, 'Please provide a valid email'])
      return
    }

    if (password !== passwordConfirmation || password === '') {
      setErrors(prevErrors => [...prevErrors, 'Please ensure the passwords provided match'])
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
      <div className="w-2/3 lg:w-1/3 m-auto">
      {
        errors.map(error => (
        <p className="w-fit-content m-auto text-5xl lg:text-lg text-red-600" key={error}>{error}</p>
        ))
      }
      <AuthForm isSignup onSubmit={handleSubmit} fieldSetters={{setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation}}/>
      </div>
    </div>
  )
}

export default Signup
