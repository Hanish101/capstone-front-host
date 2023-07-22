import React, { useState } from 'react';

export default function DevFilter({ handleFilterSelect }) {
    const skillsData = [
        ['javascript','JavaScript'],
        ['python','Python'],
        ['java','Java'],
        ['html','HTML'],
        ['css','CSS'],
        ['react','React.js'],
        ['node','Node.js'],
        ['docker','Docker'],
        ['mongodb','MongoDB'],
        ['uiux','UI/UX'],
    ];

    const [selectedSkill, setSelectedSkill] = useState('');

    const handleSkillChange = (event) => {
        setSelectedSkill(event.target.value);
        handleFilterSelect(event.target.value);
    };

    return (
        <div>
            <div className='text-2xl mb-4 font-semibold'>Filters</div>
            {skillsData.map((skill) => (
                <div className='py-1' key={skill[0]}>
                    <input
                        type="radio"
                        id={skill[0]}
                        name="skill"
                        value={`filter=${skill[0]}`} // Corrected the value here
                        checked={selectedSkill === `filter=${skill[0]}`}
                        onChange={handleSkillChange}
                        className="form-radio h-4 w-4 rounded-sm text-blue-500 transition duration-150 ease-in-out"
                    />
                    <label className='mx-3 text-lg' htmlFor={skill[0]}>{skill[1]}</label>
                </div>
            ))}

            <div className='text-2xl mt-5 mb-2 font-semibold'>Sort</div>
            <div className='text-xl mb-2 font-semibold'>By Date</div>
            <div className='py-1' key='sort=asc'>
                <input
                    type="radio"
                    id='sort=asc'
                    name="skill"
                    value="sort=asc"
                    checked={selectedSkill === "sort=asc"}
                    onChange={handleSkillChange}
                    className="form-radio h-4 w-4 rounded-sm text-blue-500 transition duration-150 ease-in-out"
                />
                <label className='mx-3 text-lg' htmlFor='sort=asc'>Oldest first</label>
            </div>
            <div className='py-1' key='sort=desc'>
                <input
                    type="radio"
                    id='sort=desc'
                    name="skill"
                    value="sort=desc"
                    checked={selectedSkill === "sort=desc"}
                    onChange={handleSkillChange}
                    className="form-radio h-4 w-4 rounded-sm text-blue-500 transition duration-150 ease-in-out"
                />
                <label className='mx-3 text-lg' htmlFor='sort=desc'>Newest first</label>
            </div>

            <div className='text-xl mt-3 mb-2 font-semibold'>By Price</div>
            <div className='py-1' key='price=asc'>
                <input
                    type="radio"
                    id='price=asc'
                    name="skill"
                    value="price=asc"
                    checked={selectedSkill === "price=asc"}
                    onChange={handleSkillChange}
                    className="form-radio h-4 w-4 rounded-sm text-blue-500 transition duration-150 ease-in-out"
                />
                <label className='mx-3 text-lg' htmlFor='price=asc'>Low to High</label>
            </div>
            <div className='py-1' key='price=desc'>
                <input
                    type="radio"
                    id='price=desc'
                    name="skill"
                    value="price=desc"
                    checked={selectedSkill === "price=desc"}
                    onChange={handleSkillChange}
                    className="form-radio h-4 w-4 rounded-sm text-blue-500 transition duration-150 ease-in-out"
                />
                <label className='mx-3 text-lg'  htmlFor='price=desc'>High to Low</label>
            </div>
            <div className='mt-10' key='none'>
                <input
                    type="radio"
                    id='filternone'
                    name="skill"
                    value=""
                    checked={selectedSkill === ""}
                    onChange={handleSkillChange}
                    className="form-radio h-4 w-4 rounded-sm text-blue-500 transition duration-150 ease-in-out"
                />
                <label className='mx-3 text-lg' htmlFor='filternone'>Clear</label>
            </div>
            {/* <p>Selected filter: {selectedSkill}</p> */}
        </div>
    );
}
