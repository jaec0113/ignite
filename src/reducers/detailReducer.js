
const initialState = {
    game: { platforms: [] }, 
    short_screenshots: { results: [] }, 
    isLoading: true 
}

const detailReducer = (state = initialState, action) => {
    switch (action.type){
        case "GET_DETAIL":
            return{
                ...state,
                game: action.payload.game,
                screens: action.payload.short_screenshots,
                isLoading: false,
            }
        case "LOADING_DETAIL":
            return{
                ...state,
                isLoading: true,
            }
        default:
            return{
                ...state
            }
    }
}

export default detailReducer