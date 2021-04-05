import { combineReducers } from 'redux'
import allGamesReducer from './allGamesReducer'
import detailReducer from './detailReducer'

const rootReducer = combineReducers({
    games: allGamesReducer,
    detail: detailReducer,
})

export default rootReducer