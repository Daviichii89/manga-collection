import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Error404 from '../pages/Error404';

describe('<Error404 />', () => {
    it('Should render for invalid route', () => {
        render(
            <MemoryRouter>
                <Routes>
                <Route path='*' element={<Error404 />} />
                </Routes>
            </MemoryRouter>
        )
        expect(screen.getByText(/error 404 - page not found/i)).toBeInTheDocument()
    })
})