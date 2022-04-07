const productDetails = require('../src/productDetails');
const { getType } = require('jest-get-type');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/
//* Teste se productDetails é uma função.
//* Teste se o retorno da função é um array.
//* Teste se o array retornado pela função contém dois itens dentro.
//* Teste se os dois itens dentro do array retornado pela função são objetos.
//* Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
// Teste se os dois productIds terminam com 123.
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  // li toda a documentaçao e só encontrei neste link um método para determinar se é array https://github.com/facebook/jest/issues/3457
  // expect(Array.isArray(['value'])).toBe(true);
  it('Verifica se o retorno da função é um array', () => {
    expect(Array.isArray(productDetails())).toBe(true);
  });
  it('Verifica se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails().length).toBe(2);
  });
  it('Verifica se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
  });
  it('Verifica se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
  });
  it('Verifica se se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    let arrayTeste = Object.values(productDetails('Alcool gel', 'Máscara'));
    expect(arrayTeste[0] !== arrayTeste[1]).toBe(true);
  });
  //Referencia de como usar regex no jest
  //https:jestjs.io/pt-BR/docs/expect#tocontainitem
  ///.*123$/ significa termina com 123 e precedido de qualquer caracterer
  it('Verifica se os dois productIds terminam com 123', () => {
    expect(productDetails('álcool', 'test')[0].details.productId).toMatch(
      /.*123$/
    );
    expect(productDetails('álcool', 'test')[1].details.productId).toMatch(
      /.*123$/
    );
  });
});
