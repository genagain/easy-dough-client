import React from 'React'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import NavBar from '../NavBar'
import UserContext from '../../UserContext'

function renderNavBar(value = {}) {
  return render(<UserContext.Provider value={value} ><BrowserRouter><NavBar /></BrowserRouter></UserContext.Provider>)
}

describe('When the access token does not exist, the NavBar component', () => {

  beforeEach(() => {
    renderNavBar()
  })

  it('renders the Easy Dough link', () => {
    const indexLink = screen.getByRole("heading", { name: /easy dough/i}).textContent;
    expect(indexLink).toMatchInlineSnapshot(`"Easy Dough"`)
  })

  it('renders the sign up link', () => {
    const signupLink = screen.getByRole("link", { name: /sign up/i}).textContent;
    expect(signupLink).toMatchInlineSnapshot(`"Sign Up"`)
  })

  it('renders the login link', () => {
    const loginLink = screen.getByRole("link", { name: /login/i}).textContent;
    expect(loginLink).toMatchInlineSnapshot(`"Login"`)
  })

  it('does not render the logout link', () => {
    const logoutLink = screen.queryByRole("link", { name: /logout/i})
    expect(logoutLink).toBeNull()
  })
})

describe('When the access token exists, the NavBar component', () => {
  beforeEach(() => {
    renderNavBar({ accessToken: 'Fake Access Token'})
  })

  it('renders the Easy Dough link', () => {
    const indexLink = screen.getByRole("heading", { name: /easy dough/i}).textContent;
    expect(indexLink).toMatchInlineSnapshot(`"Easy Dough"`)
  })

  it('renders the logout link', () => {
    const logoutLink = screen.getByRole("link", { name: /logout/i}).textContent;
    expect(logoutLink).toMatchInlineSnapshot(`"Logout"`)
  })

  it('does not render the login link', () => {
    const loginLink = screen.queryByRole("link", { name: /login/i})
    expect(loginLink).toBeNull()
  })

  it('does not render the signup link', () => {
    const signupLink = screen.queryByRole("link", { name: /signup/i})
    expect(signupLink).toBeNull()
  })
})
