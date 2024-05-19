import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

// Mockear la importación de CSS
jest.mock('../styles/Button.module.css', () => {
  return {
    button: 'button',
    active: 'active',
  };
});

test('renders button component', () => {
  render(<Button label="1" onClick={() => {}} />);
  const buttonElement = screen.getByText(/1/);
  expect(buttonElement).toBeInTheDocument();
});
