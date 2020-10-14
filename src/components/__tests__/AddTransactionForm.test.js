import React from 'react'
import { render, screen } from '@testing-library/react'
import MockDate from 'mockdate'
import UserContext from '../../UserContext'
import AddTransactionForm from '../AddTransactionForm'

beforeEach(() => {
  MockDate.set(new Date('10/04/2020'))
  render(<UserContext.Provider value={{}}><AddTransactionForm /></UserContext.Provider>)
})

test('renders a date input field with today selected', () => {
  const date = screen.getByLabelText('Date:')
  expect(date.value).toEqual('10/04/2020')
})

test('renders a description input field', () => {
  const description = screen.getByLabelText('Description:')
  expect(description).not.toBeNull()
})

test('renders a amount input field', () => {
  const amount = screen.getByLabelText('Amount:')
  expect(amount).not.toBeNull()
})

test('renders a create transaction button', () => {
  const createButton = screen.getByRole("button", { name: /create transaction/i});
  expect(createButton).not.toBeNull()
})

// TODO test flash message ideally
