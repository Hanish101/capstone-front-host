import React, { useState } from 'react';
import { API_LINK } from '../../../constants';

import ProjectCard from '../cards/ProjectCard';
import ProjectCardData from '../cards/ProjectCardData';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BusinessDetails({ id, company_name,logoUrl, Projects, location, industry, description, present, createdAt, updatedAt, handleProjectClicked }) {
    const [showModal, setShowModal] = useState(false);

    const dateFormat = (formdate) => {
        console.log("___date___", formdate)
        const date = new Date(formdate);
        return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
    }

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const openUpdateModal = () => {
        console.log("___update___")
        setShowUpdateModal(true);
    };

    const closeUpdateModal = () => {
        setShowUpdateModal(false)
    };

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

    // Project creation
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [price, setPrice] = useState(10);
    const [timeframe, setTimeframe] = useState('');
    const [descriptionP, setDescriptionP] = useState('');
    // Business update states
    const [companyUpdate, setCompanyUpdate] = useState(company_name);
    const [industryUpdate, setIndustryUpdate] = useState(industry);
    const [descriptionUpdate, setDescriptionUpdate] = useState(description);
    const [locationUpdate, setLocationUpdate] = useState(location);

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

        fetch(`${API_LINK}/o/api/project/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                project_name: projectName,
                price: price,
                description: descriptionP,
                technology: selectedSkills,
                timeframe: timeframe
            }),
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => toast(err))

        closeModal();
    };

    const handleProDetails = (projectData) => {
        console.log("clicked on project", projectData)
        handleProjectClicked(projectData)
    }

    const handleBusiness = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("accessToken");

        console.log(companyUpdate, locationUpdate, industryUpdate, descriptionUpdate)

        if (token) {
            fetch(`${API_LINK}/o/api/company/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    company_name: companyUpdate,
                    location: locationUpdate,
                    industry: industryUpdate,
                    description: descriptionUpdate
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
        }
    }

    const deleteBusiness = (event, id) => {
        event.preventDefault();

        const token = localStorage.getItem("accessToken");

        console.log("___delete___", id)
        console.log("token", token)

        if (token) {
            fetch(`${API_LINK}/o/api/company/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.message) {
                        toast(data.message)
                    }
                    console.log("___delete___", data.message)
                })
                .catch((err) => toast(err))
        }
        else {
            toast("Please login to delete")
        }
    }



    return (
        <div className='w-full flex flex-col '>
            <ToastContainer />
            <div className="relative w-auto rounded-lg shadow-lg">
                <div className="bg-gray-100 p-4">
                    <h2 className="text-3xl font-bold mb-4 text-center">{company_name}</h2>
                    <div className="flex flex-row justify-between items-start">
                        <div>
                            <p className="text-xl mb-4">Location: {location}</p>
                            <p className="text-xl mb-4">Industry: {industry}</p>
                            <p className="text-lg mb-2">{description}</p>
                        </div>
                        <img src={logoUrl} alt="Company Logo" className="w-40 h-40 rounded-full mr-4" />
                    </div>
                </div>
                <div className="bg-gray-200 text-sm px-4 py-2 flex justify-between">
                    <div>
                        <p className="text-xs text-gray-500">Created: {dateFormat(createdAt)}</p>
                        <p className="text-xs text-gray-500">Updated: {dateFormat(updatedAt)}</p>
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-2" onClick={() => openUpdateModal()}>Update</button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" onClick={(event) => deleteBusiness(event, id)}>Delete</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <button className='bg-blue-300 py-2 m-4 w-40 rounded-lg' onClick={openModal}>
                    ADD PROJECT
                </button>
            </div>
            <div className='flex-1 grid grid-cols-4 gap-4 justify-end'>

                {Projects.slice(0, 3).map((project, index) => (
                    <ProjectCardData projectData={project} handleProDetails={() => handleProDetails(project)} key={project.id} />
                ))}

            </div>

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
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Add Project</h3>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-4">
                                                <label htmlFor="project_name" className="block text-sm font-medium text-gray-700">
                                                    Project Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="project_name"
                                                    name="project_name"
                                                    value={projectName}
                                                    onChange={(e) => setProjectName(e.target.value)}
                                                    className="w-full px-2 py-1 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                                                />
                                            </div>

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

                                            <div className="mb-4">
                                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                                    Description
                                                </label>
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    value={descriptionP}
                                                    onChange={(e) => setDescriptionP(e.target.value)}
                                                    className="w-full px-2 py-1 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                                                ></textarea>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700">
                                                    Timeframe
                                                </label>
                                                <input
                                                    type="text"
                                                    id="timeframe"
                                                    name="timeframe"
                                                    value={timeframe}
                                                    onChange={(e) => setTimeframe(e.target.value)}
                                                    className="w-full px-2 py-1 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                                    Price
                                                </label>
                                                <input
                                                    type="number"
                                                    id="price"
                                                    name="price"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    className="w-full px-2 py-1 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                                                />
                                            </div>

                                            <div className="mt-4">
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
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showUpdateModal && (
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
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Add Project</h3>
                                        <form onSubmit={handleBusiness}>
                                            <div className="mb-4">
                                                <label htmlFor="companyName" className="block mb-2">
                                                    Company Name:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="companyName"
                                                    name="company_name"
                                                    value={companyUpdate}
                                                    onChange={(e) => setCompanyUpdate(e.target.value)}
                                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
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
                                                    value={locationUpdate}
                                                    onChange={(e) => setLocationUpdate(e.target.value)}
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
                                                    value={industryUpdate}
                                                    onChange={(e) => setIndustryUpdate(e.target.value)}
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
                                                    value={description}
                                                    onChange={(e) => setDescriptionUpdate(e.target.value)}
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
                                                onClick={() => closeUpdateModal()}
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
    );
}