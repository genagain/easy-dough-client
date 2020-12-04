import React, { useContext, useState, useEffect, useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import UserContext from '../UserContext'

import BanksList from '../components/BanksList'

function Settings() {
  const { accessToken, logout } = useContext(UserContext)

  const [allBanks, setAllBanks] = useState([])
  const [refetch, setRefetch] = useState(false)

  const onSuccess = useCallback(async (publicToken, metadata) => {
    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    // TODO add flash message when bank is linked successfully
    await fetch(`${apiUrl}/auth/exchange_public_token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify({ public_token: publicToken })
        }).then(res => res.json())
    setRefetch(!refetch)
  }, [accessToken, refetch]);

  const [plaidLinkConfig, setPlaidLinkConfig] = useState({ token: 'link-sandbox', onSuccess })

  useEffect(() => {
    const fetchPlaidLinkToken = async () => {
      const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
      const response = await fetch(`${apiUrl}/auth/create_link_token`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        }
      )

      if (response.ok) {
        const json = await response.json()
        const config = {
          token: json['link_token'],
          onSuccess
        }
        setPlaidLinkConfig(config)
      } else {
        logout()
      }
    }

    fetchPlaidLinkToken()
  }, [accessToken, onSuccess, logout])

  useEffect(() => {
    const fetchBankAccounts = async () => {
      const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
      const response = await fetch(`${apiUrl}/bank_accounts`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        }
      )

      if (!response.ok) {
        logout()
      }

      const json = await response.json()
      if (json['message']) {
        setAllBanks([])
      } else {
        const bankAccounts = json['banks']
        setAllBanks(bankAccounts)
      }

    }
    fetchBankAccounts()
  }, [accessToken, refetch, logout])

  const { open, ready, error } = usePlaidLink(plaidLinkConfig);
  // TODO add flash message when an error occurs


  return (
    <div className="flex flex-col">
      <div className="m-auto w-10/12 lg:max-w-6xl">
        { error && <p>Uh oh! Something went wrong</p> }
        <h1 className="mb-2 text-6xl lg:text-3xl">Bank Accounts</h1>
        <BanksList allBanks={allBanks} refetch={refetch} setRefetch={setRefetch} />
        <div className="m-auto w-3/4 lg:m-0 lg:w-full">
          <button className="w-full lg:w-24 p-6 bg-blue-800 hover:bg-blue-700 text-white rounded-lg lg:my-2 lg:p-2 text-5xl lg:text-base" onClick={() => open()} disabled={!ready}>Add Bank</button>
        </div>
      </div>
    </div>
  )
}

export default Settings
