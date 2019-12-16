import {
    FETCH_BESTSALES_REQUEST,
    FETCH_BESTSALES_FAILURE,
    FETCH_BESTSALES_SUCCESS,

    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_SUCCESS,

    FETCH_DATA_CATEGORIES_REQUEST,
    FETCH_DATA_CATEGORIES_FAILURE,
    FETCH_DATA_CATEGORIES_SUCCESS,

    FIND_GOODS,
    ICON_GOODS_IN_CART,

    SEND_ORDER_GOODS,
    FETCH_DATA_ORDER_SUCCESS,
    FETCH_DATA_ORDER_FAILURE,

 } from './actionTypes';



export const findGoods = (text) => ({ // поиск
    type: FIND_GOODS,
    payload: {
        text
    }
});

export const orderGoods = (order) => ({ // отправить заказ на сервер
    type: SEND_ORDER_GOODS,
    payload: {
        order
    }
});

export const fetchServicesRequest = () => ({ // запрос на сервер для хитов продаж
    type: FETCH_BESTSALES_REQUEST,
});

export const fetchServicesFailure = error => ({ // ошибка принятия хитов продаж
    type: FETCH_BESTSALES_FAILURE,
    payload: {
        error,
    },
});

export const fetchServicesSuccess = items => ({ // успешное принятие хитов продаж
    type: FETCH_BESTSALES_SUCCESS,
    payload: {
        items,
    },
});

export const fetchCategoriesRequest = () => ({ // запрос на сервер для заголовков
    type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesFailure = error => ({ // ошибка принятия заголовков
    type: FETCH_CATEGORIES_FAILURE,
    payload: {
        error,
    },
});

export const fetchCategoriesSuccess = items => ({ // успешное принятие заголовков
    type: FETCH_CATEGORIES_SUCCESS,
    payload: {
        items,
    },
});

export const fetchDataCategoriesRequest = () => ({ // запрос на сервер для каталога
    type: FETCH_DATA_CATEGORIES_REQUEST,

});

export const fetchDataCategoriesFailure = err => ({ // ошибка принятия данных каталога
    type: FETCH_DATA_CATEGORIES_FAILURE,
    payload: {
        err,
    },
});

export const fetchDataOrderFailure = err => ({ // ошибка принятия данных заказа
    type: FETCH_DATA_ORDER_FAILURE,
    payload: {
        err,
    },
});

export const fetchDataOrderSuccess = (order) => ({ // успешное принятие данных заказа
    type: FETCH_DATA_ORDER_SUCCESS,
    payload: {
        order
    },
});

export const fetchDataCategoriesSuccess = (data, offset) => ({ // успешное принятие данных каталога
    type: FETCH_DATA_CATEGORIES_SUCCESS,
    payload: {
        data,
        offset
    },
});

export const iconGoodsInCart = count => ({ // иконка кол-ва товаров в корзине
    type: ICON_GOODS_IN_CART,
    payload: {
        count,
    },
});

