import { Alert, Button, Snackbar } from '@mui/material'
import { green } from '@mui/material/colors'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const[openSnackbar,setOpenSnackbar] = useState(false)
    const [inputData, setInputData] = useState({ email: '', password: '' })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit');
        setOpenSnackbar(true)
    }

    const handleChange = () => {
        console.log('handle submit');
    }

    const handleSnackbarClose = ()=>{
        setOpenSnackbar(false)
    }

    return (
        <div>

            <div className='flex justify-center h-screen items-center'>
                <div className='w-[30%] p-10 shadow-md bg-white'>

                    <form onSubmit={handleSubmit} className='space-y-5' >
                        <div>
                            <p className='mb-2'>Email</p>
                            <input
                                placeholder='Enter your Email'
                                onChange={handleChange}
                                value={inputData.email}
                                type="text"
                                className='py-2 px-3 outline outline-green-600 w-full rounded-md border' />
                        </div>

                        <div>
                            <p className='mb-2'>Password</p>
                            <input
                                placeholder='Enter your Password'
                                onChange={handleChange}
                                value={inputData.password}
                                type="text"
                                className='py-2 px-3 outline outline-green-600 w-full rounded-md border' />
                        </div>

                        <div>
                            <Button
                                type='submit'
                                sx={{ bgcolor: green[700], padding: ".5rem 0rem" }}
                                className='w-full bg-green-600'
                                variant='contained'>Signin</Button>
                        </div>
                    </form>

                    <div className='flex space-x-3 items-center mt-5'>
                        <p className='m-0'>Create New Account</p>
                        <Button variant='text' onClick={() => navigate('/signup')}>Signup</Button>

                    </div>

                </div>
            </div>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                    Login Successfull!
                </Alert>
            </Snackbar>

        </div>
    )
}

export default Signin