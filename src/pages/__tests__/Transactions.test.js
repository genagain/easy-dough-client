import React from 'react';
import {render} from '@testing-library/react'
import Transactions from '../Transactions'
import UserContext from '../../UserContext'

test('render Transactions page', () => {
  const fakeAccessToken = 'fakeAccessToken'
  const { getByRole } = render(<UserContext.Provider value={{ accessToken: fakeAccessToken }}><Transactions /></UserContext.Provider>)
  const title = getByRole("heading", { name: /transactions/i}).textContent;
  expect(title).toMatchInlineSnapshot(`"Transactions"`)
})
