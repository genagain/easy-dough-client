import React from 'react'
import { render, screen } from '@testing-library/react'
import SpendingPlan from '../SpendingPlan'
import UserContext from '../../UserContext'

describe('The SpendingPlan component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const fakeAccessToken = 'fakeAccessToken'
      render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><SpendingPlan /></UserContext.Provider>)
    })

    test('the Spending Plan header', () => {
      const title = screen.getByRole("heading", { name: /your spending plan/i})
      expect(title).toHaveTextContent('Your Spending Plan')
    })
  })
})
