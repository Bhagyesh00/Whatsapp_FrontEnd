import { Alert, Button, Snackbar } from '@mui/material'
import { green } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../utils/firebasedb'
import { setCurrentUser } from '../../Redux/features/userSlice'
import { useDispatch } from 'react-redux'
// import { currentUser, register } from '../../Redux/Auth/Action'

const SignUp = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [wrongOpenSnackbar, setWrongOpenSnackbar] = useState(false);
    const [inputData, setInputData] = useState({ full_name: '', email: '', password: '' })
    // const [full_name, setFull_name] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const token = localStorage.getItem('token')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {

        const res = await setUser(inputData.full_name, inputData.email, inputData.password)
        if (res.data.status === 'success') {
            setOpenSnackbar(true);
            dispatch(setCurrentUser(res.data));
            navigate('/Signup')
        } else {
            setWrongOpenSnackbar(true);
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputData((values) => ({ ...values, [name]: value }))
    }

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
        setWrongOpenSnackbar(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/');
        }
    }, [localStorage.getItem('token'), navigate]);

    return (
        <div>

            <div className='flex flex-col justify-center min-h-screen items-center'>
                <div className='w-[30%] p-10 shadow-md bg-white'>

                    <form onSubmit={handleSubmit} className='space-y-5' >

                        <div>
                            <p className='mb-2'>User Name</p>
                            <input
                                className='py-2 px-3 outline outline-green-600 w-full rounded-md border'
                                type="text"
                                placeholder='Enter username'
                                name='full_name'
                                onChange={(e) => handleChange(e)}
                                value={inputData.full_name}
                            />
                        </div>

                        <div>
                            <p className='mb-2'>Email</p>
                            <input
                                className='py-2 px-3 outline outline-green-600 w-full rounded-md border'
                                type="text"
                                placeholder='Enter your Email'
                                name='email'
                                onChange={(e) => handleChange(e)}
                                value={inputData.email}
                            />
                        </div>

                        <div>
                            <p className='mb-2'>Password</p>
                            <input
                                className='py-2 px-2 outline outline-green-600 w-full rounded-md border'
                                type="text"
                                placeholder='Enter your Password'
                                name='password'
                                onChange={(e) => handleChange(e)}
                                value={inputData.password}
                            />
                        </div>

                        <div>
                            <Button
                                type='submit'
                                sx={{ bgcolor: green[700], padding: ".5rem 0rem" }}
                                className='w-full bg-green-600'
                                variant='contained'>SignUp</Button>
                        </div>
                    </form>

                    <div className='flex space-x-3 items-center mt-5'>
                        <p className='m-0'>Already Have Account</p>
                        <Button variant='text' onClick={() => navigate('/signin')}>Signin</Button>

                    </div>

                </div>
            </div>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                    Your Account Successfully Created!
                </Alert>
            </Snackbar>
            <Snackbar open={wrongOpenSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity='error' sx={{ width: '100%' }}>
                    Invalid Email or Password!
                </Alert>
            </Snackbar>

        </div>
    )
}

export default SignUp