import { AnyAction, Dispatch } from 'redux';
import { getManga, Manga } from '../api/getManga';

interface InitialState {
    mangas: Record<number, Manga> | undefined
}
export interface SearchActionStart {
    type: typeof SEARCH_MANGAS_START;
}
export interface SearchActionFailed {
    type: typeof SEARCH_MANGAS_FAILED;
    payload: string
}
export interface SearchActionSuccess {
    type: typeof SEARCH_MANGAS_SUCCESS;
    payload: Record<number, Manga> | undefined
}
type ActionTypes = SearchActionStart | SearchActionFailed | SearchActionSuccess

const initialState: InitialState = {mangas: {}}
const SEARCH_MANGAS_START = 'SEARCH_MANGAS_START'
const SEARCH_MANGAS_FAILED = 'SEARCH_MANGAS_FAILED'
const SEARCH_MANGAS_SUCCESS = 'SEARCH_MANGAS_SUCCESS'

export const mangaReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEARCH_MANGAS_START: {
            return {...state}
        }
        
        case SEARCH_MANGAS_FAILED: {
            return {...state, error: action.payload}
        }

        case SEARCH_MANGAS_SUCCESS: {
            return {...state, mangas: action.payload, error: null}
        }
    
        default:
            return state
        
    }
}

const getMangaStartAction = () => ({
    type: SEARCH_MANGAS_START 
})
const getMangaFailedAction = (error: unknown) => ({
        type: SEARCH_MANGAS_FAILED,
        payload: error   
})
export const getMangaSuccessAction = (keyword: string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        dispatch(getMangaStartAction())
        const response = await getManga(keyword)
        dispatch({
            type: SEARCH_MANGAS_SUCCESS,
            payload: response
        })
    } catch (error) {
        dispatch(getMangaFailedAction(error))
    }
}