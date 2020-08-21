import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// TODO uninstall history package if it's not used
import {createMemoryHistory} from 'history'

import App from '../App'
//import UserContext from '../UserContext'

import AppWithContext from '../AppWithContext'


function renderWithRouter(
	ui
) {
	return {
		...render(<BrowserRouter>{ui}</BrowserRouter>),
	}
}

test('test navigating to the login page', () => {
	const { container } = renderWithRouter(<AppWithContext />)
	const loginButton = screen.getByRole("link", { name: /login/i })
	fireEvent.click(loginButton)
	const header = screen.getByRole("heading", { name: /login/i })
	expect(header.textContent).toMatchInlineSnapshot(`"Login"`)
})
