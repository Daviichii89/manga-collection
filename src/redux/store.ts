import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { mangaReducer } from './mangaReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { collectionReducer } from './collectionReducer';

const rootReducer = combineReducers({
    mangas: mangaReducer,
    mangasCollection: collectionReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>