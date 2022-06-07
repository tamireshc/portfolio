import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se as informações detalhadas do pokémon são mostradas na tela:', () => {
  renderWithRouter(<App />);

  const moreDetaisLink = screen.getByRole('link', { name: /More details/i });
  expect(moreDetaisLink).toBeInTheDocument();

  userEvent.click(moreDetaisLink);

  const h2Pokemon = screen.getByRole('heading', { name: /Pikachu Details/i });
  expect(h2Pokemon).toBeInTheDocument();

  expect(moreDetaisLink).not.toBeInTheDocument();

  const h2Sumary = screen.getByRole('heading', { name: /Summary/i });
  expect(h2Sumary).toBeInTheDocument();

  const pTag = screen.getByText((content) => content.startsWith('This intelligent'));
  expect(pTag).toBeInTheDocument();
});

test('Teste se existe os mapas contendo as localizações do pokémon:', () => {
  renderWithRouter(<App />);

  const moreDetaisLink = screen.getByRole('link', { name: /More details/i });
  expect(moreDetaisLink).toBeInTheDocument();

  userEvent.click(moreDetaisLink);

  const h2Map = screen.getByRole('heading', { name: /Game Locations of Pikachu/i });
  expect(h2Map).toBeInTheDocument();

  const location1Pokemon = screen.getByText(/Kanto Viridian Forest/i);
  const location2Pokemon = screen.getByText(/Kanto Power Plant/i);
  expect(location1Pokemon).toBeInTheDocument();
  expect(location2Pokemon).toBeInTheDocument();

  const locationMaps = screen.getAllByAltText(/Pikachu location/i);
  expect(locationMaps).toHaveLength(2);

  expect(locationMaps[0].src).toContain('https://pwo-wiki.info/images/4/47/Viridian_Forest.gif');
  expect(locationMaps[1].src).toContain('https://pwo-wiki.info/images/5/5b/Pp.gif');
});

test('Teste se o usuário pode favoritar pokémon na página de detalhes:', () => {
  renderWithRouter(<App />);

  const moreDetaisLink = screen.getByRole('link', { name: /More details/i });
  expect(moreDetaisLink).toBeInTheDocument();

  userEvent.click(moreDetaisLink);

  const checkboxToFav = screen.getByRole('checkbox');
  expect(checkboxToFav).toBeInTheDocument();
  const labelFav = screen.getByLabelText(/Pokémon favoritado?/i);
  expect(labelFav).toBeInTheDocument();
  userEvent.click(checkboxToFav);

  const pokemonsFavLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
  userEvent.click(pokemonsFavLink);

  const pikachuName = screen.getByText(/pikachu/i);
  expect(pikachuName).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /home/i });

  userEvent.click(homeLink);
  expect(homeLink).toBeInTheDocument();
  userEvent.click(moreDetaisLink);
  userEvent.click(pokemonsFavLink);
  userEvent.click(pokemonsFavLink);
  expect(pikachuName).not.toBeInTheDocument();
});
