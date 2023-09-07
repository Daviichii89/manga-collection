/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { render, screen, waitFor } from '@testing-library/react';
import MangaList from '../components/MangaList';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

global.fetch = jest.fn()

const mockFetch = fetch as jest.MockedFunction<typeof fetch>


describe('<getManga />', () => {
  it('Should make a successful HTTP request and return a manga/s object', async () => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({
        1: { 
          mal_id: 1,
          title: 'Naruto', 
          images: {
              webp: {
                  image_url: 'naruto.webp'
          }}},
        2: { 
          mal_id: 2,
          title: 'One Piece', 
          images: {
              webp: {
                  image_url: 'onepiece.webp'
          }}},
      })
    });

    render(
      <Provider store={store}>
        <MangaList />
      </Provider>
    )
    await waitFor(() => {
      screen.getByAltText('Naruto')
    })
  })
})