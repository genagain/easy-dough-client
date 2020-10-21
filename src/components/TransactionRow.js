import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import UserContext from '../UserContext'

function TransactionRow({transaction}) {
  const { id, date, description, amount } = transaction
  const [toggleModal, setToggleModal] = useState(false)
  const [toggleForm, setToggleForm] = useState(false)
  const { accessToken, queryParams, setQueryParams } = useContext(UserContext)

  Modal.setAppElement(document.getElementById(`transaction-${id}`))

  async function handleDelete(e) {
    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    await fetch(`${apiUrl}/transactions/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      })
    setToggleModal(false)
    setQueryParams({...queryParams})
  }


  // TODO get rid of all of test ids
  return (
    <div id={`transaction-${id}`}>
    { 
      toggleForm ? (
        <button onClick={() => {}}>Update</button>
      ) : (
        <>
          <div key={`${id}-${date}`}>{date}</div>
          <div key={`${id}-${description}`}>{description}</div>
          <div key={`${id}-${amount}`}>{amount}</div>
        </>
      )
    }
      <button data-testid={`edit-${id}`} onClick={() => setToggleForm(true)}>Edit</button>
      <button data-testid={`delete-${id}`} onClick={() => setToggleModal(true)}>Delete</button>
      <Modal isOpen={toggleModal}>
        <h1>Are you sure you want to delete this transaction?</h1>
        <button data-testid={`yes-delete-${id}`} onClick={handleDelete}>Yes</button>
        <button data-testid={`no-delete-${id}`} onClick={() => setToggleModal(false)}>No</button>
      </Modal>
    </div>

  )
}

export default TransactionRow
