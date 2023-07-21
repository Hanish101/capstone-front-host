import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { API_LINK } from '../../../../constants';
import axios from 'axios';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DevImgRegister() {

    const skillsData = [
        'javaScript',
        'python',
        'java',
        'html',
        'css',
        'react',
        'node.js',
        'sql',
        'git',
        'agile',
        'aws',
        'docker',
        'testing',
        'ui/ux design',
    ];

    const [selectedSkills, setSelectedSkills] = useState([]);

    const toggleSkillSelection = (skill) => {
        const isSelected = selectedSkills.includes(skill);
        if (isSelected) {
            setSelectedSkills(selectedSkills.filter((selected) => selected !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    const handleImaegeSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        // formData.append('skills', JSON.stringify(selectedSkills));
        // formData.append('skills',(selectedSkills));

        formData.set('price', parseInt(10));

        selectedSkills.forEach((skill) => {
            formData.append('skills[]', skill);
          });



        const formDataEntries = Array.from(formData.entries());
        console.log(formDataEntries);
        
        const token = localStorage.getItem('accessToken')

        // axios.post(`${API_LINK}/u/api/dev`, formData, {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //       'Content-Type': 'multipart/form-data', // No need to set Content-Type explicitly for FormData
        //     },
        //   })
        //     .then((response) => {
        //       console.log("___response___", response.data);
        //       if (response.data.message) {
        //         toast(response.data.message);
        //       }
        //     })
        //     .catch((error) => {
        //       console.log("__error__", error);
        //     });



        // fetch(`${API_LINK}/u/api/dev`, {
        //     method: 'POST',
        //     body: formData,
        //     headers: {
        //         'Authorization': `Bearer ${token}`,
        //         // 'Content-Type': 'application/json',
        //     },
        // })
        //     .then((response) => {

        //         console.log("___response___", response)
        //         return response.json()
        //     })
        //     .then((data) => {
        //         console.log("___data___", data)
        //         if (data.message) {
        //             toast(data.message)
        //         }
        //     })
        //     .catch((err) => {
        //         console.log("__error__", err)
        //     })
    };
    return (
        <div>
            <div className='register flex flex-col items-center'>
                <ToastContainer />
                <h1 className="text-3xl block pb-2 text-center md:text-5xl">Create a Developer account</h1>
                <h1 className="text-lg mb-4 pb-4 block text-center">Register using your information</h1>
                <div className="max-w-md w-full p-8">
                    <form onSubmit={handleImaegeSubmit}>

                        <div className="mb-4">
                            <label htmlFor="image" className="block mb-2">
                                Image:
                            </label>
                            <input
                                type="file"
                                id="image"
                                name='image'
                                className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="devName" className="block mb-2">
                                Developer first Name:
                            </label>
                            <input
                                type="text"
                                id="devFName"
                                name="dev_fname"
                                className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="devName" className="block mb-2">
                                Developer Last Name:
                            </label>
                            <input
                                type="text"
                                id="devLName"
                                name='dev_lname'
                                className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="devName" className="block mb-2">
                                Cost per hour:
                            </label>
                            <input
                                type="number"
                                id="price"
                                name='price'
                                className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="devSkills" className="block mb-2">
                                Developer skills:
                            </label>

                            <div id="devSkills" className="flex flex-wrap justify-between">
                                {skillsData.map((skill, index) => (
                                    <div
                                        key={index}
                                        className={`py-2 cursor-pointer`}
                                        onClick={() => toggleSkillSelection(skill)}
                                    >
                                        <div
                                            className={`px-4 flex items-center justify-center h-10 rounded-lg ${selectedSkills.includes(skill) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                                }`}
                                        >
                                            {skill}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="mb-4">
                            <label htmlFor="address" className="block mb-2">
                                Address:
                            </label>
                            <input
                                type="text"
                                id="address"
                                name='address'
                                className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block mb-2">
                                Phone:
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name='phone'
                                className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="portfolioLink" className="block mb-2">
                                Portfolio Link:
                            </label>
                            <input
                                type="text"
                                id="portfolioLink"
                                name='portfolio_link'
                                className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                            />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="bio" className="block mb-2">
                                Bio:
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="background" className="block mb-2">
                                Background:
                            </label>
                            <textarea
                                id="background"
                                name="background"
                                className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-secondary py-2 px-4 rounded hover:bg-secondary-dark"
                        >
                            Register
                        </button>
                    </form>
                    <div className='block pb-2 text-center'>Already have an account? <Link to='/entry/login' className='pr-1 text-secondary-dark'>Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
