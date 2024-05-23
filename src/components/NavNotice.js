import React from 'react'

function NavNotice() {
  return (
    <li className='nav-item dropdown'>
        <a className='nav-link nav-icon' href='#' data-bs-toggle='dropdown'>
            <i className='bi bi-bell'></i>
            <span className='badge bg-primary badge-number'>4</span>
        </a>

        <ul className='dropdown-menu drpdown-menu-end dropdown-menu-arrow notifications'>
            <li className='dropdown-header'>
                tienes 4 notificacion
                <a href='#'>
                    <span className='badge rounded-pill bg-primary p-2 ms-2'>
                        ver todo
                    </span>
                </a>
            </li>
            <li>
                <hr className='dropdown-divider'></hr>
            </li>
            <li className='notification-item'>
                <i className='bi bi-exclamation-circle text-warning'></i>
                <div>
                    <h4>lorem</h4>
                    <p>ajkanjasnjasasj</p>
                    <p>1 mnt</p>
                </div>
            </li>
            <li>
                <hr className='dropdown-divider'></hr>
            </li>
            <li className='notification-item'>
                <i className='bi bi-x-circle text-danger'></i>
                <div>
                    <h4>lorem ttatata</h4>
                    <p>ajkanjasnjasasj</p>
                    <p>1 hr</p>
                </div>
            </li>
            <li>
                <hr className='dropdown-divider'></hr>
            </li>
            <li className='notification-item'>
                <i className='bi bi-x-circle text-success'></i>
                <div>
                    <h4>lorem ttatata</h4>
                    <p>ajkanjasnjasasj</p>
                    <p>3hr</p>
                </div>
            </li>
            <li>
                <hr className='dropdown-divider'></hr>
            </li>
            <li className='notification-item'>
                <i className='bi bi-x-circle text-primary'></i>
                <div>
                    <h4>lorem ttatata</h4>
                    <p>ajkanjasnjasasj</p>
                    <p>ajkanjasnjasasj</p>
                </div>
            </li>
            <li>
                <hr className='dropdown-divider'></hr>
            </li>
            <li className='dropdown-footer'>
                <a href='#'>Mostrar todas la notificaciones</a>
            </li>

        </ul>
    </li>
  )
}

export default NavNotice