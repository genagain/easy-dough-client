import React from 'react'
import { render, screen } from '@testing-library/react'
import AccountsTable from '../AccountsTable'

describe('The AccountsTable component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const accounts = [
        {
          'id': '1',
          'name':'Expenses',
          'type': 'checking'
        },
        {
          'id': '2',
          'name':'Savings',
          'type': 'savings'
        }
      ]

      render(<AccountsTable accounts={accounts} />)
    })

    test('the table headers', () => {
      const expectedColumnHeaders = [
        'NAME',
        'TYPE'
      ]
      expectedColumnHeaders.forEach(columnHeader => {
        const columnHeaderText = screen.getByText(columnHeader)
        expect(columnHeaderText).not.toBeNull()
      })
    })

    test('the account names', () => {
      const expectedNames = [
        'Expenses',
        'Savings'
      ]
      expectedNames.forEach(name => {
        const nameText = screen.getByText(name)
        expect(nameText).not.toBeNull()
      })
    })
  })
})
