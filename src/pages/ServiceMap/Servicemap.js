import React from 'react';

const Servicemap = ({ service, setTreatment }) => {
    const { names, slot } = service;
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{names}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-center">
                        <label for="booking-modal" onClick={() => setTreatment(service)} class="btn btn-primary bg-gradient-to-r from-secondary to-primary">BOOK APPOINMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicemap;