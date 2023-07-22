import React, { useEffect, useState } from 'react'
import { API_LINK } from '../../../constants';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NavBar({ activePage, onPageChange }) {

    const navigate = useNavigate()

    const [userData, setUserData] = useState('')
    const [devFName, setDevFName] = useState('');
    const [devLName, setDevLName] = useState('');
    const [price, setPrice] = useState('');
    const [bio, setBio] = useState('');
    const [background, setBackground] = useState('');
    const [portfolioLink, setPortfolioLink] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);

    useEffect(() => {
        const userID = localStorage.getItem('userID')
        if (userID) {
            fetch(`${API_LINK}/api/dev/${userID}`)
                .then((response) => response.json())
                .then((data) => {
                    setUserData(data.data)
                    console.log("user data", data.data)
                })
                .catch((error) => toast(error))
        }
    }, [])

    useEffect(() => {
        // Fill the values only after userData is fetched
        setDevFName(userData.dev_first_name || '');
        setDevLName(userData.dev_last_name || '');
        setPrice(userData.price || '');
        setBio(userData.bio || '');
        setBackground(userData.background || '');
        setPortfolioLink(userData.portfolio_link || '');
        setAddress(userData.address || '');
        setPhone(userData.phone || '');
        setEmail(userData.email || '');
        setSelectedSkills(userData.skills || []);
    }, [userData]);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const skillsData = [
        ['javascript','JavaScript'],
        ['python','Python'],
        ['java','Java'],
        ['html','HTML'],
        ['css','CSS'],
        ['react','React.js'],
        ['node','Node.js'],
        ['docker','Docker'],
        ['mongodb','MongoDB'],
        ['uiux','UI/UX'],
        ['sql','SQL'],
        ['git','Git'],
        ['agile','Agile'],
        ['aws','AWS'],
        ['testing','Testing'],
    ];

    const toggleSkillSelection = (skill) => {
        const isSelected = selectedSkills.includes(skill);
        if (isSelected) {
            setSelectedSkills(selectedSkills.filter((selected) => selected !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("accessToken");
        const userID = localStorage.getItem('userID')

        if (token && userID) {
            fetch(`${API_LINK}/u/api/dev/${userID}`, {
                method: 'PUT',
                // body: formData,
                body: JSON.stringify({
                    dev_fname: devFName,
                    dev_lname: devLName,
                    price: parseInt(price),
                    bio: bio,
                    background: background,
                    portfolio_link: portfolioLink,
                    address: address,
                    phone: phone,
                    email: email,
                    skills: selectedSkills
                }),
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.message) {
                        toast(data.message)
                    }
                    console.log("___update___", data.data)
                })
                .catch((err) => toast(err))
                .finally(() => closeModal())
        }
        else {
            toast("Please sign in to update your profile")
            closeModal()
        }
    }

    const logoutFunction = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('accessTokenCreationDate')
        localStorage.removeItem('userID')
        navigate('/')

    }



    return (

        <nav className='w-full bg-black h-[80px]'>
            <ToastContainer />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                        <span className="flex-1 text-center text-4xl font-semibold text-white hidden md:block">SkillHub</span>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex space-x-4 border-black">
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg border-b-2 hover:border-white ${activePage === 'projects' ? 'text-white border-white' : 'border-black'}`}
                                onClick={() => onPageChange('projects')}>
                                Project
                            </div>
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg border-b-2 hover:border-white ${activePage === 'companies' ? 'text-white border-white' : 'border-black'}`}
                                onClick={() => onPageChange('companies')}>
                                Company
                            </div>
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg border-b-2 hover:border-white ${activePage === 'developers' ? 'text-white border-white' : 'border-black'}`}
                                onClick={() => onPageChange('developers')}>
                                Developers
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center">
                        {userData === '' ? (
                            <div className="flex items-center justify-center rounded-full bg-white h-8 w-8"></div>
                        ) : (
                            <>
                                <div className='flex items-center'>
                                    <div className="flex items-center justify-center rounded-full bg-white h-8 w-8">
                                        <span className="text-gray-800">{userData.dev_first_name[0].toUpperCase()}</span>
                                    </div>
                                    <span className="text-white ml-2">{userData.dev_first_name} {userData.dev_last_name}</span>
                                    <button className='bg-white px-2 py-1 rounded-lg hover:bg-gray-200 mx-6' onClick={openModal}>Update</button>
                                    <button className='bg-white px-2 py-1 rounded-lg hover:bg-gray-200' onClick={logoutFunction}>Log out</button>
                                </div>
                                
                            </>
                        )
                        }
                    </div>
                </div>
            </div>

            {/* Dev update */}
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
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Update Profile</h3>
                                        <div className="max-h-80vh lg:max-h-60vh overflow-y-auto">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-4">
                                                    <label htmlFor="devFName" className="block mb-2">
                                                        Developer First Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="devFName"
                                                        value={devFName}
                                                        onChange={(e) => setDevFName(e.target.value)}
                                                        className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="devLName" className="block mb-2">
                                                        Developer Last Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="devLName"
                                                        value={devLName}
                                                        onChange={(e) => setDevLName(e.target.value)}
                                                        className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="devLName" className="block mb-2">
                                                        Cost of working:
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="price"
                                                        value={price}
                                                        onChange={(e) => setPrice(e.target.value)}
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
                                                                onClick={() => toggleSkillSelection(skill[0])}
                                                            >
                                                                <div
                                                                    className={`px-4 mx-1 flex items-center justify-center h-10 rounded-lg ${selectedSkills.includes(skill[0]) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                                                        }`}
                                                                >
                                                                    {skill[1]}
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
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                                                    />
                                                </div>

                                                <div className="mb-4">
                                                    <label htmlFor="phone" className="block mb-2">
                                                        Phone:
                                                    </label>
                                                    <input
                                                        type="phone"
                                                        id="phone"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
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
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
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
                                                        value={portfolioLink}
                                                        onChange={(e) => setPortfolioLink(e.target.value)}
                                                        className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                                                    />
                                                </div>


                                                <div className="mb-4">
                                                    <label htmlFor="bio" className="block mb-2">
                                                        Bio:
                                                    </label>
                                                    <textarea
                                                        id="bio"
                                                        value={bio}
                                                        onChange={(e) => setBio(e.target.value)}
                                                        className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                                                    ></textarea>
                                                </div>

                                                <div className="mb-4">
                                                    <label htmlFor="background" className="block mb-2">
                                                        Background:
                                                    </label>
                                                    <textarea
                                                        id="background"
                                                        value={background}
                                                        onChange={(e) => setBackground(e.target.value)}
                                                        className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                                                    ></textarea>
                                                </div>



                                                <div className="mt-4">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                    >
                                                        Update
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={closeModal}
                                                        className="inline-flex justify-center ml-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>

    );

}
