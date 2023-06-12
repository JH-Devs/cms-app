import React from 'react';
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

 
  return (
    <div className='sidebar'>
      <div className='center'>
        <ul>
          <li>
            <span>
              <NavLink
                to='/nastenka'
                activeClassName='active'
              >
                Nástěnka
              </NavLink>
            </span>
          </li>
              <li>
                <span>
                  <NavLink
                    to='/zakazky'
                    activeClassName='active'
                  >
                    Zakázky
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    to='/projekty'
                    activeClassName='nav__active'
                  >
                   Projekty
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    to='/zakaznici'
                    activeClassName='nav__active'
                  >
                    Zákazníci
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    to='/zamestnanci'
                    activeClassName='nav__active'
                  >
                    Zaměstnanci
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    to='/odpracovane-hodiny'
                    activeClassName='nav__active'
                  >
                    Odpracované hodiny
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    to='/planovac'
                    activeClassName='nav__active'
                  >
                    Plánovač
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    to='/kalendar'
                    activeClassName='nav__active'
                  >
                    Kalendář
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    to='/adresar'
                    activeClassName='nav__active'
                  >
                   Adresář
                  </NavLink>
                </span>
              </li>

            </ul>
        </div>
    </div>
  )
}

export default Sidebar