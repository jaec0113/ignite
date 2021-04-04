const initialState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searchedGames: []
}

const allGamesReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_GAMES':
            return { ...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.new
            }
        default:
            return { ...state }
    }
}

export default allGamesReducer