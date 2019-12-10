import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CatalogPage from './components/pages/CatalogPage';
import About from './components/pages/AboutPage';
import Contacts from './components/pages/ContactPage';
import Header from './components/elements/Header';
import Footer from './components/elements/Footer';
import ProductPage from './components/pages/ProductPage';
import Page404 from './components/pages/Page404';
import CartPage from './components/pages/CartPage';
import CartSuccess from "./components/elements/CartSuccess";

export default function App() {

    return (
        <Router>
            <Header/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/catalog' exact component={CatalogPage} />
                <Route path='/about' component={About} />
                <Route path='/cart' exact component={CartPage} />
                <Route path='/contacts' component={Contacts} replace/>
                <Route path='/catalog/:id' exact component={ProductPage} />
                <Route path='/success' component={CartSuccess}/>
                <Route path='*' component={Page404} />
            </Switch>
            <Footer/>
        </Router>
    );
}