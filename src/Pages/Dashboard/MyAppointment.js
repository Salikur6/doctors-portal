import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointment, setAppointment] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            fetch(`https://ancient-ravine-10764.herokuapp.com/booking?patientEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => {

                    console.log(res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('access-token');
                        navigate('/');
                    }
                    return res.json()

                })
                .then(data => setAppointment(data))
        }
    }, [user, navigate]);
    return (
        <div>
            This is my Appointment {appointment.length}


            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointment.map((a, index) => <tr key={a._id}>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.bookingDate}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatmentName}</td>
                        </tr>

                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;