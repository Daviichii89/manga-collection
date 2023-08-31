import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchComponent from '../components/SearchComponent'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

describe('<SearchComponent />', () => {
    it('Should display input element', () => {
        const user = userEvent
        render(<Provider store={store}>
                <SearchComponent />
            </Provider>)
        expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument()

        user.click(screen.getByRole('button', {name: /buscar/i}))
    })
})