import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Report from '../Report'

describe('The report component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const historicalSpending = [
        {
          label: 'Cellphone',
          actualAmount: 40,
          expectedAmount: 40,
          difference: 0
        },
        {
          label: 'Groceries',
          actualAmount: 300,
          expectedAmount: 400,
          difference: 100
        },
        {
          label: 'Spending Money',
          actualAmount: 550,
          expectedAmount: 436.29,
          difference: 113.71
        }
      ]

      const months = [
        'January',
        'February',
        'March'
      ]
      render(<Report historicalSpending={historicalSpending} months={months} />)
    })
    
    test('the month input field', () => {
      const monthDropdown = screen.getByRole('combobox')
      expect(monthDropdown.value).toEqual('January')
      const options = screen.getAllByRole('option')
      expect(options).toHaveLength(3)
    })

    test('the generate button', () => {
      const button = screen.getByRole('button', { name: /generate/i})
      expect(button).not.toBeNull()
    })
     
    test('the labels', () => {
      const expectedLabels = [
        'Cellphone',
        'Groceries',
        'Spending Money'
      ]

      expectedLabels.forEach(expectedLabel => {
        const label = screen.getByText(expectedLabel)
        expect(label).not.toBeNull()
      })
    })

    test('the amount fractions', () => {
      const expectedFractions = [
        "Spent $40.00 of $40.00",
        "Spent $300.00 of $400.00",
        "Spent $550.00 of $436.29"
      ]

      expectedFractions.forEach(expectedFraction => {
        const fraction = screen.getByText(expectedFraction)
        expect(fraction).not.toBeNull()
      })
    })

    test('the difference', () => {
      const expectedDifferences = [
        "$0.00 left",
        "$100.00 left",
        "$113.71 over",
      ]

      expectedDifferences.forEach(expectedDifference => {
        const difference = screen.getByText(expectedDifference)
        expect(difference).not.toBeNull()
      })
    })

    test('the gray bars', () => {
      const grayBars = screen.getAllByTestId('gray-bar')
      expect(grayBars).toHaveLength(3)
    })

    test('the green bars', () => {
      const greenBars = screen.getAllByTestId('green-bar')
      expect(greenBars).toHaveLength(2)
    })

    test('the red bars', () => {
      const redBars = screen.getAllByTestId('red-bar')
      expect(redBars).toHaveLength(1)
    })
  })
})
