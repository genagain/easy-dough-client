import React from 'react'
import { render, screen } from '@testing-library/react'
import Settings from '../Settings'
import UserContext from '../../UserContext'

describe('The Settings component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const fakeAccessToken = 'fakeAccessToken'
      render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><Settings /></UserContext.Provider>)
    })

    test('the Bank Accounts header', () => {
      const title = screen.getByRole("heading", { name: /bank accounts/i})
      expect(title).toHaveTextContent('Bank Accounts')
    })
  })
})
