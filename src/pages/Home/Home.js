import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import ServiceHero from '../ServiceHero/ServiceHero';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <ServiceHero></ServiceHero>
            <Appoinment></Appoinment>
        </div>
    );
};

export default Home;