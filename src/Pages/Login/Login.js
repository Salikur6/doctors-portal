import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading'

const Login = () => {
    const [signInWithGoogle, googleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        loginUser,
        loginLoading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);


    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState({
        email: '',
        password: '',
        other: ''
    });

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

    const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(
        auth
    );

    const handlePasswordResetClick = async () => {

        if (!resetError?.message) {
            return toast.warning('Enter a valid email');
        }
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast.success('Sent Email')
            console.log(sendPasswordResetEmail(userInfo.email))
        } else {
            return toast.warning('Enter a valid email');
        }



    }
    console.log(userInfo.email);

    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(loginUser || googleUser);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token])


    // console.log(userInfo)
    const handleSubmit = event => {
        event.preventDefault();
        const email = userInfo.email;
        const password = userInfo.password;

        signInWithEmailAndPassword(email, password);
    }


    if (GoogleLoading || loginLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='container mx-auto '>
                <div className="hero card min-h-screen">
                    <div className="card sm:w-96 w-80 bg-base-100 shadow-xl">
                        <form onSubmit={handleSubmit} className="card-body mr-3">

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
                                <label className="label">
                                    <Link to='' className="label-text-alt link link-hover font-bold" onClick={handlePasswordResetClick}>Forgot password?</Link>
                                </label>
                                <p className='text-red-600 font-bold'>{resetError && resetError.message}</p>
                                {resetSending && <p>Loading...</p>}
                            </div>


                            <p className='text-red-600 font-bold'>{loginError && loginError.message}</p>
                            <p className='text-red-600 font-bold'>{error && error.password}</p>
                            {loginLoading && <Loading></Loading>}




                            <div className="form-control mt-6">
                                <button className="btn btn-primary font-bold bg-gradient-to-r from-secondary to-primary text-white">Login</button>
                            </div>

                        </form>
                        <p className='text-center'>New to Doctors Portal? <Link className='text-primary' to='/signup'>Create New Account</Link></p>

                        <div className="divider my-5 
                        
                        font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary
                        ">OR</div>
                        <div className='card-body'>


                            {GoogleLoading && <Loading></Loading>}


                            {GoogleError && <p className='text-red-700 font-bold'>{GoogleError.message}</p>}


                            <button className="btn h-10 px-5 m-2 transition-colors duration-150 bg-white  text-red-700 rounded-lg focus:shadow-outline hover:bg-red-700 hove:text-white btn-outline font-bold uppercase border-2" onClick={() => signInWithGoogle()}>continue with google</button>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;