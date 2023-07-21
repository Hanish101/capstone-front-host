import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-main flex justify-between items-center border-b-2 border-black bg-backblack'>
            <div className="flex-1">H1</div>
            <div className="flex-1 text-center text-4xl font-semibold text-white hidden md:block">SkillHub</div>
            <div className="flex-1 text-right">
                <Link to="/entry" className="text-white py-2 px-4 mr-4 text-xl rounded-md font-semibold">Join Us!</Link>
            </div>
        </div>
    )
}
