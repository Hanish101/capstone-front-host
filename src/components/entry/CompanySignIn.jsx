import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_LINK } from '../../../constants'

export default function CompanySignIn() {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [accessToken, setAccessToken] = useState("")


  const handleLogin = async (event) => {
    event.preventDefault()

    console.log("___clicked___", username, "___pass___", password)

    try {
      fetch(`${API_LINK}/company/signin`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {

          console.log("___response___", response)
          return response.json()
        })
        .then((data) => {
          console.log("___res data___", data)
          if (data.token) {
            console.log("___token exists__", data.token)
            const token = data.token;
            setAccessToken(token)

            const currentDate = new Date();
            localStorage.setItem('accessToken', token);
            localStorage.setItem('accessTokenCreationDate', currentDate.toISOString());

            // navigate('/entry/compreg')
            navigate('/companyhome')
          }
          else {
            console.log("___token dosen't exist___")
            alert(data.message)
          }
        })
        .catch((err) => {
          console.log("__error__", err)
        })


    } catch (error) {

    }
  }


  return (
    <div className='register flex flex-col items-center'>
      <h1 className="text-5xl block pb-2 text-center">Organisation Login</h1>
      <h1 className="text-lg mb-4 pb-4 block text-center">Login to your Organisation account</h1>
      <div className="max-w-md w-full p-8">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary py-2 px-4 rounded hover:bg-secondary-dark"
          >
            Log in
          </button>
          <div className='block pb-2 text-center'>Don't have an account? <Link to='/entry/compsignup' className='pr-1 text-secondary-dark'>Register</Link></div>

          {/* {accessToken && <div className="mt-4 break-all">Access Token: {accessToken}</div>} */}
        </form>
      </div>
    </div>
  )
}