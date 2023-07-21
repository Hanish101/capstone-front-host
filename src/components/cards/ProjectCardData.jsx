import React from 'react'

// const projectData = {
//     project_name: "Project ABC",
//     counter: true,
//     description: "A web application for managing tasks and deadlines",
//     timeframe: "6 months",
//     technology: ["React", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
//     devlist: ["461d7768-b38f-4bdc-ab71-f5a21d41cb57", "0d5d51f9-e3ab-45f2-907a-9c7d9c81eb62"],
//     team: ["8498e5be-9b46-4684-9f4e-048866d21f9c", "b7e114cd-37fb-45fe-b2bd-e3b80cece462",],
//     createdAt: "2023-07-12T11:03:09.902Z",
//     updatedAt: "2023-07-12T11:03:09.902Z",
// };

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
        cardorange: '#ffe1cc',
        cardpurple: '#e3dbfa',
        cardgreen: '#d4f6ed',
        cardblue: '#dff2ff',
        cardgrey: '#eceef5',
    };
    
    const randomColor = getRandomColorIndex();


    return (
        // <div className='w-[300px] h-[350px] bg-blue-300 mt-4 ml-4 rounded-2xl' onClick={()=>handleDetailClick()}>
        //     <div className='h-[270px] bg-blue-500 m-3 rounded-xl'>
        //         <div className='h-[70px] flex justify-between items-center'>
        //             <div className='bg-white m-3 py-2 px-4 rounded-full'>{formattedDate}</div>
        //         </div>
        //         <div className='h-[30px] mx-3 flex items-end text-sm'></div>
        //         <div className='h-[60px] flex flex-col justify-start items-start'>
        //             <div className='h-[60px] text-2xl mx-3 font-semibold'>{projectData.project_name}</div>
        //             <div className='text-sm mx-3 p-2'>
        //             &#128994;  {projectData.status}</div>

        //         </div>
        //         <div className='h-[110px] p-1 flex flex-wrap justify-start items-center'>
        //             {projectData.technology.slice(0, 4).map((skill, index) => (
        //                 <div key={index} className='m-1 px-4 py-2 bg-blue-200 rounded-full'>{skill}</div>
        //             ))
        //             }
        //         </div>
        //     </div>
        //     <div className='h-[40px] m-3 rounded-xl flex justify-between items-center px-2'>
        //         <div>
        //             <div className='font-semibold'>${projectData.price}/hr</div>
        //         </div>
        //         <div className='bg-blue-700 text-white py-2 px-4 rounded-xl '>Details</div>
        //     </div>
        // </div>

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
                        <span key={index} className="bg-gray-300 rounded-md py-1 px-2 text-sm m-1">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
