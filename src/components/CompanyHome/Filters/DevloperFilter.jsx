import React, { useState } from 'react'

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export default function DevloperFilter() {
    const skillsData = [
        'JavaScript',
        'Python',
        'Java',
        'HTML',
        'CSS',
        'React',
        'Node.js',
        'SQL',
        'Git',
        'Agile',
        'AWS',
        'Docker',
        'Testing',
        'UI/UX Design',
    ];

    // Skill selection
    const [selectedSkills, setSelectedSkills] = useState([]);

    const toggleSkillSelection = (skill) => {
        const isSelected = selectedSkills.includes(skill);
        if (isSelected) {
            setSelectedSkills(selectedSkills.filter((selected) => selected !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    //tech collapse
    const [isTechCollapsed, setIsTechCollapsed] = useState(false);

    const toggleTechCollapse = () => {
        console.log(isTechCollapsed)
        setIsTechCollapsed(!isTechCollapsed);
    };

    return (
        <>
            <div className="w-full pb-8">
                <div className='text-2xl'>Filters</div>
                <div className="pt-4">
                    <div className="text-gray-500" onClick={toggleTechCollapse}>
                        Technology
                    </div>
                    <div className={`transition-all ${isTechCollapsed ? 'h-0' : 'h-full'} overflow-hidden`}>
                        {skillsData.map((skill, index) => (
                            <div
                                key={index}
                                className={`pt-3 cursor-pointer`}
                                onClick={() => toggleSkillSelection(skill)}
                            >
                                <div className="flex items-center">
                                    <div
                                        className={`h-4 w-4 mr-3 rounded-sm border-2 flex justify-center items-center ${selectedSkills.includes(skill) ? 'bg-black border-black' : 'border-gray-500 bg-white'
                                            }`}
                                    >
                                        <CheckRoundedIcon style={{ color: 'white', fontSize: 18 }} />
                                    </div>
                                    {skill}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className='text-2xl'>Sort</div>
                <div className="pt-4">
                    <div className="text-gray-500">
                        By date
                    </div>
                    <div className="flex items-center pt-3">
                        <div className={`h-4 w-4 mr-3 rounded-full border-2 flex justify-center items-center border-gray-500`}>
                        </div>
                        Oldest First
                    </div>
                    <div className="flex items-center pt-3">
                        <div className={`h-4 w-4 mr-3 rounded-full border-2 flex justify-center items-center border-gray-500`}>
                        </div>
                        New first
                    </div>
                </div>
                <div className="pt-4">
                    <div className="text-gray-500">
                        By Price
                    </div>
                    <div className="flex items-center pt-3">
                        <div className={`h-4 w-4 mr-3 rounded-full border-2 flex justify-center items-center border-gray-500`}>
                        </div>
                        Oldest First
                    </div>
                    <div className="flex items-center pt-3">
                        <div className={`h-4 w-4 mr-3 rounded-full border-2 flex justify-center items-center border-gray-500`}>
                        </div>
                        New first
                    </div>
                </div>
            </div>
        </>
    )
}
