import React from 'react'
import { Link } from 'react-router-dom'

import RecentActorsIcon from '@mui/icons-material/RecentActors';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PolylineIcon from '@mui/icons-material/Polyline';

export default function ProxyContent() {
  return (
    <div className='landing-page pt-8'>
      <div className='flex pb-8 flex-col items-center'>
        <div className="mb-4 pt-8 pb text-5xl font-semibold">
          Wanna take your carrier to next level?
        </div>
        <div className="text-gray-700 pb-4">Boost your career to next level with Project Listing and explore new opportunity</div>
        <button className='px-8 py-3 rounded-lg bg-backblack text-white'>Sign up for free</button>
      </div>

      {/* Specification gird */}
      <div className="h-full grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-12 mb-8">
        {/* Row 1 */}
        {/* Main heading */}
        <div className="h-full text-2xl font-bold flex flex-col justify-center items-center rounded-2xl" >
          <img src="../../src/assets/ProjectListing.jpg" />
          <div className="">Project Listings</div>
        </div>
        {/* Ponits */}
        <div className="h-full flex flex-col items-center justify-center p-4 lg:col-span-2 px-12">
          <div className='font-bold w-full text-2xl '>Developers : </div>
          <p className="text-justify">
            Developers can browse through a list of available projects and can filter through projects based on technology, location, budget, or project type.
          </p>
          <div className='font-bold w-full text-2xl mt-4'>Businesses : </div>
          <p className="text-justify">
            Through a list of available projects. They can filter projects based on various criteria such as technology, location, budget, or project type.
          </p>
        </div>

        {/* Row 2 */}
        {/* Main heading */}
        <div className="h-full text-2xl font-bold flex lg:hidden flex-col justify-center items-center rounded-2xl ">
          <img src="../../src/assets/choice.jpg" />
          <div>Dev Choice</div>
        </div>
        {/* Points */}
        <div className="h-full flex flex-col items-center justify-center p-4 lg:col-span-2 px-12">
          <div className='font-bold w-full text-2xl'>Developers :</div>
          <p className="text-justify">
            Developers can show interest in a project by selecting it from the available list. Once selected, the business is notified, and contact information is shared between both parties to start communication.
          </p>
          <div className='font-bold w-full text-2xl mt-4'>Businesses :</div>
          <p className="text-justify">
            Businesses receive notifications whenever a web developer shows interest in their project. They can review the web developer's profile and initiate communication if they find the candidate suitable.
          </p>
        </div>
        {/* Main heading */}
        <div className="h-full text-2xl font-bold hidden lg:flex flex-col justify-center items-center rounded-2xl">
          <img src="../../src/assets/choice.jpg" />
          <div>Dev Choice</div>
        </div>

        {/* Row 3 */}
        {/* Main heading */}
        <div className="h-full text-2xl font-bold flex flex-col justify-center items-center rounded-2xl">
          <img className="rounded-lg" src="../../src/assets/21430.jpg" />
          <div>Project Management</div>
        </div>
        {/* Ponins */}
        <div className="h-full flex flex-col items-center justify-center p-4 lg:col-span-2 px-12">
          <div className='font-bold w-full text-2xl'>Developers :</div>
          <p className="text-justify">
            Developers can express their interest in a particular project by selecting it from the available list. Once selected, the business is notified, and contact information is shared between both parties to facilitate further communication.
          </p>
          <div className='font-bold w-full text-2xl mt-4'>Businesses :</div>
          <p className="text-justify">
            Businesses receive notifications whenever a web developer shows interest in their project. They can review the web developer's profile and initiate communication if they find the candidate suitable.
          </p>
        </div>

        {/* Row 4 */}
        {/* Main heading */}
        <div className="h-full text-2xl font-bold flex lg:hidden flex-col justify-center items-center rounded-2xl ">
          <img className="rounded-lg" src="../../src/assets/devreview.jpg" />
          <div>Rating and Feedback</div>
        </div>
        {/* Points */}
        <div className="h-full flex flex-col items-center justify-center p-4 lg:col-span-2 px-12">
          <div className='font-bold w-full text-2xl'>Ratings :</div>
          <p className="text-justify">
            After completing a project, businesses can rate and provide feedback on the web developers' performance. This helps build a reputation system and assists future collaborations.
          </p>
        </div>
        {/* Main heading */}
        <div className="h-full text-2xl font-bold hidden lg:flex flex-col justify-center items-center rounded-2xl">
          <img className="rounded-lg" src="../../src/assets/devreview.jpg" />
          <div>Rating and Feedback</div>
        </div>
      </div>

      {/* Organisation Grid */}
      {/* Heading */}
      <div className='flex flex-col justify-center items-center'>
        <div className='text-3xl justify-center font-semibold mb-4'>Create your best projects, together</div>
        <div className='text-lg font-semibold'><span className='font-bold'>Collaborate and innovate :</span> Unleash your creative potential with collective project creation.</div>
      </div>

      {/* Points */}
      <div className='flex flex-col justify-center items-center gap-4 py-8 '>
        <div className='flex flex-col gap-y-6 text-s max-w-[700px]'>
          <div className='col-span-1'>
            <div className='flex flex-col md:flex-row'>
              <div className='mr-5 flex items-center justify-center'><BorderColorIcon /></div>
              <div className='text-justify'>
                <span className='font-semibold'>Create projects</span> by providing comprehensive details about the project, including project description, required skills, budget, timeline, and any specific requirements.
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='flex flex-col md:flex-row'>
              <div className='mr-5 flex items-center justify-center'><RecentActorsIcon /></div>
              <div className='text-justify'>
                <span className='font-semibold'>View list</span> of web developers who have shown interest in their projects and analyze their profiles and skills.
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='flex flex-col md:flex-row'>
              <div className='mr-5 flex items-center justify-center'><PolylineIcon /></div>
              <div className='text-justify'>
                <span className='font-semibold'>Review and initiate</span> Communication with developer directly.
              </div>
            </div>
          </div>
          <div className=''>
          </div>
          {/* <div className=''>Project listing for Organisation</div> */}

        </div>
        <div className='flex justify-center'>
          <button className='px-8 py-3 rounded-lg bg-backblack text-white'>Sign up as a Organisaton</button>

        </div>
        {/* <div className='flex flex-col items-center justify-center'>
          <div className='text-center'>Project Listing For Organisation</div>
          <button className='px-8 py-3 rounded-lg bg-backblack text-white'>Sign up as a Organisation</button>
        </div> */}
      </div>
    </div>
  )
}
