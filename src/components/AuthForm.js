import React from 'react'

function AuthForm({onSubmit}) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Email" data-testid="form"/>
      <input type="password" placeholder="Password"/>
      <button type="submit">Log In</button>
    </form>
  )
}

export default AuthForm;
