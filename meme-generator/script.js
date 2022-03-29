const input = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const output = document.getElementById('imageOutput');
const container = document.getElementById('meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const imgsMiniMeme = document.querySelectorAll('.container-mini-meme img');

function addTextOnMeme() {
  memeText.innerText = input.value;
}
input.addEventListener('keyup', addTextOnMeme);

const loadFile = function (event) {
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memor
  };
};

function changeBorderFire() {
  container.style.border = '3px dashed red';
}

btnFire.addEventListener('click', changeBorderFire);

function changeBorderWater() {
  container.style.border = '5px double blue';
}

btnWater.addEventListener('click', changeBorderWater);

function changeBorderEarth() {
  container.style.border = '6px groove green';
}

btnEarth.addEventListener('click', changeBorderEarth);

function changeImageToMeme(event) {
  output.src = event.target.src;
  console.log('meme');
}

for (let i = 0; i < imgsMiniMeme.length; i += 1) {
  imgsMiniMeme[i].addEventListener('click', changeImageToMeme);
}
