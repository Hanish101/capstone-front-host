import React, { useEffect, useState } from 'react';
import { CheckCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { API_LINK } from '../../../constants';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DevloperCardData from '../cards/DevloperCardData';


export default function ProjectDetailCard({ projectData }) {

  const [developers, setDevelopers] = useState([]);
  const [applied, setApplied] = useState(false);

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    if (projectData.devlist.includes(userID) || projectData.team.includes(userID)) {
      setApplied(true);
    }

  }, []);

  const applyProject = () => {
    if (!applied) {
      fetch(`${API_LINK}/u/api/project/${projectData.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          devlist: userID
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.data) {
            setApplied(true);
          }
        })
        .catch((error) => toast(error))
    }

  }

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };


  return (
    <div className="w-full flex flex-col bg-white rounded-xl shadow-lg">
      <ToastContainer />
      <div className="h-300 rounded-t-xl bg-white flex flex-col justify-between">
        <div className="p-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-2 text-black">{projectData.project_name}</h2>
            {applied ? (
              <button className="text-md text-black mb-4 px-4 py-2 rounded-lg bg-gray-400 hover:bg-gray-500">
                Applied
              </button>
            ) : (
              <button
                className="text-md text-white mb-4 bg-black px-4 py-2 rounded-lg hover:bg-gray-800"
                onClick={() => applyProject()}
              >
                Apply
              </button>
            )}
          </div>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <CheckCircleOutline className="text-black" />
              <span className="text-black">{projectData.timeframe}</span>
            </div>
            <div className="flex items-center">
              <RemoveCircleOutline className="text-black" />
              <span className="text-black">{projectData.devlist.length} Developers</span>
            </div>
          </div>

          <div className="flex flex-wrap">
            {projectData.technology.map((tech, index) => (
              <div key={index} className="bg-gray-300 text-gray-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-black rounded-b-xl">
          <div className="text-white font-semibold">${projectData.counter ? 'Active' : 'Inactive'}</div>
          <div className="text-white text-xs">{formatDate(projectData.createdAt)}</div>
        </div>
      </div>


      <div className='mx-6 text-lg font-semibold'>Devlopers</div>
      <div className='bg-blue-200 flex-1 grid grid-cols-4 gap-4 justify-end rounded-xl mx-4 p-2'>
        {developers.map((developer) => (
          developer.data && developer.data.id ? (
            <DevloperCardData key={developer.data.id} devData={developer.data} handleDevDetails={() => { }} />
          ) : (
            <div key={Math.random()} className="text-red-600 font-semibold">
              Missing developer data
            </div>
          )
        ))}
      </div>
    </div>
  )
}
