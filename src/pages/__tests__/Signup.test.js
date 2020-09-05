import React from 'react'
import { render, screen } from '@testing-library/react'
import Signup from '../Signup'
import UserContext from '../../UserContext'

describe('The Signup component', () => {
  beforeEach(() => {
    render(<UserContext.Provider value={{}}><Signup /></UserContext.Provider>)
  })

  test('renders the Sign Up title', () => {
    const title = screen.getByRole("heading", { name: /sign up/i }).textContent
    expect(title).toMatchInlineSnapshot(`"Sign Up"`)
  })

  test('renders the firstname field', () => {
    const firstnameField = screen.getByTestId('textField-firstname')
    expect(firstnameField).not.toBeNull()
  })

  test('renders the lastname field', () => {
    const lastnameField = screen.getByTestId('textField-lastname')
    expect(lastnameField).not.toBeNull()
  })

  test('renders the email field', () => {
    const emailField = screen.getByTestId('textField-email')
    expect(emailField).not.toBeNull()
  })

  test('renders the password field', () => {
    const passwordField = screen.getByTestId('textField-password')
    expect(passwordField).not.toBeNull()
  })

  test('renders the password confirmation field', () => {
    const passwordConfirmationField = screen.getByTestId('textField-password-confirmation')
    expect(passwordConfirmationField).not.toBeNull()
  })

  test('renders the sign up button', () => {
    const signup = screen.getByRole("button", { name: /sign up/i}).textContent;
    expect(signup).not.toBeNull()
  })
})
