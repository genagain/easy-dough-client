// TODO make tests for this ideally
export const convertDateToIso = function(date) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit'}
  const [month, day, year] = date.toLocaleDateString('en-US', options).split('/')
  return [year, month, day].join('-')
}

export const convertIsoToDate = function(date){
  const [year, month, day] = date.split('-')
  const monthIndex = month - 1
  return new Date(year, monthIndex, day)
}

export const formatPrettyDate = function(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return date.toLocaleString('en-US', options)
}

export const validateAmount = function(amount, setFlashMessage){
  let validCurrency = /^\d{0,3},{0,1}\d{0,3}(\.{0,1}\d{2})?$/
  if (!validCurrency.test(amount)) {
    setFlashMessage('Please enter a valid dollar amount')
    return false
  } else {
    return true
  }
}

export const formatAmount = function(amount) {
  return Number.parseFloat(amount).toFixed(2)
}
