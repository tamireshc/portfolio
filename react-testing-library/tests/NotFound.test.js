import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

test('Teste se  página contém um heading h2 com o texto Page requested not found', () => {
  render(<NotFound />);

  const h2 = screen.getByRole('heading', { name: /Page requested not found/i, level: 2 });
  expect(h2).toBeInTheDocument();
});

test('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
  render(<NotFound />);

  const img = screen.getByAltText(/Pikachu crying because the page requested /i);
  expect(img).toBeInTheDocument();
  expect(img.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
