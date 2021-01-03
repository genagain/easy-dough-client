import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import BanksList from '../BanksList'
import UserContext from '../../UserContext'

describe('When there are no banks to render, the BanksList component', () => {
  describe('renders', () => {
    beforeEach(() => {
      render(<UserContext.Provider value={{}}><BanksList allBanks={[]}/></UserContext.Provider>)
    })

    test('a prompt for the user to add a bank', () => {
      const prompt = screen.getByText(/looks like you haven't added any banks yet\. please add a bank\./i)
      expect(prompt).not.toBeNull()
    })
  })
})

describe('When there are banks to render, the BanksList component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const allBanks = [
        {
            'id' : 1,
            'name': 'Ally',
            'logo': "fake ally logo",
           'accounts': [
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
        },
        {
            'id' : 2,
            'name': 'Navy Federal Credit Union',
            'logo': "fake nfcu logo",
           'accounts': [
             {
               'id': '3',
               'name':'Credit Card',
               'type': 'credit'
             }
           ]
        }
      ]
      render(<UserContext.Provider value={{}}><BanksList allBanks={allBanks}/></UserContext.Provider>)
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

   test('the delete buttons for each bank', () => {
     const deleteButtons = screen.getAllByRole('button', { name: /delete/i })
     expect(deleteButtons).toHaveLength(2)
   })
  })
})

describe("When there are banks to render, clicking the BanksList component's", () => {
  describe('renders', () => {
    beforeEach(() => {
      const allBanks = [
        {
            'id': '1',
            'name': 'Ally',
            'logo': "fake ally logo",
           'accounts': [
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
      }
    ]
      render(<UserContext.Provider value={{}}><BanksList allBanks={allBanks}/></UserContext.Provider>)
     const deleteButton = screen.getByRole('button', /delete/i)
     fireEvent.click(deleteButton)
  })
  
    test('the prompt', () => {
      const prompt = screen.getByRole('heading', { name: /delete this bank/i })
      expect(prompt).toHaveTextContent("Are you sure you want to delete this bank?")
    })

    test('the yes button', () => {
      const yesButton = screen.getByRole('button', { name: /yes/i })
      expect(yesButton).not.toBeNull()
    })

    test('the no button', () => {
      const noButton = screen.getByRole('button', { name: /no/i })
      expect(noButton).not.toBeNull()
    })

    test('the no button and clicking it closes the modal', ()=> {
      let noButton= screen.getByRole('button', { name: /no/i })
      fireEvent.click(noButton)

      const prompt = screen.queryByRole('heading', { name: /delete this bank/i })

      const yesButton = screen.queryByRole('button', { name: /yes/i })
      expect(yesButton).toBeNull()

      noButton = screen.queryByRole('button', { name: /no/i })
      expect(noButton).toBeNull()
    })
  })
})
