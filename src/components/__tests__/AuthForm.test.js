import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import AuthForm from '../AuthForm'

describe('When the signup prop is false, the AuthForm component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const onSubmit = jest.fn()
      render(<AuthForm onSubmit={onSubmit}/>)
    })

    test('the email field', () => {
      const emailField = screen.getByPlaceholderText("Email")
      expect(emailField.type).toBe('text')
    })

    test('the password field', () => {
      const passwordField = screen.getByPlaceholderText("Password")
      expect(passwordField.type).toBe('password')
    })

    test('the Login button', () => {
      const button = screen.getByRole("button", { name: /^log in$/i}).textContent;
      expect(button).toMatchInlineSnapshot(`"Log In"`)
    })
  })

  // TODO test error message rendering
  test('submits the email and password', () => {
    const email = "john@test.com"
    const password = "test_password"

    const onSubmit = jest.fn()
    render(<AuthForm onSubmit={onSubmit}/>)

    const emailField = screen.getByPlaceholderText("Email")
    const passwordField = screen.getByPlaceholderText("Password")
    userEvent.type(emailField, email)
    userEvent.type(passwordField, password)

    //NOTE: I need to fireEvent instead of userEvent because userEvent does not support the submit method
    fireEvent.submit(screen.getByTestId("form"))

    expect(onSubmit).toHaveBeenCalledTimes(1);
  })
})
