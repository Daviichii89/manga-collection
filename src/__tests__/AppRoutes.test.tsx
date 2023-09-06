import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { store } from '../redux/store';
import AppRoutes from '../routes';

describe('', () => {
  it('Should navigate to "X" route', async () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
            <AppRoutes />
        </Router>
      </Provider>
    );
    await userEvent.click(screen.getByText(/my collection/i));
    expect(history.location.pathname).toBe('/collection')  
    await userEvent.click(screen.getByText(/home/i));
    expect(history.location.pathname).toBe('/')
  });
})