import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
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

  // TODO: test firing changes to the input fields after removing MUI
  test('renders the email field', () => {
    const emailField = screen.getByTestId('textField-email')
    expect(emailField).not.toBeNull()
  })

  test('renders the password field', () => {
    const passwordField = screen.getByTestId('textField-password')
    expect(passwordField).not.toBeNull()
  })

  test('renders the Login button', () => {
    const button = screen.getByRole("button", { name: /login/i}).textContent;
    expect(button).toMatchInlineSnapshot(`"Login"`)
  })
})
