import React from 'react'

export default function ProjectCardData({ projectData, handleProDetails }) {

    const date = new Date(projectData.createdAt);
    const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const handleDetailClick = () => {
        handleProDetails({ projectData });
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
        cardyellow: '#FFDDA0',
        cdb4db: '#cdb4db',
        ffc8dd: '#ffc8dd',
        ffafcc: '#ffafcc',
        a2d2ff: '#a2d2ff',
        bde0fe: '#bde0fe',
        b8e0d2: '#b8e0d2',
        a539ad9: '#539ad9',
        f79d65: '#f79d65',
        f25c54: '#f25c54',
    };

    
    const randomColor = getRandomColorIndex();


    return (

        <div className="p-4 h-[320px] w-[300px] shadow-lg rounded-lg border-2 border-gray-200 m-2" 
        style={{ backgroundColor: Object.values(colors)[randomColor] }}
        onClick={() => handleDetailClick()}>
            <h3 className="text-xl font-bold mb-2">{projectData.project_name}</h3>
            <p className="text-sm text-gray-600 mb-2">{projectData.description}</p>
            <p className="text-sm mb-2">Timeframe: {projectData.timeframe}</p>
            <p className="text-sm mb-2">Price: ${projectData.price}/hr</p>
            <div className="text-sm mb-2">Creation Date: {formattedDate}</div>
            <div>
                Technology:
                <div className="flex flex-wrap">
                    {projectData.technology.map((tech, index) => (
                        <span key={index} className="bg-white rounded-md py-1 px-2 text-sm m-1">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
