function reducer(state = { data: [] }, action) {
    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state,
                data: action.data
            };

        case "DATA_ERROR":
            return {
                ...state,
                data: action.error
            }

        default:
            return state;
    }
}

export default reducer;