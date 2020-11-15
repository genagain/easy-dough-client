import React from 'React'

import { render, screen } from '@testing-library/react'

import Footer from '../Footer'

describe('The Footer component', () => {
  beforeEach(() => {
    render(<Footer />)
  })
  describe('renders', () => {
    it('the link to my Github profile', () => {
      const githubLink = screen.getByTitle('Github Profile')
      expect(githubLink.href).toEqual("https://github.com/genagain")
      expect(githubLink.target).toEqual("blank")
    })

    it('the link to my Linkedin profile', () => {
      const linkedinLink = screen.getByTitle('Linkedin Profile')
      expect(linkedinLink.href).toEqual("https://www.linkedin.com/in/genohta")
      expect(linkedinLink.target).toEqual("blank")
    })

    it('the link to my personal site', () => {
      const personalSiteLink = screen.getByTitle('Personal Site')
      expect(personalSiteLink.href).toEqual("http://genohta.com/")
      expect(personalSiteLink.target).toEqual("blank")
    })
  })
})
