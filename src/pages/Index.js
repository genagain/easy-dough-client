import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

function Index() {
  const [message, setMessage] = useState()
  return (
    <div>
    <h1>index</h1>
    <h2>{message}</h2>
    <Button color="inherit" onClick={ () => setMessage('Some Message')}>Show</Button>
    </div>
  )
}

export default Index
