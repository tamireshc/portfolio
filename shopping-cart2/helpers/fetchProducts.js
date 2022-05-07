const fetchProducts = async (productToFilter) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${productToFilter}`,
    );
    const data = await response.json();
    const product = data;
    return product;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
