import React from 'react';

const servicemap = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{slots?.length} {slots?.length > 1 ? 'spaces' : 'space'} available</p>
                    <div class="card-actions justify-center">
                        <label for="booking-modal" onClick={() => setTreatment(service)} class="btn btn-primary bg-gradient-to-r from-secondary to-primary">BOOK APPOINMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default servicemap;