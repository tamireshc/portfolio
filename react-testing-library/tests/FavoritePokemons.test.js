import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';

test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
  render(<FavoritePokemons />);
  const p = screen.getByText((c) => c.startsWith('No favorite pokemon found'));
  expect(p).toBeInTheDocument();
});

test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
  renderWithRouter(<App />);
  const buttonEletric = screen.getByRole('button', { name: /Electric/i });
  expect(buttonEletric).toBeInTheDocument();

  userEvent.click(buttonEletric);
  const moreButton = screen.getByRole('link', { name: /More details/i });
  expect(moreButton).toBeInTheDocument();
  userEvent.click(moreButton);

  const favorite = screen.getByLabelText(/Pokémon favoritado?/i);
  expect(favorite).toBeInTheDocument();

  userEvent.click(favorite);
  expect(favorite).toBeChecked();

  const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(linkFavorite).toBeInTheDocument();

  userEvent.click(linkFavorite);

  const pPokemonName = screen.getByText(/pikachu/i);
  expect(pPokemonName).toBeInTheDocument();
});
