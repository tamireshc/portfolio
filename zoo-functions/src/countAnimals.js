const data = require('../data/zoo_data');

const { species } = data;

function countAnimalsWithTwoArguments(animal) {
  const animalvalues = Object.values(animal);
  const animalSelected = species.filter(
    (item) => item.name === animalvalues[0],
  );
  const { residents } = animalSelected[0];
  const residentesBySex = residents.filter(
    (item) => item.sex === animalvalues[1],
  );
  return residentesBySex.length;
}

function countAnimalsWithOneArguments(animal) {
  const animalvalues = Object.values(animal);

  const animalSelected = species.filter(
    (item) => item.name === animalvalues[0],
  );
  const { residents } = animalSelected[0];
  return residents.length;
}

function countAnimals(animal) {
  const result = {};
  if (typeof animal === 'undefined') {
    species.forEach((item) => {
      result[item.name] = item.residents.length;
    });
    return result;
  }
  const animalvalues = Object.values(animal);
  if (animalvalues.length === 2) {
    const result1 = countAnimalsWithTwoArguments(animal);
    return result1;
  }
  if (animalvalues.length === 1) {
    const result2 = countAnimalsWithOneArguments(animal);
    return result2;
  }
}

// console.log(countAnimals({ specie: 'bears', sex: 'male' }));

module.exports = countAnimals;
