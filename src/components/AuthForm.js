import React from 'react'

function AuthForm({onSubmit, isSignup, fieldSetters}) {
  // TODO consider conditionally destructuring these
  const {setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation} = fieldSetters

  return (
    <form onSubmit={onSubmit} data-testid="form">
    { isSignup ?
      <>
        <input type="text" name="firstname" placeholder="First Name" onChange={ e => setFirstname(e.target.value)}/>
        <input type="text" name="lastname" placeholder="Last Name" onChange={e => setLastname(e.target.value)}/>
      </>
      : null }
      <input type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value) }/>
      <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value) }/>
    { isSignup ?
      <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={e => setPasswordConfirmation(e.target.value)}/>
      : null }
      <button type="submit">{ isSignup ? 'Sign Up' : 'Log In'}</button>
    </form>
  )
}

export default AuthForm;
