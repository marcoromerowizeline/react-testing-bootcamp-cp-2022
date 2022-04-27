import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hell's Capstone Project/i);
  // screen.debug(linkElement);
  expect(linkElement).toBeInTheDocument();
});
