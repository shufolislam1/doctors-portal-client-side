import React from 'react';
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
        </div>
    );
};

export default Home;