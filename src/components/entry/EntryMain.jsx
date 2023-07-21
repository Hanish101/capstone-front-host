import React from 'react'
import "./EntryMain.css"
import { Routes, Route } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import ChooseUser from './create/ChooseUser'
import CompanyRegister from '../companyRegister/CompanyRegister'
import DevRegister from './DevRegister'
import CompanySignIn from './CompanySignIn'
import CompanySignUp from './CompanySignUp'
import UserForm from '../auth/Auth'
import DevImgRegister from './create/DevImgRegister'

export default function EntryMain() {


  return (

    <div className='entry-main '>
      <div className="entry-main-bg">
        {/* <img src="https://unsplash.it/1920/1010" alt="" /> */}
      </div>
      <div className="entry-main-page bg-white overflow-y-scroll">
        <Routes>
          <Route exact path="/" element={<ChooseUser />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/devreg" element={<DevRegister />} />
          {/* <Route path="/devreg" element={<DevImgRegister />} /> */}
          <Route path="/compreg" element={<CompanyRegister />} />
          <Route path="/compsignin" element={<CompanySignIn />} />
          <Route path="/compsignup" element={<CompanySignUp />} />
        </Routes>
      </div>
    </div>
  )
}
