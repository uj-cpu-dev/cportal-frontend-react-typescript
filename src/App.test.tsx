import React from 'react';
import { render, screen } from './util/testHelper/test-helper';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/customers/i);
  expect(linkElement).toBeInTheDocument();
});
