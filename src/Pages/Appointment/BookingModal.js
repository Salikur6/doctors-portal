import { format } from 'date-fns';
import React from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    // console.log(treatment)

    const bookingDate = format(date || new Date(), 'PP')

    const handleSubmit = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const patientName = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const treatmentId = _id;
        // console.log({ _id, treatmentName: name, slot, patientName, email, phone, bookingDate });


        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ treatmentName: name, treatmentId, bookingDate, slot, patientName, email, phone }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log(data.success)
                if (data.success) {
                    toast.success(`appointment is set ${bookingDate} at ${slot}`)
                } else {
                    toast.error(`already have an appointment on ${data.data?.bookingDate} at ${data.data?.slot}`)

                }
                refetch()
                setTreatment(null)
            })



        //////
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>


                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-9'>
                        <input type="text" disabled value={format(date || new Date(), 'PP')} className="font-bold input input-bordered w-full max-w-xs" />

                        <select name='slot' className="font-bold select select-bordered w-full max-w-xs">
                            {slots.map((slot, index) => <option
                                key={index}
                                value={slot}

                            >{slot}</option>)}
                        </select>

                        <input type="text" name='name' disabled value={user?.displayName} className="font-bold input input-bordered w-full max-w-xs" />


                        <input type="email" name='email' disabled value={user?.email} className="font-bold input input-bordered w-full max-w-xs" />


                        <input type="number" name='phone' placeholder="Phone Number" className="font-bold input input-bordered w-full max-w-xs" />



                        <input type="submit" value="submit" className="font-bold bg-gradient-to-r from-secondary to-primary btn btn-secondary w-full max-w-xs" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;