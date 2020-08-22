import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AppWithContext from '../AppWithContext'


function renderWithRouter(
	ui,
) {
	return {
		...render(<BrowserRouter>{ui}</BrowserRouter>),
	}
}

test('test navigation', () => {
	const { getByRole } = renderWithRouter(<AppWithContext />)

	const loginLink = getByRole("link", { name: /login/i })
	fireEvent.click(loginLink)
	const header = getByRole("heading", { name: /login/i })
	expect(header.textContent).toMatchInlineSnapshot(`"Login"`)

	const indexLink = getByRole("link", { name: /easy dough/i })
	fireEvent.click(indexLink)
	const indexText = getByRole("heading", { name: /index/i })
	expect(indexText.textContent).toMatchInlineSnapshot(`"index"`)
})

test('test valid login', () => {
	const { getByRole, getByTestId } = renderWithRouter(<AppWithContext />)

	const loginLink = getByRole("link", { name: /login/i })
	fireEvent.click(loginLink)

  const emailField = getByTestId("textField-email").querySelector('input')
  const passwordField = getByTestId("textField-password").querySelector('input')
  const loginButton = getByRole("button", { name: /login/i })

  fireEvent.change(emailField, { target: { value: 'test@test.com' }} )
  fireEvent.change(passwordField, { target: { value: 'password' }} )
  fireEvent.click(loginButton )
})
