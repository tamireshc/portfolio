const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const result = employees.some(
    (item) => item.managers[0] === id || item.managers[1] === id,
  );
  return result;
}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  if (manager === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const employees2 = employees.filter(
      (item) => item.managers[0] === managerId || item.managers[1] === managerId,
    );

    return employees2.map((item) => `${item.firstName} ${item.lastName}`);
  }
}

// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
