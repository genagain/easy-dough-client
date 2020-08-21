import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import {render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AppWithContext from '../AppWithContext'


function renderWithRouter(
	ui,
  initialEntries = ["/"]
) {
	return {
		...render(<MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>),
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

test('test unauthorized dashboard', () => {
	const { getByRole } = renderWithRouter(<AppWithContext />, ["/dashboard"])
	const header = getByRole("heading", { name: /login/i })
	expect(header.textContent).toMatchInlineSnapshot(`"Login"`)
})
