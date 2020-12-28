import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import UserContext from '../UserContext'
import EditSpendingPlanPartForm from './EditSpendingPlanPartForm'

function SpendingPlanPartRow({ part, category }) {
  const { id, label, searchTerm, expectedAmount } = part
  const [toggleForm, setToggleForm] = useState(false)
  const [toggleModal, setToggleModal] = useState(false)
  const { accessToken, refetch, setRefetch } = useContext(UserContext)
  const singularCategory = category === "Savings" ? "Savings Fund" : category.slice(0, -1)

  Modal.setAppElement(document.getElementById(`spending-plan-part-${id}`))

  async function handleDelete(e) {
    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    await fetch(`${apiUrl}/spending_plan_parts/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      }
    )
    setToggleModal(false)
    setRefetch(!refetch)
  }


  return (
    <div id={`spending-plan-part-${id}`} className="lg:border-gray-600 lg:border-t">
    {
      toggleForm ?
      <EditSpendingPlanPartForm part={part} setToggleForm={setToggleForm} />
      :
      (
        <div className="flex flex-row items-baseline">
        <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:text-base">{label}</div>
        <div className="m-2 text-3xl w-4/12 lg:w-1/3 lg:text-base">{searchTerm}</div>
        <div className="m-2 text-3xl w-1/12 lg:w-2/12 lg:text-base">${expectedAmount}</div>
        <button className={`${ category !== "Discretionary Spending" ? 'w-2/12 lg:w-1/12' : 'w-4/12 lg:w-2/12' } text-blue-800 hover:text-blue-700 text-3xl lg:text-base`} onClick={() => setToggleForm(true)}>Edit</button>
        {
        category !== "Discretionary Spending" && <button className="w-2/12 lg:w-1/12 text-red-800 hover:text-red-700 text-3xl lg:text-base" onClick={() => setToggleModal(true)}>Delete</button>
        }
        </div>
      )
    }
    <Modal className="m-10 p-10 bg-white h-auto border border-gray-400 rounded lg:m-20" isOpen={toggleModal}>
      <div className="m-auto w-3/4 lg:w-1/2 flex flex-col items-center">
        <h1 className="p-6 text-5xl lg:text-2xl">{ `Are you sure you want to delete this ${singularCategory}?` }</h1>
        <div className="flex flex-row space-x-10">
          <button className="m-2 p-6 h-28 w-56 lg:w-24 bg-blue-800 text-white hover:bg-blue-700 rounded-lg lg:my-2 lg:px-4 lg:py-2 text-5xl lg:text-base" onClick={handleDelete}>Yes</button>
          <button className="m-2 p-6 h-28 w-56 lg:w-24 border border-blue-800 text-blue-800 hover:border-blue-700 hover:text-blue-700 rounded-lg lg:my-2 lg:px-4 lg:py-2 text-5xl lg:text-base" onClick={() => setToggleModal(false)}>No</button>
        </div>
      </div>
    </Modal>
    </div>
  )
}

export default SpendingPlanPartRow
