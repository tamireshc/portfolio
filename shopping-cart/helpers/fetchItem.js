const fetchItem = async (itemID) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${itemID}`,
    );
    const data = await response.json();
    const item = data;
    return item;
  } catch (error) {
    return new Error('You must provide an url');
  }
};
// seu código aqui

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
