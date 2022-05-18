import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const PrivetRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, emailVerifiyError] = useSendEmailVerification(auth);
    // console.log(user)

    if (loading) {
        return <Loading></Loading>
    }


    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }


    if (!user.emailVerified) {
        return <div style={{ backgroundColor: '#212529' }} className='h-screen flex justify-center items-center text-center'>


            <div className='container mx-auto'>
                <h3 className='font-bold my-6 text-2xl text-blue-600'>Hello "{user?.displayName}"</h3>

                <h6 className='fw-bold my-3'>{emailVerifiyError && <p>{emailVerifiyError.message}</p>}</h6>

                <h3 className='text-white text-3xl my-6'>Almost there...</h3>
                <h3><span className='text-warning text-3xl font-bold d-block  my-6'>please verify your email address.<p className='text-danger fw-bold  my-6'>({user.email})</p></span></h3>

                {sending && <p className='font-bold text-blue-600'>Sending...</p>}

                <button className='btn btn-primary font-bold mt-4' onClick={async () => {
                    await sendEmailVerification();
                    toast.success('Sent email');
                }}>Resend Email</button>
            </div>

        </div>
    }

    return children;
};

export default PrivetRoute;