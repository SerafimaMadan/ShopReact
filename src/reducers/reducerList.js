import {
    FETCH_BESTSALES_REQUEST,
    FETCH_BESTSALES_FAILURE,
    FETCH_BESTSALES_SUCCESS

} from '../actions/actionTypes'

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export default function reducerList(state = initialState, action) {
    switch (action.type) {
        case FETCH_BESTSALES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_BESTSALES_FAILURE:
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };

        case FETCH_BESTSALES_SUCCESS:
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
