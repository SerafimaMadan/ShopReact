import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Header from './components/elements/Header.js';
import Footer from './components/elements/Footer.js';
import Contacts from './components/pages/ContactPage.js';
import Banner from './components/elements/Banner.js';
import AboutPage from './components/pages/AboutPage';
//import Page404 from "./components/pages/Page404";
import HomePage from "./components/pages/HomePage";
import CatalogPage from "./components/pages/CatalogPage";


export default function Store() {
    return (
        <Router>
            <Route path='/' component={Header}/>
            <Route path='/' component={Banner}/>
            <Route exact path='/' component={HomePage}/>
            <Route path='/catalog' component={CatalogPage}/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/contacts' component={Contacts}/>
            <Route path='/' component={Footer}/>

        </Router>
    );
}