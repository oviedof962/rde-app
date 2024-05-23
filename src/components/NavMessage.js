import React from 'react'

function NavMessage() {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
        <i className='bi bi-chat-left-text'></i>
        <spam className='badge  bg-success badge-number'>3</spam>
      </a>
      
      {/*el cuadrado que encapslta todos los mensajes */}
      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
          tienes 3 mensajes
          <a href='#'>
            <span className='badge rounded-pill bg-primary p2 ms-2'>
              ver todo
            </span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'></hr>
        </li>

        <li className='message-item'>
          <a href='#'>
            <img 
            src='assets/img/messages-1.jpg'
            alt=''
            className='rounded-circle'>
            </img>
            <div>
              <h4>Emma cortes</h4>
              <p>
                lorem
                sjcjckcakjacsjknasdjndsjnads
              </p>
              <p>hace 4 hrs</p>
            </div>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'></hr>
        </li>
 
        <li className='message-item'>
          <a href='#'>
            <img 
            src='assets/img/messages-1.jpg'
            alt=''
            className='rounded-circle'>
            </img>
            <div>
              <h4>MArcos cortes</h4>
              <p>
                lorem
                sjcjckcakjacsjknasdjndsjnads
              </p>
              <p>hace 4 hrs</p>
            </div>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'></hr>
        </li>
        <li className='message-item'>
          <a href='#'>
            <img 
            src='assets/img/messages-1.jpg'
            alt=''
            className='rounded-circle'>
            </img>
            <div>
              <h4>Emma cortes</h4>
              <p>
                lorem
                sjcjckcakjacsjknasdjndsjnads
              </p>
              <p>hace 4 hrs</p>
            </div>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'></hr>
        </li>
        <li className='dropdown-footer'>
          <a href='#'>Mostrar todas los mensajes</a>
        </li>
      </ul>
       

    </li>
  )
}

export default NavMessage