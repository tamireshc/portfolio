import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);

  const linkHome = screen.getByRole('link', { name: /home/i });
  expect(linkHome).toBeInTheDocument();

  const linkAbout = screen.getByRole('link', { name: /about/i });
  expect(linkAbout).toBeInTheDocument();

  const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(linkFavorite).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a  / ao clicar em home', () => {
  const { history } = renderWithRouter(<App />);

  const linkHome = screen.getByRole('link', { name: /home/i });
  userEvent.click(linkHome);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

test('Teste se a aplicação é redirecionada para  /about ao clicar em About', () => {
  const { history } = renderWithRouter(<App />);

  const linkAbout = screen.getByRole('link', { name: /about/i });
  userEvent.click(linkAbout);
  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

test('Teste se aplicação é redirecionada para /favorite clicar Favorite Pokémons', () => {
  const { history } = renderWithRouter(<App />);

  const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
  userEvent.click(linkFavorite);
  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});

test('Teste se a aplicação é redirecionada para  Not Found com URL desconhecida', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/teste');
  const h2 = screen.getByRole('heading', { name: /Page requested not found/i, level: 2 });
  expect(h2).toBeInTheDocument();
});
