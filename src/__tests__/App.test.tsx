import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

describe('<App />', () => {
    it('Should navigates to Home Page', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>
        )
        expect(screen.getByText(/manga/i)).toBeInTheDocument()
    })
    it('Should navigates to Collection Page', async () => {
        render(
            <MemoryRouter initialEntries={['/collection']}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>
        )

        await userEvent.click(screen.getByText(/my collection/i))
        expect(screen.getByText(/empty./i)).toBeInTheDocument()
    })
})