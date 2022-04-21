const data = require('../data/zoo_data');

const { species } = data;
const [...argsSpecie] = species;
const { employees } = data;
const [...argsEmployees] = employees;

function findEmployees(id) {
  const colaborador = argsEmployees.find((item) => item.id === id);
  return colaborador.responsibleFor[0];
}

// console.log(findEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function findAnimals(animalid) {
  const residentsAnimal = argsSpecie.find((item) => item.id === animalid);
  const animalorder = residentsAnimal.residents.sort((a, b) => b.age - a.age);
  const result = Object.values(animalorder[0]);
  return result;
}
// console.log(findAnimals('ef3778eb-2844-4c7c-b66c-f432073e1c6b'));

function getOldestFromFirstSpecies(id) {
  const animalid = findEmployees(id);
  const result = findAnimals(animalid);
  return result;
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
