import { render, screen } from '@testing-library/react'
import MangaInfo from '../components/MangaInfo'

describe('<MangaInfo />', () => {
    it('Should show the image correctly', () => {
        render(
            <MangaInfo publishing={false} fromYear={1989} toYear={2023} synopsis='Hola que tal?' />
        )
        expect(screen.getByText(/in publication/i)).toBeInTheDocument()
        expect(screen.getByText(/published/i)).toBeInTheDocument()
        expect(screen.getByText(/to 2023/i)).toBeInTheDocument()
    })
})