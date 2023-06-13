import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Contract from '../pages/Contract'
import Project from '../pages/Project'
import Customers from '../pages/Customers'
import Employees from '../pages/Employees'
import Worked from '../pages/Worked'
import Contacts from '../pages/Contacts'
import CalendarHome from '../pages/CalendarHome'
import ToDo from '../pages/ToDo'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element ={<Login/>} />
         <Route path="/nastenka" element={<Layout />} >
            <Route path="" index element={<Dashboard/>} />
        </Route>
        <Route path="/zakazky" element ={<Contract />} />
        <Route path="/projekty" element ={<Project />} />
        <Route path="/zakaznici" element ={<Customers />} />
        <Route path="/zamestnanci" element ={<Employees />} />
        <Route path="/odpracovane-hodiny" element ={<Worked />} />
        <Route path="/planovac" element ={<ToDo />} />
        <Route path="/kalendar" element ={<CalendarHome />} />
        <Route path="/adresar" element ={<Contacts />} />
        
    </Routes>
  )
}

export default Router