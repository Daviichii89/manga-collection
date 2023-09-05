/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import * as reactRedux from 'react-redux';
import { store } from '../redux/store'

import SearchComponent from '../components/SearchComponent'

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}));

describe('<SearchComponent />', () => {
    const useDispatchMock = reactRedux.useDispatch
    const useSelectorMock = reactRedux.useSelector
    beforeEach(() => {
        useDispatchMock.mockImplementation(() => () => {})
        useSelectorMock.mockImplementation(selector => selector(mockStore))
    })
    afterEach(() => {
        useDispatchMock.mockClear()
        useSelectorMock.mockClear()
    })
    it('Should display input element', async () => {
        render(<Provider store={store}>
                <SearchComponent />
            </Provider>)
        expect(screen.getByPlaceholderText(/search for your mangas.../i)).toBeInTheDocument()
        await userEvent.click(screen.getByRole('button', {name: /search/i}))
    })
    it('Should updates keyword state on input change or the button is clicked', async () => {
        render(<Provider store={store}>
            <SearchComponent />
        </Provider>)
        const handleSubmit = jest.fn()
        const input = screen.getByPlaceholderText(/search for your mangas.../i)
        await userEvent.type(input, 'Naruto' )
        expect(input).toHaveValue('Naruto')
        const button = screen.getByText(/search/i)
        await userEvent.click(button)
        expect(handleSubmit).toHaveBeenCalled()
        expect(input).toHaveValue('')
    })
})