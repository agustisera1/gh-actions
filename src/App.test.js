import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renderiza app', () => {
  const { getByTestId } = render(<App />);
  const appContainer = getByTestId('contenedor-app');
  expect(appContainer).toBeInTheDocument()
});
