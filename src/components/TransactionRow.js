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
    <div id={`transaction-${id}`} className="px-1 py-6 border-b-2 border-gray-600 lg:p-0 lg:border-b">
    { 
      toggleForm ? (
        <EditTransactionForm transaction={transaction} setToggleForm={setToggleForm}/>
      ) : (
        <div className="flex flex-row lg:items-baseline">
          <div className="flex-grow lg:flex lg:flex-row lg:flex-grow-0">
          <div key={`${id}-${date}`} className="m-2 text-3xl lg:w-40 lg:text-lg">{formattedDate}</div>
          <div key={`${id}-${description}`} className="m-2 text-5xl lg:w-84 lg:text-lg">{description}</div>
          </div>
           <div key={`${id}-${amount}`} className="mx-2 my-4 text-5xl lg:w-144 lg:text-lg">{amount}</div>
           <button className="mx-2 my-4 px-4 py-2 lg:w-16 h-20 bg-blue-800 text-white hover:bg-blue-700 rounded-lg text-4xl lg:text-lg lg:px-2 lg:h-auto" data-testid={`edit-${id}`} onClick={() => setToggleForm(true)}>Edit</button>
           <button className="mx-2 my-4 px-4 py-2 lg:w-20 h-20 border border-blue-800 text-blue-800 hover:border-blue-700 hover:text-blue-700 rounded-lg text-4xl lg:text-lg lg:px-2 lg:h-auto" data-testid={`delete-${id}`} onClick={() => setToggleModal(true)}>Delete</button>
        </div>
      )
    }
      <Modal className="m-10 p-10 bg-white h-auto border border-gray-400 rounded lg:m-20" isOpen={toggleModal}>
        <div className="m-auto w-3/4 lg:w-1/2">
        <h1 className="p-6 text-5xl lg:text-2xl">Are you sure you want to delete this transaction?</h1>
          <div className="m-auto w-3/4 lg:w-1/2">
          <div className="flex space-x-10">
            <button className="m-2 p-6 h-28 w-56 lg:w-24 bg-blue-800 text-white hover:bg-blue-700 rounded-lg lg:my-2 lg:px-4 lg:py-2 text-5xl lg:text-lg" onClick={handleDelete}>Yes</button>
            <button className="m-2 p-6 h-28 w-56 lg:w-24 border border-blue-800 text-blue-800 hover:border-blue-700 hover:text-blue-700 rounded-lg lg:my-2 lg:px-4 lg:py-2 text-5xl lg:text-lg" onClick={() => setToggleModal(false)}>No</button>
          </div>
          </div>
        </div>
      </Modal>
    </div>

  )
}

export default TransactionRow
