import React, { Fragment } from 'react';
import Bestsellers from '../elements/Bestsellers';
import Catalog from '../elements/Catalog';

export default function HomePage() {
    return (
        <Fragment>
            <Bestsellers/>
            <section className='container catalog'>
                <h2 className='text-center'>Каталог</h2>
                <Catalog/>
            </section>
        </Fragment>
    );
}