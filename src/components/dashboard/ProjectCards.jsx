import React, { useState, useEffect } from 'react'
import { API_LINK } from '../../../constants';

import ProjectCard from '../cards/ProjectCard'
import ProjectCardData from '../cards/ProjectCardData'

export default function ProjectCards({handleProDetails, filter}) {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetchProjectData();
  }, [filter]);

  const fetchProjectData = () => {
    fetch(`${API_LINK}/api/project/${filter}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(filter,'filteres' ,data.data);
        setProjectData(data.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1 className="text-3xl">
        Projects {filter}
      </h1>
      <div className=' h-[800px] flex flex-wrap justify-center p-4 pb-8 item-top overflow-y-scroll'>
        {projectData.map((projectData, index) => (
          <ProjectCardData key={index} projectData={projectData} handleProDetails={handleProDetails} />
        ))}
      </div>
    </>
  )
}
