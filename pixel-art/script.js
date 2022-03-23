const containerPixels = document.querySelector('#pixel-board');

function addUlPixelBox(container, number) {
  for (let i = 0; i < number; i += 1) {
    const ulTag = document.createElement('ul');
    ulTag.className = 'ulPixelBox';
    container.appendChild(ulTag);
  }
}

addUlPixelBox(containerPixels, 5);

function addLiPixelBox(number) {
  const uls = document.getElementsByClassName('ulPixelBox');
  for (let i = 0; i < uls.length; i += 1) {
    for (let x = 0; x < number; x += 1) {
      const lis = document.createElement('li');
      lis.className = 'pixel';
      uls[i].appendChild(lis);
    }
  }
}
addLiPixelBox(5);
const liTagsColor = document.getElementsByClassName('color');

function addClassSelected(event) {
  for (let i = 0; i < liTagsColor.length; i += 1) {
    if (liTagsColor[i].classList.contains('selected')) {
      liTagsColor[i].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

for (let i = 0; i < liTagsColor.length; i += 1) {
  liTagsColor[i].addEventListener('click', addClassSelected);
}
const pixel = document.getElementsByClassName('pixel');

function addColorToPixel(event) {
  const selected = document.getElementsByClassName('selected');
  console.log(event.target);
  event.target.style.backgroundColor = window.getComputedStyle(
    selected[0]
  ).backgroundColor;
}

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', addColorToPixel);
}

const btn = document.querySelector('#clear-board');

function clearPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

btn.addEventListener('click', clearPixel);

const btnClear = document.querySelector('#generate-board');

// const liBoard = document.getElementsByClassName('pixel');

function checkInputValuelower5() {
  const five = 5;
  const input = document.getElementById('board-size');
  input.value = five;
}
function checkInputValueBigger50() {
  const fifty = 50;
  const input = document.getElementById('board-size');
  input.value = fifty;
}

function checkValues() {
  const input = document.getElementById('board-size');

  if (input.value > 0 && input.value < 5) {
    checkInputValuelower5();
  }

  if (input.value > 50) {
    checkInputValueBigger50();
  }
}

function setBoardLength() {
  const pixelBoard = document.getElementById('pixel-board');
  const ulBoard = document.getElementsByClassName('ulPixelBox');

  const input = document.getElementById('board-size');
  if (input.value === '') {
    alert('Board inválido!');
  }
  checkValues();
  for (let i = ulBoard.length; i > 0; i -= 1) {
    pixelBoard.removeChild(ulBoard[i - 1]);
  }
  addUlPixelBox(containerPixels, input.value);
  addLiPixelBox(input.value);

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', addColorToPixel);
  }
}

btnClear.addEventListener('click', setBoardLength);

const cor2 = document.querySelector('.color-2');
const cor3 = document.querySelector('.color-3');
const cor4 = document.querySelector('.color-4');

function aleatoryColor() {
  return parseInt(Math.random() * 255);
}

cor2.style.backgroundColor = `rgb(${aleatoryColor()},${aleatoryColor()},${aleatoryColor()})`;
cor3.style.backgroundColor = `rgb(${aleatoryColor()},${aleatoryColor()},${aleatoryColor()})`;
cor4.style.backgroundColor = `rgb(${aleatoryColor()},${aleatoryColor()},${aleatoryColor()})`;
