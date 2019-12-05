//@ts-check
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';
import reducerList from '../reducers/reducerList'
import reducerCategories from '../reducers/reducerCategories'
import reducerDataForCategories from '../reducers/reducerDataForCategories'
import reducerSearch from '../reducers/reducerSearch'
import reducerAmountItems from '../reducers/reducerAmountItems'
import reducerOrder from '../reducers/reducerOrder'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    serviceList: reducerList,
    serviceCategories:reducerCategories,
    serviceDataCategories: reducerDataForCategories,
    serviceSearch: reducerSearch,
    serviceAmountGoods: reducerAmountItems,
    serviceSendOrder: reducerOrder
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)),
);

export default store;