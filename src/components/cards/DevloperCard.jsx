import React from 'react'

export default function DevloperCard() {
    return (
        <div className='w-[300px] h-[350px] bg-blue-300 mt-4 ml-4 rounded-2xl'>
            <div className='h-[270px] bg-blue-500 m-3 rounded-xl'>
                <div className='h-[70px] flex justify-between items-center'>
                    <div className='border-2 border-solid m-3 py-2 px-4 rounded-xl'>24 mar, 2222</div>
                    <div className="h-10 w-10 rounded-full bg-gray-300 mx-3"></div>
                </div>
                <div className='h-[90px] flex justify-between items-center'>
                    <div className="h-16 w-16 rounded-full bg-gray-300 mx-3"></div>
                    <div className='text-3xl truncate line-clamp-2 mr-3 font-medium'>Hanish Patil</div>
                </div>
                <div className='h-[90px] p-2 flex flex-wrap justify-start items-end'>
                    <div className='m-1 px-4 py-2 bg-blue-200 rounded-full'>Skill 1</div>
                    <div className='m-1 px-4 py-2 bg-blue-200 rounded-full'>Skill 1</div>
                    <div className='m-1 px-4 py-2 bg-blue-200 rounded-full'>Skill 1</div>
                    <div className='m-1 px-4 py-2 bg-blue-200 rounded-full'>Skill 1</div>
                    <div className='m-1 px-4 py-2 bg-blue-200 rounded-full'>Skill 1</div>
                </div>

            </div>
            <div className='h-[40px] m-3 rounded-xl flex justify-between items-center px-2'>
                <div>Rating</div>
                <div className='border-2 border-solid py-2 px-4 rounded-xl text-black bg-blue-400 hover:bg-blue-500 hover:border-blue-500 hover:text-white'>Details</div>
            </div>
        </div>
    )
}
