import React from 'react'

function SpendingPlanCategories({ spendingPlanCategories }) {
  const { fixedCosts, savings, investments, discretionarySpending} = spendingPlanCategories
  // TODO create a SpendingPlanCategory Component that can take in an array or an object
  return (
    <div>
      <h1 className="my-2 text-5xl lg:text-2xl">Fixed Costs</h1>
      { 
        fixedCosts ? (
        <div className="border-gray-600 border rounded-lg lg:rounded lg:shadow">
          <div className="flex flex-row bg-blue-800">
            <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:text-sm text-white">LABEL</div>
            <div className="m-2 text-3xl w-4/12 lg:w-1/3 lg:text-sm text-white">SEARCH TERM</div>
            <div className="m-2 text-3xl w-5/12 lg:w-1/3 lg:text-sm text-white">EXPECTED AMOUNT</div>
          </div>
          {
            fixedCosts.map(fixedCost => {
              const { id, label, searchTerm, expectedAmount } = fixedCost
              return (
                <div key={id} className="flex flex-row lg:items-baseline border-gray-600 border-t-2 lg:border-t">
                  <div key={label} className="m-2 text-3xl w-3/12 lg:w-1/3 lg:m-2 lg:text-base">{label}</div>
                  <div key={searchTerm} className="m-2 text-3xl w-4/12 lg:w-1/3 lg:m-2 lg:text-base">{searchTerm}</div>
                  <div key={expectedAmount} className="m-2 text-3xl w-5/12 lg:w-1/3 lg:m-2 lg:text-base">${expectedAmount}</div>
                </div>
              )
            })
          }
        </div>
        ) : <p>Looks like you haven't accounted for your fixed costs. Be sure to add them as parts of your spending plan.</p>
      }
      <button>Add Fixed Cost</button>
      <h1 className="my-2 text-5xl lg:text-2xl">Savings</h1>
      {
        savings ? (
          <div className="border-gray-600 border rounded-lg lg:rounded lg:shadow">
            <div className="flex flex-row bg-blue-800">
              <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:text-sm text-white">LABEL</div>
              <div className="m-2 text-3xl w-4/12 lg:w-1/3 lg:text-sm text-white">SEARCH TERM</div>
              <div className="m-2 text-3xl w-5/12 lg:w-1/3 lg:text-sm text-white">EXPECTED AMOUNT</div>
            </div>
            {
              savings.map(savingsGoal => {
                const { id, label, searchTerm, expectedAmount } = savingsGoal
                return (
                  <div key={id} className="flex flex-row lg:items-baseline border-gray-600 border-t-2 lg:border-t">
                    <div key={label} className="m-2 text-3xl w-3/12 lg:w-1/3 lg:m-2 lg:text-base">{label}</div>
                    <div key={searchTerm} className="m-2 text-3xl w-4/12 lg:w-1/3 lg:m-2 lg:text-base">{searchTerm}</div>
                    <div key={expectedAmount} className="m-2 text-3xl w-5/12 lg:w-1/3 lg:m-2 lg:text-base">${expectedAmount}</div>
                  </div>
                )
              })
            }
          </div>
        ) : <p>Looks like you aren't planning to save any money. Be sure to add savings as part of your spending plan.</p>
      }
      <h1 className="my-2 text-5xl lg:text-2xl">Investments</h1>
      {
        investments ? (
          <div className="border-gray-600 border rounded-lg lg:rounded lg:shadow">
            <div className="flex flex-row bg-blue-800">
              <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:text-sm text-white">LABEL</div>
              <div className="m-2 text-3xl w-4/12 lg:w-1/3 lg:text-sm text-white">SEARCH TERM</div>
              <div className="m-2 text-3xl w-5/12 lg:w-1/3 lg:text-sm text-white">EXPECTED AMOUNT</div>
            </div>
            {
              investments.map(investment => {
                const { id, label, searchTerm, expectedAmount } = investment
                return (
                  <div key={id} className="flex flex-row lg:items-baseline border-gray-600 border-t-2 lg:border-t">
                    <div key={label} className="m-2 text-3xl w-3/12 lg:w-1/3 lg:m-2 lg:text-base">{label}</div>
                    <div key={searchTerm} className="m-2 text-3xl w-4/12 lg:w-1/3 lg:m-2 lg:text-base">{searchTerm}</div>
                    <div key={expectedAmount} className="m-2 text-3xl w-5/12 lg:w-1/3 lg:m-2 lg:text-base">${expectedAmount}</div>
                  </div>
                )
              })
            }
          </div>
        ): <p>Looks like you aren't planning to invest any money. Be sure to add investments as part of your spending plan.</p>
      }
      <h1 className="my-2 text-5xl lg:text-2xl">Discretionary Spending</h1>
      <div className="border-gray-600 border rounded-lg lg:rounded lg:shadow">
        <div className="flex flex-row bg-blue-800">
          <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:text-sm text-white">LABEL</div>
          <div className="m-2 text-3xl w-4/12 lg:w-1/3 lg:text-sm text-white">SEARCH TERM</div>
          <div className="m-2 text-3xl w-5/12 lg:w-1/3 lg:text-sm text-white">EXPECTED AMOUNT</div>
       </div>

        <div className="flex flex-row lg:items-baseline border-gray-600 border-t-2 lg:border-t">
          <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:m-2 lg:text-base">{discretionarySpending.label}</div>
          <div className="m-2 text-3xl w-4/12 lg:w-1/3 lg:m-2 lg:text-base">{discretionarySpending.searchTerm}</div>
          <div className="m-2 text-3xl w-5/12 lg:w-1/3 lg:m-2 lg:text-base">${discretionarySpending.expectedAmount}</div>
        </div>
      </div>
      
    </div>
  )
}

export default SpendingPlanCategories;
