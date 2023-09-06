import { SearchActionFailed, SearchActionStart, SearchActionSuccess, mangaReducer } from '../redux/mangaReducer';

describe('mangaReducer', () => {
  it('Should handle SEARCH_MANGAS_START action', () => {
    const initialState = { mangas: {}, error: null };
    const action: SearchActionStart = { type: 'SEARCH_MANGAS_START' };
    const newState = mangaReducer(initialState, action);

    expect(newState).toEqual({ mangas: {}, error: null }); 
  });
  it('Should handle SEARCH_MANGAS_FAILED action', () => {
    const initialState = { mangas: {}, error: null };
    const action: SearchActionFailed = { type: 'SEARCH_MANGAS_FAILED', payload: 'Error message' };
    const newState = mangaReducer(initialState, action);

    expect(newState).toEqual({ mangas: {}, error: 'Error message' });
  });
  it('Should handle SEARCH_MANGAS_SUCCESS action', () => {
    const initialState = { mangas: {}, error: null };
    const action: SearchActionSuccess = {
        type: 'SEARCH_MANGAS_SUCCESS',
        payload: { 1: { 
            mal_id: 1, 
            title: 'Naruto',
            images: {
                webp: {
                    image_url: 'naruto.webp'
                }
            },
            chapters: 700,
            volumes: 70,
            status: 'Finished',
            publishing: false,
            published: {
                prop: {
                    from: {
                        year: 1999
                    },
                    to: {
                        year: 2020
                    }
                }
            },
            synopsis: 'Description of Naruto',
            authors: [{ name: 'Author'}],
            demographics: [{ name: 'Shounen' }]
        }},
    };
    const newState = mangaReducer(initialState, action);

    expect(newState).toEqual({
        mangas: { 1: {
            mal_id: 1, 
            title: 'Naruto',
            images: {
                webp: {
                    image_url: 'naruto.webp'
                }
            },
            chapters: 700,
            volumes: 70,
            status: 'Finished',
            publishing: false,
            published: {
                prop: {
                    from: {
                        year: 1999
                    },
                    to: {
                        year: 2020
                    }
                }
            },
            synopsis: 'Description of Naruto',
            authors: [{ name: 'Author'}],
            demographics: [{ name: 'Shounen' }]
        } },
        error: null,
    });
  });
})