const data = require('../data/zoo_data');

const { species, employees } = data;

function getSpecies(responsibleForAnimal) {
  const speciesFind = [];
  for (let i = 0; i < responsibleForAnimal.length; i += 1) {
    const resultSpecies = species.filter(
      (item) => item.id === responsibleForAnimal[i],
    );
    speciesFind.push(resultSpecies[0].name);
  }

  return speciesFind;
}
// console.log(getSpecies('batatinha'));

// [lionId, tigersId]

function getLocation(amimalsFind) {
  const locations = [];
  for (let i = 0; i < amimalsFind.length; i += 1) {
    const locationAnimal = species.filter((item) => item.id === amimalsFind[i]);
    locations.push(locationAnimal[0].location);
  }
  return locations;
}

// console.log(getLocation([lionId, tigersId]));

// const optionName = 'not';

// const employee = employees.filter(
//   (item) =>
//     item.firstName === optionName.name ||
//     item.lastName === optionName.name ||
//     item.id === optionName.id
// );

// console.log(employee);

function employeeIdentification(option) {
  const employee = employees.filter(
    (item) =>
      item.firstName === option.name || item.lastName === option.name || item.id === option.id,
  );
  // O retorno do employee com termo desconhecido é uma array vazia
  if (employee[0] !== undefined) {
    return {
      id: employee[0].id,
      fullName: `${employee[0].firstName} ${employee[0].lastName}`,
      species: getSpecies(employee[0].responsibleFor),
      locations: getLocation(employee[0].responsibleFor),
    };
  }
  return null;
}
// console.log(employeeIdentification('batatinha'));
// console.log(employeeIdentification({ name: 'Sharonda' }));

function allEmployyes() {
  const result = employees.map((item) => ({
    id: item.id,
    fullName: `${item.firstName} ${item.lastName}`,
    species: getSpecies(item.responsibleFor),
    locations: getLocation(item.responsibleFor),
  }));
  return result;
}
// console.log(allEmployyes());

function getEmployeesCoverage(optionName) {
  if (typeof optionName === 'undefined') {
    return allEmployyes();
  }
  if (employeeIdentification(optionName) !== null) {
    return employeeIdentification(optionName);
  }
  if (employeeIdentification(optionName) === null) {
    throw new Error('Informações inválidas');
  }
}
// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Nigel' }));
// console.log(getEmployeesCoverage());
// console.log(
//   getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' })
// );
//  console.log(getEmployeesCoverage('batatinha'));
module.exports = getEmployeesCoverage;
