import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchComponent from '../components/SearchComponent';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory()
describe('SearchComponent', () => {
  it('Should all the elements in the component', () => {
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <SearchComponent />
        </Router>
      </Provider>
    );

    expect(
      screen.getByPlaceholderText('Search for your mangas...')
    ).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('Should on click button clear the input value', () => {
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <SearchComponent />
        </Router>
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(
      'Search for your mangas...'
    ) as HTMLInputElement;
    userEvent.type(inputElement, 'One Piece');
    userEvent.click(screen.getByText('Search'));

    expect(inputElement.value).not.toBe('One Piece');
  });

  it('Prueba de submit', () => {
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <SearchComponent />
        </Router>
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(
      'Search for your mangas...'
    ) as HTMLInputElement;
    userEvent.type(inputElement, 'One Piece');
    userEvent.click(screen.getByText('Search'));

    expect(inputElement.value).toBe('');
  }
  );
});
