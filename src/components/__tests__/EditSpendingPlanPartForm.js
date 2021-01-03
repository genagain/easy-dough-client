import React from 'react'
import { render, screen } from '@testing-library/react'
import UserContext from '../../UserContext'
import EditSpendingPlanPartForm from '../EditSpendingPlanPartForm'

describe('the EditSpendingPlanPartForm', () => {
  describe('renders', () => {
    beforeEach(() => {
      const setToggleForm = jest.fn()
      const part = {
        id: 1,
        label: 'Spending Money',
        searchTerm: '*',
        expectedAmount: 0
      }
      render(<UserContext.Provider value={{}}><EditSpendingPlanPartForm part={part} setToggleForm={setToggleForm}/></UserContext.Provider>)
    })

    test('the prepopulated label input field', () => {
      const label = screen.getByLabelText('Label:')
      expect(label.value).toEqual('Spending Money')
    })

    test('the prepopulated search term input field', () => {
      const searchTerm = screen.getByLabelText('Search Term:')
      expect(searchTerm.value).toEqual('*')
    })

    test('the prepopulated expected amount input field', () => {
      const expectedAmount = screen.getByLabelText('Expected Amount:')
      expect(expectedAmount.value).toEqual('0')
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
