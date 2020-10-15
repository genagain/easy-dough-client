import React, { useState } from 'react'
import Modal from 'react-modal';

function TransactionRow({transaction}) {
  const { id, date, description, amount } = transaction
  const [toggleModal, setToggleModal] = useState(false)

  Modal.setAppElement(document.getElementById(`transaction-${id}`))

  function handleDelete(e) {
    setToggleModal(false)
  }


  return (
    <div id={`transaction-${id}`}>
      <div key={`${id}-${date}`}>{date}</div>
      <div key={`${id}-${description}`}>{description}</div>
      <div key={`${id}-${amount}`}>{amount}</div>
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
