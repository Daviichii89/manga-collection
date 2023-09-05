import { render, screen } from '@testing-library/react'

import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Home from '../pages/Home'

describe('<Home />', () => {
    it('Should render expected elements on the Home Page', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )
        expect(screen.getByAltText(/manga-shonen/i)).toBeInTheDocument()
        
    })
})