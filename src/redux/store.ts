import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { mangaReducer } from './mangaReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    mangas: mangaReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )