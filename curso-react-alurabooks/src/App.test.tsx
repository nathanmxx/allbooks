import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  sessionStorage.clear();
});

test('mostra a pagina inicial com as secoes de livros', () => {
  render(<App />);
  expect(screen.getByAltText('Logo da AluraBooks')).toBeInTheDocument();
  expect(screen.getByText('ÚLTIMOS LANÇAMENTOS')).toBeInTheDocument();
  expect(screen.getByText('MAIS VENDIDOS')).toBeInTheDocument();
});

test('sem token salvo, a barra mostra Login e Cadastrar-se', () => {
  render(<App />);
  expect(screen.getByText('Login')).toBeInTheDocument();
  expect(screen.getByText('Cadastrar-se')).toBeInTheDocument();
});

test('com token salvo, a barra deixa de oferecer o login', () => {
  sessionStorage.setItem('token', 'qualquer');
  render(<App />);
  expect(screen.queryByText('Login')).not.toBeInTheDocument();
});
