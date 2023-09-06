import { render, screen } from '@testing-library/react'
import CollectionButton from '../components/CollectionButton'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const sampleManga = {manga:{
  mal_id: 1,
  title: 'Sample Manga',
  images: {
    webp: {
      image_url: 'hola',
    },
  },
  chapters: 23,
  volumes: 2,
  status: 'asda',
  publishing: false,
  published: {
    prop: {
      from: {
        year: 1999,
      },
      to: {
        year: 1999,
      }
    },
  },
  synopsis: 'hola que tal',
  authors: [{name: 'string'}],
  demographics: [{ name: 'Shounen' }],
}};
const mockStore = configureStore([]);
const store = mockStore({ manga: sampleManga });
describe('<CollectionButton />', () => {
  it('Should show "Add to my collection" if the manga is in the collection', () => {

    render(
      <Provider store={store}>
        <CollectionButton manga={sampleManga} />
      </Provider>
    );

    const button = screen.getByText('Add to my collection');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-green-500');
  });
  it('Should show "Remove from my collection" if the manga is not in the collection', () => {
    const sampleManga = {};

    render(
      <Provider store={store}>
        <CollectionButton manga={sampleManga} />
      </Provider>
    );

    const button = screen.getByText('Remove from my collection');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-red-500');
  });
});
