import React from 'react';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';
import { DataItem } from '../../../../types';
import CurrencyItem from '../CurrencyItem';

const changeChecked = jest.fn();

afterEach(() => {
  changeChecked.mockClear();
})

describe('CurrencyItem', () => {
  test('renders checkbox and label', () => {
    const item: DataItem = { name: 'asd', checked: false};
    render(<CurrencyItem item={item} index={0} changeChecked={changeChecked} />);
    const checkboxElement = screen.getByRole('checkbox');
    const labelElement = screen.getByLabelText(/asd/i);

    expect(checkboxElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });
  
  test('not checked checkbox should have "grey" class', () => {
    const item: DataItem = { name: 'asd', checked: false};
    render(<CurrencyItem item={item} index={0} changeChecked={changeChecked} />);
    const divElement = screen.getAllByRole('generic').find((div) => div.className.includes("option"));

    expect(divElement?.className.includes("grey")).toBeTruthy();
  });
  
  test('checked checkbox should have "white" class', () => {
    const item: DataItem = { name: 'asd', checked: true};
    render(<CurrencyItem item={item} index={0} changeChecked={changeChecked} />);
    const divElement = screen.getAllByRole('generic').find((div) => div.className.includes("option"));

    expect(divElement?.className.includes("white")).toBeTruthy();
  });

  test('checkbox onClick should call changeChecked', () => {
    const item: DataItem = { name: 'asd', checked: false};
    render(<CurrencyItem item={item} index={0} changeChecked={changeChecked} />);
    const divElements = screen.getAllByRole('generic');
    userEvent.click(divElements[1]);

    expect(changeChecked).toHaveBeenCalledTimes(1);
  });
})
