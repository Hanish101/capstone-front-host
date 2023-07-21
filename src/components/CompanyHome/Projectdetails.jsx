import React from 'react'
import { useEffect, useState } from 'react';
import { API_LINK } from '../../../constants';

import { CheckCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import DevloperCardData from '../cards/DevloperCardData';


export default function Projectdetails({ projectData, projectView }) {

  const [developers, setDevelopers] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {

    const fetchData = async (devID) => {
      try {
        const response = await fetch(`${API_LINK}/api/dev/${devID}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(`Error fetching data for element ${element}:`, error);
        return null;
      }
    };

    const fetchDataArray = async () => {
      const promises = projectData.devlist.map(fetchData);
      const fetchedData = await Promise.all(promises);
      // console.log("datafetched", fetchedData)
      setDevelopers(fetchedData);
    };

    fetchDataArray();
  }, [projectData.devlist]);

  // Update project
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const skillsData = [
    ['javascript', 'JavaScript'],
    ['python', 'Python'],
    ['java', 'Java'],
    ['html', 'HTML'],
    ['css', 'CSS'],
    ['react', 'React.js'],
    ['node', 'Node.js'],
    ['docker', 'Docker'],
    ['mongodb', 'MongoDB'],
    ['uiux', 'UI/UX'],
    ['sql', 'SQL'],
    ['git', 'Git'],
    ['agile', 'Agile'],
    ['aws', 'AWS'],
    ['testing', 'Testing'],
  ];

  const [selectedSkills, setSelectedSkills] = useState(projectData.technology);
  const [projectName, setProjectName] = useState(projectData.project_name);
  const [price, setPrice] = useState(parseInt(projectData.price));
  const [timeframe, setTimeframe] = useState(projectData.timeframe);
  const [descriptionP, setDescriptionP] = useState(projectData.description);

  const toggleSkillSelection = (skill) => {
    const isSelected = selectedSkills.includes(skill);
    if (isSelected) {
      setSelectedSkills(selectedSkills.filter((selected) => selected !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleUpdateProject = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("accessToken");

    console.log("___Update__", projectData.id)
    console.log("token", token)

    if (token) {
      fetch(`${API_LINK}/o/api/project/${projectData.id}`, {
        method: 'PUT',
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
        .then((data) => {
          if (data.message) {
            toast(data.message)
          }
          console.log("___Update___", data.data)
        })

        .catch((err) => toast(err))
    }
    else {
      toast("Please login to delete")
    }
    closeModal()
  }


  // Delete project
  const deleteProject = (event, id) => {
    event.preventDefault();

    const token = localStorage.getItem("accessToken");

    console.log("___delete___", id)
    console.log("token", token)

    if (token) {
      fetch(`${API_LINK}/o/api/project/${id}`, {
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
          if (data.error) {
            console.log("___error___", data.error)
          }
          console.log("___delete___", data.data)
        })
        .catch((err) => toast(err))
    }
    else {
      toast("Please login to delete")
    }
  }



  return (
    <div className='w-full flex flex-col'>
      <ToastContainer />
      <div className="h-300 rounded-xl bg-blue-200 mx-4">
        <div className="p-4 bg-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xl text-center font-bold mb-2 text-black">{projectData.project_name}</div>
            {projectView === 'company' ? (
              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-4" onClick={openModal}>Update</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg" onClick={(event) => deleteProject(event, projectData.id)}>Delete</button>
              </div>
            ) :
              null
            }
          </div>
          <p className="text-lg mb-4 text-black">{projectData.description}</p>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <CheckCircleOutline className="text-black" />
              <span className="text-black">{projectData.timeframe}</span>
            </div>
            <div className="flex items-center">
              <RemoveCircleOutline className="text-black" />
              <span className="text-black">{projectData.team.length} Developers</span>
            </div>
          </div>
          <div className="flex flex-wrap">
            {projectData.technology.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-200 text-black py-1 px-3 rounded-lg text-sm mr-2 mb-2"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-2 bg-black ">
          <div className="text-white text-xs">{projectData.createdAt}</div>
        </div>
      </div>
      <div className='mx-6 text-lg font-semibold'>Developers</div>
      <div className='bg-blue-200 flex-1 grid grid-cols-5 gap-4 justify-end rounded-xl mx-4 p-2'>
        {developers.map((developer) => (
          // Check for missing data in developer object
          developer.data && developer.data.id ? (
            <DevloperCardData key={developer.data.id} devData={developer.data} handleDevDetails={() => { }} />
          ) : (
            <div key={Math.random()} className="text-red-600 font-semibold">
              Missing developer data
            </div>
          )
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
                <div className="flex items-center justify-center">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <h3 className="text-2xl leading-6 font-medium text-gray-900 mb-4">Add Project</h3>
                    <form onSubmit={handleUpdateProject} className="w-80">
                      <div className="mb-4">
                        <label htmlFor="project_name" className="block font-medium text-gray-700">
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

                      <div id="devSkills" className="flex flex-wrap justify-between mb-4">
                        {skillsData.map((skill, index) => (
                          <div
                            key={index}
                            className={`py-2 cursor-pointer`}
                            onClick={() => toggleSkillSelection(skill[0])}
                          >
                            <div
                              className={`px-4 flex items-center justify-center h-10 rounded-lg mx-1 ${selectedSkills.includes(skill[0]) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                            >
                              {skill[1]}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="description" className="block font-medium text-gray-700">
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
                        <label htmlFor="timeframe" className="block font-medium text-gray-700">
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
                        <label htmlFor="price" className="block font-medium text-gray-700">
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

                      <div className="mt-4 flex justify-end">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          onClick={closeModal}
                          className="inline-flex justify-center ml-2 py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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
    </div>
  )
}
