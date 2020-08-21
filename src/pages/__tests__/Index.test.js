import React from 'react';
import {render} from '@testing-library/react'
import Index from '../Index'

test('render Index page', () => {
  const testText = 'index'
  const { getByRole } = render(<Index />)
  const title = getByRole("heading", { name: /index/}).textContent;
  expect(title).toMatchInlineSnapshot(`"index"`)
})
