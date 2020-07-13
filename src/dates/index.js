// import moment here; use this package in each function
const moment = require('moment');


const today = () => {
  const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  }
  const intToday = moment().weekday()
  const strToday = days[intToday]
  return strToday
}

const calendar = () => {
  const formattedMonth = moment().format('MMM');
  const formattedDay = moment().format('DD');
  const formattedYear = moment().format('YYYY');
  const wholeDate = `${formattedMonth} ${formattedDay}, ${formattedYear}`
  // console.log(wholeDate)
  return wholeDate
}

// calendar()
const currentTime = () => {
  const formattedTime = moment().format('LTS');
  return formattedTime
}

module.exports = {
  today,
  calendar,
  currentTime
}