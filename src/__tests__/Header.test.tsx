import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const history = createMemoryHistory()
describe('<Header />', () => {
    it('Should show all the elements in the component', () => {
        render(
            <Provider store={store}>
                <Router location={history.location} navigator={history}>
                    <Header />
                </Router>
            </Provider>
        )
        expect(screen.getByText(/mangas collection/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/search for your mangas.../i)).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /search/i})).toBeInTheDocument()
    })
})