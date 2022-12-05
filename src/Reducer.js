const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                page: action.payload.page
            }
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((curElement) => curElement.objectID !== action.payload),
            }
        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.search
            }
        case "PREVIOUS_PAGE":
            let pageNumberDec = state.page - 1;
            if (pageNumberDec <= 0) {
                pageNumberDec = 0;
            }
            return {
                ...state,
                page: pageNumberDec
            }

        case "NEXT_PAGE":
            let pageNumberInc = state.page + 1;
            if (pageNumberInc >= state.nbPages) {
                pageNumberInc = 0;
            }
            return {
                ...state,
                page: pageNumberInc
            }
        default:
    }
    return state;
};

export default reducer;