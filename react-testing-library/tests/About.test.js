import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('Teste se a página contém as informações sobre a Pokédex;', () => {
  render(<About />);

  // const h1 = screen.getByRole('heading', { name: /Pokédex/i, level: 1 });
  // expect(h1).toBeInTheDocument();
});

test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
  render(<About />);

  const h2 = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
  expect(h2).toBeInTheDocument();
});

test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
  render(<About />);
  // Referência https://testing-library.com/docs/queries/about - TextMatch Examples
  const p1Tag = screen.getByText((content) => content.startsWith('This application'));
  expect(p1Tag).toBeInTheDocument();
  const p2Tag = screen.getByText((content) => content.startsWith('One can filter'));
  expect(p2Tag).toBeInTheDocument();
});

test('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
  render(<About />);
  // Referência de como testar o src
  // https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src
  const img = screen.getByRole('img');
  expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
