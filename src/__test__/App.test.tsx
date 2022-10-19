import React from 'react';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders App div', () => {
    render(<App />);
    const genericElements = screen.getAllByRole('generic');
    const appDiv = genericElements.find((element) => element.className === 'App');
    expect(appDiv).toBeInTheDocument();
  });

  test('changeChecked and changeCheckedByName should change state', () => {
    render(<App />);
    const divElements = screen.getAllByRole('generic');
    const options = divElements.filter((element) => element.className.includes("option "));
    const topOptions = divElements.filter((element) => element.className.includes("option-top "));

    // Class "grey" should be default for non-selected option
    expect(options[0].className.includes("grey")).toBeTruthy();
    expect(topOptions.length).toBe(0);

    // Click regular option to select it
    userEvent.click(options[0]);
    
    const divElementsAfter = screen.getAllByRole('generic');
    const optionsAfter = divElementsAfter.filter((element) => element.className.includes("option "));
    const topOptionsAfter = divElementsAfter.filter((element) => element.className.includes("option-top "));
    const roundedButton = divElementsAfter.filter((element) => element.className.includes("rounded-button"));

    // Class "white" should be added to selected option
    expect(optionsAfter[0].className.includes("white")).toBeTruthy();
    expect(topOptionsAfter.length).toBe(1);

    // Click top option to deselect it
    userEvent.click(roundedButton[0]);

    const divElementsLast = screen.getAllByRole('generic');
    const topOptionsLast = divElementsLast.filter((element) => element.className.includes("option-top "));

    // No options should be selected
    expect(topOptionsLast.length).toBe(0);
  });
})
