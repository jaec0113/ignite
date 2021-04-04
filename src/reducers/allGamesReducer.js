const initialState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searchedGames: []
}

const allGamesReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_GAMES':
            return { ...state }
        default:
            return { ...state }
    }
}

//ACTION CREATOR
const fetchGames = (userData) => {
    return {
        type: "FETCH_GAMES",
    }
}

export default allGamesReducer