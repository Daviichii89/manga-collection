/* eslint-disable @typescript-eslint/no-explicit-any */
import getManga from '../api/getManga';
import { AppDispatch } from './store';

export interface Manga {
    id: string
    title: string | null
    
}

interface SearchActionStart {
    type: typeof SEARCH_MANGAS_START;
}

interface SearchActionFailed {
    type: typeof SEARCH_MANGAS_FAILED;
    payload: string
}

interface SearchActionSuccess {
    type: typeof SEARCH_MANGAS_SUCCESS;
    payload: Manga[]
}

type ActionTypes = SearchActionStart | SearchActionFailed | SearchActionSuccess

interface InitialState {
    mangas:Manga[] 
}

const initialState: InitialState = {mangas: []}

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
const getMangaFailedAction = (error: string) => ({
        type: SEARCH_MANGAS_FAILED,
        payload: error   
})
export const getMangaSuccessAction = (keyword: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(getMangaStartAction())
        const response = await getManga(keyword)
        console.log(response)
        dispatch({
            type: SEARCH_MANGAS_SUCCESS,
            payload: response
        })
    } catch (error) {
        // dispatch(getMangaFailedAction(error))
        console.log(getMangaFailedAction)
    }
}