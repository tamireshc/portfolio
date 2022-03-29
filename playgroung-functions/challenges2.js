// Desafio 11
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// "(12) 34567-8901"

function countNumberOfRepeatArray(array) {
  let arrayNumberRepeat = [];
  let condiction = null;
  for (let i = 0; i < array.length; i += 1) {
    let number = 0;
    let numberRepeat;
    number = array.filter((n) => n === array[i]);
    numberRepeat = number.length;
    arrayNumberRepeat.push(numberRepeat);
    condiction = arrayNumberRepeat.some((n) => n >= 3);
  }
  return condiction;
}

function checkNumebrArray(array) {
  let check = array.some((n) => n < 0);
  let check2 = array.some((n) => n > 9);
  if (check === false && check2 === false) {
    return false;
  }
  return true;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (countNumberOfRepeatArray(array) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (checkNumebrArray(array) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}
console.log('count', countNumberOfRepeatArray(array1));
console.log('check', checkNumebrArray(array1));
console.log(generatePhoneNumber(array1));

// Desafio 12

function sideIsLowerThanSumAnothers(lineA, lineB, lineC) {
  if (lineA > lineB + lineC) {
    return false;
  }
  if (lineB > lineA + lineC) {
    return false;
  }
  if (lineC > lineA + lineB) {
    return false;
  }
  return true;
}

function sideIsbigguerThanAbsoluteValueOfSumAnothers(lineA, lineB, lineC) {
  if (lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}
console.log(sideIsLowerThanSumAnothers(50, 14, 5));

function triangleCheck(lineA, lineB, lineC) {
  if (
    sideIsbigguerThanAbsoluteValueOfSumAnothers(lineA, lineB, lineC) === true &&
    sideIsLowerThanSumAnothers(lineA, lineB, lineC) === true
  ) {
    return true;
  }
  return false;
}

// Desafio 13
let string1 = '1 cachaça, 5 cervejas e 1 copo de vinho';
// regular expression para buscar numeros em uma string e método de string para retirar a variáve procurada
// https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
function hydrate(string) {
  let regex = /\d+/g;
  let matches = string.match(regex);
  let numbers = [];
  let number = 0;
  for (let i = 0; i < matches.length; i += 1) {
    number = parseInt(matches[i]);
    numbers.push(number);
  }
  let sumOfCups = numbers.reduce((a, b) => a + b);
  if (sumOfCups === 1) {
    return `${sumOfCups} copo de água`;
  }
  return `${sumOfCups} copos de água`;
}

console.log(hydrate(string1));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
