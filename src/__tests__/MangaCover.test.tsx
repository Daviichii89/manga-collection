import { render, screen } from '@testing-library/react'
import { MangaCover } from '../components/MangaCover'

describe('<MangaCover />', () => {
    it('Should show the image correctly', () => {
        render(
            <MangaCover images="naruto.webp" title="Naruto"/>
        )
        expect(screen.getByAltText(/naruto/i)).toBeInTheDocument()
    })
})