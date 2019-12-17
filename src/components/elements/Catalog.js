import React, {useEffect, Fragment, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {fetchCategories, fetchDataCategories, searchGoods} from '../../actions/actionFunctions';
import {useSelector, useDispatch} from 'react-redux';
import LoaderImg from "./LoaderImg";


export default function Catalog() {
    const {items, loading, error} = useSelector(state => state.serviceCategories);
    const {data, catalogItems} = useSelector(state => state.serviceDataCategories);
    const {text} = useSelector(state => state.serviceSearch);
    const dispatch = useDispatch();
    const [index, setIndex] = useState(null);
    const offset = '&offset=';
    let [num, setNum] = useState(true);

    function handleClick(evt, id) {
        [...document.querySelectorAll('.justify-content-center > .nav-item > .nav-link')].map(o => o.classList.remove('active'));
        evt.target.classList.add('active');
        dispatch(fetchDataCategories(id, '', text));
        setIndex(id);
        setNum(6)
    }

    function yetClick() {
        let sum = num + 6;
        setNum(() =>  sum);
        let out = offset + sum;
        dispatch(fetchDataCategories(index, out, text, false))
    }

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchDataCategories());
        dispatch(searchGoods(text))
    }, [text, dispatch]);

    const handleBuy = (name, item) => {
        localStorage.setItem(name, JSON.stringify(item))
    };

    if (loading) {
        return (
            <LoaderImg/>
        );
    }

    if (error) {
        console.log(error);
        return <p>Something went wrong try again</p>;
    }
    const addDefaultSrc = ({target}) => {
        target.src='https://vedathemes.com/docs-aamla/wp-content/uploads/sites/3/2018/07/placeholder-1.png'
    };

    return (
        <Fragment>
            <ul className='catalog-categories nav justify-content-center'>
                <li className='nav-item'>
                    <p className='nav-link active' onClick={(evt) => handleClick(evt)}>
                        Все
                    </p>
                </li>
                {items.map(o => (
                    <li className='nav-item' key={o.id}>
                        <p className='nav-link' onClick={(evt) => handleClick(evt, o.id)}>
                            {o.title}
                        </p>
                    </li>
                ))}
            </ul>
            {catalogItems && catalogItems.length > 0 &&
            (<Fragment>
                <div className='row'>
                    {catalogItems.map(o => (
                        <div className='col-4' key={o.id}>
                            <div className='card catalog-item-card'>
                                <img src={o.images[0]} className='card-img-top img-fluid' alt={o.title}
                                     style={{width: '90%', height: 200, objectFit: 'cover'}} onError={addDefaultSrc}/>
                                <div className='card-body'>
                                    <p className='card-text'>{o.title}</p>
                                    <p className='card-text'>{o.price} руб.</p>
                                    <NavLink
                                        to={'/catalog/' + o.id}
                                        exact
                                        className='btn btn-outline-primary'
                                        onClick={() => handleBuy(o.id, o)}>
                                        Заказать
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {data.length === 6 &&
                <div className='text-center'>
                    <button className='btn btn-outline-primary' onClick={() => yetClick()}>
                        Загрузить ещё
                    </button>
                </div>}
            </Fragment>)
            }
            {loading &&
            (<LoaderImg/>)
            }
            {error && (<p>Something went wrong try again</p>)}
        </Fragment>
    );
}
