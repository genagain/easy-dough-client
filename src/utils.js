function formatDate(date) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit'}
  const [month, day, year] = date.toLocaleDateString('en-US', options).split('/')
  return [year, month, day].join('-')
}

module.exports = {
  formatDate
}
