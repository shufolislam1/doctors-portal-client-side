import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookimgModal from '../BookingModal/BookimgModal';
import Servicemap from '../ServiceMap/Servicemap';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect( () => {
        fetch('http://localhost:5000/services')
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
                        setTreatment={setTreatment}
                    ></Servicemap>)
                }
            </div>
            {treatment && <BookimgModal date={date} treatment={treatment}></BookimgModal>}
        </div>
    );
};

export default AvailableAppoinment;