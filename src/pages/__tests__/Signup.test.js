import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
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

  test('renders error message when email is invalid', ()=> {
    const firstname = "John"
    const lastname = "Doe"
    const email = "invalid email"
    const password = "test_password"

    const firstnameField = screen.getByPlaceholderText("First Name")
    const lastnameField = screen.getByPlaceholderText("Last Name")
    const emailField = screen.getByPlaceholderText("Email")
    const passwordField = screen.getByPlaceholderText("Password")
    const passwordConfirmationField = screen.getByPlaceholderText("Confirm Password")

    fireEvent.change(firstnameField, { target: { value: firstname}})
    fireEvent.change(lastnameField, { target: { value: lastname}})
    fireEvent.change(emailField, { target: { value: email}})
    fireEvent.change(passwordField, { target: { value: password}})
    fireEvent.change(passwordConfirmationField, { target: { value: password}})

    fireEvent.submit(screen.getByTestId("form"))

    const errorMessage = screen.getByText("Please provide a valid email")
    expect(errorMessage).not.toBeNull()
  })

  test('renders error message when passwords do not match', ()=> {
    const firstname = "John"
    const lastname = "Doe"
    const email = "john@test.com"
    const password = "test_password"
    const passwordConfirmation = "something_different"

    const firstnameField = screen.getByPlaceholderText("First Name")
    const lastnameField = screen.getByPlaceholderText("Last Name")
    const emailField = screen.getByPlaceholderText("Email")
    const passwordField = screen.getByPlaceholderText("Password")
    const passwordConfirmationField = screen.getByPlaceholderText("Confirm Password")

    fireEvent.change(firstnameField, { target: { value: firstname}})
    fireEvent.change(lastnameField, { target: { value: lastname}})
    fireEvent.change(emailField, { target: { value: email}})
    fireEvent.change(passwordField, { target: { value: password}})
    fireEvent.change(passwordConfirmationField, { target: { value: passwordConfirmation}})

    fireEvent.submit(screen.getByTestId("form"))

    const errorMessage = screen.getByText("Please make ensure the passwords provided match")
    expect(errorMessage).not.toBeNull()
  })
})
