import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react'
import Dashboard from '../Dashboard'
import UserContext from '../../UserContext'

test('render Dashboard page without accessToken', () => {
  const testText = 'dashboard'
  const { getByRole } = render(<UserContext.Provider value={{}}><Dashboard /></UserContext.Provider>)
  const title = getByRole("heading", { name: /dashboard/}).textContent;
  expect(title).toMatchInlineSnapshot(`"dashboard"`)
})

test('render Dashboard page with accessToken', () => {
  const testText = 'dashboard'
  const fakeAccessToken = 'fakeAccessToken'
  const { getByRole } = render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><Dashboard /></UserContext.Provider>)
  const title = getByRole("heading", { name: /dashboard/}).textContent;
  expect(title).toMatchInlineSnapshot(`"dashboard"`)
  const accessToken = getByRole("heading", { name: /fakeaccesstoken/i }).textContent;
  expect(accessToken).toMatchInlineSnapshot(`"${fakeAccessToken}"`)
})
