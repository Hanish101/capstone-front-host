import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_LINK } from '../../../constants';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const handleLogin = async (event) => {
    event.preventDefault()

    console.log("___clicked___", username, "___pass___", password)

    try {
      fetch(`${API_LINK}/user/signin`, {
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
            console.log("___Dev existance___", data.dev)

            const currentDate = new Date();
            localStorage.setItem('accessToken', data.token);
            localStorage.setItem('accessTokenCreationDate', currentDate.toISOString());

                     
            if((data.dev) == 'false' ){
              navigate('/entry/devreg')
            }else{
              localStorage.setItem('userID', data.id);
              navigate('/dashboard')
            }
          }
          else {
            console.log("___token dosen't exist___")
            toast(data.message)
          }
        })
    } catch (error) {

    }
  }


  return (
    <div className='register flex flex-col items-center'>
      <ToastContainer />
      <h1 className="text-5xl block pb-2 text-center">Login Page</h1>
      <h1 className="text-lg mb-4 pb-4 block text-center">Login using username</h1>
      <div className="max-w-md w-full p-8">
        <form onSubmit={handleLogin} className="w-full">
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
              required
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
              required
            />
          </div>
          
          <button type="submit" className="w-full bg-secondary py-2 px-4 rounded hover:bg-secondary-dark">
            Log in
          </button>
          <div className="block pb-2 text-center">
            Don't have an account? <Link to="/entry/register" className="pr-1 text-secondary-dark">Register</Link>
          </div>
          {/* {accessToken && <div className="mt-4 break-all">Access Token: {accessToken}</div>} */}
        </form>


      </div>
    </div>
  )
}
