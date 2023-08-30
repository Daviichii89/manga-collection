import { AppDispatch } from './store'

const initialState = {}

const ADD_MANGA_TO_COLLECTION = 'ADD_MANGA_TO_COLLECTION'
const DELETE_MANGA_FROM_COLLECTION = 'DELETE_MANGA_FROM_COLLECTION'

interface AddMangaToCollectionAction {
    type: typeof ADD_MANGA_TO_COLLECTION
    payload: object
}

interface DeleteMangaFromCollectionAction {
    type: typeof DELETE_MANGA_FROM_COLLECTION
    payload: object
}

type ActionTypes = AddMangaToCollectionAction | DeleteMangaFromCollectionAction

export const collectionReducer = (state = initialState, action: ActionTypes) => {
    switch(action.type) {
        case ADD_MANGA_TO_COLLECTION: {
            return {...state, mangasCollection: action.payload}
        }

        case DELETE_MANGA_FROM_COLLECTION: {
            return {...state, mangasCollection: action.payload}
        }

        default: {
         return state
        }
    }
}

export const AddMangaToCollectionAction = (manga: object) => (dispatch: AppDispatch) => {
    dispatch({
        type: ADD_MANGA_TO_COLLECTION,
        payload: manga
    })
}
export const DeleteMangaFromCollectionAction = (manga: object) => (dispatch: AppDispatch) => {
    dispatch({
        type: DELETE_MANGA_FROM_COLLECTION,
        payload: manga
    })
}