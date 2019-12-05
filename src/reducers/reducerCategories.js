import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_SUCCESS

} from '../actions/actionTypes'

const initialState = {
    items: [],
    loading: false,
    error: null,
};


export default function reducerCategories(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_CATEGORIES_FAILURE:
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };

        case FETCH_CATEGORIES_SUCCESS:
            const {items} = action.payload;
            return {
                ...state,
                items,
                loading: false,
                error: null,
            };

        default:
            return state;
    }
}