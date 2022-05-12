import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className='my-20'>
            <div className='text-center font-bold'>
                <h2 className='text-secondary'>OUR SERVICES</h2>
                <h2 className='text-accent text-4xl my-4'>SERVICES WE PROVIDE</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                <Service cardTitle='Fluoride Treatment' img={fluoride}></Service>
                <Service cardTitle='Cavity Filling' img={cavity}></Service>
                <Service cardTitle='Teeth Whitening' img={whitening}></Service>
            </div>
        </div>
    );
};

export default Services;