import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/sideBar.css';

function Sidebar() {
  const [menu, setMenu] = useState('menu1');

  const handleMenuChange = (event) => {
    setMenu(event.target.value);
  };

  const items = menu === 'menu1'
    ? [
        { name: 'Home', path: '/Home', icon: 'bi bi-house' },
        { name: 'Operaciones', path: '/Operaciones', icon: 'bi bi-gear' },
        { name: 'Estadistica', path: '/Estadistica', icon: 'bi bi-bar-chart' },
        { name: 'Usuarios', path: '/Usuarios', icon: 'bi bi-people' },
        { name: 'Configuracion', path: '/Configuracion', icon: 'bi bi-wrench' }
      ]
    : [
        { name: 'Item A', path: '/itemA', icon: 'bi bi-apple' },
        { name: 'Item B', path: '/itemB', icon: 'bi bi-cup-straw' },
        { name: 'Item C', path: '/itemC', icon: 'bi bi-car-front' }
      ];

  return (
    <aside id="sidebar" className="sidebar">
      <div className="menu-selector">
        <select id="menu-select" onChange={handleMenuChange} defaultValue="menu1">
          <option value="menu1">Menú 1</option>
          <option value="menu2">Menú 2</option>
        </select>
      </div>
      
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-heading">Páginas</li>
        {items.map((item) => (
          <li key={item.path} className="nav-item">
            <Link to={item.path} className="nav-link">
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
