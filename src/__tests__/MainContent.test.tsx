import { render, screen } from '@testing-library/react';
import MainContent from '../components/MainContent';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('<MainContent />', () => {
  it('Should show all the elements in the component', async () => {
    
    render(
      <Provider store={store}>
        <MainContent />
      </Provider>
    );
    expect(screen.getByText(/my collection/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
})