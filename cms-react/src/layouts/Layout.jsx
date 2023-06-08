import React from 'react'
import {Container, Row} from "react-bootstrap"
import "../styles/style.scss"
import Dashboard from '../pages/Dashboard'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <Container fluid>
        <Row>
           <Navbar />
            <div className="dashboard">
                <Sidebar />
               <Dashboard />
            </div>
            <Footer />
        </Row>
    </Container>
  )
}

export default Layout