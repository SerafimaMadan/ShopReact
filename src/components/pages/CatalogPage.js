import React from 'react';
import Searching from '../elements/Searching';
import Catalog from '../elements/Catalog';

export default function CatalogPage() {

    return (
        <section className='container catalog'>
            <h2 className='text-center'>Каталог</h2>
            <div className="catalog-search-form form-inline">
                <Searching />
            </div>
            <Catalog/>
        </section>
    )
}