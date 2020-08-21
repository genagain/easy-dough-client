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
	ui,
	{route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
) {
	return {
		...render(<BrowserRouter history={history}>{ui}</BrowserRouter>),
		// adding `history` to the returned utilities to allow us
		// to reference it in our tests (just try to avoid using
		// this to test implementation details).
		history,
	}
}

test('test navigating to the login page', () => {
	const { container } = renderWithRouter(<AppWithContext />)
	const loginButton = screen.getByRole("link", { name: /login/i })
	fireEvent.click(loginButton)
	const header = screen.getByRole("heading", { name: /login/i })
	expect(header.textContent).toMatchInlineSnapshot(`"Login"`)
})

/*test('test material ui button showing something', () => {*/
  //const { container } = renderWithRouter(<AppWithContext />, { route: '/' })
  //const testMessage = 'Some Message'
  //expect(screen.queryByText(testMessage)).toBeNull()
	//const show = screen.getByRole("button", { name: /show/i })
  //fireEvent.click(show)
  //expect(screen.queryByText(testMessage)).toBeInTheDocument()
/*})*/
