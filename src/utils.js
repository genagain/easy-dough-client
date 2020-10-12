function formatDate(date) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit'}
  const [month, day, year] = date.toLocaleDateString('en-US', options).split('/')
  return [year, month, day].join('-')
}

function formatAmount(amount) {
  let withoutCents = /^\d{0,3},{0,1}\d{0,3}$/
  if (withoutCents.test(amount)){
    return `${amount}.00`
  } else {
    return amount
  }
}

module.exports = {
  formatDate,
  formatAmount
}
