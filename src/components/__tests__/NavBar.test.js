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

  it('renders the Easy Dough logo', () => {
    const logoLink = screen.getByAltText("Easy Dough Logo")
    expect(logoLink.src).toContain("logo.svg")
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

  it('does not render the transactions link', () => {
    const transactions = screen.queryByRole("link", { name: /transactions/i })
    expect(transactions).toBeNull()
  })

  it('does not render the settings link', () => {
    const settings = screen.queryByRole("link", { name: /settings/i })
    expect(settings).toBeNull()
  })

  it('does not render the Spending Plan link', () => {
    const spendingPlan = screen.queryByRole("link", { name: /spending plan/i })
    expect(spendingPlan).toBeNull()
  })

  it('does not render the report link', () => {
    const report = screen.queryByRole("link", { name: /report/i })
    expect(report).toBeNull()
  })
})

describe('When the access token exists, the NavBar component', () => {
  beforeEach(() => {
    renderNavBar({ accessToken: 'Fake Access Token'})
  })

  it('renders the Easy Dough logo', () => {
    const logoLink = screen.getByAltText("Easy Dough Logo")
    expect(logoLink.src).toContain("logo.svg")
  })

  it('renders the Easy Dough link', () => {
    const indexLink = screen.getByRole("heading", { name: /easy dough/i}).textContent;
    expect(indexLink).toMatchInlineSnapshot(`"Easy Dough"`)
  })

  it('renders the transactions link', () => {
    const transactionsLink = screen.getByRole("link", { name: /transactions/i}).textContent;
    expect(transactionsLink).toMatchInlineSnapshot(`"Transactions"`)
  })

  it('renders the settings link', () => {
    const settingsLink = screen.getByRole("link", { name: /settings/i}).textContent;
    expect(settingsLink).toMatchInlineSnapshot(`"Settings"`)
  })

  it('renders the spendingPlan link', () => {
    const spendingPlanLink = screen.getByRole("link", { name: /spending plan/i}).textContent;
    expect(spendingPlanLink).toMatchInlineSnapshot(`"Spending Plan"`)
  })

  it('renders the report link', () => {
    const reportLink = screen.getByRole("link", { name: /report/i}).textContent;
    expect(reportLink).toMatchInlineSnapshot(`"Report"`)
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
