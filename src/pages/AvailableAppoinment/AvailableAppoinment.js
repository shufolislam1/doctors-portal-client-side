import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Servicemap from '../ServiceMap/Servicemap';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <div className='text-secondary text-3xl text-center font-bold'>
                    You Have picked yor appoinmet on: {format(date, 'PP')}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 shadow-md'>
                {
                    services.map(service => <Servicemap
                        key={service._id}
                        service={service}
                    ></Servicemap>)
                }
            </div>
        </div>
    );
};

export default AvailableAppoinment;