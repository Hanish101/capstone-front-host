import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChooseUser() {
    const navigate = useNavigate()
    const [chooseUser, setChooseUser] = useState(null)

    const handleInput = (inputId) => {
        setChooseUser(inputId)
    }

    const handleClick = () => {
        if (chooseUser === 1) {
            navigate('/entry/register')
        }
        else if (chooseUser === 2) {
            navigate('/entry/compsignup')
        }
        else {
            toast("please choose between Developer or Company")
        }
    }

    return (
        <div className='choose-user flex flex-col justify-center'>
            <ToastContainer />
            <h1 className='p-5 m-4 h-5'></h1>
            <h1 className="text-5xl block pb-2 text-center">Create an account</h1>
            <h1 className="text-lg mb-4 pb-4 block text-center">Are you a developer or a company</h1>
            <div className='flex flex-col justify-center'>
                <div className={`px-4 py-2 mx-4 my-2 border-2 border-black rounded  ${chooseUser === 1 ? 'border-secondary' : ''}`} onClick={() => handleInput(1)}>
                    <div className='flex justify-between'>
                        <div>
                            Sign up as a Developer
                            <div className='text-sm'>
                                Something to say...
                            </div>
                        </div>
                        <div className='grid content-center'>
                            <div className={`${chooseUser === 1 ? 'bg-secondary' : 'border-2 border-gray-500'} h-4 w-4 rounded-full grow-0`}></div>
                        </div>
                    </div>
                </div>
                <div className={`px-4 py-2 mx-4 my-2 border-2 border-black rounded  ${chooseUser === 2 ? 'border-secondary' : ''}`} onClick={() => handleInput(2)}>
                    <div className='flex justify-between'>
                        <div>
                            Sign up as an Organisation
                            <div className='text-sm'>
                                Something to say...
                            </div>
                        </div>
                        <div className='grid content-center'>
                            <div className={`${chooseUser === 2 ? 'bg-secondary' : 'border-2 border-gray-500'} h-4 w-4 rounded-full grow-0`}></div>
                        </div>
                    </div>
                </div>
                <button onClick={() => handleClick()} className='btn px-4 py-2 mx-4 mt-4 bg-secondary rounded'> submit </button>
            </div>
            <div className='block pb-2 text-center'>Already have an account? Log in
                <div><Link to='/entry/login' className='pr-1 text-secondary-dark'>As a Developer</Link>|<Link to='/entry/compsignin' className='pl-1 text-secondary-dark'>As an Organisation</Link></div>
            </div>
        </div>
    )
}
