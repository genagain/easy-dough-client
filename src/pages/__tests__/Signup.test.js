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
    const firstnameField = screen.getByPlaceholderText('First Name')
    expect(firstnameField.type).toBe('text')
  })

  test('renders the lastname field', () => {
    const lastnameField = screen.getByPlaceholderText('Last Name')
    expect(lastnameField.type).toBe('text')
  })

  test('renders the email field', () => {
    const emailField = screen.getByPlaceholderText("Email")
    expect(emailField.type).toBe('text')
  })

  test('renders the password field', () => {
    const passwordField = screen.getByPlaceholderText("Password")
    expect(passwordField.type).toBe('password')
  })

  test('renders the password confirmation field', () => {
    const passwordField = screen.getByPlaceholderText("Confirm Password")
    expect(passwordField.type).toBe('password')
  })

  test('renders the sign up button', () => {
    const signup = screen.getByRole("button", { name: /sign up/i}).textContent;
    expect(signup).not.toBeNull()
  })
})
