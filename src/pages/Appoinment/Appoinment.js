import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appoinment from '../../assets/images/appointment.png'

const Appoinment = () => {
    return (
        <div style={{
            background: `url(${appoinment})`
        }}>
            <div className='flex items-center my-40'>
                <div className='flex-1'>
                    <img className='mt-[-100px]' src={doctor} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-xl text-secondary'>Appoinmet</h1>
                    <h1 className='text-4xl my-5 text-white'>Make an appoinment Today</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugiat est facere vero facilis voluptas a aut aliquid possimus velit, perferendis adipisci nostrum quibusdam suscipit? Ipsum, illum numquam qui repellat perferendis vero enim! A esse officiis magnam facilis, laboriosam et architecto quae, suscipit dolorum, alias eaque fugit! Sunt cum quod rerum? Voluptatum, necessitatibus quo. Beatae ea dolores repellendus sunt aperiam?</p>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary mt-6">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;