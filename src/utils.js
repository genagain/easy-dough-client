// TODO make tests for this ideally
export const formatIsoDate = function(date) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit'}
  const [month, day, year] = date.toLocaleDateString('en-US', options).split('/')
  return [year, month, day].join('-')
}

export const formatAmount = function(amount) {
  return Number.parseFloat(amount).toFixed(2)
}
