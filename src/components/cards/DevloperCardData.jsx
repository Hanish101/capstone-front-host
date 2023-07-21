import React, { useState } from 'react'

export default function DevloperCardData({ devData, handleDevDetails }) {

    const handleDetailClick = () => {
        handleDevDetails({ devData });
        console.log("clickes")
    }


    const getRandomColorIndex = () => {
        return Math.floor(Math.random() * Object.keys(colors).length);
    };

    // Custom colors from your Tailwind CSS configuration
    const colors = {
        cardorange: '#FFD0B0',
        cardpurple: '#D5C4F7',
        cardgreen: '#A8E3D8',
        cardblue: '#B0E8FF',
        cardgrey: '#D0D3DB',
        cardyellow: '#FFDDA0',
        cardpink: '#FFB7E0',
        cardbrown: '#C3B29D',
        cardred: '#FFB7B7',
    };


    const randomColor = getRandomColorIndex();



    return (

        <div className="shadow-lg rounded-lg p-4 w-72 h-96 border-2 bg-white m-2"
            onClick={() => handleDetailClick()}>
            <div className="flex justify-center items-center rounded-lg" style={{ backgroundColor: Object.values(colors)[randomColor] }}>
                <img
                    src={devData.imageUrl}
                    alt={`${devData.dev_first_name} ${devData.dev_last_name}`}
                    className="w-32 h-32 rounded-full mx-auto m-4"
                />
            </div>
            <div className="font-bold text-xl p-2 mb-2">{`${devData.dev_first_name} ${devData.dev_last_name}`}</div>
            <div className="text-sm text-gray-600 mb-4">{devData.bio}</div>
            <div className="flex flex-wrap gap-2">
                {devData.skills.slice(0, 4).map((skill, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 rounded-full text-sm text-gray-800"
                        style={{ backgroundColor: Object.values(colors)[randomColor] }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>


    );
}
