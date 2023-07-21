import React from 'react'

import DevloperCard from '../cards/DevloperCard'

export default function DevloperViewCompany() {
  return (
    <>
            <h1 className="text-3xl pb-4 mx-3">
                Devlopers
            </h1>
            <div className='bg-gray-300 h-full flex flex-wrap justify-center p-4 item-top rounded-lg'>
                <DevloperCard/>
                <DevloperCard/>
                <DevloperCard/>
                <DevloperCard/>
                <DevloperCard/>
                <DevloperCard/>
                <DevloperCard/>
                <DevloperCard/>
            </div>
        </>
  )
}
