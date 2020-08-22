import React from 'react';
import {render} from '@testing-library/react'
import Login from '../Login'
import UserContext from '../../UserContext'

test('render Login page', () => {
  const { getByRole, getByTestId } = render(<UserContext.Provider value={{}}><Login /></UserContext.Provider>)
  const title = getByRole("heading", { name: /login/i}).textContent;
  expect(title).toMatchInlineSnapshot(`"Login"`)

  const emailField = getByTestId('textField-email')
  const passwordField = getByTestId('textField-password')
  const login = getByRole("button", { name: /login/i}).textContent;

  expect(emailField).not.toBeNull()
  expect(passwordField).not.toBeNull()
  expect(login).not.toBeNull()
})
