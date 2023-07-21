import React from 'react'
import { Twitter, Facebook, Instagram, Pinterest, YouTube, GitHub, LinkedIn } from '@mui/icons-material';


export default function Footer() {
  return (
    // <div className='footer-main flex flex-col xl:flex-row '>
    //   <div className="foot-container xl:w-6/12 flex md:flex-row flex-col">
    //     <div className="foot-container-mid w-full bg-red-500  md:h-full whitespace-pre-wrap border-t-2 border-black md:w-1/2">Container 1</div>
    //     <div className="foot-container-mid w-full bg-green-500 md:h-full whitespace-pre-wrap border-t-2 border-black md:w-1/2">Container 2</div>
    //   </div>
    //   <div className="foot-container xl:w-6/12 bg-blue-500 md:h-full whitespace-pre-wrap xl:mt-auto border-t-2 border-black">Container 3</div>
    // </div>
    <div className='border-t-[1px] border-gray-300 pt-4'>
      <div className='footer-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8'>
        <div className='flex justify-start mr-10 col-span-1 h-full'>
          <div className="flex flex-col justify-center">
            <div className="text-xl font-bold pb-5">FOR ORGANISATION</div>
            <div>Authentication</div>
            <div>Project creation</div>
            <div>Project listing</div>
            <div>Developer Selection</div>
            <div>Project Selection</div>
          </div>
        </div>
        <div className='flex justify-start mr-10 col-span-1 h-full'>
          <div>
            <div className="text-xl font-bold pb-5">FOR DEVELOPERS</div>
            <div>Authentication</div>
            <div>Community</div>
            <div>Project List</div>
            <div>Developer Contact</div>
            <div>Project Selection</div>
          </div>
        </div>
        <div className='flex justify-start mr-10 col-span-1 h-full'>
          <div>
            <div className="text-xl font-bold pb-5">COMPANY</div>
            <div>About Us</div>
            <div>Contact</div>
            <div>We are Hiring!</div>
            <div>Other Services</div>
            <div>Community</div>
          </div>
        </div>
        <div className='flex justify-start mr-10 col-span-1 h-full'>
          <div>
            <div className="text-xl font-bold pb-5">DISCLAIMER</div>
            <div>Terms Of Services</div>
            <div>Privacy Policy</div>
            <div>Cookies</div>
            <div>Copyright</div>
            <div>Trust, Safety & Security</div>
          </div>
        </div>
        <div className='flex items-center justify-center gap-x-12 sm:col-span-2 lg:col-span-4'>
          <div className='flex flex-row gap-x-4'>
            <Twitter fontSize="large" color="black" />
            <Facebook fontSize="large" color="black" />
            <Instagram fontSize="large" color="black" />
            <Pinterest fontSize="large" color="black" />
            <YouTube fontSize="large" color="black" />
            <GitHub fontSize="large" color="black" />
            <LinkedIn fontSize="large" color="black" />
          </div>
        </div>
        <div className='sm:col-span-2 lg:col-span-4'>
          <div className='flex justify-center'>© 2023 DevHub™. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  )
}
