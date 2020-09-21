import React from 'react'

function AuthForm({onSubmit, isSignup, fieldSetters}) {
  const {setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation} = fieldSetters

  // TODO change py-6 px-6 to p-6
  return (
    <div className="pt-4">
    <form onSubmit={onSubmit} data-testid="form">
    { isSignup ?
      <div className="flex flex-col lg:flex-row lg:my-6 lg:space-x-10">
        <input type="text" name="firstname" placeholder="First Name" onChange={ e => setFirstname(e.target.value)} className= "my-6 py-6 px-6 text-4xl lg:p-2 lg:text-base" />
        <input type="text" name="lastname" placeholder="Last Name" onChange={e => setLastname(e.target.value)} className="my-6 py-6 px-6 text-4xl lg:p-2 lg:text-base"/>
      </div>
      : null }
      <input type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value) } className="block w-full my-6 py-6 px-6 text-4xl lg:p-2 lg:text-base"/>
      <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value) } className="block w-full my-6 py-6 px-6 text-4xl lg:p-2 lg:text-base"/>
    { isSignup ?
      <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={e => setPasswordConfirmation(e.target.value)} className="block w-full my-6 py-6 px-6 text-4xl lg:p-2 lg:text-base"/>
      : null }
      <button type="submit" className="block m-auto my-5 py-6 px-6 border-2 border-gray-500 rounded-lg text-4xl">{ isSignup ? 'Sign Up' : 'Log In'}</button>
    </form>
    </div>
  )
}

export default AuthForm;
