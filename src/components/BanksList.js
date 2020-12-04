import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import UserContext from '../UserContext'
import AccountsTable from './AccountsTable'

function BanksList({allBanks, refetch, setRefetch}) {
  const { accessToken } = useContext(UserContext)
  const [toggleModal, setToggleModal] = useState(false)

  Modal.setAppElement(document.getElementById('bank-list'))

  async function deleteBankAccounts(id) {
    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    const response = await fetch(`${apiUrl}/bank_accounts/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        }
      })

    if(response.ok) {
      setToggleModal(false)
      setRefetch(!refetch)
    }
  }

  if (allBanks.length === 0) {
    return (
      <p className="py-6 text-5xl lg:text-lg lg:max-w-6xl">Looks like you haven't added any banks yet. Please add a bank.</p>
    )
  }

  return (
    <div id='bank-list'>
    {
      allBanks.map(bank => {
        const { id, name, logo, accounts } = bank
        return (
          <div key={id} className="py-6 lg:py-3">
            <div key={name} className="pb-6 lg:pb-3">
              <div className="flex flex-row items-center space-x-6 lg:space-x-3">
                <img key={`${name}-logo`} className="h-20 w-20 lg:h-8 lg:w-8" src={`data:image/png;base64,${logo}`} alt={`${name}'s logo`} />
                <h1 key={`${name}-name`} className="text-5xl lg:text-2xl">{name}</h1>
                <button className="p-6 lg:p-2 lg:m-2 rounded-lg text-white bg-red-800 hover:bg-red-700 text-4xl lg:text-sm" onClick={() => setToggleModal(true)}>Delete</button>
              </div>
            </div>
            <Modal className="m-10 p-10 bg-white h-auto border border-gray-400 rounded lg:m-20" isOpen={toggleModal}>
              <div className="m-auto w-3/4 lg:w-1/2 flex flex-col items-center">
                <h1 className="p-6 text-5xl lg:text-2xl">Are you sure you want to delete this bank?</h1>
                <div className="flex flex-row space-x-10">
                  <button className="m-2 p-6 h-28 w-56 lg:w-24 bg-blue-800 text-white hover:bg-blue-700 rounded-lg lg:my-2 lg:px-4 lg:py-2 text-5xl lg:text-base" onClick={() => deleteBankAccounts(id)}>Yes</button>
                  <button className="m-2 p-6 h-28 w-56 lg:w-24 border border-blue-800 text-blue-800 hover:border-blue-700 hover:text-blue-700 rounded-lg lg:my-2 lg:px-4 lg:py-2 text-5xl lg:text-base" onClick={() => setToggleModal(false)}>No</button>
                </div>
              </div>
            </Modal>
            <AccountsTable accounts={accounts} />
          </div>
        )
      })
    }
    </div>
  )
}

export default BanksList
