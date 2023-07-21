import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CompanyNavbar({ activePage, onPageChange }) {

    const navigate = useNavigate()

    const logoutFunction = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('accessTokenCreationDate')
        localStorage.removeItem('userID')
        navigate('/')

    }


    return (

        <nav className='w-full bg-indigo-950 h-[80px]'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-white font-semibold text-3xl">Logo</span>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex space-x-4 border-indigo-950">
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg border-b-2 hover:border-blue-300 ${activePage === 'company-home' ? 'text-blue-300 border-blue-300': 'border-indigo-950'}`}
                            onClick={() => onPageChange('company-home')}>
                                Company homepage
                            </div>
                            {/* <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg border-b-2 hover:border-blue-300 ${activePage === 'developers' ? 'text-blue-300 border-blue-300': 'border-indigo-950'}`}
                            onClick={() => onPageChange('developers')}>
                                Developers
                            </div> */}

                        </div>
                    </div>
                    <div className="hidden sm:flex items-center">
                        <div className="flex items-center justify-center rounded-full bg-white h-8 w-8">
                            <span className="text-gray-800">H</span>
                        </div>
                        <span className="text-white ml-2">Hanish Patil</span>
                        <button className='bg-white px-2 py-1 rounded-lg mx-6 hover:bg-gray-200' onClick={logoutFunction}>Log out</button>
                    </div>
                </div>
            </div>
        </nav>

    );

}
