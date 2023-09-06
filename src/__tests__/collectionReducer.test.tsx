import { collectionReducer, AddMangaToCollectionActionType, DeleteMangaFromCollectionActionType } from '../redux/collectionReducer';

describe('collectionReducer', () => {
    it('Should handle ADD_MANGA_TO_COLLECTION action', () => {
        const initialState = { mangas: {} };
        const action: AddMangaToCollectionActionType = {
            type: 'ADD_MANGA_TO_COLLECTION',
            payload: { 
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
            },
        };
        const newState = collectionReducer(initialState, action);
    
        expect(newState).toEqual({
            mangas: {
                1: {
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
                }
            }
      });    
    })
    it('Should handle DELETE_MANGA_FROM_COLLECTION action', () => {
        const initialState = { mangas: {} };
        const action: DeleteMangaFromCollectionActionType = {
            type: 'DELETE_MANGA_FROM_COLLECTION',
            payload: { 
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
            },
        };
        const newState = collectionReducer(initialState, action);
    
        expect(newState).toEqual({mangas: {}});
    });
})