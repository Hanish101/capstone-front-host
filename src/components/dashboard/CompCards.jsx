import React, { useState, useEffect } from 'react'
import { API_LINK } from '../../../constants';

import CompanyCard from '../cards/CompanyCard';
import CompanyCardData from '../cards/CompanyCardData';

export default function CompCards({handleBusDetails, filter}) {

  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    fetchBusinessData();
  }, [filter]);

  const fetchBusinessData = () => {
    fetch(`${API_LINK}/api/business/${filter}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(filter, data.data);
        setCompanyData(data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1 className="text-3xl">
        Businesses
      </h1>
      <div className='h-full flex flex-wrap justify-center space-x-4 item-top'>
        {companyData.slice(0, 6).map((companyData, index) => (
          <CompanyCardData key={index} companyData={companyData} handleBusDetails={handleBusDetails}/>
        ))}
      </div>
    </>
  )
}
