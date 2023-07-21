import React from 'react';

import ProjectCard from '../cards/ProjectCard';
import ProjectCardData from '../cards/ProjectCardData';

export default function BusinessDetailCard({ companyData, handleProDetails}) {
    console.log(companyData)
    return (
        <div className='w-full flex flex-col'>
            <div className="relative w-auto rounded-lg shadow-lg">
                <div className="bg-gray-100 p-4">
                    <h2 className="text-3xl font-bold mb-4">{companyData.company_name}</h2>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-xl">Location: {companyData.location}</p>
                        <p className="text-xl">Industry: {companyData.industry}</p>
                    </div>
                    <p className="text-lg mb-2">{companyData.description}</p>
                </div>
                <div className="bg-gray-200 text-sm px-4 py-2 flex justify-between">
                    <div>
                        <p className="mb-1">{companyData.present ? "Present" : "Not Present"}</p>
                        <p className="text-xs text-gray-500">Created: {companyData.createdAt}</p>
                        <p className="text-xs text-gray-500">Updated: {companyData.updatedAt}</p>
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-2">Update</button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Delete</button>
                    </div>
                </div>
            </div>

            <div className='bg-blue-200 flex-1 grid grid-cols-4 gap-4 justify-end'>
            {companyData.Projects.map((projectData, index) => (
          <ProjectCardData key={index} projectData={projectData} handleProDetails={handleProDetails} />
        ))}

            </div>



        </div>
    );
}
