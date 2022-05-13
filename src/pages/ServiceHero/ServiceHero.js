import React from 'react';
import treatment from '../../assets/images/treatment.png'

const ServiceHero = () => {
    return (
        <div className=' my-12'>
            <div class="card lg:card-side bg-base-100">
                <figure><img src={treatment} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;