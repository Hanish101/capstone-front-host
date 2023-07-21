import React from 'react'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';

export default function CompanyCard() {
    return (
        <div className='w-[300px] h-[350px] bg-blue-300 mt-4 ml-4 rounded-2xl'>
            <div className='h-[270px] bg-blue-500 m-3 rounded-xl'>
                <div className='h-[70px] flex justify-between items-center'>
                    <div className='bg-white m-3 py-2 px-4 rounded-full'>24 mar, 2020</div>
                    <div className="h-10 w-10 rounded-full bg-gray-300 mx-3"></div>
                </div>
                <div className='h-[60px] flex justify-between items-center'>
                    <div>
                        <div className="h-12 w-12 rounded-full bg-gray-300 mx-3"></div>
                    </div>
                    <div className='h-[60px] text-2xl mx-3 font-semibold flex items-center'>Company name</div>
                </div>
                <div className='h-[60px] mx-3 p-1'>
                    <div className='font-semibold'>Developers</div>

                    <div className="flex -space-x-2 overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="https://randomuser.me/api/portraits/men/18.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-gray-50 text-gray-600 text-xs font-medium">
                            +10
                        </div>
                    </div>
                </div>
                <div className='h-[80px] mx-3 flex justify-start items-center'>
                    <LocationOnOutlinedIcon style={{ color: 'white', fontSize: 45 }} />
                    <div>Location of the company </div>
                </div>
            </div>
            <div className='h-[40px] m-3 rounded-xl flex flex-row justify-between items-center px-2'>
                <div>
                    <div className='font-semibold space-x-0'>
                        <StarPurple500OutlinedIcon style={{ marginRight: -5 }} />
                        <StarPurple500OutlinedIcon style={{ marginRight: -5 }} />
                        <StarPurple500OutlinedIcon style={{ marginRight: -5 }} />
                        <StarPurple500OutlinedIcon style={{ marginRight: -5 }} />
                        <StarHalfOutlinedIcon />
                    </div>
                    <div className='text-xs mx-1'>10,000 reviews</div>
                </div>
                <div className='bg-blue-700 text-white py-2 px-4 rounded-xl '>Details</div>
            </div>
        </div>
    )
}
