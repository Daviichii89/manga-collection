import { render, screen } from '@testing-library/react'
import SearchComponent from '../components/SearchComponent'

describe('<SearchComponent />', () => {
    it('Should display input element', () => {
        render(<SearchComponent />)
        expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument()
    })
})