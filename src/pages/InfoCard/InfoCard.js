import React from 'react';
import Info from '../Info/Info';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const InfoCard = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            <Info bgClass='bg-gradient-to-r from-secondary to-primary' img={clock} cardTitle='Opening Hours'></Info>
            <Info bgClass='bg-accent' img={marker} cardTitle='Visit our location'></Info>
            <Info bgClass='bg-gradient-to-r from-secondary to-primary' img={phone} cardTitle='Contact us now'></Info>
        </div>
    );
};

export default InfoCard;