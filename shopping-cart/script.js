const olCartItens = document.querySelector('.cart__items');
const sectionItensCart = document.querySelector('.cart__items');
const liItensCard = document.getElementsByClassName('cart__item');
const spanTotal = document.querySelector('.total-price');
const divCart = document.getElementsByClassName('div-cart');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );

  return section;
}

const calculetedTotalValueCart = () => {
  const arrayLi = [...liItensCard];
  const arrayInnerHTML = arrayLi.map((item) => item.innerHTML);
  const values = arrayInnerHTML.map((item) => item.split('$')); // os valores retornaram como 2 item de uma array de arrays
  const valuesIsolated = values.map((item) => item[1]);
  const valuesIsolatedToNumber = valuesIsolated.map((item) => +item);
  if (valuesIsolatedToNumber.length > 0) {
    const total = valuesIsolatedToNumber.reduce((a, b) => a + b);
    spanTotal.innerText = total.toFixed(2);
    return total;
  } else {
    spanTotal.innerText = '';
  }
};

function cartItemClickListener(event) {
  console.log(event.target);
  const itemClicked = event.target;
  itemClicked.parentElement.remove();
  calculetedTotalValueCart();
}

function createCartItemElement({ name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = ` 
    ${name} 
   Preço:R$ ${salePrice}  `;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function createImageCart(image) {
  const img = document.createElement('img');
  img.src = image;
  return img;
}

const emptyAllItensCart = () => {
  for (let i = divCart.length - 1; i >= 0; i -= 1) {
    const currentChildren = divCart[i];
    currentChildren.remove();
  }
  localStorage.setItem('cartItems', '');
  spanTotal.innerText = '';
};

const btnToClearCart = document.querySelector('.empty-cart');
btnToClearCart.addEventListener('click', emptyAllItensCart);

const getOlCartValues = () => sectionItensCart.innerHTML;

const sectionForLoading = document.getElementById('container-loading');
const pLoading = document.createElement('p');

// Referencia utilizada para evento de carregameto página
// https: developer.mozilla.org/pt-BR/docs/Web/API/Window/DOMContentLoaded_event

document.addEventListener('DOMContentLoaded', function () {
  pLoading.innerText = 'Loading...';
  pLoading.className = 'loading';
  sectionForLoading.appendChild(pLoading);
});

const getItem = async (itemId) => {
  const result = await fetchItem(itemId);
  const itemResult = {
    imagem: result.thumbnail,
    name: result.title,
    salePrice: result.price,
  };
  const itemToAdd = createCartItemElement(itemResult);
  const div = document.createElement('div');
  const span = document.createElement('span');
  span.className = 'cart__itemX';
  span.innerText = 'X';

  olCartItens.appendChild(div);
  div.className = 'div-cart';
  div.appendChild(createImageCart(result.thumbnail));
  div.appendChild(itemToAdd);
  div.appendChild(span);

  saveCartItems(getOlCartValues());
  calculetedTotalValueCart();
};

const sectionbuttonContainer = document.querySelector('.items');

// Referencia de como add evento em um elemento dinamico
// https://usefulangle.com/post/138/pure-javascript-event-handler-dynamic-element

sectionbuttonContainer.addEventListener('click', function (event) {
  if (event.target.className === 'item__add') {
    // Recuperando o id clicado:  console.log(event.target.previousSibling.previousSibling.previousSibling.innerText);
    const id =
      event.target.previousSibling.previousSibling.previousSibling.innerText;
    getItem(id);
  }
});

const getProduct = async () => {
  const products = await fetchProducts('computador');
  const arrayProducts = products.results.map((item) => ({
    sku: item.id,
    name: item.title,
    image: item.thumbnail,
  }));
  // console.log(arrayProducts);
  const sectionItens = document.querySelector('.items');
  arrayProducts.forEach((item) =>
    sectionItens.appendChild(createProductItemElement(item)),
  );
  // Removendo o loading após o carregamento dos itens na página
  pLoading.remove();
};

getProduct();

// Referencia de como add evento em um elemento dinamico
// https://usefulangle.com/post/138/pure-javascript-event-handler-dynamic-element

const recoveredCartIntesfronLocalStorage = () => {
  const cart = getSavedCartItems();
  console.log(cart);
  olCartItens.innerHTML = cart;
  // adicionando o evento para remover os itens clicados nos valores recuperados pelo local stotage
  olCartItens.addEventListener('click', function (event) {
    if (event.target.className === 'cart__itemX') {
      event.target.parentElement.remove();
      saveCartItems(getOlCartValues());
      calculetedTotalValueCart(); // voltar
    }
  });
  console.log(calculetedTotalValueCart());
};

window.onload = () => {
  recoveredCartIntesfronLocalStorage();
};
