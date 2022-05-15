import React, { useRef } from 'react';
import { format } from 'date-fns';

const BookimgModal = ({ treatment, date }) => {

    const { names, slots } = treatment;

    const slotRef = useRef('')
    const nameRef = useRef('')
    const emailRef = useRef('')
    const phoneRef = useRef('')
    const handlesubmit = event => {
        event.preventDefault()
        // const slot = slotRef.current.value;
        // const name = nameRef.current.value;
        // const email = emailRef.current.value;
        // const phone = phoneRef.current.value;
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">You are Selecting: {treatment.names}</h3>

                    <form onSubmit={handlesubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select ref={slotRef} class="select select-bordered w-full max-w-xs">
                            
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input ref={nameRef} type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
                        <input ref={emailRef} type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input ref={phoneRef} type="text" placeholder="Phone No" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="input w-full input-bordered max-w-xs bg-gradient-to-r from-secondary to-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookimgModal;