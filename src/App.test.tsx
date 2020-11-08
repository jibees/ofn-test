import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header name', () => {
  render(<App />);
  const name = screen.getByText(/open food/i);
  expect(name).toBeInTheDocument();
});
