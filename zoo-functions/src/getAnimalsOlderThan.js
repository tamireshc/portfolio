const data = require('../data/zoo_data');

const { species } = data;

// console.log(species);

function getAnimalsOlderThan(animal, age) {
  const specieSelected = species.filter((item) => item.name === animal);
  const [{ residents }] = specieSelected;
  const result = residents.every((specie) => specie.age >= age);
  return result;
}
// console.log(getAnimalsOlderThan('bears', 2));

module.exports = getAnimalsOlderThan;
