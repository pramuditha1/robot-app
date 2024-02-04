import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn robot grid application', () => {
  render(<App />);
  const linkElement = screen.getByText(/Robot Grid/i);
  expect(linkElement).toBeInTheDocument();
});
