import React, { useState, useEffect } from "react";
import { Star } from "@mui/icons-material";
import { API_LINK } from "../../../constants";

export default function DevloperDetails({ devData }) {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [rating, setRating] = useState(1)
    const [testimonial, setTestimonial] = useState("")

    const handleRecruitClick = () => {
        
    };

    const handleSubmit = (event) => {

        console.log("clicked")
        event.preventDefault();
        // setIsSubmitting(true);

        const formData = new FormData(event.target);

        const formDataEntries = Array.from(formData.entries());

        console.log("__formEntries__", formDataEntries);

        const token = localStorage.getItem("accessToken")
        console.log(rating)
        console.log(testimonial)

        fetch(`${API_LINK}/o/api/ratedev/02dd2014-faa4-48f4-aa24-80279970c87a`, {
            method: 'PATCH',
            body: JSON.stringify({
                rating: rating,
                testimonial: testimonial
            }),
            // body: formData,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))
    };

    return (
        <div className="w-full flex justify-center items-center bg-blue-200">
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
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
                        onClick={handleRecruitClick}
                    >
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
                <div className="mb-4 bg-blue-300 rounded-lg p-4">
                    <h3 className="text-xl font-bold">Rate Developer:</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center mb-2">
                            <label className="text-sm">Rating:</label>
                            <input
                                type="number"
                                min="1"
                                max="5"
                                name="rating"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                className="ml-2 p-2 border border-gray-500 rounded"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="text-sm">Testimonial:</label>
                            <textarea
                                name="testimonial"
                                value={testimonial}
                                onChange={(e) => setTestimonial(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-500 rounded"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
                        // disabled={!rating || testimonial === "" || isSubmitting}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

