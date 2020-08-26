import React from 'react'
import { render } from '@testing-library/react'
import Signup from '../Signup'
import UserContext from '../../UserContext'

test('render Signup page', () => {
  const { getByRole, getByTestId } = render(<UserContext.Provider value={{}}><Signup /></UserContext.Provider>)
  const title = getByRole("heading", { name: /sign up/i }).textContent
  expect(title).toMatchInlineSnapshot(`"Sign Up"`)

  const firstnameField = getByTestId('textField-firstname')
  const lastnameField = getByTestId('textField-lastname')
  const emailField = getByTestId('textField-email')
  const passwordField = getByTestId('textField-password')
  const passwordConfirmationField = getByTestId('textField-password-confirmation')
  const signup = getByRole("button", { name: /sign up/i}).textContent;

  expect(firstnameField).not.toBeNull()
  expect(lastnameField).not.toBeNull()
  expect(emailField).not.toBeNull()
  expect(passwordField).not.toBeNull()
  expect(passwordConfirmationField).not.toBeNull()
  expect(signup).not.toBeNull()
})
