import React, { Fragment } from 'react';
import headerLogo from '../../img/header-logo.png';
import { NavLink } from 'react-router-dom';
import Banner from './Banner';
import { useSelector, useDispatch } from 'react-redux';
import useReactRouter from 'use-react-router';
import { searchGoods } from '../../actions/actionFunctions';

export default function Header() {
    const { history } = useReactRouter();
    const { count } = useSelector(state => state.serviceAmountGoods);
    const dispatch = useDispatch();
    const handleChangeIcon = () => {
        const searchFormEl = document.querySelector('[data-id=search-form]');
        searchFormEl.classList.toggle('invisible');
        searchFormEl.querySelector('input').focus()
    };

     const handleGoCart = () => {
        history.push('cart')
    };

    const handleChangeTextSearch = ({target}) => { // request from searching in header
        if(target.value) {
            history.push('catalog');
            dispatch(searchGoods(target.value))
        }
    };

    return (
        <Fragment>
            <header className='container'>
                <div className='row'>
                    <div className='col'>
                        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                            <NavLink to='/' exact className='navbar-brand'>
                                <img src={headerLogo} alt='Bosa Noga' />
                            </NavLink>
                            <div className='collapase navbar-collapse' id='navbarMain'>
                                <ul className='navbar-nav nav mr-auto'>
                                    <li className='nav-item active'>
                                        <NavLink to='/' exact className='nav-link'>Главная</NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to='/catalog' exact className='nav-link'>Каталог</NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to='/about' exact className='nav-link'>О магазине</NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to='/contacts' exact className='nav-link'>Контакты</NavLink>
                                    </li>
                                </ul>
                                <div>
                                    <div className='header-controls-pics'>
                                        <div data-id='search-expander' className='header-controls-pic header-controls-search'
                                             onClick={handleChangeIcon}> </div>
                                        {}
                                        <div className='header-controls-pic header-controls-cart' onClick={handleGoCart}>
                                            {count > 0 && (
                                                <Fragment>
                                                    <div className='header-controls-cart-full'>{count}</div>
                                                    <div className='header-controls-cart-menu'> </div>
                                                </Fragment>
                                            )}
                                        </div>
                                    </div>
                                    <form data-id='search-form' className='header-controls-search-form form-inline invisible'>
                                        <input className='form-control' placeholder='Поиск' onChange={handleChangeTextSearch}/>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <main className='container'>
                <div className='row'>
                    <div className='col'>
                        <Banner/>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}