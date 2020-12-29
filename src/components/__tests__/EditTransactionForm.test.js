import React from 'react'
import { render, screen } from '@testing-library/react'
import MockDate from 'mockdate'
import UserContext from '../../UserContext'
import EditTransactionForm from '../EditTransactionForm'

// TODO change all of a's to the's
describe('The EditTransactionForm component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const transaction = { 'id': 1, 'date': '2020-07-10', 'description': 'Grocery Store', 'label': 'Groceries', 'amount': '70.00' }
      const setToggleForm = jest.fn()
      const setQueryParams = jest.fn()
      const spendingPlanPartLabels = [
        'Rent',
        'Groceries',
        'Emergency Fund',
        'Stocks',
        'Spending Money'
      ]
      render(<UserContext.Provider value={{}}><EditTransactionForm transaction={transaction} setToggleForm={setToggleForm} setQueryMarams={setQueryParams} spendingPlanPartLabels={spendingPlanPartLabels}/></UserContext.Provider>)
    })

    test('the prepopulated date input field', () => {
      const date = screen.getByLabelText('Date:')
      expect(date.value).toEqual('07/10/2020')
    })

    test('the prepopulated description input field', () => {
      const descriptionField = screen.getByLabelText('Description:')
      expect(descriptionField.value).toEqual('Grocery Store')
    })

    // TODO actually test that it's prepopulated once the labels are showing up on the transactions page
    test('the prepopulated label input field', () => {
      const labelDropdown = screen.getByRole('combobox')
      expect(labelDropdown.value).toEqual('Groceries')
      const options = screen.getAllByRole('option')
      expect(options).toHaveLength(5)
    })

    test('the prepopulated amount input field', () => {
      const amountField = screen.getByLabelText('Amount:')
      expect(amountField.value).toEqual('70.00')
    })

    test('the update button', () => {
      const updateButton= screen.getByRole('button', { name: /update/i })
      expect(updateButton).not.toBeNull()
    })

    test('the cancel button', () => {
      const cancelButton= screen.getByRole('button', { name: /cancel/i })
      expect(cancelButton).not.toBeNull()
    })

    test('the update and cancel buttons in the correct order', () => {
      const buttons = screen.queryAllByRole('button', { name: /(update)|(cancel)/i })
      expect(buttons[0]).toHaveTextContent('Update')
      expect(buttons[1]).toHaveTextContent('Cancel')
    })
  })
})

// TODO test flash message ideally
