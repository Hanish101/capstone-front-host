import React, { useState, useEffect } from 'react'
import { API_LINK } from '../../../constants';

import CompanyNavbar from './CompanyNavbar'
import CompanyDetails from './CompanyDetails'
import BusinessDetails from './BusinessDetails';
import Projectdetails from './Projectdetails';
import DevloperDetails from './DevloperDetails';

import DevloperFilter from './Filters/DevloperFilter';
import DevloperViewCompany from './DevloperViewCompany';


export default function CompanyHomePage() {

    // Page change
    const [activePage, setActivePage] = useState('company-home');
    const [activeCard, setActiveCard] = useState(<CompanyDetails />)

    const handlePageChange = (page) => {
        setActivePage(page);
        // console.log(page)
    };

    const handleBusinessClicked = (BusinessData) => {
        console.log("outer", BusinessData)
        setActiveCard(<BusinessDetails {...BusinessData} handleProjectClicked={handleProjectClicked}/>)
    }

    const handleProjectClicked = (ProjectData) => {
        console.log("outer", ProjectData)
        setActiveCard(<Projectdetails projectData={ProjectData} projectView="company"/>)
    }


    let activeFilter;

    useEffect(() => {
        if (activePage === 'developers') {
            setActiveCard(<DevloperViewCompany />)
            activeFilter = <DevloperFilter />;
        } else if (activePage === 'company-home') {
            setActiveCard(<CompanyDetails handleBusinessClicked={handleBusinessClicked} />)
            activeFilter = "";
        }
    }, [activePage]);

    return (
        <div className="flex h-screen">
            <div className="flex-1 flex flex-col bg-blue-400">
                <CompanyNavbar activePage={activePage} onPageChange={handlePageChange} />
                <div className="flex-1 flex">
                    <div className="w-[350px] h-[900px] rounded-b-xl p-8 flex flex-col ">
                        {/* {activeFilter} */}
                    </div>
                    <div className="flex-1 flex flex-row w-full m-4 pt-1">
                        {/* <DevloperViewCompany/> */}
                        {/* <DevloperDetails devData={devData}/> */}
                        {/* <DevloperDetails devID="02dd2014-faa4-48f4-aa24-80279970c87a"/> */}
                        {activeCard}
                        {/* <CompanyDetails handleBusinessClicked={handleBusinessClicked}/> */}
                        {/* <BusinessDetails {...companyData} /> */}
                        {/* <Projectdetails projectData={projectData} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
