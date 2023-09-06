import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { store } from '../redux/store';
import AppRoutes from '../routes';

describe('', () => {
  it('Should navigate to "collection" route', async () => {
    const history = createMemoryHistory({ initialEntries: ['/collection'] })
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
            <AppRoutes />
        </Router>
      </Provider>
    );
    
    expect(history.location.pathname).toBe('/collection')  
  });
  it('Should navigate to "home" route', async () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
            <AppRoutes />
        </Router>
      </Provider>
    );
  
    expect(history.location.pathname).toBe('/')
  });
})