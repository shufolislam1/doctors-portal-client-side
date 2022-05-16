import React, { useRef } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss'
// import { toast } from 'react-toastify';

const BookimgModal = ({ treatment, date , setTreatment}) => {
    const user = useAuthState(auth)
    console.log(user);
    // console.log(user);
    // console.log(user?.displayName);
    const Swal = require('sweetalert2')

    const { _id, name, slots } = treatment;
    // console.log(name);

    const formatedDate = format(date, 'PPP')

    const slotRef = useRef('')
    // const nameRef = useRef('')
    // const emailRef = useRef('')
    const phoneRef = useRef('')
    const handlesubmit = event => {
        event.preventDefault()
        const slot = slotRef.current.value;
        // const name = nameRef.current.value;
        // const email = emailRef.current.value;
        const phone = phoneRef.current.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            slot,
            phone,
            patientEmail: user.email,
            patientName: user.displayName,
            date:formatedDate
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.success){
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  )
                // toast(`Appointment is set, ${formatedDate} at ${slot}`)
            }
            else{
                // toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            // setTreatment(null)
        })
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">You are Selecting: {name}</h3>

                    <form onSubmit={handlesubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select ref={slotRef} class="select select-bordered w-full max-w-xs">
                            
                            {
                                slots.map((slot, index) => <option
                                key={index} 
                                value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input ref={phoneRef} type="text" placeholder="Phone No" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="input w-full input-bordered max-w-xs bg-gradient-to-r from-secondary to-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookimgModal;