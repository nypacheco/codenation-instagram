import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ControlledForm } from '../../components/Form';

jest.spyOn(window, 'alert').mockImplementation(() => { });

describe('ControlledForm', () => {
  const value = 'Yuki';

  it('should update input value when onchange is called', () => {
    const { getByLabelText, getByDisplayValue } = render(<ControlledForm />);

    const input = getByLabelText(/nome/i);
    fireEvent.change(input, { target: { value } });

    expect(getByDisplayValue(value)).toBeInTheDocument();
  });

  it('should call alert when submit button is clicked', () => {
    const { getByText, getByLabelText } = render(<ControlledForm />);

    const input = getByLabelText(/nome/i);
    fireEvent.change(input, { target: { value } });
    fireEvent.click(getByText('Submit'));

    expect(window.alert)
      .toHaveBeenCalledWith(`Componentes controlados: { name: ${value} }`);
  });
});
