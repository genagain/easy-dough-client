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

test('test navigation', () => {
	const { container } = renderWithRouter(<AppWithContext />)

	const loginLink = screen.getByRole("link", { name: /login/i })
	fireEvent.click(loginLink)
	const header = screen.getByRole("heading", { name: /login/i })
	expect(header.textContent).toMatchInlineSnapshot(`"Login"`)

	const indexLink = screen.getByRole("link", { name: /easy dough/i })
	fireEvent.click(indexLink)
	const indexText = screen.getByRole("heading", { name: /index/i })
	expect(indexText.textContent).toMatchInlineSnapshot(`"index"`)
})
