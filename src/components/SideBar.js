import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sideBar.css';
import navList from '../data/navItem';
import NavItem from './NavItem';

function Sidebar() {
  const [menu, setMenu] = useState('menu1');

  const handleMenuChange = (event) => {
    setMenu(event.target.value);
  };

  const items = menu === 'menu1'
    ? [
        { name: 'Estadistica', path: '/Estadistica' },
        { name: 'Item 2', path: '/item2' },
        { name: 'Item 3', path: '/item3' }
      ]
    : [
        { name: 'Item A', path: '/itemA' },
        { name: 'Item B', path: '/itemB' },
        { name: 'Item C', path: '/itemC' }
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
              
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;