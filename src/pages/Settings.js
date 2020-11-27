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
  const logo = "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"
  const { open, ready, error } = usePlaidLink(plaidLinkConfig);
  return (
    <>
      <h1>Settings</h1>
      <img src={`data:image/png;base64,${logo}`} className="h-8 w-8"/>
      <button onClick={() => open()} disabled={!ready}>Click Me</button>
    </>
  )
}

export default Settings
