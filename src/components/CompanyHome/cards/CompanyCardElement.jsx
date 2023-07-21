import React from "react";

export default function CompanyCardElement({ companyName, location, industry, projects, onClick }){
  return (
    <div className="w-[300px] h-[300px] bg-blue-200 rounded-lg shadow-lg p-4 relative" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-4">{companyName}</h2>
      <div className="mb-2">
        <p className="text-lg font-semibold">Location: {location}</p>
        <p className="text-lg font-semibold">Industry: {industry}</p>
      </div>
      <div className="mb-2 flex flex-wrap">
        {projects?.map((project, index) => (
          <button
            key={index}
            className="bg-blue-400 text-white px-2 py-1 rounded-lg mr-2 mb-2 text-sm"
          >
            {project}
          </button>
        ))}
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 absolute bottom-4 right-4">
        Details
      </button>
    </div>
  );
};