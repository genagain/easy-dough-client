import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import TransactionRow from '../TransactionRow'
import UserContext from '../../UserContext'

// TODO IDEALLY test all the not rendering also
describe('The TransactionRow component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const transaction = { 'id': 1, 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': '70.00' }
      render(<UserContext.Provider value={{}}><TransactionRow transaction={transaction} /></UserContext.Provider>)
    })

    // TODO if this fails with a form I don't think I need to test not rendering stuff
    test('the date', () => {
      const date = screen.getByText('2020-07-10')
      expect(date).not.toBeNull()
    })

    test('the description', () => {
      const description = screen.getByText('Grocery Store')
      expect(description).not.toBeNull()
    })

    test('the amount', () => {
      const amount = screen.getByText('70.00')
      expect(amount).not.toBeNull()
    })

    test('the edit button', () => {
      const editButton= screen.getByRole('button', { name: /edit/i })
      expect(editButton).not.toBeNull()
    })

    test('the delete button', () => {
      const deleteButton= screen.getByRole('button', { name: /delete/i })
      expect(deleteButton).not.toBeNull()
    })

    test('the edit and delete buttons in the correct order', () => {
      const buttons = screen.queryAllByRole('button', { name: /(edit)|(delete)/i })
      expect(buttons[0]).toHaveTextContent('Edit')
      expect(buttons[1]).toHaveTextContent('Delete')
    })
  })
})

describe("Clicking the TransactionRow component's edit button", () => {
    beforeEach(() => {
      const transaction = { 'id': 1, 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': '70.00' }
      render(<UserContext.Provider value={{}}><TransactionRow transaction={transaction} /></UserContext.Provider>)
      const editButton= screen.getByRole('button', { name: /edit/i})
      fireEvent.click(editButton)
    })

  describe('renders', () => {
    test('the date input field', () => {
      const date = screen.getByLabelText('Date:')
      expect(date.value).toEqual('07/10/2020')
    })

    test('the description input field', () => {
      const descriptionField = screen.getByPlaceholderText('Description')
      expect(descriptionField.value).toEqual('Grocery Store')
    })

    test('the amount input field', () => {
      const amountField = screen.getByPlaceholderText('Amount')
      expect(amountField.value).toEqual('70.00')
    })

    test('the cancel button', () => {
      const cancelButton= screen.getByRole('button', { name: /cancel/i })
      expect(cancelButton).not.toBeNull()
    })

    test('the update button', () => {
      const updateButton= screen.getByRole('button', { name: /update/i })
      expect(updateButton).not.toBeNull()
    })

    test('the cancel and update buttons in the correct order', () => {
      const buttons = screen.queryAllByRole('button', { name: /(cancel)|(update)/i })
      expect(buttons[0]).toHaveTextContent('Cancel')
      expect(buttons[1]).toHaveTextContent('Update')
    })
  })

  describe('then clicking the cancel button', () => {
    beforeEach(() => {
      const cancelButton= screen.getByRole('button', { name: /cancel/i })
      fireEvent.click(cancelButton)
    })

    describe('renders', () => {
      test('the date', () => {
        const date = screen.getByText('2020-07-10')
        expect(date).not.toBeNull()
      })

      test('the description', () => {
        const description = screen.getByText('Grocery Store')
        expect(description).not.toBeNull()
      })

      test('the amount', () => {
        const amount = screen.getByText('70.00')
        expect(amount).not.toBeNull()
      })

      test('the edit button', () => {
        const editButton= screen.getByRole('button', { name: /edit/i })
        expect(editButton).not.toBeNull()
      })

      test('the delete button', () => {
        const deleteButton= screen.getByRole('button', { name: /delete/i })
        expect(deleteButton).not.toBeNull()
      })

      test('the edit and delete buttons in the correct order', () => {
        const buttons = screen.queryAllByRole('button', { name: /(edit)|(delete)/i })
        expect(buttons[0]).toHaveTextContent('Edit')
        expect(buttons[1]).toHaveTextContent('Delete')
      })
    })
  })
})

describe("Clicking the TransactionRow component's delete button", () => {
  describe('renders', () => {
    beforeEach(() => {
      const transaction = { 'id': 1, 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': '70.00' }
      render(<UserContext.Provider value={{}}><TransactionRow transaction={transaction} /></UserContext.Provider>)
      const deleteButton= screen.getByTestId('delete-1')
      fireEvent.click(deleteButton)
    })
    
    test('the prompt', () => {
      const prompt = screen.getByRole('heading', { name: /delete this transaction/i })
      expect(prompt).toHaveTextContent('Are you sure you want to delete this transaction?')
    })

    test('the yes button', () => {
      const yesButton= screen.getByTestId('yes-delete-1')
      expect(yesButton).not.toBeNull()
    })

    test('the no button', () => {
      const noButton= screen.getByTestId('no-delete-1')
      expect(noButton).not.toBeNull()
    })

    test('the no button and clicking it closes the modal', () => {
      let noButton= screen.getByTestId('no-delete-1')
      fireEvent.click(noButton)

      const prompt = screen.queryByRole('heading', { name: /delete this transaction/i })
      expect(prompt).toBeNull()

      const yesButton= screen.queryByTestId('yes-delete-1')
      expect(yesButton).toBeNull()

      noButton= screen.queryByTestId('no-delete-1')
      expect(noButton).toBeNull()
    })
  })
})
