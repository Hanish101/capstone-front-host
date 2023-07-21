import React from "react";
import { Star } from "@mui/icons-material";
const devData = {

    dev_first_name: "Woke",
    dev_last_name: "Goated",
    skills: ["Java", "C", "JavaScript", "TypeScript"],
    bio: "I am an experienced developer with expertise in Java, C, JavaScript, and TypeScript.",
    background: "White",
    price: 5,
    rating: [4, 5, 3, 4, 5], // Rating values ranging from 1 to 5
    testimonial: [
      "Great work! Highly recommended.",
      "Excellent communication and coding skills.",
      "Delivered the project on time and met all requirements.",
    ], // Array of testimonials
    imageUrl: "https://unsplash.it/300/301",
    counter: true,
    portfolio_link: "https://projectlisting-98nl.onrender.com",
    address: "Downtown, Vancouver",
    phone: "344447744789",
    email: "abc7887@gmail.com",
    createdAt: "2023-07-14T19:13:55.871Z",
    updatedAt: "2023-07-14T19:13:55.871Z",
  };

export default function DevloperDetailedCard({devData}) {

    const handleRecruitClick = () => {
        
    };


    return (
        <div className="w-full h-full flex justify-center items-center bg-blue-200">
        <div className="w-3/4 rounded-lg bg-white p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img src={devData.imageUrl} alt="Developer" className="w-20 h-20 rounded-full mr-4" />
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {devData.dev_first_name} {devData.dev_last_name}
                </h2>
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-1" />
                  {devData.rating && devData.rating.length > 0 ? (
                    <span className="text-yellow-400">
                      {devData.rating.reduce((sum, rating) => sum + rating, 0) / devData.rating.length}
                    </span>
                  ) : (
                    <span>No ratings</span>
                  )}
                </div>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={handleRecruitClick}>
              Recruit
            </button>
          </div>
  
          <div className="mb-4">
            <h3 className="text-xl font-bold">Contact Information:</h3>
            <p className="text-sm">Address: {devData.address}</p>
            <p className="text-sm">Phone: {devData.phone}</p>
            <p className="text-sm">Email: {devData.email}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Additional Details:</h3>
            <p className="text-sm">Background: {devData.background}</p>
            <p className="text-sm">Price: ${devData.price}/hr</p>
            <p className="text-sm">
              Portfolio Link: <a href={devData.portfolio_link} className="text-blue-500">{devData.portfolio_link}</a>
            </p>
          </div>

          <div className="mb-4">
          <h3 className="text-xl font-bold">Skills:</h3>
          <div className="flex flex-wrap">
            {devData.skills && devData.skills.length > 0 ? (
              devData.skills.map((skill, index) => (
                <button key={index} className="bg-blue-300 text-blue-800 py-1 px-3 rounded-lg text-md mr-2 mb-2">
                  {skill}
                </button>
              ))
            ) : (
              <p>No skills available</p>
            )}
          </div>
        </div>
  
          <div className="mb-4">
            <h3 className="text-xl font-bold">Testimonials:</h3>
            {devData.testimonial && devData.testimonial.length > 0 ? (
              <ul className="list-disc pl-6">
                {devData.testimonial.map((testimonial, index) => (
                  <li key={index} className="mb-2">
                    {testimonial}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No testimonials available</p>
            )}
          </div>
        </div>
      </div>
    );
};

