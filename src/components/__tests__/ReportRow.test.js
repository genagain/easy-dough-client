import React from 'react'
import { render, screen } from '@testing-library/react'

import ReportRow from '../ReportRow'

describe('When the actual amount is less than or equal to the expected amount, the ReportRow component', () => {
  describe('renders', () => {
    beforeEach(() => {
      render(<ReportRow label={'Cellphone'} actualAmount={40} expectedAmount={40} difference={0} />)
    })

    test('the label', () => {
      const label = screen.getByRole('heading', { name: /cellphone/i })
      expect(label).not.toBeNull()
    })

    test('the actual and expected amounts', () => {
      const amounts = screen.getByText('Spent $40.00 of $40.00')
      expect(amounts).not.toBeNull()
    })

    test('the difference', () => {
      const difference = screen.getByText('$0.00 left')
      expect(difference).not.toBeNull()
    })

    test('the gray bar', () => {
      const grayBar = screen.getByTestId('gray-bar')
      expect(grayBar).not.toBeNull()
    })

    test('the green bar', () => {
      const greenBar = screen.getByTestId('green-bar')
      expect(greenBar).not.toBeNull()
    })
  })
})

describe('When the actual amount is greater than the expected amount, the ReportRow component', () => {
  describe('renders', () => {
    beforeEach(() => {
      render(<ReportRow label={'Spending Money'} actualAmount={500} expectedAmount={400} difference={100} />)
    })

    test('the label', () => {
      const label = screen.getByRole('heading', { name: /spending money/i })
      expect(label).not.toBeNull()
    })

    test('the actual and expected amounts', () => {
      const amounts = screen.getByText('Spent $500.00 of $400.00')
      expect(amounts).not.toBeNull()
    })

    test('the difference', () => {
      const difference = screen.getByText('$100.00 over')
      expect(difference).not.toBeNull()
    })

    test('the gray bar', () => {
      const grayBar = screen.getByTestId('gray-bar')
      expect(grayBar).not.toBeNull()
    })

    test('the red bar', () => {
      const redBar = screen.getByTestId('red-bar')
      expect(redBar).not.toBeNull()
    })
  })
})
