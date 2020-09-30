import React from 'react';
import { render, screen } from '@testing-library/react'
import TransactionsTable from '../TransactionsTable'

describe('When there are no transactions to render, the TransactionsTable component', () => {
  test('renders a message that says there are no transactions', () => {
    render(<TransactionsTable transactions={[]} />)
    const message = screen.getByText("Looks like we don't have any transactions to show yet")
    expect(message).not.toBeNull()
  })
})
