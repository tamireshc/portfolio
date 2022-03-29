const ball1 = document.querySelector('.ball-1');
const ball2 = document.querySelector('.ball-2');
const ball3 = document.querySelector('.ball-3');
const ball4 = document.querySelector('.ball-4');
const ball5 = document.querySelector('.ball-5');
const ball6 = document.querySelector('.ball-6');
const rgbQuest = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const balls = document.getElementsByClassName('ball');
const bntReset = document.getElementById('reset-game');
const score = document.getElementById('score');

function genereteColor() {
  return parseInt(Math.random() * 255);
}

function color() {
  const color1 =
    (ball1.style.backgroundColor = `rgb(${genereteColor()},${genereteColor()},${genereteColor()})`);

  const color2 =
    (ball2.style.backgroundColor = `rgb(${genereteColor()},${genereteColor()},${genereteColor()})`);

  const color3 =
    (ball3.style.backgroundColor = `rgb(${genereteColor()},${genereteColor()},${genereteColor()})`);

  const color4 =
    (ball4.style.backgroundColor = `rgb(${genereteColor()},${genereteColor()},${genereteColor()})`);

  const color5 =
    (ball5.style.backgroundColor = `rgb(${genereteColor()},${genereteColor()},${genereteColor()})`);

  const color6 =
    (ball6.style.backgroundColor = `rgb(${genereteColor()},${genereteColor()},${genereteColor()})`);

  const number = parseInt(Math.random() * 6);
  const arrayCollor = [color1, color2, color3, color4, color5, color6];
  rgbQuest.innerText = arrayCollor[number];
  const rgbDisplay = arrayCollor[number];

  function checkColor(event) {
    const compare = event.target.style.backgroundColor.split(', ').join(',');

    if (compare === rgbDisplay) {
      answer.innerText = 'Acertou!';
      placar();
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }

  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', checkColor);
  }
}

color();

let scoreNumber = +score.innerText;

function placar() {
  console.log(scoreNumber, typeof scoreNumber);
  scoreNumber += 3;
  score.innerText = scoreNumber;
  // localStorage.setItem('score', scoreNumber);
}

function reloadPage() {
  color();
  answer.innerText = 'Escolha uma cor';
}

bntReset.addEventListener('click', reloadPage);
