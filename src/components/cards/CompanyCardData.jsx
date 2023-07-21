import React from 'react'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';

const companyData = {
    company_name: 'ABC Corporation',
    location: 'New York City',
    industry: 'Technology',
    rating: [1, 1, 1, 5, 5, 5],
    testimonial: [],
    description: 'ABC Corporation is a leading technology company specializing in software development and digital solutions.',
    present: true,
    createdAt: '2023-07-12T11:02:40.726Z',
    updatedAt: '2023-07-12T11:02:40.726Z',
};

export default function CompanyCardData({companyData, handleBusDetails}) {

    const handleDetailClick = () => {
        handleBusDetails({ companyData });
        // console.log("Compdata",companyData)
    }

    const date = new Date(companyData.createdAt);
    const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const { rating } = companyData;

    const averageRating = rating.reduce((sum, rat) => sum + rat, 0) / rating.length;

    const stars = [];

    for (let i = 0; i < Math.floor(averageRating); i++) {
        stars.push(<StarPurple500OutlinedIcon key={i} style={{ marginRight: -5 }} />);
    }

    if (averageRating % 1 >= 0.3) {
        stars.push(<StarHalfOutlinedIcon key={stars.length} style={{ marginRight: -5 }} />);
    }


    return (
        <div className='w-[300px] h-[350px] bg-blue-300 mt-4 ml-4 rounded-2xl' onClick={()=>handleDetailClick()}>
            <div className='h-[270px] bg-blue-500 m-3 rounded-xl'>
                <div className='h-[70px] flex justify-between items-center'>
                    <div className='bg-white m-3 py-2 px-4 rounded-full'>{formattedDate}</div>
                </div>
                <div className='h-[60px] flex justify-between items-center'>
                    <div>
                        <div className="h-12 w-12 rounded-full bg-gray-300 mx-3"></div>
                    </div>
                    <div className='h-[60px] text-2xl mx-3 font-semibold flex items-center'>{companyData.company_name}</div>
                </div>
                <div className='h-[60px] mx-3 pt-3 p-1'>
                    <div className=''>Industry</div>

                    <div className="flex -space-x-2 overflow-hidden font-semibold text-xl">
                        {companyData.industry}
                    </div>
                </div>
                <div className='h-[80px] mx-3 flex justify-start items-center'>
                    <LocationOnOutlinedIcon style={{ color: 'white', fontSize: 45 }} />
                    <div>{companyData.location} </div>
                </div>
            </div>
            <div className='h-[40px] m-3 rounded-xl flex flex-row justify-between items-center px-2'>
                <div>
                    <div className='font-semibold space-x-0'>
                        {stars.length > 0 ? (
                            stars.map((star, index) => <React.Fragment key={index}>{star}</React.Fragment>)
                        ) : (
                            <span>No rating</span>
                        )}

                    </div>
                    <div className='text-xs mx-1'>{companyData.rating.length} reviews</div>
                </div>
                <div className='bg-blue-700 text-white py-2 px-4 rounded-xl '>Details</div>
            </div>
        </div>
    )
}
