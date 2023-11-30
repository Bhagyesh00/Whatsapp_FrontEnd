import React, { useState, useEffect } from 'react';
import { Button, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../utils/firebasedb';
import { setCurrentUser } from '../../Redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { selectCurrentUser } from '../../Redux/features/userSlice';

const Signin = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [wrongOpenSnackbar, setWrongOpenSnackbar] = useState(false);
    const [inputData, setInputData] = useState({ email: '', password: '' });
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.user.currentUser);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await getUser(inputData.email, inputData.password)
        if ( res.data.status === 'success' ) {
            setOpenSnackbar(true);
            dispatch(setCurrentUser(res.data));
            navigate('/')
            console.log("currentUser", currentUser)
        }else{
            setWrongOpenSnackbar(true);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
        setWrongOpenSnackbar(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/');
        }
    }, [localStorage.getItem('token'),navigate]);

    return (
        <div>
            <div className='flex justify-center h-screen items-center'>
                <div className='w-[30%] p-10 shadow-md bg-white'>
                    <form onSubmit={handleSubmit} className='space-y-5'>
                        <div>
                            <p className='mb-2'>Email</p>
                            <input
                                name='email'
                                placeholder='Enter your Email'
                                onChange={handleChange}
                                value={inputData.email}
                                type='text'
                                className='py-2 px-3 outline outline-green-600 w-full rounded-md border'
                            />
                        </div>
                        <div>
                            <p className='mb-2'>Password</p>
                            <input
                                name='password'
                                placeholder='Enter your Password'
                                onChange={handleChange}
                                value={inputData.password}
                                type='password' // Change type to password
                                className='py-2 px-3 outline outline-green-600 w-full rounded-md border'
                            />
                        </div>

                        <div>
                            <Button
                                type='submit'
                                style={{ bgcolor: green[700], padding: '.5rem 0rem' }} // Use style instead of sx
                                className='w-full bg-green-600'
                                variant='contained'>
                                Signin
                            </Button>
                        </div>
                    </form>

                    <div className='flex space-x-3 items-center mt-5'>
                        <p className='m-0'>Create New Account</p>
                        <Button variant='text' onClick={() => navigate('/signup')}>
                            Signup
                        </Button>
                    </div>
                </div>
            </div>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity='success' sx={{ width: '100%' }}>
                    Login Successful!
                </Alert>
            </Snackbar>

            <Snackbar open={wrongOpenSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity='error' sx={{ width: '100%' }}>
                    Invalid Email or Password!
                </Alert>
            </Snackbar>
        </div>
    )
};

export default Signin;
