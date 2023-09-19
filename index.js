/* Your Code Here */

function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(array) {
  return array.map(array => createEmployeeRecord(array));
}

function createTimeInEvent(dateStamp) {
  let split = dateStamp.split(" ");
  let hour = split[1];
  let date = split[0];
  this.timeInEvents.push({
    type: "TimeIn",
    hour: +hour,
    date: date
  })
  return this;
}

function createTimeOutEvent(dateStamp) {
  let split = dateStamp.split(" ");
  let hour = split[1];
  let date = split[0];
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: +hour,
    date: date
  })
  return this;
}

function hoursWorkedOnDate(date) {
  const index = this.timeInEvents
    .indexOf(this.timeInEvents
    .find(obj => obj.date === date))
  const hoursWorked = +this.timeOutEvents[index].hour - +this.timeInEvents[index].hour;
  return hoursWorked / 100;
}

function wagesEarnedOnDate(date) {
  const payRate = this.payPerHour;
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  return payRate * hoursWorked;
}

function findEmployeeByFirstName(srcArray, firstName) {
  for (let employee of srcArray) {
    if (employee.firstName === firstName) {
      return employee;
    }
  }
  return undefined;
}

function calculatePayroll(array) {
  let payroll = 0;
  for (let employee of array) {
    payroll += allWagesFor.call(employee)
  }
  return payroll;  
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date
  })

  const payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}