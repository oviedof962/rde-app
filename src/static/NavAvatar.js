import React from 'react'
import profileImg from '../assets/user.png'

function NavAvatar() {
  return (
    <li className='nav-item dropdown pe-3'>
      <a 
      className='nav-link nav-profile d-flex aling-items-center pe-0'
      href="#"
      data-bs-toggle="dropdown"
      >
        <img src={profileImg} alt='Profile' className='rounded-circle'></img>
        <span className='d-none d-md-block dropdown-toggle ps-2'>Scarleth O.</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header'>
          <h6>Scarleth</h6>
          <span>Analista</span>
        </li>
        <li>
          <hr className='dropdown-divider'></hr>
        </li>
        <li>
          <a
          className='dropdown-item d-flex align-items-center'
          href='users-profile.html'
          >
            <i className='bi bi-person'></i>
            <span>Mi perfil</span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'></hr>
        </li>

        <li>
          <a
          className='dropdown-item d-flex align-items-center'
          href='users-profile.html'
          >
            <i className='bi bi-gear'></i>
            <span>Configuraciones</span>
          </a>
        </li> 

        <li>
          <hr className='dropdown-divider'></hr>
        </li>

        
        <li>
          <a
          className='dropdown-item d-flex align-items-center'
          href='users-profile.html'
          >
            <i className='bi bi-question-circle'></i>
            <span>Necesitas ayuda</span>
          </a>
        </li> 

        <li>
          <hr className='dropdown-divider'></hr>
        </li>

        
        <li>
          <a
          className='dropdown-item d-flex align-items-center'
          href='users-profile.html'
          >
            <i className='bi bi-box-arrow-right'></i>
            <span>Salir</span>
          </a>
        </li> 

      </ul>

    </li>
  )
}

export default NavAvatar