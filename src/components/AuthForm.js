import React from 'react'

function AuthForm({onSubmit, isSignup, fieldSetters}) {
  const {setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation} = fieldSetters

  return (
    <div className="pt-4">
    <form onSubmit={onSubmit} data-testid="form">
    { isSignup ?
      <div className="lg:flex lg:flex-row  lg:m-auto lg:space-x-4 lg:max-w-sm">
        <input type="text" name="firstname" placeholder="First Name" onChange={ e => setFirstname(e.target.value)} className= "block m-auto w-6/12 my-6 p-6 text-4xl border border-gray-400 rounded lg:m-0 lg:p-2 lg:text-lg" />
        <input type="text" name="lastname" placeholder="Last Name" onChange={e => setLastname(e.target.value)} className="block m-auto w-6/12 my-6 p-6 text-4xl border border-gray-400 rounded lg:m-0 lg:p-2 lg:text-lg"/>
      </div>
      : null }
      <input type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value) } className="block m-auto w-6/12 my-6 p-6 text-4xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg"/>
      <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value) } className="block m-auto w-6/12 my-6 p-6 text-4xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg"/>
    { isSignup ?
      <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={e => setPasswordConfirmation(e.target.value)} className="block m-auto w-6/12 my-6 p-6 text-4xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg"/>
      : null }
      <button type="submit" className="block m-auto my-5 p-6 border border-gray-400 rounded-lg lg:my-2 lg:p-2 text-4xl lg:text-lg">{ isSignup ? 'Sign Up' : 'Log In'}</button>
    </form>
    </div>
  )
}

export default AuthForm;
