import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { UncontrolledForm } from '../../components/Form';

jest.spyOn(window, 'alert').mockImplementation(() => { });

describe('UncontrolledForm', () => {
  const value = 'Yuki';

  it('should update input value when onchange is called', () => {
    const { getByLabelText, getByDisplayValue } = render(<UncontrolledForm />);

    const input = getByLabelText(/nome/i);
    fireEvent.change(input, { target: { value } });

    expect(getByDisplayValue(value)).toBeInTheDocument();
  });

  it('should call alert when submit button is clicked', () => {
    const { getByText, getByLabelText } = render(<UncontrolledForm />);

    const input = getByLabelText(/nome/i);
    fireEvent.change(input, { target: { value } });
    fireEvent.click(getByText('Submit'));

    expect(window.alert)
      .toHaveBeenCalledWith(`Componentes não controlados: { name: ${value} }`);
  });
});
