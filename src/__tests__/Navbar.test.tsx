import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { createMemoryHistory } from 'history'

test('navigates to the correct route when links are clicked', async () => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  render(
    <Router location={history.location} navigator={history}>
        <Navbar />
    </Router>
  );
  await userEvent.click(screen.getByText('Mi colección'));
  expect(history.location.pathname).toBe('/collection')  
  await userEvent.click(screen.getByText('Inicio'));
  expect(history.location.pathname).toBe('/')
});