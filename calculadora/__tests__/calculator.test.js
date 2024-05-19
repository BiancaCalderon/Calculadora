import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '../pages/index';

describe('Calculator operations', () => {
  test('Addition', () => {
    const { getByText, getByTestId } = render(<Home />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('3');
  });

  test('Subtraction', () => {
    const { getByText, getByTestId } = render(<Home />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('3');
  });

  test('Multiplication', () => {
    const { getByText, getByTestId } = render(<Home />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('6');
  });

  test('Division', () => {
    const { getByText, getByTestId } = render(<Home />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('3');
  });
});
