/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/
// ESCREVA SEUS TESTES ABAIXO:
//* Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
//* Teste se circle retorna um objeto.
//* Teste se o objeto retornado tem 3 propriedades.
//* Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
//* Teste se dentro do objeto retornado, a função retorna uma key com value igual a circunferência correta para um círculo de raio 2.
//* Teste se dentro do objeto retornado, a função retorna uma key com value igual a área correta para um círculo de raio 3.
// Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se circle retorna undefined, caso o parâmetro passado não seja um número.', () => {
    expect(circle('a')).toBeUndefined();
  });
  it('Verifica se circle retorna circle retorna um objeto', () => {
    expect(typeof circle(3)).toBe('object');
  });
  it('Verifica se o objeto retornado tem 3 propriedades.', () => {
    expect(Object.keys(circle(3)).length).toBe(3);
  });
  it('Verifica a função, quando não recebe nenhum parâmetro, retorna undefined', () => {
    expect(circle()).toBeUndefined();
  });
  it('Verifica se dentro do objeto retornado, a função retorna uma key com value igual a circunferência correta para um círculo de raio 2', () => {
    expect(Object.values(circle(2))).toContain(12.56);
  });
  it('Verifica se dentro do objeto retornado, a função retorna uma key com value igual a área correta para um círculo de raio 3', () => {
    expect(Object.values(circle(3))).toContain(28.259999999999998);
  });
  it('Verifica se que a função retorna, num objeto, os dados corretos de um círculo de raio 3', () => {
    expect(circle(3)).toEqual({
      radius: 3,
      area: 28.259999999999998,
      circumference: 18.84,
    });
  });
});
