import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import UserContext from '../UserContext'
import EditTransactionForm from './EditTransactionForm'
import { formatPrettyDate, convertIsoToDate } from '../utils'

function TransactionRow({transaction}) {
  const { id, date: isoDate, description, amount } = transaction
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

  const date = convertIsoToDate(isoDate)
  const formattedDate = formatPrettyDate(date)

  return (
    <div id={`transaction-${id}`} className="px-1 py-6">
    { 
      toggleForm ? (
        <EditTransactionForm transaction={transaction} setToggleForm={setToggleForm}/>
      ) : (
        <div>
          <div key={`${id}-${date}`} className="mx-2 inline-block text-3xl">{formattedDate}</div>
          <div>
            <div key={`${id}-${description}`} className="mx-2 w-5/12 inline-block text-5xl">{description}</div>
            <div className="float-right">
              <div key={`${id}-${amount}`} className="mx-2 inline-block text-5xl">{amount}</div>
              <button className="mx-2 px-4 py-2 border border-gray-400 rounded-lg text-4xl" data-testid={`edit-${id}`} onClick={() => setToggleForm(true)}>Edit</button>
              <button className="mx-2 px-4 py-2 border border-gray-400 rounded-lg text-4xl" data-testid={`delete-${id}`} onClick={() => setToggleModal(true)}>Delete</button>
            </div>
          </div>
        </div>
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
