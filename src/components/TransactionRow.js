import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
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

  // TODO put in utils and rename the existing format date util
  const [year, month, day] = date.split('-')
  const monthIndex = month - 1
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const formattedDate = new Date(year, monthIndex, day).toLocaleString('en-US', options)
  return (
    <div id={`transaction-${id}`}>
    { 
      toggleForm ? (
        <>
          <label htmlFor="date-input">Date:</label>
          <DatePicker id="date-input" selected={new Date(year, monthIndex, day)} onChange={() => {}}/>
          <input placeholder="Description" type="text" value={description} onChange={() => {}}/>
          <input placeholder="Amount" type="text" value={amount} onChange={() => {}}/>
          <button onClick={() => setToggleForm(false)}>Cancel</button>
          <button onClick={() => {}}>Update</button>
        </>
      ) : (
        <>
          <div key={`${id}-${date}`}>{formattedDate}</div>
          <div key={`${id}-${description}`}>{description}</div>
          <div key={`${id}-${amount}`}>{amount}</div>
          <button data-testid={`edit-${id}`} onClick={() => setToggleForm(true)}>Edit</button>
          <button data-testid={`delete-${id}`} onClick={() => setToggleModal(true)}>Delete</button>
        </>
      )
    }
      <Modal isOpen={toggleModal}>
        <h1>Are you sure you want to delete this transaction?</h1>
        <button onClick={handleDelete}>Yes</button>
        <button onClick={() => setToggleModal(false)}>No</button>
      </Modal>
    </div>

  )
}

export default TransactionRow
