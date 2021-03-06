import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../UserContext'
import SpendingPlanCategories from '../components/SpendingPlanCategories'

function SpendingPlan() {
  const { accessToken, logout, refetch, setRefetch } = useContext(UserContext)

  const [spendingPlanCategories, setSpendingPlanCategories] = useState({
    discretionarySpending: {
      label: 'Spending Money',
      searchTerm: '*',
      expectedAmount: 0
    }
  })

  useEffect(() => {
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

      setSpendingPlanCategories(json['spending_plan_parts'])
    }

    fetchSpendingPlanCategories()
  }, [accessToken, logout, refetch])

  return (
    <div className="flex flex-col">
      <div className="m-auto w-10/12 lg:max-w-6xl">
        <h1 className="mb-2 text-6xl lg:text-3xl">Your Spending Plan</h1>
        <SpendingPlanCategories spendingPlanCategories={spendingPlanCategories} />
      </div>
    </div>
  )
}

export default SpendingPlan;
