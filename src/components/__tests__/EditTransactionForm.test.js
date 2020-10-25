import React from 'react'
import { render, screen } from '@testing-library/react'
import MockDate from 'mockdate'
import UserContext from '../../UserContext'
import EditTransactionForm from '../EditTransactionForm'

describe('The EditTransactionForm component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const transaction = { 'id': 1, 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': '70.00' }
      render(<UserContext.Provider value={{}}><EditTransactionForm transaction={transaction} /></UserContext.Provider>)
    })

    test('a prepopulated date input field', () => {
      const date = screen.getByLabelText('Date:')
      expect(date.value).toEqual('07/10/2020')
    })

    test('a prepopulated description input field', () => {
      const descriptionField = screen.getByPlaceholderText('Description')
      expect(descriptionField.value).toEqual('Grocery Store')
    })

    test('a prepopulated amount input field', () => {
      const amountField = screen.getByPlaceholderText('Amount')
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
