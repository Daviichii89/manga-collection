import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import MangaDetail from '../pages/MangaDetail'

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
}

describe('<MangaDetail />', () => {
  it('Should show the manga title', () => {
    const store = mockStore(initialState)
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/mangas/naruto']}>
                <Routes>
                    <Route element={<MangaDetail />} />
                </Routes>
            </MemoryRouter>
        </Provider>
    )

    expect(screen.getByText(/naruto/i)).toBeInTheDocument()
  })

  it('Should show cover manga', () => {
    const store = mockStore(initialState);
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/mangas/naruto']}>
                <Routes>
                    <Route element={<MangaDetail />} />
                </Routes>
            </MemoryRouter>
        </Provider>
    );

    expect(screen.getByAltText(/naruto/i)).toBeInTheDocument()
  });

});