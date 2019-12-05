import {
    FIND_GOODS
} from '../actions/actionTypes'

const initialState = {
    data: [],
    text: ''
};

export default function reducerSearch(state = initialState, action) {
    switch (action.type) {
        case FIND_GOODS:
            const {text} = action.payload;
            return {
                ...state,
                text
            };

        default:
            return state;
    }
}