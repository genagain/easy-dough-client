import React from 'react'
import { render, screen } from '@testing-library/react'
import MockDate from 'mockdate'
import UserContext from '../../UserContext'
import AddTransactionForm from '../AddTransactionForm'

// TODO Add more describe blocks
beforeEach(() => {
  MockDate.set(new Date('10/04/2020'))
  const spendingPlanPartLabels = [
    'Rent',
    'Emergency Fund',
    'Stocks',
    'Spending Money'
  ]
  render(<UserContext.Provider value={{}}><AddTransactionForm spendingPlanPartLabels={spendingPlanPartLabels}/></UserContext.Provider>)
})

test('renders a date input field with today selected', () => {
  const date = screen.getByLabelText('Date:')
  expect(date.value).toEqual('10/04/2020')
})

test('renders a description input field', () => {
  const description = screen.getByLabelText('Description:')
  expect(description).not.toBeNull()
})

test('renders a label input field', () => {
  const labelDropdown = screen.getByRole('combobox')
  expect(labelDropdown).not.toBeNull()
  const options = screen.getAllByRole('option')
  expect(options).toHaveLength(4)
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
