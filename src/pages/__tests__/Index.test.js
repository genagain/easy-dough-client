import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {screen, render} from '@testing-library/react'
import Index from '../Index'

describe('The Index component', () => {
  describe('renders', () => {
    beforeEach(() => {
      render(<BrowserRouter><Index /></BrowserRouter>)
    })

    test('the short value proposition', () => {
      const valueProp = screen.getByRole("heading", { name: /manage your money easily/i});
      expect(valueProp).toHaveTextContent('Manage Your Money Easily')
    })

    test('the long value proposition', () => {
      const valueProp = screen.getByText('Create a plan. Track your spending automagically.')
      expect(valueProp).not.toBeNull()
    })

    test('each feature header', () => {
      const expectedHeaders = [
        "Connect all your accounts",
        "Create a spending plan",
        "Track your spending",
        "Stay on track"
      ]

      expectedHeaders.forEach(expectedHeader => {
        const header = screen.getByRole("heading", { name: expectedHeader })
        expect(header).not.toBeNull()
      })
    })

    test('each feature explanation', () => {
      const expectedExplainations = [
        "Easily add all of your bank accounts and credit cards.",
        "Plan your spending so you can save and invest easily.",
        "Automatically label transactions to easily track your spending.",
        "Visualize your spending easily to stick to your plan."
      ]

      expectedExplainations.forEach(expectedExplaination => {
        const explaination = screen.getByText(expectedExplaination)
        expect(explaination).not.toBeNull()
      })
    })
  })
})
