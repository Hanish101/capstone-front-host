import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import DevCards from './DevCards'
import DevFilter from './DevFilter';
import CompCards from './CompCards'
import ProjectCards from './ProjectCards'
import DevloperDetailedCard from '../DetailedViews/DevloperDetailCard';
import ProjectDetailCard from '../DetailedViews/ProjectDetailCard';
import BusinessDetailCard from '../DetailedViews/BusinessDetaileCard';
import CompFilter from './CompFilter';

export default function Dashboard() {

  const handleSignOut = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('accessTokenCreationDate')
    console.log("___signed out___")
  }
  
  // Page change
  const [activePage, setActivePage] = useState('projects');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [activeFilter, setActiveFilter] = useState('');
  // const 

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };
  
  const handlePageChange = (page) => {
    setActivePage(page);
  };
    
  const handleDevDetails = ({ devData }) => {
    console.log(devData)
    setActiveCard(<DevloperDetailedCard devData={devData} />);
    console.log("clicked")
  }

  const handleProDetails = ({ projectData }) =>{
    console.log(projectData)
    setActiveCard(<ProjectDetailCard projectData={projectData} projectView='user'/>);
    console.log("clicked")
  }

  const handleBusDetails = ({ companyData }) =>{
    console.log(companyData)
    setActiveCard(<BusinessDetailCard companyData={companyData} handleProDetails={handleProDetails}/>);
    console.log("clicked")
  }
  
  const [activeCard, setActiveCard] = useState(<DevCards handleDevDetails={handleDevDetails}/>)


  useEffect(() => {
    if (activePage === 'developers') {
      setActiveCard(<DevCards handleDevDetails={handleDevDetails} filter={selectedFilter}/>);
      setActiveFilter(<DevFilter handleFilterSelect={handleFilterSelect}/>);
    } else if (activePage === 'companies') {
      setActiveCard(<CompCards handleBusDetails={handleBusDetails} filter={selectedFilter}/>);
      setActiveFilter(<CompFilter handleFilterSelect={handleFilterSelect}/>);
    } else if (activePage === 'projects') {
      setActiveCard(<ProjectCards handleProDetails={handleProDetails} filter={selectedFilter}/>);
      setActiveFilter(<DevFilter handleFilterSelect={handleFilterSelect}/>);
    }
  }, [activePage, selectedFilter]);

    return (
    <div className="flex h-screen bg-offwhite">
      <div className="flex-1 flex flex-col">
        <NavBar activePage={activePage} onPageChange={handlePageChange} />
        <div className="flex-1 flex">
          <div className="w-[350px] h-[900px] hidden md:block rounded-b-xl bg-gray-200 p-8 flex flex-col overflow-y-scroll">
            {activeFilter}
          </div>
          <div className="flex-1 flex flex-col m-4 pt-1">
            {/* {selectedFilter} */}
            {activeCard}
            {/* <DevloperDetailedCard /> */}
            {/* <ProjectDetailCard/> */}
            {/* <BusinessDetailCard companyData={companyData}/> */}
          </div>
        </div>
      </div>
    </div>
  )
}
