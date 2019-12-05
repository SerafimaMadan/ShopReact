import React from 'react';
import banner from '../../img/banner.jpg';

export default function Banner() {
    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <div className="banner">
                        <img src={banner} className="img-fluid" alt="К весне готовы!"/>
                        <h2 className="banner-header">К весне готовы!</h2>
                    </div>
                </div>
            </div>
        </main>
    );
}