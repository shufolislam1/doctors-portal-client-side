import React from 'react';

const Servicemap = ({service}) => {
    const {names, slot} = service;
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{names}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">BOOK APPOINMENT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicemap;