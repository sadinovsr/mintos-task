import React from 'react';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';
import SelectedCurrencyItem from '../SelectedCurrencyItem';

const changeCheckedByName = jest.fn();

afterEach(() => {
  changeCheckedByName.mockClear();
})

describe('SelectedCurrencyItem', () => {
  test('renders rounded-button and top-text span elements', () => {
    const item = { name: 'asd', checked: false};
    render(<SelectedCurrencyItem item={item} changeCheckedByName={changeCheckedByName} />);
    const genericElements = screen.getAllByRole('generic');
    const roundedButton = genericElements.find((element) => element.className.includes("rounded-button"));
    const topText = genericElements.find((element) => element.className.includes("top-text"));

    expect(roundedButton).toBeInTheDocument();
    expect(topText).toBeInTheDocument();
  });

  test('rounded-button onClick should call changeCheckedByName', () => {
    const item = { name: 'asd', checked: false};
    render(<SelectedCurrencyItem item={item} changeCheckedByName={changeCheckedByName} />);
    const roundedButton = screen.getAllByRole('generic').filter((element) => element.className.includes("rounded-button"));
    userEvent.click(roundedButton[0]);

    expect(changeCheckedByName).toHaveBeenCalledTimes(1);
  });
})
