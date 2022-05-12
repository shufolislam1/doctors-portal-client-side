import React from 'react';

const Info = ({ img, cardTitle, bgClass }) => {
    return (
        <div>
            <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
                <figure className='text-white pl-5 mt-2'>
                    <img src={img} alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default Info;