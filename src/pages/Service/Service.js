import React from 'react';

const Service = ({ img, cardTitle }) => {
    return (
        <div>
            <div class="card bg-base-100 shadow-md">
                <figure className='mt-5'>
                    <img src={img} alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
        </div>
    );
};

export default Service;