const getSavedCartItems = () => {
  const recoveredCart = localStorage.getItem('cartItems');
  return recoveredCart;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
