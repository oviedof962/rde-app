import React from 'react'
import '../styles/logo.css'

function Logo () {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    }
  return (
    <div className='d-flex align-items-center justify-content-between'>
        <a href='/' className='logo d-flex aling-items-center'>
            {/*<img src="" alt=""/> */}
            <span className='d-none d-lg-block'>RDE</span>
        </a>

        {/*hamburgueza para abrir o cerrar el sidebar */}
        <i className='bi bi-list toggle-sidebar-btn'
        onClick={handleToggleSideBar}
        ></i>

    </div>
  )
}

export default Logo