const data = require('../data/zoo_data');

const { species } = data;

function filterAnimalsMapLocation(coordinate) {
  const mapLocation = species.filter((item) => item.location === coordinate);
  const mapAnimals = [];
  for (let i = 0; i < mapLocation.length; i += 1) {
    mapAnimals.push(mapLocation[i].name);
  }
  return mapAnimals;
}

// console.log(filterAnimalsMapLocation('NE'));

function filterAnimalsForLocations() {
  const NEAnimals2 = filterAnimalsMapLocation('NE');
  const NWAnimals2 = filterAnimalsMapLocation('NW');
  const SEAnimals2 = filterAnimalsMapLocation('SE');
  const SWAnimals2 = filterAnimalsMapLocation('SW');

  const result = {
    NE: NEAnimals2,
    NW: NWAnimals2,
    SE: SEAnimals2,
    SW: SWAnimals2,
  };
  return result;
}
// console.log(filterAnimalsForLocations());

function animalFornameAndSex(animal, sex = null) {
  if (sex === null) {
    const animalArrayObj = species
      .filter((item) => item.name === animal)
      .map((item) => item.residents);
    const result = animalArrayObj[0].map((item) => item.name);
    return result;
  }

  if (sex !== null) {
    const animalArrayObj = species
      .filter((item) => item.name === animal)
      .map((item) => item.residents);

    const filterBySex = animalArrayObj[0].filter((item) => item.sex === sex);
    const result = filterBySex.map((item) => item.name);
    return result;
  }
}

// console.log(animalFornameAndSex('lions', 'female'));
// const animalsForMapLocation = filterAnimalsForLocations()[coordinate] pq eu queria o valor da array([lions, tigers...]) não a chave

function animalsNameForMapLocation(coordinate, sorted = false, sex = null) {
  const animalsForMapL = filterAnimalsForLocations()[coordinate];
  const result = [];
  for (let i = 0; i < animalsForMapL.length; i += 1) {
    const params = {
      [animalsForMapL[i]]: animalFornameAndSex(animalsForMapL[i], sex),
    };
    const paramsSort = {
      [animalsForMapL[i]]: animalFornameAndSex(animalsForMapL[i], sex).sort(),
    };
    if (sorted === true) {
      result.push(paramsSort);
    } else {
      result.push(params);
    }
  }
  return result;
}

// console.log(animalsNameForMapLocation('NE'));

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return filterAnimalsForLocations();
  }
  if (options.includeNames === true) {
    const { sorted, sex } = options;
    return {
      NE: animalsNameForMapLocation('NE', sorted, sex),
      NW: animalsNameForMapLocation('NW', sorted, sex),
      SE: animalsNameForMapLocation('SE', sorted, sex),
      SW: animalsNameForMapLocation('SW', sorted, sex),
    };
  }
}

// console.log(getAnimalMap());
// console.log(getAnimalMap({ includeNames: true, sorted: true }));

module.exports = getAnimalMap;
