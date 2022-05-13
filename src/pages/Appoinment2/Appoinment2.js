import React, { useState } from 'react';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';
import AppoinmentBanner from './AppoinmentBanner';

const Appoinment2 = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppoinment date={date} setDate={setDate}></AvailableAppoinment>
        </div>
    );
};

export default Appoinment2;