import React from 'react'
import {FiSearch} from "react-icons/fi"
import {MdLanguage,MdNotifications, MdMail} from "react-icons/md"
import { Link } from 'react-router-dom'
import "bootstrap/js/dist/dropdown"

const Navbar = () => {
  return (
    <div className='navbar' >
    <div className='wrapper'>
        <h6>JH-Devs.cz / Admin</h6>
      <div className='search'>
        <input type='text' placeholder='Hledat...' />
        <FiSearch className='icon' />
      </div>
      <div className='items'>
        <div className='item'>
          <MdLanguage className='icon__top'/>
          <p>CZ</p>
        </div>
        <div className='item'>
          <MdNotifications className='icon__top' />
          <div className='counter'>1</div>
        </div>
        <div className='item'>
          <MdMail className='icon__top' />
          <div className='counter'>2</div>
        </div>
        <div className='item'>
        <ul>
          <li className='nav-item dropdown me-5'>
            <Link to="#" className='nav-link dropdown-toggle mt-2 me-5' id="dropdownId" data-bs-toggle="dropdown">Admin</Link>
            <div className="dropdown-menu" aria-labelledby='dropdownId'>
              <Link to="/admin/profil" className='dropdown-item'>Profil</Link>
              <Link to="/admin/nastaveni" className='dropdown-item'>Nastavení</Link>
              <Link to="#" className='dropdown-item'>odhlásit se</Link>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar