const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const result = employees.filter(
    (item) => item.firstName === employeeName || item.lastName === employeeName,
  );
  const [{ ...values }] = result;
  return values;
}
// console.log(getEmployeeByName());

module.exports = getEmployeeByName;
