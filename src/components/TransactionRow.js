import React, { useContext, useState, useEffect } from 'react'
import Modal from 'react-modal';
import UserContext from '../UserContext'
import EditTransactionForm from './EditTransactionForm'
import { formatPrettyDate, convertIsoToDate } from '../utils'

function TransactionRow({transaction}) {
  const { id, date: isoDate, description, label, amount } = transaction

  const { accessToken, logout, queryParams, setQueryParams } = useContext(UserContext)
  const [toggleModal, setToggleModal] = useState(false)
  const [toggleForm, setToggleForm] = useState(false)
	const [spendingPlanPartLabels, setSpendingPlanPartLabels] = useState([])

  Modal.setAppElement(document.getElementById(`transaction-${id}`))

  // TODO consider putting this in the EditTransaction form
  useEffect(() => {
    // TODO ideally create a query param to only get the labels
    if (process.env.NODE_ENV === 'test') {
      return
    }
    const fetchSpendingPlanCategories = async () => {
      const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
      const response = await fetch(`${apiUrl}/spending_plan_parts`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        }
      )

      const json = await response.json()

      if (!response.ok) {
        logout()
      }

      // TODO ideally get rid of this logic
      const spendingPlanParts = json['spending_plan_parts']
      let labels = []
      for (const category in json['spending_plan_parts']) {
        if (Array.isArray(spendingPlanParts[category])) {
          const partLabels = spendingPlanParts[category].map(part => part.label)
          labels.push(...partLabels)
        }
      }
      const discretionarySpendingLabel = spendingPlanParts.discretionarySpending.label
      labels.push(discretionarySpendingLabel)
      setSpendingPlanPartLabels(labels)
    }

    fetchSpendingPlanCategories()
  }, [accessToken, logout])

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
    <div id={`transaction-${id}`} className="px-1 py-6 lg:border-gray-600 lg:p-0 lg:border-t">
    { 
      toggleForm ? (
        <EditTransactionForm transaction={transaction} setToggleForm={setToggleForm} spendingPlanPartLabels={spendingPlanPartLabels}/>
      ) : (
        <div className="flex flex-row lg:items-baseline">
          <div className="flex-grow lg:flex lg:flex-row lg:flex-grow-0">
          <div key={`${id}-${date}`} className="m-2 text-3xl lg:m-2 lg:w-40 lg:text-base">{formattedDate}</div>
          <div key={`${id}-${description}`} className="m-2 lg:m-2 text-5xl lg:w-72 lg:text-base">{description}</div>
          <div key={`${id}-${label}`} className="m-2 lg:m-2 text-4xl lg:w-72 lg:text-base">{label}</div>
          </div>
           <div key={`${id}-${amount}`} className="mx-2 my-4 lg:m-2 l text-5xl lg:w-96 lg:text-base">{amount}</div>
           <button className="mx-2 my-4 px-4 py-2 lg:m-2 lg:w-16 h-20 text-blue-800 hover:text-blue-700 text-4xl lg:text-base lg:px-2 lg:h-auto" data-testid={`edit-${id}`} onClick={() => setToggleForm(true)}>Edit</button>
           <button className="mx-2 my-4 px-4 py-2 lg:m-2 lg:w-20 h-20 text-red-800 hover:text-red-700 text-4xl lg:text-base lg:px-2 lg:h-auto" data-testid={`delete-${id}`} onClick={() => setToggleModal(true)}>Delete</button>
        </div>
      )
    }
      <Modal className="m-10 p-10 bg-white h-auto border border-gray-400 rounded lg:m-20" isOpen={toggleModal}>
        <div className="m-auto w-3/4 lg:w-1/2 flex flex-col items-center">
        <h1 className="p-6 text-5xl lg:text-2xl">Are you sure you want to delete this transaction?</h1>
          <div className="flex flex-row space-x-10">
            <button className="m-2 p-6 h-28 w-56 lg:w-24 bg-blue-800 text-white hover:bg-blue-700 rounded-lg lg:my-2 lg:px-4 lg:py-2 text-5xl lg:text-base" onClick={handleDelete}>Yes</button>
            <button className="m-2 p-6 h-28 w-56 lg:w-24 border border-blue-800 text-blue-800 hover:border-blue-700 hover:text-blue-700 rounded-lg lg:my-2 lg:px-4 lg:py-2 text-5xl lg:text-base" onClick={() => setToggleModal(false)}>No</button>
          </div>
        </div>
      </Modal>
    </div>

  )
}

export default TransactionRow
