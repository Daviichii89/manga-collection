import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

describe('<Header />', () => {
    it('Should show all the elements in the component', () => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        )
        expect(screen.getByText(/mangas collection/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/search for your mangas.../i)).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /search/i})).toBeInTheDocument()
    })
})