import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const qtdButtonType = 7;

test('Teste se a página contém um heading h2 com o texto Encountered pokémon', () => {
  renderWithRouter(<App />);

  const h2 = screen.getByRole('heading', { name: /Encountered pokémons/i });
  expect(h2).toBeInTheDocument();
});

test('Teste se é exibido o próximo pokémon botão Próximo pokémon é clicado:', () => {
  renderWithRouter(<App />);

  const nextButton = screen.getByRole('button', { name: /Próximo pokémon/i });
  expect(nextButton).toBeInTheDocument();

  userEvent.click(nextButton);
  const pNextPokemon = screen.getByText('Charmander');
  expect(pNextPokemon).toBeInTheDocument();
});

test('Teste se é mostrado apenas um pokémon por vez;', () => {
  renderWithRouter(<App />);

  const pPokemonName = screen.getAllByTestId('pokemon-name');

  expect(pPokemonName).toHaveLength(1);
});

test('Teste se a Pokédex tem os botões de filtro:', () => {
  renderWithRouter(<App />);

  const electricButton = screen.getByRole('button', { name: /Electric/i });
  expect(electricButton).toBeInTheDocument();

  const fireButton = screen.getByRole('button', { name: /fire/i });
  expect(fireButton).toBeInTheDocument();

  const bugButton = screen.getByRole('button', { name: /bug/i });
  expect(bugButton).toBeInTheDocument();

  const poisonButton = screen.getByRole('button', { name: /poison/i });
  expect(poisonButton).toBeInTheDocument();

  const psychicButton = screen.getByRole('button', { name: /Psychic/i });
  expect(psychicButton).toBeInTheDocument();

  const normalButton = screen.getByRole('button', { name: /normal/i });
  expect(normalButton).toBeInTheDocument();

  const dragonButton = screen.getByRole('button', { name: /dragon/i });
  expect(dragonButton).toBeInTheDocument();

  userEvent.click(fireButton);
  const pokemonName = screen.getByText(/Charmander/i);
  expect(pokemonName).toBeInTheDocument();

  const nextButton = screen.getByRole('button', { name: /Próximo pokémon/i });
  userEvent.click(nextButton);
  const pokemonName2 = screen.getByText(/Rapidash/i);
  expect(pokemonName2).toBeInTheDocument();

  userEvent.click(nextButton);
  expect(pokemonName).toBeInTheDocument();

  const allButton = screen.getByRole('button', { name: /all/i });
  expect(allButton).toBeInTheDocument();
});

test('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
  renderWithRouter(<App />);

  const allButton = screen.getByRole('button', { name: /all/i });
  expect(allButton).toBeInTheDocument();

  const pokemonTypeButtons = screen.getAllByTestId('pokemon-type-button');
  expect(pokemonTypeButtons).toHaveLength(qtdButtonType);

  userEvent.click(allButton);
  const pokemonName = screen.getByText(/pikachu/i);
  expect(pokemonName).toBeInTheDocument();

  const nextButton = screen.getByRole('button', { name: /Próximo pokémon/i });
  userEvent.click(nextButton);
  const pNextPokemon = screen.getByText('Charmander');
  expect(pNextPokemon).toBeInTheDocument();
});
