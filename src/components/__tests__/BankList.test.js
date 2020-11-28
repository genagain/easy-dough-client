import React from 'react'
import { render, screen } from '@testing-library/react'
import BanksList from '../BanksList'

describe('When there are accounts to render, the BanksList component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const allBanks = [
        {
            'name': 'Ally',
            'logo': "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",
           'accounts': [
             {
               'name':'Expenses',
               'type': 'checking'
             },
             {
               'name':'Savings',
               'type': 'savings'
             }
           ]
        },
        {
            'name': 'Navy Federal Credit Union',
            'logo': "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",
           'accounts': [
             {
               'name':'Credit Card',
               'type': 'credit'
             }
           ]
        }
      ]
      render(<BanksList allBanks={allBanks}/>)
    })

    test('the name for each bank in alphabetical order', () => {
      const names = screen.getAllByRole('heading', { name: /(ally)|(navy federal credit union)/i})
      expect(names).toHaveLength(2)
      expect(names[0]).toHaveTextContent('Ally')
      expect(names[1]).toHaveTextContent('Navy Federal Credit Union')
    })

    test('the logo for each bank in alphabetical order', () => {
      const logos = screen.getAllByAltText(/logo/i)
      expect(logos).toHaveLength(2)
      expect(logos[0].alt).toEqual("Ally's logo")
      expect(logos[1].alt).toEqual("Navy Federal Credit Union's logo")
    })
  })
})

