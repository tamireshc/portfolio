// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let lastName = array[array.length - 1];
  let firstName = array[0];

  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  let biggerNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > biggerNumber) {
      biggerNumber = array[i];
    } else {
      biggerNumber = biggerNumber;
    }
  }
  let arrayNumberRepeat = array.filter((n) => n === biggerNumber);
  let amountNumberRepeat = arrayNumberRepeat.length;
  return amountNumberRepeat;
}
let teste = [0, 0, 0];
console.log(highestCount(teste));

// Desafio 7

let distanceCat1 = 0;
let distanceCat2 = 0;
function catAndMouse(mouse, cat1, cat2) {
  distanceCat1 = Math.abs(cat1 - mouse);
  distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  if (distanceCat2 > distanceCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(10, 4, 22), distanceCat1, distanceCat2);

// Desafio 8
function fizzBuzz(array) {
  let arrayResult = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      arrayResult.push('fizz');
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      arrayResult.push('buzz');
    } else if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      arrayResult.push('fizzBuzz');
    } else {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}

// Desafio 9
function encode(string) {
  let arrayString = string.split('');
  let arrayStringJoin = '';
  for (let i = 0; i < arrayString.length; i += 1) {
    if (arrayString[i] === 'a') {
      arrayString[i] = 1;
    } else if (arrayString[i] === 'e') {
      arrayString[i] = 2;
    } else if (arrayString[i] === 'i') {
      arrayString[i] = 3;
    } else if (arrayString[i] === 'o') {
      arrayString[i] = 4;
    } else if (arrayString[i] === 'u') {
      arrayString[i] = 5;
    }
  }
  arrayStringJoin = arrayString.join('');
  return arrayStringJoin;
}

function decode(string) {
  let arrayString = string.split('');
  let arrayStringJoin = '';
  for (let i = 0; i < arrayString.length; i += 1) {
    if (arrayString[i] === '1') {
      arrayString[i] = 'a';
    } else if (arrayString[i] === '2') {
      arrayString[i] = 'e';
    } else if (arrayString[i] === '3') {
      arrayString[i] = 'i';
    } else if (arrayString[i] === '4') {
      arrayString[i] = 'o';
    } else if (arrayString[i] === '5') {
      arrayString[i] = 'u';
    }
  }
  arrayStringJoin = arrayString.join('');
  return arrayStringJoin;
}

// Desafio 10

let test1 = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let namex = 'Lucas';

function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arrayOrder = array.sort();
  let arrayOfTech = [];
  for (let i = 0; i < arrayOrder.length; i += 1) {
    let objeto = {};
    objeto.tech = arrayOrder[i];
    objeto.name = name;
    arrayOfTech.push(objeto);
  }
  return arrayOfTech;
}
console.log(techList(test1, namex));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
