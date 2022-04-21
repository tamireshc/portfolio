const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < ids.length; i += 1) {
    const value = species.find((item) => item.id === ids[i]);
    result.push(value);
  }
  return result;
}

// console.log(
//   getSpeciesByIds(
//     'e8481c1d-42ea-4610-8e11-1752cfc05a46',
//     '0938aa23-f153-4937-9f88-4858b24d6bce'
//   )
// );

module.exports = getSpeciesByIds;
