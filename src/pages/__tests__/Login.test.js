import React from 'react';
import {render, screen} from '@testing-library/react'
import Login from '../Login'
import UserContext from '../../UserContext'

describe('The Login component', () => {
  beforeEach(() => {
    render(<UserContext.Provider value={{}}><Login /></UserContext.Provider>)
  })

  test('renders the Login header', () => {
    const title = screen.getByRole("heading", { name: /login/i}).textContent;
    expect(title).toMatchInlineSnapshot(`"Login"`)
  })

  test('renders the email field', () => {
    const emailField = screen.getByPlaceholderText("Email")
    expect(emailField.type).toBe('text')
  })

  test('renders the password field', () => {
    const passwordField = screen.getByPlaceholderText("Password")
    expect(passwordField.type).toBe('password')
  })

  test('renders the Login button', () => {
    const button = screen.getByRole("button", { name: /^log in$/i}).textContent;
    expect(button).toMatchInlineSnapshot(`"Log In"`)
  })

  test('renders the Demo User button', () => {
    const button = screen.getByRole("button", { name: /^demo log in/i}).textContent;
    expect(button).toMatchInlineSnapshot(`"Demo Log In"`)
  })
})
