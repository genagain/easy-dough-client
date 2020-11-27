import React, { useContext, useState, useEffect, useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import UserContext from '../UserContext'

function Settings() {
  const { accessToken } = useContext(UserContext)

  const onSuccess = useCallback(async (publicToken, metadata) => {
    console.log('success!')
    console.log('publicToken', publicToken)
    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    const response = await fetch(`${apiUrl}/auth/exchange_public_token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify({ public_token: publicToken })
        }).then(res => res.json())
  }, []);

  // TODO ideally make this less hacky
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
      ).then(res => res.json())
      .then(json => {
        const config = {
          token: json['link_token'],
          onSuccess
        }
        setPlaidLinkConfig(config)
      })
    }

    fetchPlaidLinkToken()
  }, [accessToken])

  console.log(plaidLinkConfig)
  const { open, ready, error } = usePlaidLink(plaidLinkConfig);
  return (
    <>
      <h1>Settings</h1>
      <button onClick={() => open()} disabled={!ready}>Click Me</button>
    </>
  )
}

export default Settings
