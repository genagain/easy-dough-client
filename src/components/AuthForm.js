import React from 'react'

function AuthForm({onSubmit, isSignup, fieldSetters}) {
  const {setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation} = fieldSetters

  return (
    <div className="p-4 m-auto lg:max-w-md">
    <form onSubmit={onSubmit} data-testid="form">
    { isSignup &&
      <div className="lg:flex lg:flex-row lg:space-x-4">
        <input type="text" name="firstname" placeholder="First Name" onChange={ e => setFirstname(e.target.value)} className="my-6 w-full border-box p-6 text-5xl border border-gray-400 rounded lg:my-2 lg:p-2 lg:text-lg"/>
        <input type="text" name="lastname" placeholder="Last Name" onChange={e => setLastname(e.target.value)} className="my-6 w-full border-box p-6 text-5xl border border-gray-400 rounded lg:p-2 lg:my-2 lg:text-lg"/>
      </div>
     }
      <input type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value) } className="my-6 p-6 text-5xl border border-gray-400 rounded lg:p-2 lg:text-lg lg:my-2 w-full"/>
      <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value) } className="my-6 p-6 text-5xl border border-gray-400 rounded lg:p-2 lg:text-lg lg:my-2 w-full"/>
    { isSignup &&
      <input type="password" name="password" placeholder="Confirm Password" onChange={e => setPasswordConfirmation(e.target.value) } className="my-6 p-6 text-5xl border border-gray-400 rounded lg:p-2 lg:text-lg lg:my-2 w-full"/>
    }
     <button type="submit" className="block m-auto w-84 lg:w-32 my-5 p-6 bg-blue-800 hover:bg-blue-700 text-white rounded-lg lg:my-2 lg:p-2 text-5xl lg:text-lg">{ isSignup ? 'Sign Up' : 'Log In'}</button>
    </form>
    </div>
  )
}

export default AuthForm;
