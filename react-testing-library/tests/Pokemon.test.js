import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se é renderizado um card com as informações de determinado pokémon:', () => {
  renderWithRouter(<App />);

  const pokemonName = screen.getByText(/pikachu/i);
  expect(pokemonName).toBeInTheDocument();

  const pokemonType = screen.getByTestId('pokemon-type');
  expect(pokemonType.innerHTML).toContain('Electric');

  const averageWeightPokemon = screen.getByTestId('pokemon-weight');
  expect(averageWeightPokemon.innerHTML).toContain('Average weight: 6.0 kg');

  const pokemonImg = screen.getByAltText('Pikachu sprite');
  expect(pokemonImg).toBeInTheDocument();
  expect(pokemonImg.src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png');
});

test('teste se o card  contém um link de navegação para exibir detalhes ', () => {
  renderWithRouter(<App />);

  const moreButton = screen.getByRole('link', { name: /More details/i });
  expect(moreButton).toBeInTheDocument();
  expect(moreButton.href).toContain('http://localhost/pokemons/25');
});

test('Teste clicar no link de navegação é redirecionamento a página de detalhes', () => {
  renderWithRouter(<App />);

  const moreButton = screen.getByRole('link', { name: /More details/i });
  expect(moreButton).toBeInTheDocument();
  userEvent.click(moreButton);
  const h2Details = screen.getByRole('heading', { name: /Pikachu Details/i });
  expect(h2Details).toBeInTheDocument();
});

test('Teste URL exibida no navegador muda para /pokemon/<id>', () => {
  const { history } = renderWithRouter(<App />);

  const moreButton = screen.getByRole('link', { name: /More details/i });
  expect(moreButton).toBeInTheDocument();
  userEvent.click(moreButton);

  const { pathname } = history.location;
  expect(pathname).toBe('/pokemons/25');
});

test('Teste se existe um ícone de estrela nos pokémons favoritados:', () => {
  renderWithRouter(<App />);

  const moreButton = screen.getByRole('link', { name: /More details/i });
  expect(moreButton).toBeInTheDocument();
  userEvent.click(moreButton);

  const favorite = screen.getByLabelText(/Pokémon favoritado?/i);
  expect(favorite).toBeInTheDocument();

  userEvent.click(favorite);
  expect(favorite).toBeChecked();

  const imgStarFav = screen.getByAltText(/Pikachu is marked as favorite/i);
  expect(imgStarFav).toBeInTheDocument();
  expect(imgStarFav.src).toContain('/star-icon.svg');
});
