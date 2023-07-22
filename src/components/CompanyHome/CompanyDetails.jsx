import React, { useState, useEffect } from 'react'
import { API_LINK } from '../../../constants';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CompanyCardElement from './cards/CompanyCardElement';

export default function CompanyDetails({ handleBusinessClicked }) {

    const [file, setFile] = useState(null);
    const [orgData, setOrgData] = useState({});

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("accessToken");
        console.log(token)
        const formData = new FormData(e.target);

        formData.append('image', file)

        fetch(`${API_LINK}/o/api/company`, {
            method: 'POST',
            body:formData,
            headers: { 
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response)=>response.json())
        .then((data)=> {
            toast("Business Added Successfully")
            fetchOrgData();
        })
        .catch((error)=> {console.log(error)})

        closeModal()


    }

    useEffect(() => {
        fetchOrgData();
    }, []);

    const fetchOrgData = () => {
        const accessToken = localStorage.getItem('accessToken');

        fetch(`${API_LINK}/o/api/company`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.data){
                    console.log(data.data);
                    setOrgData(data.data);
                }
                else{
                    toast(data.message)
                }
            })
            .catch((error) => console.log(error));
    };

    const handleBusinessClick = (company) => {
        handleBusinessClicked(company);
    }



    return (
        <div className='flex flex-wrap bg-blue-300 w-full p-4 rounded-lg'>
            <ToastContainer />
            <div className='p-4 flex-1 flex w-full justify-start items-between flex-wrap gap-4 border-blue-200 bg-blue-300 border-r-lg ml-4'>
                {orgData.Businesses?.map((company, index) => (
                    <CompanyCardElement
                        onClick={() => handleBusinessClick(company)}
                        key={index}
                        companyData = {company}
                    />
                ))}

                {showModal && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>

                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Add Business</h3>
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-4">
                                                    <label htmlFor="companyName" className="block mb-2">
                                                        Company Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="companyName"
                                                        name="company_name"
                                                        className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="companyLogo" className="block mb-2">
                                                        Company Logo:
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="image"
                                                        onChange={(e) => setFile(e.target.files[0])}
                                                        className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="location" className="block mb-2">
                                                        Location:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="location"
                                                        name="location"
                                                        className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="industry" className="block mb-2">
                                                        Industry:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="industry"
                                                        name="industry"
                                                        className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="description" className="block mb-2">
                                                        Description:
                                                    </label>
                                                    <textarea
                                                        id="description"
                                                        name="description"
                                                        className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
                                                        rows={4}
                                                    ></textarea>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                >
                                                    Add
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={closeModal}
                                                    className="inline-flex justify-center ml-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                                >
                                                    Cancel
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}



            </div>
            <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 h-[40px] rounded hover:bg-blue-600">
                    Add Business
                </button>
        </div>
    )
}
