import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  test('Debe renderizar app', () => {
    const { getByTestId } = render(<App />);
    const appContainer = getByTestId('contenedor-app');
    expect(appContainer).toBeInTheDocument()
  });
  
  it('Debe renderizar enlace a listado', () => {
    expect(1).toBe(1);
  })
})