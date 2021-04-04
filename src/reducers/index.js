import { combineReducers } from 'redux'
import allGamesReducer from './allGamesReducer'

const rootReducer = combineReducers({
    games: allGamesReducer,
})

export default rootReducer