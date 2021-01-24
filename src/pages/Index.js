import React from 'react'
import { withRouter } from 'react-router-dom';
 
function Index({ history }) {
  return (
    <>
      <div className="-mt-6 flex flex-col bg-gray-100 py-16">
        <div className="m-auto w-10/12 lg:max-w-6xl">
          <div className="flex flex-row items-center">
            <div className="flex flex-col flex-grow items-start space-y-6">
              <h1 className="text-5xl text-blue-800 font-semibold">Manage Your Money Easily</h1>
              <p className="text-2xl text-blue-800">Create a plan. Track your spending automagically.</p>
              <button className="p-6 bg-blue-800 hover:bg-blue-700 text-white rounded-lg lg:p-2 text-5xl lg:text-xl" onClick={() => history.push('/signup')}>Sign Up</button>
            </div>
            <img alt="Piggy Bank" className="h-120 w-120" src="images/money.svg" />
          </div>
        </div>
      </div>
      <div className="m-auto w-10/12 lg:max-w-6xl">
        <div className="flex flex-col py-16">
          <div className="flex flex-row items-center">
            <div className="w-1/2">
              <img  alt="Online Banking" className="h-84 w-84" src="images/bank_accounts.svg" />
            </div>
            <div className="w-1/2 flex flex-col flex-grow items-start space-y-6">
              <h1 className="text-3xl text-blue-800 font-semibold">Connect all your accounts</h1>
              <p className="text-xl text-blue-800">Easily add all of your bank accounts and credit cards.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-16">
          <div className="flex flex-row items-center">
            <div className="w-1/2 flex flex-col flex-grow items-start space-y-6">
              <h1 className="text-3xl text-blue-800 font-semibold">Create a spending plan</h1>
              <p className="text-xl text-blue-800">Plan your spending so you can save and invest easily.</p>
            </div>
            <div className="w-1/2">
              <img alt="Spending Plan" className="h-84 w-84" src="images/spending_plan.svg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col py-16">
          <div className="flex flex-row items-center">
            <div className="w-1/2">
              <img alt="Track Spending" className="h-84 w-84" src="images/transactions.svg" />
            </div>
            <div className="w-1/2 flex flex-col flex-grow items-start space-y-6">
              <h1 className="text-3xl text-blue-800 font-semibold">Track your spending</h1>
              <p className="text-xl text-blue-800">Automatically label transactions to easily track your spending.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-16">
          <div className="flex flex-row items-center">
            <div className="w-1/2 flex flex-col flex-grow items-start space-y-6">
              <h1 className="text-3xl text-blue-800 font-semibold">Stay on track</h1>
              <p className="text-xl text-blue-800">Visualize your spending easily to stick to your plan.</p>
            </div>
            <div className="w-1/2">
              <img alt="Visualize Spending" className="h-84 w-84" src="images/reports.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Index)
