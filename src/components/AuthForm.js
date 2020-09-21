import React from 'react'

function AuthForm({onSubmit, isSignup, fieldSetters}) {
  const {setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation} = fieldSetters

  return (
    <div className="pt-4">
    <form onSubmit={onSubmit} data-testid="form">
    { isSignup ?
      <div className="my-10 space-x-10">
        <input type="text" name="firstname" placeholder="First Name" onChange={ e => setFirstname(e.target.value)} className= "py-6 px-6 text-4xl" />
        <input type="text" name="lastname" placeholder="Last Name" onChange={e => setLastname(e.target.value)} className="py-6 px-6 text-4xl"/>
      </div>
      : null }
      <input type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value) } className="block w-full my-10 py-6 px-6 text-4xl"/>
      <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value) } className="block w-full my-10 py-6 px-6 text-4xl"/>
    { isSignup ?
      <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={e => setPasswordConfirmation(e.target.value)} className="block w-full my-10 py-6 px-6 text-4xl"/>
      : null }
      <button type="submit" className="block m-auto my-5 py-6 px-6 border-2 border-gray-500 rounded-lg text-4xl">{ isSignup ? 'Sign Up' : 'Log In'}</button>
    </form>
    </div>
  )
}

export default AuthForm;
