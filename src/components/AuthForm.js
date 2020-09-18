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
      <input type="text" name="email" placeholder="Email"/>
      <input type="password" name="password" placeholder="Password"/>
    { isSignup ?
      <input type="password" name placeholder="Confirm Password" />
      : null }
      <button type="submit">{ isSignup ? 'Sign Up' : 'Log In'}</button>
    </form>
  )
}

export default AuthForm;
