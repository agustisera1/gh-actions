import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  const legajosTexto = 'Legajo: 42988 - Tisera, AgustínLegajo: 44009 - Kler, NicolásLegajo: 45711 - Leones, Marcos';

  it('Debe renderizar app', () => {
    const { getByTestId } = render(<App />);
    const appContainer = getByTestId('contenedor-app');
    expect(appContainer).toBeInTheDocument()
  });
  
  it('Renderiza listado de alumnos', () => {
    const { getByTestId } = render(<App />);
    const listadoAlumnos = getByTestId('legajo-alumnos');
    expect(listadoAlumnos).toHaveTextContent(legajosTexto);
  })

  it('Falla por la fuerza', () => {
    expect(1).toBe(0);
  })
})