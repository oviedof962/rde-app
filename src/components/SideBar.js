import React from 'react'
import '../styles/sideBar.css'

function Sidebar() {
    
  return (
    <aside id='sidebar' className='sidebar'>
        <ul className='sidebar-nav' id='sidebar-nav'>
            <li className='nav-item'>
                <a className='nav-link' href='#'>
                    <i className='bi bi-grid'></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <li className='nav-item'>
                <a className='nav-link collapsed'
                data-bs-target='#components-nav'
                data-bs-toggle="collapse"
                href='#'>
                    <i className='bi bi-menu-button-wide'></i>
                    <span>Dacumentos</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                </a>
                <ul
                id='components-nav'
                className='nav-content collapse'
                data-bs-parent='#sidebar-nav'>
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>perfiles</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>ejemplo</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li className='nav-item'>

            <a className='nav-link collapsed'
                data-bs-target='#components-nav'
                data-bs-toggle="collapse"
                href='#'>
                    <i className='bi bi-journal-text'></i>
                    <span>Dacumentos</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                </a>

            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar