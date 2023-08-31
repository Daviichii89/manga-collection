import { render, screen } from '@testing-library/react'
import App from '../App'

describe('<App />', () => {
    it('Should display title app element', () => {
        render(<App />)
        expect(screen.getByText(/manga/i)).toBeInTheDocument()
    })
})