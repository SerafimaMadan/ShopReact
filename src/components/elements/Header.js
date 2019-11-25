import React from 'react';
import {NavLink} from 'react-router-dom';

import headerLogo from '../../img/header-logo.png';

let active = {
    color: '#ff0000',
};

export default function Header() {
    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <a className="navbar-brand" href="/">
                            <img src={headerLogo} alt="Bosa Noga"/>
                        </a>

                        <div className="collapase navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeStyle={active} exact to="/">
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeStyle={active} exact to="/catalog">
                                        Каталог
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeStyle={active} exact to="/about">
                                        О магазине
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeStyle={active} exact to="/contacts">
                                        Контакты
                                    </NavLink>
                                </li>
                            </ul>

                                <div className="header-controls-pics">
                                    <div data-id="search-expander"
                                         className="header-controls-pic header-controls-search">
                                    </div>

                                    <div className="header-controls-pic header-controls-cart">
                                        <div className="header-controls-cart-full">
                                            1
                                        </div>
                                        <div className="header-controls-cart-menu"> </div>
                                    </div>

                                <form data-id="search-form"
                                      className="header-controls-search-form form-inline invisible">
                                    <input className="form-control" placeholder="Поиск"/>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}