import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Astronomy picture of the day/i);
  expect(linkElement).toBeInTheDocument();
});
