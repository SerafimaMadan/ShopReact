import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useReactRouter from 'use-react-router';
import { amountGoodsInCart, orderGoodsToServer } from '../../actions/actionFunctions';
import { iconGoodsInCart } from '../../actions/actionCreators';

export default function Cart() {
    const [arr, setLocalArr] = useState([]);
    const dispatch = useDispatch();
    const {history} = useReactRouter();
    const [disabled, setDisabled] = useState(true);
    const [inputData, setInputData] = useState({
        phone: '',
        address: '',
        agreement: false
    });

    const handleClearLocalstorage = (el) => {
        const items = JSON.parse(localStorage.getItem("allItems"));
        let found = items.findIndex(o => o.id === el.id);
        items.splice(found, 1);
        localStorage.setItem("allItems", JSON.stringify(items));
        setLocalArr(items);
        dispatch(amountGoodsInCart(items));
        setDisabled(true);

        if(arr.length === 1) {
            setInputData({
                phone: '',
                address: '',
                agree: false
            });
            localStorage.clear()
        }
    };

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("allItems"));
        setLocalArr(items);
        if(items && items.length > 0) {
            setDisabled(false)
        }
    }, []);

    const handleInputData = ({target}) => {
        const {id, checked} = target;
        const value = target.type === 'checkbox' ? checked : target.value;
        setInputData(prev => ({...prev, [id]: value}))
    };

    const handleSendData = (evt) => {
        evt.preventDefault();
        if(arr) {
            const allowedOrder = ['count', 'id', 'price'];
            const allowedAccaunt = ['phone', 'address'];

            const goods = arr.map( el => {
                let filteredOrder = Object.keys(el)
                    .filter( key => allowedOrder.includes(key) )
                    .reduce((obj, key) => {
                        return {
                            ...obj, [key]: el[key]
                        };
                    }, {});
                return filteredOrder;
            });

            const filteredAccaunt = Object.keys(inputData)
                .filter( key => allowedAccaunt.includes(key) )
                .reduce((obj, key) => {
                    return {
                        ...obj, [key]: inputData[key]
                    };
                }, {});

            const data = Object.assign({}, {'owner': filteredAccaunt}, {'items': goods});
            dispatch(orderGoodsToServer(data));

            setInputData({
                phone: '',
                address: '',
                agree: false
            });

            localStorage.clear();
            history.replace('/success');
            dispatch(iconGoodsInCart(0))
        }
        return;
    };

    return (
        <Fragment>
            <section className="cart container">
                <h2 className="text-center">Корзина</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Размер</th>
                        <th scope="col">Кол-во</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col">Итого</th>
                        <th scope="col">Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {arr &&
                    (<Fragment>
                        {arr.map((el, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{id + 1}</th>
                                    <td><NavLink to={'/catalog/' + el.id}>{el.title}</NavLink></td>
                                    <td>{el.size}</td>
                                    <td>{el.count}</td>
                                    <td>{el.price} руб.</td>
                                    <td>{el.price * el.count} руб.</td>
                                    <td>
                                        <button className="btn btn-outline-danger btn-sm"
                                                onClick={() => handleClearLocalstorage(el)}>Удалить
                                        </button>
                                    </td>
                                </tr>
                            )}
                        )}
                        <tr>
                            <td colSpan="5" className="text-right">Общая стоимость</td>
                            <td>{arr.reduce((acc, el) => acc + (el.price * el.count), 0)} руб.</td>
                        </tr>
                    </Fragment>)
                    }
                    </tbody>
                </table>
            </section>
            <section className="order">
                <h2 className="text-center">
                    Оформить заказ
                </h2>
                <div className="card" style={{maxWidth: '30rem', margin: 'auto'}}>
                    <form className="card-body">
                        <div className="form-group">
                            <label htmlFor="phone">
                                Телефон
                            </label>
                            <input
                                className="form-control"
                                id="phone" placeholder="Ваш телефон"
                                onChange={handleInputData} value={inputData.phone} disabled={disabled}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Адрес доставки</label>
                            <input className="form-control"
                                   id="address"
                                   placeholder="Адрес доставки"
                                   onChange={handleInputData} value={inputData.address} disabled={disabled}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox"
                                   className="form-check-input"
                                   id="agreement"
                                   onChange={handleInputData} checked={inputData.agreement} disabled={disabled}/>
                            <label className="form-check-label" htmlFor="agreement" >
                                Согласен с правилами доставки
                            </label>
                        </div>
                        <button type="submit"
                                className="btn btn-outline-secondary"
                                onClick={handleSendData}
                                disabled={!(inputData.phone.length > 0 && inputData.address.length > 0 && inputData.agreement)}>
                            Оформить
                        </button>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}