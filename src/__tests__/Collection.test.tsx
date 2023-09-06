import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Collection from '../pages/Collection'

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn()
}))

describe('<Collection />', () => {
    const mockStore = configureStore()
    it('Should show empty if not mangas.', () => {
        const store = mockStore({mangas: {}})
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Collection />
                </BrowserRouter> 
            </Provider>
        )
        expect(screen.getByText(/empty./i)).toBeInTheDocument()
    })
    it('Should show a list of images if have mangas in own collection.', () => {
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
                    <Collection />
                </BrowserRouter>
            </Provider>
        )
        expect(screen.getByAltText(/naruto/i)).toBeInTheDocument()
        expect(screen.getByAltText(/one piece/i)).toBeInTheDocument()
    })
})