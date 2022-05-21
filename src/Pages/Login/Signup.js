import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading'

const Signup = () => {
    const navigate = useNavigate()
    // console.log(user)

    const [signInWithGoogle, googleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const [
        updateProfile,
        profileUpdating,
        profileError
    ] = useUpdateProfile(auth);


    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState({
        name: '',
        email: '',
        password: '',
        other: ''
    });

    const handleNameChange = (e) => {
        const fullNameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
        const validName = fullNameRegex.test(e.target.value);

        if (validName) {
            setUserInfo({ ...userInfo, name: e.target.value });
            setError({ ...error, name: '' });
        } else {
            setError({ ...error, name: 'Enter A Valid Name' });
            setUserInfo({ ...userInfo, name: '' });
        }
    }

    const handleEmailChange = (e) => {
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setError({ ...error, email: '' })
        } else {
            setError({ ...error, email: 'Invalid Email' });
            setUserInfo({ ...userInfo, email: '' })
        }
    }


    const handlePasswordChange = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setError({ ...error, password: '' })
        } else {
            setError({ ...error, password: 'Minimum 6 characters, at least one letter and one number' });
            setUserInfo({ ...userInfo, password: "" })
        }
    }




    const [token] = useToken(createUser || googleUser)

    // console.log(userInfo)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = userInfo.email;
        const password = userInfo.password;
        const name = userInfo.name;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        // console.log('update done')

    }

    useEffect(() => {
        if (token) {
            navigate('/appointment')
        }
    }, [token, navigate])


    if (GoogleLoading || createLoading || profileUpdating) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='container mx-auto '>
                <div className="hero card min-h-screen">
                    <div className="card sm:w-96 w-80 bg-base-100 shadow-xl">
                        <h2 className='text-center text-2xl font-bold'>SignUp</h2>
                        <form onSubmit={handleSubmit} className="card-body mr-3">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered font-bold" onChange={handleNameChange} required />
                            </div>
                            <p className='text-red-600 font-bold'>{error && error?.name}</p>
                            <p>{profileError && profileError?.message}</p>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered font-bold" onChange={handleEmailChange} required />
                            </div>
                            <p className='text-red-600 font-bold'>{error && error?.email}</p>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered font-bold" onChange={handlePasswordChange} required />

                            </div>


                            <p className='text-red-600 font-bold'>{createError && createError?.message}</p>
                            <p className='text-red-600 font-bold'>{error && error.password}</p>
                            {createLoading && <Loading></Loading>}




                            <div className="form-control mt-6">
                                <button className="btn btn-primary font-bold bg-gradient-to-r from-secondary to-primary text-white">SignUp</button>
                            </div>

                        </form>
                        <p className='text-center'>Already have an account? <Link className='text-primary' to='/login'>Please login</Link></p>

                        <div className="divider my-5 
                    
                    font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary
                    ">OR</div>
                        <div className='card-body'>


                            {GoogleLoading && <Loading></Loading>}


                            {GoogleError && <p className='text-red-700 font-bold'>{GoogleError?.message}</p>}


                            <button className="btn h-10 px-5 m-2 transition-colors duration-150 bg-white  text-red-700 rounded-lg focus:shadow-outline hover:bg-red-700 hove:text-white btn-outline font-bold uppercase border-2" onClick={() => signInWithGoogle()}>continue with google</button>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;