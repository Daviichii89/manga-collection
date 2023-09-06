import { render, screen } from '@testing-library/react';
import MainContent from '../components/MainContent';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<MainContent />', () => {
  it('Should show all the elements in the component', async () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <MainContent />
        </Router>
      </Provider>
    );
    expect(screen.getByText(/my collection/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
})