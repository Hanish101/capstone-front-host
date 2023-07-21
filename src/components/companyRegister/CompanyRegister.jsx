import React, { useState } from 'react'

export default function CompanyRegister() {

    const [companyName, setCompanyName] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [industry, setIndusrty] = useState([])

    const handleRegister = (event) => {
        event.preventDefault()

        const accessToken = localStorage.getItem('accessToken')

        console.log("___cname___", companyName)
        console.log("___loc___", location)
        console.log("___des___", description)
        console.log("___ind___", industry)



        try {
            fetch(`${API_LINK}/o/api/company`, {
                method: 'POST',
                body: JSON.stringify({
                    "company_name": companyName,
                    "location": location,
                    "industry": industry,
                    "description": description
                }),
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    console.log("___response___", response)
                    return response.json()
                })
                .then((data) => {
                    console.log("___res data___", data)
                })
                .catch((err) => {
                    console.log("__error__", err)
                })

        } catch (error) {
        }

    }

    return (
        <div className='register flex flex-col items-center'>
            <h1 className="text-5xl block pb-2 text-center">Create an Organisation account</h1>
            <h1 className="text-lg mb-4 pb-4 block text-center">Enter your Organisation details</h1>
            <div className="max-w-md w-full p-8">
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="companyName" className="block mb-2">
                            Company Name:
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none "
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="location" className="block mb-2">
                            Location:
                        </label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none "
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-2">
                            description:
                        </label>
                        <textarea
                            id="description1"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            className='w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="location" className="block mb-2">
                            industry :
                        </label>
                        <input
                            type="text"
                            id="industry"
                            value={industry}
                            onChange={(e) => setIndusrty(e.target.value)}
                            className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none "
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-secondary py-2 px-4 rounded hover:bg-secondary-dark"
                    >
                        Register
                    </button>

                </form>
            </div>
        </div>
    )
}
