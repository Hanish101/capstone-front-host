import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_LINK } from '../../../constants';



export default function DevRegister() {

    const navigate = useNavigate();

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

    const [devFName, setDevFName] = useState("")
    const [devLName, setDevLName] = useState("")
    const [price, setPrice] = useState(0)
    const [bio, setBio] = useState("")
    const [background, setBackground] = useState("")
    const [portfolioLink, setPortfolioLink] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const [selectedSkills, setSelectedSkills] = useState([]);

    const [file, setFile] = useState(null);

    const toggleSkillSelection = (skill) => {
        const isSelected = selectedSkills.includes(skill);
        if (isSelected) {
            setSelectedSkills(selectedSkills.filter((selected) => selected !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(file)

        const formData = new FormData();
        formData.append('dev_fname', devFName);
        formData.append('dev_lname', devLName);
        formData.append('price', parseInt(price));
        formData.append('bio', bio);
        formData.append('background', background);
        formData.append('portfolio_link', portfolioLink);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('email', email);

        selectedSkills.forEach((skill) => {
            formData.append('skills[]', skill);
        });

        formData.append('image', file)

        formData.set('price', price)

        const token = localStorage.getItem('accessToken')


        fetch(`${API_LINK}/u/api/dev`, {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((response) => {

                console.log("___response___", response)
                return response.json()
            })
            .then((data) => {
                console.log("___data___", data)
                if (data.message) {
                    toast(data.message)
                }
                if(data.data.id){
                    localStorage.setItem('userID', data.data.id);
                }
                navigate('/dashboard')
            })
            .catch((err) => {
                toast("__error__", err)
            })


    }



    return (
        <div className='register flex flex-col items-center'>
            <ToastContainer />
            <h1 className="text-3xl block pb-2 text-center md:text-5xl">Create a Developer account</h1>
            <h1 className="text-lg mb-4 pb-4 block text-center">Register using your information</h1>
            <div className="max-w-md w-full p-8">
                <form onSubmit={(event) => handleSubmit(event)}>

                    <div className="mb-4">
                        <label htmlFor="image" className="block mb-2">
                            Image:
                        </label>
                        <input
                            type="file"
                            id="image"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                            required
                        />
                    </div>

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
                            required
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
                            required
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
                            required
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
                                        className={`px-4 flex items-center justify-center h-10 rounded-lg ${selectedSkills.includes(skill[0]) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
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


    )
}
