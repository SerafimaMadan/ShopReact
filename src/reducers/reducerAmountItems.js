import { ICON_GOODS_IN_CART } from '../actions/actionTypes'

let initialState = '';
let items = JSON.parse(localStorage.getItem("allItems"));
if(items === null) {
    initialState = {count: 0}
} else {
    initialState = {count: items.length}
}

export default function reducerAmountItems(state = initialState, action) {

    switch (action.type) {
        case ICON_GOODS_IN_CART:
            const {count} = action.payload;
            return {
                ...state,
                count
            };
        default:
            return state;
    }
}