import React from 'react';
import { render, screen } from '@testing-library/react'
import MockDate from 'mockdate'

import Transactions from '../Transactions'
import UserContext from '../../UserContext'

test('render Transactions page', () => {
  const fakeAccessToken = 'fakeAccessToken'
  render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><Transactions /></UserContext.Provider>)
  const title = screen.getByRole("heading", { name: /transactions/i}).textContent;
  expect(title).toMatchInlineSnapshot(`"Transactions"`)
})

test('renders date pickers', () => {
  MockDate.set('2020-10-04')
  const fakeAccessToken = 'fakeAccessToken'
  render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><Transactions /></UserContext.Provider>)

  const startDate = screen.getByLabelText('Start Date:')
  expect(startDate.value).toEqual('08/01/2020')

  // Note: for some reason the date picker component subtracts one day from its selected prop
  const endDate = screen.getByLabelText('End Date:')
  expect(endDate.value).toEqual('10/03/2020')
})

test('renders search term input field', () => {
  const fakeAccessToken = 'fakeAccessToken'
  render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><Transactions /></UserContext.Provider>)

  const searchTerm = screen.getByPlaceholderText("Search Term (optional)")
  expect(searchTerm).not.toBeNull()
})

test('renders search button', () => {
  const fakeAccessToken = 'fakeAccessToken'
  render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><Transactions /></UserContext.Provider>)

  const button = screen.getByRole("button", { name: /search/i}).textContent;
  expect(button).toMatchInlineSnapshot(`"Search"`)
})
