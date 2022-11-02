import React from 'react';
import { render } from '@testing-library/react';
import { Listado } from './Listado';


describe('Componente listado', () => {
  it('renderiza listado', () => {
    const { getByTestId } = render(<Listado />);
    const listadoContainer = getByTestId('componente-listado');
    expect(listadoContainer).toBeInTheDocument()
  })
})