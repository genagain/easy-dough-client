import React from 'react'

function AuthForm({onSubmit, isSignup, fieldSetters}) {
  const {setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation} = fieldSetters

  return (
    <div className="pt-4">
    <form onSubmit={onSubmit} data-testid="form">
    { isSignup ?
      <>
        <input type="text" name="firstname" placeholder="First Name" onChange={ e => setFirstname(e.target.value)}/>
        <input type="text" name="lastname" placeholder="Last Name" onChange={e => setLastname(e.target.value)}/>
      </>
      : null }
      <input type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value) } className="block py-3 text-4xl"/>
      <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value) } className="block py-3 text-4xl"/>
    { isSignup ?
      <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={e => setPasswordConfirmation(e.target.value)}/>
      : null }
      <button type="submit" className="block m-auto py-3 text-4xl">{ isSignup ? 'Sign Up' : 'Log In'}</button>
    </form>
    </div>
  )
}

export default AuthForm;
