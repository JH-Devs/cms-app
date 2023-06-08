import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Contract from '../pages/Contract'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element ={<Login/>} />
         <Route path="/nastenka" element={<Layout />} >
            <Route path="" index element={<Dashboard/>} />
        </Route>
        <Route path="/zakazky" element ={<Contract/>} />
    </Routes>
  )
}

export default Router