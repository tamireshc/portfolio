const saveCartItems = (valuesOL) => {
  localStorage.setItem('cartItems', valuesOL);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

// Teste se, ao executar saveCartItems com o argumento
//  <ol><li>Item</li></ol>, o método localStorage.setItem é chamado

// localStorage.setItem('myData', JSON.stringify(myObj));
