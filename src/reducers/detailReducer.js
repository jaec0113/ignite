
const initialState = {game: { platforms: [] }, short_screenshots: { results: [] } }

const detailReducer = (state = initialState, action) => {
    switch (action.type){
        case "GET_DETAIL":
            return{
                ...state,
                game: action.payload.game,
                screens: action.payload.short_screenshots,
            }
        default:
            return{
                ...state
            }
    }
}

export default detailReducer