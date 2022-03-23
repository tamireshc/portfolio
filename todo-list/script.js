const olList = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const btnClearAll = document.getElementById('apaga-tudo');
const btnRemoveFinalized = document.getElementById('remover-finalizados');
const btnSave = document.getElementById('salvar-tarefas');
const btnRemoveSelected = document.getElementById('remover-selecionado');
const btnUp = document.getElementById('mover-cima');
const btnDown = document.getElementById('mover-baixo');

function addTasks() {
  const liTask = document.createElement('li');
  liTask.innerText = input.value;
  olList.appendChild(liTask);
  input.value = '';
}

btn.addEventListener('click', addTasks);

const liTask = document.getElementsByTagName('li');

function changeBackgroundtaskToGray(event) {
  for (let i = 0; i < liTask.length; i += 1) {
    liTask[i].classList.remove('gray');
  }
  event.target.classList.add('gray');
}

// Referência usada de como adicionar eventos a elementos criados dinamicamente: https: event.target.style.backgroundColor = 'gray';
// usefulangle.com/post/138/pure-javascript-event-handler-dynamic-element

olList.addEventListener('click', changeBackgroundtaskToGray);

function addLineThroughOnTask(event) {
  event.target.classList.toggle('completed');
}

olList.addEventListener('dblclick', addLineThroughOnTask);

function removeAllTasks() {
  for (let i = olList.childNodes.length - 1; i >= 0; i -= 1) {
    olList.removeChild(olList.childNodes[i]);
  }
}

btnClearAll.addEventListener('click', removeAllTasks);

function removeAllFinalized() {
  const taskFinalized = document.getElementsByClassName('completed');
  for (let i = taskFinalized.length - 1; i >= 0; i -= 1) {
    const element = taskFinalized[i];
    olList.removeChild(element);
  }
}

btnRemoveFinalized.addEventListener('click', removeAllFinalized);

function removeSelected() {
  const selected = document.getElementsByClassName('gray');
  const element = selected[0];
  olList.removeChild(element);
}

btnRemoveSelected.addEventListener('click', removeSelected);

function saveTasks() {
  const objTask = {};
  const styles = {};
  for (let i = 0; i < liTask.length; i += 1) {
    objTask[i] = liTask[i].innerText;
  }
  localStorage.setItem('data', JSON.stringify(objTask));

  for (let x = 0; x < liTask.length; x += 1) {
    styles[x] = liTask[x].className;
  }
  localStorage.setItem('style', JSON.stringify(styles));
  console.log(objTask);
}

window.onload = function () {
  const lis = JSON.parse(localStorage.getItem('data'));
  console.log(lis);
  const lisStyles = JSON.parse(localStorage.getItem('style'));
  for (index in lis) {
    const task = document.createElement('li');
    task.innerText = lis[index];
    olList.appendChild(task);
  }
  for (i in lisStyles) {
    liTask[i].className = lisStyles[i];
  }
};

btnSave.addEventListener('click', saveTasks);

// Referencia usada de como movimentar os elementos https:developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore

function searchIndex() {
  const liTask2 = document.getElementsByTagName('li');
  for (let i = 0; i < liTask2.length; i += 1) {
    if (liTask2[i].className.includes('gray')) return i;
  }
}

function moveUp() {
  const indexOfTaskSelected = searchIndex();
  console.log(indexOfTaskSelected);
  if (indexOfTaskSelected === undefined) {
    return null;
  }
  if (indexOfTaskSelected === 0) {
    return null;
  }
  const taskSelected = liTask[indexOfTaskSelected]; //sp1
  const placeToReturnTask = liTask[indexOfTaskSelected - 1]; //sp2

  olList.insertBefore(taskSelected, placeToReturnTask);

  console.log(indexOfTaskSelected);
}

btnUp.addEventListener('click', moveUp);

function moveDown() {
  const indexOfTaskSelected = searchIndex();
  if (indexOfTaskSelected === undefined) {
    return null;
  }
  const placeToReturnTask = liTask[indexOfTaskSelected + 1]; //sp2

  console.log(indexOfTaskSelected, placeToReturnTask);
  const taskSelected = liTask[indexOfTaskSelected]; //sp1
  if (placeToReturnTask === undefined) {
    return null;
  }
  olList.insertBefore(taskSelected, placeToReturnTask.nextElementSibling);
}
btnDown.addEventListener('click', moveDown);
