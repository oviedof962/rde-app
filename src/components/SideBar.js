import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/sideBar.css'



function Sidebar() {
    const [menu, setMenu] = useState('menu1');
  
    const handleMenuChange = (event) => {
      setMenu(event.target.value);
    };
  
    const items = menu === 'menu1' ? 
      [
        { name: 'Estadistica', path: '/Estadistica' }, 
        { name: 'Item 2', path: '/item2' }, 
        { name: 'Item 3', path: '/item3' }
      ] : 
      [
        { name: 'Item A', path: '/itemA' }, 
        { name: 'Item B', path: '/itemB' }, 
        { name: 'Item C', path: '/itemC' }
      ];
  
    return (
      <div className="sidebar">
        <select onChange={handleMenuChange} defaultValue="menu1" className='nav-item'>
          <option value="menu1" key="menu1">Menu 1</option >
          <option value="menu2" key="menu2">Menu 2</option>
        </select>
        <ul>
          {items.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Sidebar;
  