import {
    FETCH_DATA_CATEGORIES_REQUEST,
    FETCH_DATA_CATEGORIES_FAILURE,
    FETCH_DATA_CATEGORIES_SUCCESS,

} from '../actions/actionTypes'

const initialState = {
    data: [],
    text: '',
    load: false,
    err: null,
    catalogItems: [],
    offset: 6,

};
export default function reducerCategories(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_CATEGORIES_REQUEST:
            return {
                ...state,
                load: true,
                err: null,
            };

        case FETCH_DATA_CATEGORIES_FAILURE:
            const {err} = action.payload;
            return {
                ...state,
                load: false,
                err,
            };

        case FETCH_DATA_CATEGORIES_SUCCESS:
            const {data, clear} = action.payload;
            const catalogItems = clear ? data : [...state.catalogItems, ...data];
            return {
                ...state,
                data,
                catalogItems,
                load: false,
                err: null,

            };

               default:
            return state;
    }
}