import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import MockDate from 'mockdate'
import Transactions from '../Transactions'
import UserContext from '../../UserContext'

beforeEach(() => {
  MockDate.set(new Date('10/04/2020'))
  const fakeAccessToken = 'fakeAccessToken'
  render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><Transactions /></UserContext.Provider>)
})

test('render Transactions page', () => {
  const title = screen.getByRole("heading", { name: /transactions/i}).textContent;
  expect(title).toMatchInlineSnapshot(`"Transactions"`)
})

test('renders date pickers', () => {
  const startDate = screen.getByLabelText('Start Date:')
  expect(startDate.value).toEqual('08/01/2020')

  const endDate = screen.getByLabelText('End Date:')
  expect(endDate.value).toEqual('10/04/2020')
})

test('renders search term input field', () => {
  const searchTerm = screen.getByPlaceholderText("Search Term (optional)")
  expect(searchTerm).not.toBeNull()
})

test('renders search button', () => {
  const button = screen.getByRole("button", { name: /search/i}).textContent;
  expect(button).toMatchInlineSnapshot(`"Search"`)
})

test('renders add transaction button', () => {
  const button = screen.getByRole("button", { name: /add transaction/i}).textContent;
  expect(button).toMatchInlineSnapshot(`"Add Transaction"`)
})

test('clicking the add transaction button renders a form', () => {
  const noDate = screen.queryByLabelText('Date:')
  expect(noDate).toBeNull()
  const noDescription = screen.queryByPlaceholderText("Description")
  expect(noDescription).toBeNull()
  const noAmount = screen.queryByPlaceholderText("Amount")
  expect(noAmount).toBeNull()
  const noCreateButton = screen.queryByRole("button", { name: /create transaction/i});
  expect(noCreateButton).toBeNull()

  const noHideButton = screen.queryByRole("button", { name: /hide transaction/i});
  expect(noHideButton).toBeNull()
  const addButton = screen.getByRole("button", { name: /add transaction/i});
  fireEvent.click(addButton)

  const date = screen.getByLabelText('Date:')
  expect(date).not.toBeNull()
  const description = screen.getByPlaceholderText("Description")
  expect(description).not.toBeNull()
  const amount = screen.getByPlaceholderText("Amount")
  expect(amount).not.toBeNull()

  const createButton = screen.getByRole("button", { name: /create transaction/i});
  expect(createButton).not.toBeNull()

  const hideButton = screen.getByRole("button", { name: /hide transaction/i});
  expect(hideButton).not.toBeNull()
  const noAddButton = screen.queryByRole("button", { name: /add transaction/i});
  expect(noAddButton).toBeNull()
})

test('clicking the hide transaction button hides a form', () => {
  const addButton = screen.getByRole("button", { name: /add transaction/i});
  fireEvent.click(addButton)

  const date = screen.getByLabelText('Date:')
  expect(date).not.toBeNull()
  const description = screen.getByPlaceholderText("Description")
  expect(description).not.toBeNull()
  const amount = screen.getByPlaceholderText("Amount")
  expect(amount).not.toBeNull()
  const createButton = screen.getByRole("button", { name: /create transaction/i});
  expect(createButton).not.toBeNull()

  const hideButton = screen.getByRole("button", { name: /hide transaction/i});
  fireEvent.click(hideButton)

  const noDate = screen.queryByLabelText('Date:')
  expect(noDate).toBeNull()
  const noDescription = screen.queryByPlaceholderText("Description")
  expect(noDescription).toBeNull()
  const noAmount = screen.queryByPlaceholderText("Amount")
  expect(noAmount).toBeNull()
  const noCreateButton = screen.queryByRole("button", { name: /create transaction/i});
  expect(noCreateButton).toBeNull()
})
