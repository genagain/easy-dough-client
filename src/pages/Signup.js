import  React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

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
