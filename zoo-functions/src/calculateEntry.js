const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const resultChild = entrants.filter((item) => item.age < 18);
  const resultAdult = entrants.filter(
    (item) => item.age >= 18 && item.age < 50,
  );
  const resultSenior = entrants.filter((item) => item.age >= 50);
  return {
    child: resultChild.length,
    adult: resultAdult.length,
    senior: resultSenior.length,
  };
}
// referencia utilizada de como descobrir se o objeto está vazio
// https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%C3%A1-vazio-sem-jquery

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalEntrantsForType = countEntrants(entrants);
  const valueChild = totalEntrantsForType.child * prices.child;
  const valueAdult = totalEntrantsForType.adult * prices.adult;
  const valueSenior = totalEntrantsForType.senior * prices.senior;

  const valueEntry = valueChild + valueAdult + valueSenior;

  return valueEntry;
}

module.exports = { calculateEntry, countEntrants };

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];
// { child: 3, adult: 2, senior: 1 }
// console.log(countEntrants(entrants));
// console.log(calculateEntry(entrants));
// console.log(calculateEntry());
// console.log(calculateEntry({}));
