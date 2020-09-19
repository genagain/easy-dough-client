import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import AuthForm from '../AuthForm'

describe('When the isSignup prop is false, the AuthForm component', () => {
  describe('does not render', () => {
    beforeEach(() => {
      const onSubmit = jest.fn()
      const setFirstname = jest.fn()
      const setLastname = jest.fn()
      const setEmail = jest.fn()
      const setPassword = jest.fn()
      const setPasswordConfirmation = jest.fn()

      const fieldSetters = {setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation}

      render(<AuthForm onSubmit={onSubmit} fieldSetters={fieldSetters}/>)
    })

    test('the firstname field', () => {
      const firstnameField = screen.queryByPlaceholderText('First Name')
      expect(firstnameField).toBeNull()
    })

    test('the lastname field', () => {
      const lastnameField = screen.queryByPlaceholderText('Last Name')
      expect(lastnameField).toBeNull()
    })

    test('the password confirmation field', () => {
      const passwordConfirmationField = screen.queryByPlaceholderText('Confirm Password')
      expect(passwordConfirmationField).toBeNull()
    })

    test('the Signup button', () => {
      const button = screen.queryByRole("button", { name: /^sign up$/i});
      expect(button).toBeNull()
    })
  })

  describe('renders', () => {
    beforeEach(() => {
      const onSubmit = jest.fn()
      const setFirstname = jest.fn()
      const setLastname = jest.fn()
      const setEmail = jest.fn()
      const setPassword = jest.fn()
      const setPasswordConfirmation = jest.fn()

      const fieldSetters = {setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation}

      render(<AuthForm onSubmit={onSubmit} fieldSetters={fieldSetters}/>)
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

  test('submits the email and password', () => {
    const email = "john@test.com"
    const password = "test_password"

    const onSubmit = jest.fn()
    const setFirstname = jest.fn()
    const setLastname = jest.fn()
    const setEmail = jest.fn()
    const setPassword = jest.fn()
    const setPasswordConfirmation = jest.fn()

    const fieldSetters = {setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation}

    render(<AuthForm onSubmit={onSubmit} fieldSetters={fieldSetters}/>)

    const emailField = screen.getByPlaceholderText("Email")
    const passwordField = screen.getByPlaceholderText("Password")
    userEvent.type(emailField, email)
    userEvent.type(passwordField, password)

    //NOTE: I need to fireEvent instead of userEvent because userEvent does not support the submit method
    fireEvent.submit(screen.getByTestId("form"))

    expect(onSubmit).toHaveBeenCalledTimes(1);
  })
})

describe('When the signup prop is true, the AuthForm component', () => {
  describe('does not render', () => {
    beforeEach(() => {
      const onSubmit = jest.fn()
      const setFirstname = jest.fn()
      const setLastname = jest.fn()
      const setEmail = jest.fn()
      const setPassword = jest.fn()
      const setPasswordConfirmation = jest.fn()

      const fieldSetters = {setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation}

      render(<AuthForm isSignup onSubmit={onSubmit} fieldSetters={fieldSetters}/>)
    })

    test('the Login button', () => {
      const button = screen.queryByRole("button", { name: /^log in/i});
      expect(button).toBeNull()
    })
  })

  describe('renders', () => {
    beforeEach(() => {
      const onSubmit = jest.fn()
      const setFirstname = jest.fn()
      const setLastname = jest.fn()
      const setEmail = jest.fn()
      const setPassword = jest.fn()
      const setPasswordConfirmation = jest.fn()

      const fieldSetters = {setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation}

      render(<AuthForm isSignup onSubmit={onSubmit} fieldSetters={fieldSetters}/>)
    })

    test('the firstname field', () => {
      const firstnameField = screen.getByPlaceholderText('First Name')
      expect(firstnameField.type).toBe('text')
    })

    test('the lastname field', () => {
      const lastnameField = screen.getByPlaceholderText('Last Name')
      expect(lastnameField.type).toBe('text')
    })

    test('the email field', () => {
      const emailField = screen.getByPlaceholderText("Email")
      expect(emailField.type).toBe('text')
    })

    test('the password field', () => {
      const passwordField = screen.getByPlaceholderText("Password")
      expect(passwordField.type).toBe('password')
    })

    test('the password confirmation field', () => {
      const passwordConfirmationField = screen.getByPlaceholderText("Confirm Password")
      expect(passwordConfirmationField.type).toBe('password')
    })

    test('the Signup button', () => {
      const button = screen.getByRole("button", { name: /^sign up$/i}).textContent;
      expect(button).toMatchInlineSnapshot(`"Sign Up"`)
    })
  })

  test('submits the email and password', () => {
    const firstname = "John"
    const lastname = "Doe"
    const email = "john@test.com"
    const password = "test_password"

    const onSubmit = jest.fn()
    const setFirstname = jest.fn()
    const setLastname = jest.fn()
    const setEmail = jest.fn()
    const setPassword = jest.fn()
    const setPasswordConfirmation = jest.fn()

    const fieldSetters = {setFirstname, setLastname, setEmail, setPassword, setPasswordConfirmation}

    render(<AuthForm isSignup onSubmit={onSubmit} fieldSetters={fieldSetters}/>)

    const firstnameField = screen.getByPlaceholderText("First Name")
    const lastnameField = screen.getByPlaceholderText("Last Name")
    const emailField = screen.getByPlaceholderText("Email")
    const passwordField = screen.getByPlaceholderText("Password")
    const passwordConfirmationField = screen.getByPlaceholderText("Confirm Password")

    // TODO possibily change to fireEvent
    userEvent.type(firstnameField, firstname)
    userEvent.type(lastnameField, lastname)
    userEvent.type(emailField, email)
    userEvent.type(passwordField, password)
    userEvent.type(passwordConfirmationField, password)

    //NOTE: I need to fireEvent instead of userEvent because userEvent does not support the submit method
    fireEvent.submit(screen.getByTestId("form"))

    expect(onSubmit).toHaveBeenCalledTimes(1);
  })
})
