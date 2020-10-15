import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import TransactionRow from '../TransactionRow'

describe('The TransactionRow component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const transaction = { 'id': 1, 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': '70.00' }
      render(<TransactionRow transaction={transaction} />)
    })

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

    test('the delete button', () => {
      const deleteButton= screen.getByTestId('delete-1')
      expect(deleteButton).not.toBeNull()
    })
  })
})

describe("Clicking the TransactionRow component's delete button", () => {
  describe('renders', () => {
    beforeEach(() => {
      const transaction = { 'id': 1, 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': '70.00' }
      render(<TransactionRow transaction={transaction} />)
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
  })
})
