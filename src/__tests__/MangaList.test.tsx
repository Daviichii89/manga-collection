import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import MangaList from '../components/MangaList'
import configureStore from 'redux-mock-store'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn()
}))

describe('<MangaList />', () => {
    const mockStore = configureStore()
    it('Should show an image if not mangas.', () => {
        const store = mockStore({mangas: {}})
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <MangaList />
                </BrowserRouter> 
            </Provider>
        )
        expect(screen.getByAltText(/manga-shonen/i)).toBeInTheDocument()
    })
    it('Should show a list of images if have mangas.', () => {
        const initialState = {
            mangas: {
                1: { 
                    mal_id: 1,
                    title: 'Naruto', 
                    images: {
                        webp: {
                            image_url: 'naruto.webp'
                }}},
                2: { 
                    mal_id: 2,
                    title: 'One Piece', 
                    images: {
                        webp: {
                            image_url: 'onepiece.webp'
                }}},
            }
        }
        const store = mockStore(initialState);
        (useSelector as jest.Mock).mockReturnValue(initialState.mangas)
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <MangaList />
                </BrowserRouter>
            </Provider>
        )
        expect(screen.getByAltText(/naruto/i)).toBeInTheDocument()
        expect(screen.getByAltText(/one piece/i)).toBeInTheDocument()
    })
})