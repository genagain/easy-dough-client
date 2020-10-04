import React from 'react';
import {render} from '@testing-library/react'
import Transactions from '../Transactions'
import UserContext from '../../UserContext'

test('render Transactions page', () => {
  const fakeAccessToken = 'fakeAccessToken'
  const { getByRole } = render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><Transactions /></UserContext.Provider>)
  const title = getByRole("heading", { name: /transactions/i}).textContent;
  expect(title).toMatchInlineSnapshot(`"Transactions"`)
})

//TODO consider mocking date with https://www.npmjs.com/package/mockdate
test('renders date pickers', () => {
  const fakeAccessToken = 'fakeAccessToken'
  const { getByLabelText } = render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><Transactions /></UserContext.Provider>)

  const startDate = getByLabelText('Start Date:')
  expect(startDate).not.toBeNull()

  const endDate = getByLabelText('End Date:')
  expect(endDate).not.toBeNull()
})

test('renders search term input field', () => {
  const fakeAccessToken = 'fakeAccessToken'
  const { getByPlaceholderText } = render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><Transactions /></UserContext.Provider>)

  const searchTerm = getByPlaceholderText("Search Term (optional)")
  expect(searchTerm).not.toBeNull()
})

test('renders search button', () => {
  const fakeAccessToken = 'fakeAccessToken'
  const { getByRole } = render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><Transactions /></UserContext.Provider>)

  const button = getByRole("button", { name: /search/i}).textContent;
  expect(button).toMatchInlineSnapshot(`"Search"`)
})
