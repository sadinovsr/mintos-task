import React from 'react';
import { render, screen } from '@testing-library/react';
import CurrencySelector from '../CurrencySelector';
import { DataItem } from '../../../types';

const changeChecked = jest.fn();
const changeCheckedByName = jest.fn();

afterEach(() => {
  changeChecked.mockClear();
  changeCheckedByName.mockClear();
})

describe('CurrencySelector', () => {
  test('renders top and bottom containers', () => {
    const data: DataItem[] = [];
    render(<CurrencySelector data={data} changeChecked={changeChecked} changeCheckedByName={changeCheckedByName} />);
    const genericElements = screen.getAllByRole('generic');
    const topContainer = genericElements.find((element) => element.className.includes("top-container"));
    const bottomContainer = genericElements.find((element) => element.className.includes("bottom-container"));

    expect(topContainer).toBeInTheDocument();
    expect(bottomContainer).toBeInTheDocument();
  });
  
  test('renders 2 regular unchecked options', () => {
    const data: DataItem[] = [
      { name: '1', checked: false },
      { name: '2', checked: false },
    ];
    render(<CurrencySelector data={data} changeChecked={changeChecked} changeCheckedByName={changeCheckedByName} />);
    const genericElements = screen.getAllByRole('generic');
    const currencyItems = genericElements.filter((element) => element.className.includes("option "));
    const selectedCurrencyItems = genericElements.filter((element) => element.className.includes("option-top "));

    expect(currencyItems.length).toBe(2);
    expect(selectedCurrencyItems.length).toBe(0);
  });
  
  test('renders 2 regular options and 1 selected top option', () => {
    const data: DataItem[] = [
      { name: '1', checked: false },
      { name: '2', checked: true },
    ];
    render(<CurrencySelector data={data} changeChecked={changeChecked} changeCheckedByName={changeCheckedByName} />);
    const genericElements = screen.getAllByRole('generic');
    const currencyItems = genericElements.filter((element) => element.className.includes("option "));
    const selectedCurrencyItems = genericElements.filter((element) => element.className.includes("option-top "));

    expect(currencyItems.length).toBe(2);
    expect(selectedCurrencyItems.length).toBe(1);
  });
})
