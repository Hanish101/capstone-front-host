import React, { useState } from 'react';

export default function DevFilter({ handleFilterSelect }) {

    const [selectedSkill, setSelectedSkill] = useState('');

    const handleSkillChange = (event) => {
        setSelectedSkill(event.target.value);
        handleFilterSelect(event.target.value);
    };

    return (
        <div>
            <div className='text-lg'>Sort</div>
            <div className='text-md'>by date</div>
            <div key='sort=asc'>
                <input
                    type="radio"
                    id='sort=asc'
                    name="skill"
                    value="sort=asc"
                    checked={selectedSkill === "sort=asc"}
                    onChange={handleSkillChange}
                />
                <label htmlFor='sort=asc'>Low to High</label>
            </div>
            <div key='sort=desc'>
                <input
                    type="radio"
                    id='sort=desc'
                    name="skill"
                    value="sort=desc"
                    checked={selectedSkill === "sort=desc"}
                    onChange={handleSkillChange}
                />
                <label htmlFor='sort=desc'>High to Low</label>
            </div>
            <div key='none'>
                <input
                    type="radio"
                    id='filternone'
                    name="skill"
                    value=""
                    checked={selectedSkill === ""}
                    onChange={handleSkillChange}
                />
                <label htmlFor='filternone'>none</label>
            </div>
            <p>Selected Skill: {selectedSkill}</p>
        </div>
    );
}
