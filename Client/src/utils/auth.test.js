import { render, screen } from '@testing-library/react';
import 'babel-polyfill';
import Auth from './auth';
import Dashboard from '../pages/Dashboard';

// Mock the getToken function of Auth
Auth.getToken = jest.fn().mockReturnValue('your-mock-token');

test('renders your component', () => {
  render(<Dashboard />);

  // Assert that the component renders correctly
  const componentElement = screen.getByTestId('Dashboard');
  expect(componentElement).toBeInTheDocument();

  // You can write more assertions based on your component's behavior
});