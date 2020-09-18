import React from 'react'

function AuthForm({onSubmit, isSignup}) {
  return (
    <form onSubmit={onSubmit} data-testid="form">
    { isSignup ?
      <>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
      </>
      : null }
      <input type="text" placeholder="Email"/>
      <input type="password" placeholder="Password"/>
    { isSignup ?
      <input placeholder="Confirm Password" type="password"/>
      : null }
      <button type="submit">{ isSignup ? 'Sign Up' : 'Log In'}</button>
    </form>
  )
}

export default AuthForm;
