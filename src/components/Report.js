import React from 'react';
import ReportRow from './ReportRow'

function Report(props) {
  return (
    <div>
      <ReportRow label={'Debt'} actualAmount={910.8} expectedAmount={910.8} difference={0} />
      <ReportRow label={'Cellphone'} actualAmount={40.0} expectedAmount={40.0} difference={0}/>
      <ReportRow label={'Groceries'} actualAmount={500} expectedAmount={400} difference={100}/>
      <ReportRow label={'Digital Ocean'} actualAmount={6} expectedAmount={6} difference={0}/>
      <ReportRow label={'Google Suite'} actualAmount={6.38} expectedAmount={6.38} difference={0}/>
      <ReportRow label={'Heroku'} actualAmount={2} expectedAmount={2} difference={0}/>
      <ReportRow label={'Notion'} actualAmount={2} expectedAmount={2} difference={0}/>
      <ReportRow label={'Whoop'} actualAmount={30} expectedAmount={30} difference={0}/>
      <ReportRow label={'8 Billion Trees'} actualAmount={20} expectedAmount={20} difference={0}/>
      <ReportRow label={'Naked Nutrition'} actualAmount={0} expectedAmount={28.33} difference={28.33}/>
      <ReportRow label={'Laundry'} actualAmount={10} expectedAmount={16} difference={16}/>
      <ReportRow label={'Wild Planet Anchovies'} actualAmount={0} expectedAmount={57} difference={57}/>
      <ReportRow label={'Audible'} actualAmount={15} expectedAmount={15} difference={0}/>
      <ReportRow label={'Future Living Expenses'} actualAmount={4000} expectedAmount={4000} difference={0}/>
      <ReportRow label={'Spending Money'} actualAmount={550} expectedAmount={436.29} difference={113.71}/>
    </div>
  )
}

export default Report
