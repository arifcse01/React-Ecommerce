import React, { useEffect, useState } from 'react';
// import allTickets from '../../fakeData/fakeData.json';
// import Tickets from '../Tickets/Tickets';
import banner from '../../assets/img/e-banner.jpg';

const Home = () => {

    return (
        <div className="hero">
            <div class="card bg-dark text-white border-0">
                <img src={banner} class="card-img mt-5" alt="Banner" height={500} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div class="container">
                    <h5 class="card-title display-3 fw-bolder mb-0">NEW SESSION ARIVAL</h5>
                    <p class="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;