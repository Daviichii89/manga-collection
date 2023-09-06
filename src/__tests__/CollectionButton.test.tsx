import { render, screen } from '@testing-library/react'
import CollectionButton from '../components/CollectionButton'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { Manga } from '../api/getManga';


const manga: Manga = { 
  mal_id: 1, 
  title: 'Naruto',
  images: {
      webp: {
          image_url: 'naruto.webp'
      }
  },
  chapters: 700,
  volumes: 70,
  status: 'Finished',
  publishing: false,
  published: {
      prop: {
          from: {
              year: 1999
          },
          to: {
              year: 2020
          }
      }
  },
  synopsis: 'Description of Naruto',
  authors: [{ name: 'Author'}],
  demographics: [{ name: 'Shounen' }]  
};
const mockStore = configureStore([]);
describe('<CollectionButton />', () => {
  it('Should show "Add to my collection" if the manga is in the collection', () => {
    const initialState = { mangasCollection: { mangas: {} } };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <CollectionButton manga={manga} />
      </Provider>
    );

    const addButton = getByText('Add to my collection');
    expect(addButton).toBeInTheDocument();
  });
  it('Should show "Remove from my collection" if the manga is not in the collection', () => {
    const initialState = { mangasCollection: { mangas: { manga } } };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <CollectionButton manga={manga} />
      </Provider>
    );

    const button = screen.getByText('Remove from my collection');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-red-500');
  });
});
