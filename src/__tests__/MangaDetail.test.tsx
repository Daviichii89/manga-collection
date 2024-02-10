import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import MangaDetail from '../pages/MangaDetail'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}))

const mockStore = configureStore()

const initialState = {
  mangas: {
    mangas: {
      1: {
        mal_id: 1,
        title: 'Naruto',
        images: {
          webp: {
            image_url: 'naruto.webp',
          },
        },
        publishing: true,
        published: {
          prop: {
            from: {
              year: 2000,
            },
            to: {
              year: 2020,
            },
          },
        },
        synopsis: 'Descripción de Naruto',
        authors: [{ name: 'Autor 1' }],
        demographics: [{ name: 'Shonen' }],
        volumes: 10,
        chapters: 100,
      },
    },
  },
  mangasCollection: {
    mangas: {},
  },
}

describe('<MangaDetail />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
  })
  it('Should show the manga title', () => {
    const mockUseLocation = {
        state: {
          title: 'Naruto',
          mal_id: 1,
        },
    }
    require('react-router-dom').useLocation.mockReturnValue(mockUseLocation)
    const store = mockStore(initialState)
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/mangas/Naruto']}>
              <MangaDetail />
            </MemoryRouter>
        </Provider>
    )

    expect(screen.getAllByText(/naruto/i)).toHaveLength(2);
    expect(screen.getByAltText(/naruto/i)).toBeInTheDocument();
  })

});