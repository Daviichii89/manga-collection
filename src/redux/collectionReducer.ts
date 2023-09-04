import { AnyAction, Dispatch } from 'redux'
import { Manga } from '../api/getManga'

interface InitialState {
    mangas: Record<number, Manga> | undefined
}
interface AddMangaToCollectionAction {
    type: typeof ADD_MANGA_TO_COLLECTION
    payload: Manga
}

interface DeleteMangaFromCollectionAction {
    type: typeof DELETE_MANGA_FROM_COLLECTION
    payload: Manga
}

type ActionTypes = AddMangaToCollectionAction | DeleteMangaFromCollectionAction

const initialState: InitialState = {mangas: {}}
const ADD_MANGA_TO_COLLECTION = 'ADD_MANGA_TO_COLLECTION'
const DELETE_MANGA_FROM_COLLECTION = 'DELETE_MANGA_FROM_COLLECTION'

export const collectionReducer = (state = initialState, action: ActionTypes) => {
    switch(action.type) {
        case ADD_MANGA_TO_COLLECTION: {
            const updatedMangasOnAdd = { ...state.mangas, [action.payload.mal_id]: action.payload}
            return {...state, mangas: updatedMangasOnAdd}
        }

        case DELETE_MANGA_FROM_COLLECTION: {
            const updatedMangasOnDelete = { ...state.mangas}
            delete updatedMangasOnDelete[action.payload.mal_id]
            return {...state, mangas: updatedMangasOnDelete}
        }

        default: {
         return state
        }
    }
}

export const AddMangaToCollectionAction = (manga: Manga) => (dispatch: Dispatch<AnyAction>) => {
    dispatch({
        type: ADD_MANGA_TO_COLLECTION,
        payload: manga
    })
}
export const DeleteMangaFromCollectionAction = (manga: Manga) => (dispatch: Dispatch<AnyAction>) => {
    dispatch({
        type: DELETE_MANGA_FROM_COLLECTION,
        payload: manga
    })
}