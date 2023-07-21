import React from 'react'

export default function ProjectCard() {
    return (
        <div className='w-[300px] h-[350px] bg-blue-300 mt-4 ml-4 rounded-2xl'>
            <div className='h-[270px] bg-blue-500 m-3 rounded-xl'>
                <div className='h-[70px] flex justify-between items-center'>
                    <div className='bg-white m-3 py-2 px-4 rounded-full'>24 mar, 2023</div>
                    <div className="h-10 w-10 rounded-full bg-gray-300 mx-3"></div>
                </div>
                <div className='h-[30px] mx-3 flex items-end text-sm'>Company name</div>
                <div className='h-[60px] flex justify-between items-center'>
                    <div className='h-[60px] text-2xl mx-3 font-semibold'>Project Name here</div>
                    <div>
                        <div className="h-12 w-12 rounded-full bg-gray-300 mx-3"></div>
                    </div>
                </div>
                <div className='h-[110px] p-1 flex flex-wrap justify-start items-center'>
                    <div className='m-1 px-4 py-2 bg-blue-200 rounded-full text-sm'>Tech 1</div>
                    <div className='m-1 px-4 py-2 bg-blue-200 rounded-full text-sm'>Tech 1</div>
                    <div className='m-1 px-4 py-2 bg-blue-200 rounded-full text-sm'>Tech 1</div>
                    <div className='m-1 px-4 py-2 bg-blue-200 rounded-full text-sm'>Tech 1</div>
                </div>
            </div>
            <div className='h-[40px] m-3 rounded-xl flex justify-between items-center px-2'>
                <div>
                    <div className='font-semibold'>$250/hr</div>
                    <div className='text-xs'>Virar, maharastra</div>
                </div>
                <div className='bg-blue-700 text-white py-2 px-4 rounded-xl '>Details</div>
            </div>
        </div>
    )
}
