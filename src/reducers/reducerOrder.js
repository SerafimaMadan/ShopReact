import {
    SEND_ORDER_GOODS,
    FETCH_DATA_ORDER_SUCCESS,
    FETCH_DATA_ORDER_FAILURE

} from '../actions/actionTypes'

const initialState = {
    order: '',
    load: false,
    err: null
};

export default function reducerOrder(state = initialState, action) {
    switch (action.type) {
        case SEND_ORDER_GOODS:
            return {
                ...state,
                load: true,
                err: null
            };

        case FETCH_DATA_ORDER_SUCCESS:
            const {order} = action.payload;
            return {
                ...state,
                order,
                err: null
            };
        case FETCH_DATA_ORDER_FAILURE:
            const {err} = action.payload;
            return {
                ...state,
                load: false,
                err,
            };
        default:
            return state;
    }
}