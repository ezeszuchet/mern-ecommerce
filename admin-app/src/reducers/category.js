import { categoryConstants } from '../actions/constants'
import { act } from "react-dom/test-utils";

const initState = {
    categories: [],
    loading: false,
    error: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            state = {
                ...state,
                loading: false
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
            state = {
                ...initState,
            }
            break;
    }
    return state;
}